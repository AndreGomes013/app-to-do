import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Keyboard, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Tarefa from './componentes/tarefa';


export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [itensTarefas, setItensTarefas] = useState([]);

  const handleAddTarefa = () => {
    Keyboard.dismiss();
    setItensTarefas([...itensTarefas, { text: tarefa, completed: false }]);
    setTarefa('');
  };

  const deleteTarefa = (index) => {
    let itemsCopy = [...itensTarefas];
    itemsCopy.splice(index, 1);
    setItensTarefas(itemsCopy);
  };

  const toggleTarefa = (index) => {
    let itemsCopy = [...itensTarefas];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setItensTarefas(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 80, }]}>
        <View style={styles.tarefas}>
          <Text style={styles.titulo}>Tarefas de Hoje</Text>
          <View style={styles.itens}>
            {itensTarefas.map((item, index) => (
              <View key={index}>
                <Tarefa
                  text={item.text}
                  completed={item.completed}
                  onDelete={() => deleteTarefa(index)}
                  onToggleComplete={() => toggleTarefa(index)} // Atualizado para onToggleComplete
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.escreverTarefa}
        keyboardVerticalOffset={50}
      >
        <TextInput
          style={styles.input}
          placeholder='Nova tarefa...'
          value={tarefa}
          onChangeText={text => setTarefa(text)}
        />

        <TouchableOpacity onPress={() => handleAddTarefa()}>
          <View style={styles.addTarefa}>
            <Text style={styles.textoBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tarefas: {
    paddingTop: 40,
    paddingHorizontal: 20,

  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  itens: {
    marginTop: 30
  },
  escreverTarefa: {
    position: 'absolute',
    bottom: 25,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
  },
  input: {
    paddingVertical: 15,
    width: 270,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height: 55
  },
  addTarefa: {
    width: 50,
    height: 50,
    backgroundColor: "#55BCF6",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  textoBtn: {
    color: "#FFF",
    fontSize: 30,
  }

});