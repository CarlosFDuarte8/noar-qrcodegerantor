import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { api } from "../services";
import { ShotCampaign } from "../types";

interface DashboardContextData {
  refreshing: boolean;
  campaign: any;
  shotCampaign: any;
  setcampaign: any;
  getDashboard: any;
  loading: boolean;
}

const DashboardContext = createContext<DashboardContextData>(
  {} as DashboardContextData
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [campaign, setcampaign] = useState<any>([]);
  const [shotCampaign, setShotCampaign] = useState<ShotCampaign | any>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getDashboard();
  }, []);

  const generateColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  async function getDashboard() {
    setLoading(true);
    try {
      const campains = await api.get(
        "/api/dashboard/shots-campaign?limit=true"
      );
      const data = campains.data;
      setcampaign(data);
      if (data && Array.isArray(data)) {
        await data.forEach((campain) => {
          if (campain.campaignName && Array.isArray(campain.fragrances)) {
            let _fragrances = [];

            campain.fragrances.forEach((fragrance) => {
              let body = {
                series: fragrance.shotsTotalFragrance,
                color: generateColor(),
                name: fragrance.fragranceName,
                shot: fragrance.shotsTotalFragrance,
                legendFontColor: "#000",
                legendFontSize: 15,
              };
              _fragrances.push(body);
            });

            let chart = {
              campaignName: campain.campaignName,
              campaignId: campain.campaignId,
              fragrances: _fragrances,
            };
            setShotCampaign(chart);
            // const dd = JSON.stringify(chart);
            // Alert.alert("Dados C:", dd);
          }
        });
      }
    } catch (error: any) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <DashboardContext.Provider
      value={{
        campaign,
        shotCampaign,
        loading,
        refreshing,
        setcampaign,
        getDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export function useDashboard() {
  const context = useContext(DashboardContext);
  return context;
}
