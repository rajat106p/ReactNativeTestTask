import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SimpleLineIcons, EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import SearchIcon from "../../assets/SearchIcon";
import adjust from "../../constant/Adjust";

export default HomeHeader = () => {
  const navigation = useNavigation();
  const { cartItems } = useSelector((state) => state.product);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={[styles.contentView, { marginTop: 30 }]}>
          <Text style={styles.headerText}>Hey, Rahul</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <SimpleLineIcons name="handbag" size={28} color={COLORS.White} />
            {cartItems.length > 0 && (
              <View style={styles.badgeView}>
                <Text style={styles.badgeText}>{cartItems?.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.primary,
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
            borderRadius: 28,
          }}
        >
          {SearchIcon()}
          <TextInput
            style={{ width: "90%", color: COLORS.White, marginLeft: 10 }}
          />
        </View>
        <View style={[styles.contentView, { marginBottom: 20 }]}>
          <View>
            <Text style={styles.titleText}>DELIVERY TO</Text>
            <View style={styles.rowCenter}>
              <Text style={styles.valueText}>Green Way 3000, Sylhet</Text>
              <EvilIcons name="chevron-down" size={18} color={COLORS.White} />
            </View>
          </View>
          <View>
            <Text style={styles.titleText}>WITHIN</Text>
            <View style={styles.rowCenter}>
              <Text style={styles.valueText}>1 Hour</Text>
              <EvilIcons name="chevron-down" size={18} color={COLORS.White} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: COLORS.secondary,
  },
  mainView: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  contentView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: adjust(22),
    color: "#FFF",
    fontWeight: "600",
  },
  titleText: { fontSize: adjust(11), fontWeight: "800", color: COLORS.White + "9a" },
  valueText: { fontSize: adjust(14), fontWeight: "500", color: COLORS.White },
  rowCenter: { flexDirection: "row", alignItems: "center" },
  badgeView: {
    position: "absolute",
    height: 20,
    width: 20,
    right: 0,
    top: 0,
    backgroundColor: COLORS.LightYellow,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: { color: COLORS.White, fontSize: adjust(14) },
});
