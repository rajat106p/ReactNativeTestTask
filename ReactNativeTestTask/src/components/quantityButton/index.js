import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constant/colors";

const QtyButton = ({ onPress = () => {}, type = "add" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonView}>
      {type === "add" ? (
        <Ionicons name="add" size={24} color={COLORS.Black100} />
      ) : (
        <AntDesign name="minus" size={24} color={COLORS.Black100} />
      )}
    </TouchableOpacity>
  );
};

export default QtyButton;

const styles = StyleSheet.create({
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Black30,
    borderRadius: 15,
    height: 30,
    width: 30
  },
});
