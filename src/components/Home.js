import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config/config";
import { FlashList } from "@shopify/flash-list";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  const [note, setNote] = useState([]);
  const navigation = useNavigation();

  //fetch date from firebase
  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((querySnapshot) => {
        const newNote = [];
        querySnapshot.forEach((doc) => {
          const { note, title } = doc.data();
          newNote.push({ note, title, id: doc.id });
        });
        setNote(newNote);
      });
  }, []);

  return (
    <View>
      <FlashList
        data={note}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Pressable onPress={() => navigation.navigate("Detail", { item })}>
              {" "}
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteDescription}>{item.note}</Text>{" "}
              <Text style={styles.noteTime}>{item.time}</Text>
            </Pressable>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.btn}
        title="Add Notes"
        onPress={() => navigation.navigate("NoteAdd")}
      >
        <Entypo name="plus" size={45} color="#FFDB58" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDD0",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#6B3712",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: "center",
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noteDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  noteTime: {
    fontSize: 10,
    marginTop: 5,
  },
  btn: {
    position: "absolute",
    bottom: 60,
    right: 30,
    backgroundColor: "#8B4513",
    borderRadius: 50,
    padding: 10,
    elevation: 7,
  },
});

export default Home;
