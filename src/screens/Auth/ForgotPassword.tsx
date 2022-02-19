import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  Input,
  Stack,
  Icon,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../contexts";

const ForgotPassword = () => {
  const { recoverPassword } = useAuth();
  const [mail, setMail] = useState('');


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
                  as={<Ionicons name="ios-mail-outline" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              onChangeText={setMail}
              placeholder="E-mail"
            />
            <Button
              size="sm"
              variant="outline"
              w={{
                base: "75%",
                md: "25%",
              }}
              onPress={() => {
                recoverPassword(mail);
              }}
            >
              Recuperar Senha
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
};

export default ForgotPassword;
