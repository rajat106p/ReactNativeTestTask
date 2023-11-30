import React, { useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../../components/banner";
import HomeHeader from "../../components/homeHeader";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ProductItem from "../../components/productItem";
import { COLORS } from "../../constant/colors";
import { getAllProducts, getSingleProduct } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { setAllProduct, setSingleProduct } from "../../redux/slice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import adjust from "../../constant/Adjust";

LogBox.ignoreAllLogs();

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { allProducts } = useSelector((state) => state.product);

  useFocusEffect(
    useCallback(() => {
      dispatch(setSingleProduct({}));
    }, [])
  );

  useEffect(() => {
    const getData = async () => {
      const res = await getAllProducts();
      dispatch(setAllProduct(res?.products));
    };
    getData();
  }, []);

  const onSelectProduct = async (id) => {
    navigation.navigate("ProductDetail");
    const res = await getSingleProduct(id);
    dispatch(setSingleProduct(res));
  };

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <HomeHeader />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Banner color="#e0aa14" />
          <Banner color="#e0aa144a" />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.SectionHeader}>Recommended</Text>
        </View>
        {allProducts?.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.listView}
            data={allProducts}
            horizontal={false}
            automaticallyAdjustContentInsets
            renderItem={({ item }) => (
              <ProductItem item={item} onPress={(id) => onSelectProduct(id)} />
            )}
            keyExtractor={({ id }) => id}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-evenly'}}
          />
        ) : (
          <View style={{ height: 200, justifyContent: "center" }}>
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SectionHeader: {
    fontSize: adjust(30),
    fontWeight: "400",
  },
  subContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },
  listView:{
    alignSelf: "center",
    width: "90%",
    marginBottom: 100,
  }
});
