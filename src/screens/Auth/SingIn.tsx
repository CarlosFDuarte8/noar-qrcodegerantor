import {
  Box,
  Center,
  FormControl,
  Input,
  Stack,
  Checkbox,
  Icon,
  Button,
} from "native-base";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

import { useAuth } from "../../contexts";

const SingIn = () => {
  const navigation = useNavigation();
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(true);
  const { signIn } = useAuth();

  const usuario = {
    login: "carlos.duarte@inv.net.br",
    senha: "123@Abcd",
  };

  async function onSubmit(data) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      signIn(data, () => navigation.navigate("Home"));
    } else {
      alert("Erro!", "Dados invalidos");
    }
  }

  return (
    <Center flex={1} px="3" backgroundColor={"#fff"}>
      <Box w="100%">
        <FormControl isRequired>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="ios-person-outline" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Nome"
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              secureTextEntry={passwordConfirmVisible}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="key-outline" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={
                        !passwordConfirmVisible
                          ? "visibility"
                          : "visibility-off"
                      }
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => {
                    setPasswordConfirmVisible(!passwordConfirmVisible);
                  }}
                />
              }
              placeholder="Senha"
            />
            <Button
              size="sm"
              variant="outline"
              w={{
                base: "75%",
                md: "25%",
              }}
              onPress={() => {
                onSubmit(usuario);
              }}
            >
              ENTRAR
            </Button>
            <Checkbox value="info" colorScheme="info" defaultIsChecked>
              Manter Logado
            </Checkbox>
            <Button size="sm" variant="link">
              Esqueceu a senha?
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
};

export default SingIn;
