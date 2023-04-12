import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { firebase } from "../config/config";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const [noteText, setNoteText] = useState(route.params.item.note);
  const [noteTitle, setNoteTitle] = useState(route.params.item.title);

  const handleUpdate = () => {
    if (noteTitle && noteTitle.length > 0) {
      firebase
        .firestore()
        .collection("notes")
        .doc(route.params.item.id)
        .update({
          title: noteTitle,
          note: noteText,
          createdAt: timestamp,
        })
        .then(() => {
          alert("Updated successfully!");
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert("Couldn't update: " + error);
        });
    }
  };

  const handleDelete = () => {
    firebase
      .firestore()
      .collection("notes")
      .doc(route.params.item.id)
      .delete()
      .then(() => {
        alert("Deleted successfully!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert("Failed to delete: " + error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={noteTitle}
        onChangeText={(text) => setNoteTitle(text)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Note"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
        style={styles.inputNote}
        multiline={true}
      />

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
          {" "}
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={handleDelete}>
          {" "}
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFDD0",
  },

  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "97%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  inputNote: {
    fontSize: 18,
    height: 300,
    width: "97%",
    borderColor: "gray",
    borderWidth: 1 / 2,
    borderRadius: 5,
    padding: 10,
  },

  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "97%",
  },
  btn: {
    backgroundColor: "#8B4513",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
export default Detail;
