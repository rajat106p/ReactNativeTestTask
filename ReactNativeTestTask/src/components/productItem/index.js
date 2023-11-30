import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constant/colors";
import AddButton from "../addButton";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, addtoFav, removeFromFav } from "../../redux/slice";
import { useNavigation } from "@react-navigation/native";
import adjust from "../../constant/Adjust";

const ProductItem = ({ item, onPress = () => {} }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { cartItems, favList } = useSelector((state) => state.product);
  const isAdded = cartItems.findIndex((ele) => ele.id === item.id);
  const isFav = favList.findIndex((ele) => ele.id === item.id);
  return (
    <View key={item.id} style={styles.itemContainer}>
      <TouchableOpacity
        style={{ position: "absolute", left: 5, top: 10 }}
        onPress={() => {
          if (isFav === -1) {
            dispatch(addtoFav(item));
          } else {
            dispatch(removeFromFav(isFav));
          }
        }}
      >
        {isFav === -1 ? (
          <Ionicons name="heart-outline" size={24} color={"#323743"} />
        ) : (
          <Ionicons name="heart" size={24} color={"#FF8181"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPress(item.id);
        }}
      >
        <Image
          source={{ uri: item?.thumbnail }}
          style={{ height: 68, width: 68, marginTop: 30, borderRadius: 5 }}
        />
      </TouchableOpacity>

      <View style={styles.priceView}>
        <Text style={styles.priceText}>${item?.price}</Text>
        <AddButton
          isAdded={isAdded}
          onPress={() => {
            if (isAdded === -1) {
              dispatch(addtoCart(item));
            } else {
              navigation.navigate("Cart");
            }
          }}
        />
      </View>
      <View style={{ width: "80%" }}>
        <Text style={styles.titleText} numberOfLines={2}>
          {item?.title}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 190,
    width: 160,
    // marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: COLORS.Black20,
  },
  priceText: {
    fontSize: adjust(14),
    fontWeight: "600",
    color: COLORS.Black100,
  },
  titleText: {
    fontSize: adjust(12),
    fontWeight: "400",
    color: COLORS.Black60,
  },
  priceView: {
    width: "80%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
