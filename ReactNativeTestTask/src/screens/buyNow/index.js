import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import QtyButton from "../../components/quantityButton";
import { COLORS } from "../../constant/colors";
import {
  addQuantityBN,
  minusQuantityBN
} from "../../redux/slice";

const { height } = Dimensions.get("screen");

const BuyNow = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { buyNow } = useSelector((state) => state.product);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather
            name="chevron-left"
            size={24}
            color={COLORS.Black100}
            style={{ marginLeft: -3 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{`Shopping Cart (${buyNow.id ? 1 : 0})`}</Text>
      </View>

      <FlatList
        data={buyNow.id ? [buyNow] : []}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.Black45,
              }}
            />
          );
        }}
        renderItem={({ index, item }) => {
          return (
            <>
              <View style={styles.itemView}>
                <Image
                  source={{ uri: item?.thumbnail }}
                  style={styles.imageStyle}
                />
                <View style={{ width: "48%" }}>
                  <Text style={styles.titleText} numberOfLines={2}>
                    {item?.title}
                  </Text>
                  <Text style={styles.priceText}>${item?.price}</Text>
                </View>

                <View style={styles.itemContent}>
                  <QtyButton
                    type="minus"
                    onPress={() => {
                      dispatch(minusQuantityBN());
                    }}
                  />
                  <Text style={styles.qtyText}>{item?.quantity}</Text>
                  <QtyButton
                    onPress={() => {
                      dispatch(addQuantityBN());
                    }}
                  />
                </View>
              </View>
            </>
          );
        }}
      />

      <View style={styles.priceCard}>
        <View style={[styles.priceRow, { marginTop: 10 }]}>
          <Text style={styles.priceTitle}>Subtotal</Text>
          <Text style={styles.priceValue}>
            ${buyNow?.quantity ? Number(buyNow?.price * buyNow?.quantity).toFixed(2) : 0.0}
          </Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceTitle}>Delivery</Text>
          <Text tyle={styles.priceValue}>${buyNow?.quantity ? Number(2.0).toFixed(2) : 0.0}</Text>
        </View>
        <View style={[styles.priceRow, { marginBottom: 10 }]}>
          <Text style={styles.priceTitle}>Total</Text>
          <Text tyle={styles.priceValue}>
            ${buyNow?.quantity ? Number(buyNow?.price * buyNow?.quantity + 2).toFixed(2) : 0.0}
          </Text>
        </View>
        <Button width={"90%"} title="Proceed to checkout" />
      </View>
    </SafeAreaView>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  headerContainer: {
    width: "90%",
    flexDirection: "row",
    height: 60,
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: COLORS.Black30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.Black100,
    marginLeft: 20,
  },
  listContainer: {
    height: height * 0.6,
    width: "90%",
    alignSelf: "center",
  },
  imageStyle: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 10,
  },
  itemView: {
    minHeight: 50,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
  },
  titleText: { fontSize: 14, fontWeight: "500", color: COLORS.Gray100 },
  priceText: { fontSize: 14, fontWeight: "400", color: COLORS.Gray100 },
  qtyText: { fontSize: 14, fontWeight: "500", color: COLORS.Gray100 },
  editBtn: { fontSize: 12, fontWeight: "500", color: COLORS.secondary },
  priceTitle: { fontSize: 14, fontWeight: "400", color: COLORS.Gray90 },
  priceValue: { fontSize: 14, fontWeight: "500", color: COLORS.Gray100 },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginTop: 5,
  },
  priceCard: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: COLORS.Black10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
});
