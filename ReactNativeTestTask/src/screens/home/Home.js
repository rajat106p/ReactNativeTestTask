import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  LogBox,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/banner";
import HomeHeader from "../../components/homeHeader";
import ProductItem from "../../components/productItem";
import adjust from "../../constant/Adjust";
import { COLORS } from "../../constant/colors";
import {
  setAllProduct,
  setMoreProduct,
  setSingleProduct,
} from "../../redux/slice";
import {
  getAllProducts,
  getMoreProducts,
  getSingleProduct,
} from "../../services";

LogBox.ignoreAllLogs();

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { allProducts, limit } = useSelector((state) => state.product);

  const bannerData = [
    { off: 50, item: 3 },
    { off: 30, item: 2 },
    { off: 20, item: 1 },
  ];

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

  const getMoreProduct = async () => {
    const res = await getMoreProducts(20, limit + 20);
    dispatch(setMoreProduct(res?.products));
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <HomeHeader />
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={bannerData}
          style={{ flex: 1 }}
          contentContainerStyle={{ justifyContent: "center" }}
          renderItem={({ item }) => {
            return <Banner color="#e0aa14" item={item} />;
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />

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
            columnWrapperStyle={{ justifyContent: "space-evenly" }}
            onEndReached={() => {
              setLoading(true);
              getMoreProduct();
            }}
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
  listView: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 100,
  },
});
