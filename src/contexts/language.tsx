import React, { createContext, useState, useContext } from "react";
import { Platform, NativeModules } from "react-native";
import commonTranslate from "@noar-basf/commons";
import { BleManager } from "react-native-ble-plx";

import { languageTypes } from "./app";

export const manager = new BleManager();

type langTypes = {
  en: string;
  pt: string;
  es?: string;
};

interface LanguageData {
  language: langTypes | null;
  loading?: boolean | null;
  handleLanguage: (languageSelected: string) => void;
  translate: any | null;
}

const normalizeTranslate: langTypes = {
  pt: "pt_BR",
//   en: "en_US",
//   es: "es_ES",
};

const LanguageContext = createContext<LanguageData>({} as LanguageData);

export const LanguageProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<languageTypes>("pt");
  // const [languageTranslate, setLanguageTranslate] = useState<languageTypes>('pt');

  const handleLanguage = (languageSelected: any): void => {
    setLoading(true);
    setLanguage(languageSelected);
    setLoading(false);
    console.log("idioma:", languageSelected);
  };

  const getLanguageByDevice = (): string => {
    return Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  };

  const getNormalizedTranslation = (
    language: languageTypes | undefined
  ): string => {
    let languageNormalized: string;
    if (!language) {
      languageNormalized = getLanguageByDevice();
    } else {
      languageNormalized = language;
    }
    if (!languageNormalized) {
      languageNormalized = "pt";
    }
    languageNormalized = languageNormalized.substring(0, 2);
    return normalizeTranslate[languageNormalized]
      ? normalizeTranslate[languageNormalized]
      : "pt_BR";
  };

  const translate = (messagePath: string, vars?: unknown): string => {
    // const language = Locales.language;
    const normalizedLanguage = getNormalizedTranslation(language);
    const languageObject = commonTranslate(normalizedLanguage.substring(0, 2));
    let stringIntoPath = messagePath
      .split(".")
      .reduce((o, i) => o[i], languageObject);
    if (vars && typeof vars === "object") {
      for (let prop in vars) {
        if (stringIntoPath) {
          stringIntoPath = stringIntoPath.replace(`{{${prop}}}`, vars[prop]);
        }
      }
    }
    return stringIntoPath;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        loading,
        handleLanguage,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
