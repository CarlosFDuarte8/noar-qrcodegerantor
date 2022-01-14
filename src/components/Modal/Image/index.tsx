import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Image,
} from "native-base";

type Props = {
  isOpen: boolean;
  imageQrcode?: string;
  serialNumber?: string;
  name?: string;
  OnNo?: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageQR = ({
  isOpen,
  setShowModal,
  imageQrcode,
  serialNumber,
  name,
}: Props) => {
  return (
    <>
      {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
      <Modal isOpen={isOpen} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header justifyContent={'center'} alignItems={'center'}>{name}</Modal.Header>
          <Modal.Body justifyContent={'center'} alignItems={'center'}>
              <Center>Capsula:
              {serialNumber}
              </Center>
            <Image
              style={{
                height: 250,
                width: 250,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              source={{
                uri: imageQrcode,
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                onPress={() => {
                    setShowModal(false);
                  // add({ id: 1, code: "basf" });
                }}
              >
                fechar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ImageQR;
