import { Ionicons } from "@expo/vector-icons"; //used for the instagram icons such as like and comment
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  const handleAlertPress = () => {
    Alert.alert("Alert", "Alert Button Pressed");
  };
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
        {/* Main image */}
        <Image
          source={require("../../assets/images/ski-post-picture.jpg")}
          style={styles.postImage}
        />

        {/* Action icons */}
        <View style={styles.actionsRow}>
          <View style={styles.actionsLeft}>
            <Ionicons
              name="heart-outline"
              size={26}
              color="#000"
              style={styles.actionIcon}
            />
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="#000"
              style={styles.actionIcon}
            />
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="#000"
              style={styles.actionIcon}
            />
          </View>
          <Ionicons name="bookmark-outline" size={24} color="#000" />
        </View>

        {/* Likes row */}
        <View style={styles.likesRow}>
          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>caelan.abugan</Text> and{" "}
            <Text style={styles.bold}>7 others</Text>
          </Text>
        </View>

        {/* Caption */}
        <Text style={styles.caption}>
          <Text style={styles.bold}>_NikoDewit_</Text> Another day in paradise!
        </Text>

        {/* Comments */}
        <Text style={styles.viewComments}>View all 12 comments</Text>
        <Text style={styles.timestamp}>1 day ago</Text>

        {/* Alert button */}
        <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
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
  postImage: {
    width: "100%",
    height: 480,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginRight: 14,
  },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  likesText: {
    fontSize: 13,
    color: "#000",
  },
  bold: {
    fontWeight: "700",
  },
  caption: {
    fontSize: 13,
    color: "#000",
    paddingHorizontal: 12,
    marginBottom: 2,
  },
  viewComments: {
    fontSize: 13,
    color: "#8e8e8e",
    paddingHorizontal: 12,
    marginVertical: 4,
  },
  timestamp: {
    fontSize: 11,
    color: "#8e8e8e",
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  alertButton: {
    backgroundColor: "#0095f6",
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
