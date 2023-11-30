import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StarRating from "react-native-star-rating-widget";
import { useSelector } from "react-redux";
import Button from "../../components/button";
import { COLORS } from "../../constant/colors";
import { useDispatch } from "react-redux";
import { addtoCart, setBuyNow } from "../../redux/slice";
import adjust from "../../constant/Adjust";

const { width } = Dimensions.get("screen");

const ProductDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { singleProduct, cartItems } = useSelector((state) => state.product);
  const isAdded = cartItems.findIndex((ele) => ele.id === singleProduct.id);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      {singleProduct.id ? (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Feather
                name="chevron-left"
                size={20}
                color={COLORS.Black100}
                style={{ marginLeft: -3 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <SimpleLineIcons
                name="handbag"
                size={28}
                color={COLORS.Black100}
              />
              {cartItems.length > 0 && (
                <View style={styles.badgeView}>
                  <Text style={styles.badgeText}>{cartItems?.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={{ width: "90%", alignSelf: "center" }}>
            <Text style={styles.productName}>{singleProduct?.title}</Text>
            <Text style={styles.brandName}>{singleProduct?.brand}</Text>
            <View style={styles.ratingView}>
              <StarRating
                rating={singleProduct?.rating}
                enableSwiping={false}
                onChange={() => {}}
                color={COLORS.DarkYellow}
                emptyColor={COLORS.Black100}
                starSize={24}
                style={{ width: 170 }}
              />
              <Text style={styles.reviewText}>110 Reviews</Text>
            </View>
          </View>

          <View style={styles.flatListView}>
            <FlatList
              data={singleProduct?.images}
              style={{ flex: 1 }}
              renderItem={({ item }) => {
                return (
                  <Image
                    source={{ uri: item }}
                    style={{ width: width * 0.99, height: 200 }}
                  />
                );
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.priceView}>
            <Text style={styles.priceText}>${singleProduct?.price}</Text>
            <View style={styles.discountView}>
              <Text style={styles.discountText}>
                {singleProduct?.discountPercentage}% OFF
              </Text>
            </View>
          </View>

          <View style={styles.buttonView}>
            <Button
              type="outline"
              title={isAdded === -1 ? "Add to Cart" : "View Cart"}
              onPress={() => {
                if (isAdded === -1) {
                  dispatch(addtoCart(singleProduct));
                } else {
                  navigation.navigate("Cart");
                }
              }}
            />
            <Button
              title="Buy Now"
              onPress={() => {
                dispatch(setBuyNow({ ...singleProduct, quantity: 1 }));
                navigation.navigate("BuyNow");
              }}
            />
          </View>

          <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
            <Text style={styles.DetailHeading}>Details</Text>
            <Text style={styles.DetailDesc}>{singleProduct?.description}</Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loadingView}>
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    alignSelf: "center",
    alignItems: "center",
  },
  loadingView: { flex: 1, justifyContent: "center", alignItems: "center" },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: COLORS.Black30,
    alignItems: "center",
  },
  productName: {
    fontSize: adjust(50),
    fontWeight: "300",
    color: COLORS.Gray100,
  },
  brandName: {
    fontSize: adjust(50),
    fontWeight: "800",
    color: COLORS.Gray100,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reviewText: {
    fontSize: adjust(14),
    fontWeight: "400",
    color: "#A1A1AB",
  },
  priceView: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    color: COLORS.secondary,
    fontWeight: "700",
    fontSize: adjust(16),
  },
  discountView: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  discountText: {
    color: COLORS.White,
    fontWeight: "400",
    fontSize: adjust(12),
  },
  flatListView: { height: 200, width: "100%", marginVertical: 10 },
  DetailHeading: { fontSize: 16, fontWeight: "400" },
  DetailDesc: {
    fontSize: adjust(16),
    fontWeight: "400",
    color: COLORS.GrayScale,
    marginTop: 10,
  },
  buttonView: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
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
