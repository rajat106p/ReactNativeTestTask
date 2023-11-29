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
import { COLORS } from "../../constant/colors";
import { useDispatch, useSelector } from "react-redux";

const { height } = Dimensions.get("screen");

const Favourite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { favList } = useSelector((state) => state.product);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Text
          style={styles.headerText}
        >{`My Favourites (${favList?.length})`}</Text>
      </View>

      <FlatList
        data={favList}
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
                  <Text numberOfLines={2}>{item?.title}</Text>
                  <Text>${item?.price}</Text>
                </View>

                <View style={styles.itemContent}></View>
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Favourite;

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
    fontSize: 20,
    fontWeight: "300",
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
});
