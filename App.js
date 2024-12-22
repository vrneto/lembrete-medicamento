import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, StyleSheet } from "react-native";

const App = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nome, setNome] = useState("");

  const adicionarMedicamento = () => {
    if (nome.trim()) {
      setMedicamentos([...medicamentos, { id: Date.now(), nome }]);
      setNome("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lembrete de Medicamentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do medicamento"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Adicionar" onPress={adicionarMedicamento} />
      <FlatList
        data={medicamentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;
