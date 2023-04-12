import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config/config";
import { Keyboard } from "react-native";

const NoteAdd = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  //firebase.firestore().collection("notes") acessa a coleção "notes" no Firestore usando o objeto firebase e o método firestore(), que representa a instância do Firestore.
  //.add({ title, note }) adiciona um novo documento à coleção "notes" com os dados passados como um objeto. As variáveis title e note são usadas como nomes de campo, e seus valores são obtidos das variáveis de estado correspondentes.
  //.then(() => { ... }): Esta é uma sintaxe baseada em Promises que especifica o que fazer depois que os dados são adicionados com sucesso ao Firestore.
  // Neste caso, deixa o title e o note vazio usando setTitle("") e setNote(""), respectivamente.
  // Também fecha o teclado usando Keyboard.dismiss()
  //.catch((error) => { ... }): Esta é uma sintaxe baseada em Promises que especifica o que fazer se ocorrer um erro ao adicionar dados ao Firestore. Neste caso, mostra um alerta com a mensagem de erro usando alert(error).
  const handleAdd = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleString();
    firebase
      .firestore()
      .collection("notes")
      .add({
        title,
        note,
        time: currentTime,
      })
      .then(() => {
        setTitle("");
        setNote("");
        Keyboard.dismiss();
        alert("Added with success!");
      })
      .catch((error) => {
        alert("Note not added: " + error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputTitle}
      ></TextInput>
      <TextInput
        placeholder="Note"
        value={note}
        onChangeText={(text) => setNote(text)}
        style={styles.inputNote}
      ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnTxt}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteAdd;

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
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  inputNote: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    height: 200,
    width: "97%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  btn: {
    backgroundColor: "#8B4513",
    borderRadius: 10,
    marginTop: 20,
    height: 55,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
    shadowColor: "blue",
  },
  btnTxt: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
