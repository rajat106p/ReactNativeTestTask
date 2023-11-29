import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constant/colors";

const Button = ({ title = "Click", onPress = () => {}, type = "solid", width }) => {
  return (
    <TouchableOpacity
      style={[type === "solid" ? styles.solidContainer : styles.outlineContainer, width && {width: width}]}
      onPress={onPress}
    >
      <Text style={type === "solid" ? styles.solidTitle : styles.outLineTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  solidContainer: {
    height: 60,
    width: "45%",
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  outlineContainer: {
    height: 60,
    width: "45%",
    backgroundColor: COLORS.White,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  solidTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.12,
    color: COLORS.White,
    marginTop: -3
  },
  outLineTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.12,
    color: COLORS.secondary,
    marginTop: -3
  },
});
