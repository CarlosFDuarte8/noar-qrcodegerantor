import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,  
} from "native-base";
import {Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { useQrCode } from "../../../contexts";

type Props = {
  isOpen: boolean;
  OnYes?: () => void;
  OnNo?: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateQR = ({ isOpen, setShowModal }: Props) => {
  //   const [showModal, setShowModal] = useState(false);
  const { add, qrCode, qrCodeExists } = useQrCode();
  console.log("Dados", qrCode);
  const [formData, setData] = React.useState({});
  const [nome, setNome] = React.useState();
  const [ids, setId] = React.useState();
  const [code, setCode] = React.useState();
  const [serial, setSerial] = React.useState();
  const [due, setDue] = React.useState();
  const [errors, setErrors] = React.useState({});

  const onSubmit = () => {
    console.log("Va", serial);
    console.log("for", due);
    const onValid = {
      id: ids,
      name: nome,
      customeCode: code,
      serialNumber: serial,
      dueDate: due,
    };
    setData(onValid);
    console.log("for", formData);
    // AsyncStorage.setItem(
    //   '@RNApp:qrcodes',
    //   JSON.stringify(formData),
    // );
    Alert.alert('Salvo com sucesso', 'Deseja cadastrar mais uma?',
    [
      {
        text: "NÃO",
        onPress: () => setShowModal(false),
        style: "cancel"
      },
      { text: "SIM", onPress: () => console.log("OK Pressed") }
    ])
    add(onValid);
    
  };

  return (
    <>
      {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
      <Modal isOpen={isOpen} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Digite os dados do QRcode</Modal.Header>
          <Modal.Body>
            {/* // name */}
            <FormControl isRequired isInvalid={"name" in errors}>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                placeholder="Nome"
                // onChangeText={(value) => setData({ ...formData, name: value })}
                onChangeText={(value) => setNome(value)}
              />
              {"name" in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                    color: "error.500",
                    fontWeight: 500,
                  }}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: "xs" }}>
                  Deve conter 4 catacteres
                </FormControl.HelperText>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={"name" in errors}>
              <FormControl.Label _text={{ bold: true }}>ID</FormControl.Label>
              <Input
                placeholder="ID"
                // onChangeText={(value) => setData({ ...formData, name: value })}
                onChangeText={(value) => setId(value)}
              />
              {"name" in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                    color: "error.500",
                    fontWeight: 500,
                  }}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: "xs" }}>
                  Deve conter 4 numeros Ex.: 0001 ou 0020
                </FormControl.HelperText>
              )}
            </FormControl>
            {/* // Código */}
            <FormControl isRequired isInvalid={"code" in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Código
              </FormControl.Label>
              <Input
                placeholder="Código"
                onChangeText={(value) => setCode(value)}
              />
              {"code" in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                    color: "error.500",
                    fontWeight: 500,
                  }}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: "xs" }}>
                  Deve conter 3 letra maicusculas Ex.: DMO
                </FormControl.HelperText>
              )}
            </FormControl>
            {/* // Nº de Série */}
            <FormControl isRequired isInvalid={"serial" in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Nº de Série
              </FormControl.Label>
              <Input
                placeholder="Nº de Série"
                onChangeText={(value) => setSerial(value)}
              />
              {"serial" in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                    color: "error.500",
                    fontWeight: 500,
                  }}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: "xs" }}>
                  Deve conter 9 caracteres Ex.: T00000001
                </FormControl.HelperText>
              )}
            </FormControl>
            {/* Data de Validade */}
            <FormControl isRequired isInvalid={"due" in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Data de Validade
              </FormControl.Label>
              <Input
                placeholder="Data de Validade"
                onChangeText={(value) => setDue(value)}
              />
              {"due" in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                    color: "error.500",
                    fontWeight: 500,
                  }}
                >
                  Error
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: "xs" }}>
                  Deve conter 6 numeros Ex.: 13/01/2022 => 130122
                </FormControl.HelperText>
              )}
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                    setShowModal(false);
                  // onSubmit();
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  //   setShowModal(false);
                  // add({ id: 1, code: "basf" });
                  onSubmit();
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CreateQR;
