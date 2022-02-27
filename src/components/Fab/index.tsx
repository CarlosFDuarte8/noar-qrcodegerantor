import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

type Props = {
  onPlus: () => void;
};

const FabComponent = ({ onPlus }: Props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Portal>
      <FAB.Group
        style={styles.fab}
        open={open}
        icon={open ? "minus" : "plus"}
        actions={[
          {
            icon: "plus",
            label: "Novo",
            onPress: onPlus,
          },
          {
            icon: "qrcode-scan",
            label: "Lê QrCode",
            onPress: () => console.log("Pressed star"),
          },
          {
            icon: "file-pdf-box",
            label: "Exporta PDF",
            onPress: () => console.log("Pressed notifications"),
            small: false,
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 50,
  },
});

export default FabComponent;
