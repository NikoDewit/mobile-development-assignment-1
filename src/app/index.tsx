import { Ionicons } from "@expo/vector-icons"; //used for the instagram icons such as like and comment
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={26} color="#000" />
          <View style={styles.headerTitleBlock}>
            <Text style={styles.headerSubtitle}>_NIKODEWIT_</Text>
            <Text style={styles.headerTitle}>Posts</Text>
          </View>
          <View style={{ width: 26 }} />
        </View>

        {/* Post author row */}
        <View style={styles.postHeader}>
          <Image
            source={require("../../assets/images/ski-profile-picture.jpg")}
            style={styles.avatar}
          />
          <View style={styles.postHeaderText}>
            <Text style={styles.username}>_NikoDewit_</Text>
          </View>
          <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitleBlock: {
    alignItems: "center",
  },
  headerSubtitle: {
    fontSize: 11,
    color: "#8e8e8e",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
  },
  postHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
  },
});
