import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constant/colors";

const AddButton = ({ onPress = () => {}, isAdded }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isAdded === -1 ? (
        <Ionicons name="ios-add-circle" size={24} color={COLORS.secondary} />
      ) : (
        <AntDesign name="checkcircleo" size={20} color={COLORS.secondary} />
      )}
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
