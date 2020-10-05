import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput,  
        ScrollView,
        ImageBackground,
        KeyboardAvoidingView} from 'react-native';

import { TODOS } from '../utils/data.js';
import SingleTodoScreen from "./SingleTodoScreen"

export default function All(props) {
    const [todoList, setTodoList] = useState(TODOS);
    const [todoBody, setTodoBody] = useState('');

    const onToggleTodo = id => {
        const todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        const newTodoList = [...todoList];
        setTodoList(newTodoList);

        //setTimeout which fires the function that moves the user from our AllScreen screen to do SingleTodoScreen.
       /* setTimeout(() => {
            props.navigation.navigate('SingleTodoScreen', {
              updatedTodo: todo
            });
          }, 1000); */
    };

    const onDeleteTodo = id => {
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    };

    const onSubmitTodo = () => {
        const newTodo = {
          body: todoBody,
          status: 'Active',
          id: todoList.length + 1
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setTodoBody('');
    };

    return (
        <ImageBackground style={styles.container} source={{ uri: 'https://media.gettyimages.com/photos/skier-walking-along-ridge-carrying-his-skis-andermatt-uri-switzerland-picture-id691043053?s=2048x2048' }}>
            <KeyboardAvoidingView
                enabled
                behavior="padding"
            >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginTop: "200%" }}>
                        
                        <View style={styles.container}>
                            {todoList.map((todo, idx) => {
                                return <TodoItem 
                                        key={todo.body} 
                                        todo={todo} 
                                        idx={idx} 
                                        onToggleTodo={onToggleTodo}
                                        onDeleteTodo={onDeleteTodo}
                                        />;
                            })}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    value={todoBody}
                                    style={styles.todoInput}
                                    onChangeText={text => setTodoBody(text)}
                                />
                                <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>                    
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
        
    );
}

All.navigationOptions = {
  header: null 
};

const TodoItem = props => {
    const statusStyle = {
      backgroundColor: props.todo.status === 'Done' ? 'darkseagreen' : 'grey'
    };

    const onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
          'Delete your todo?',
          prompt,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
          ],
          { cancelable: true }
        );
    };

    return (
      <TouchableOpacity
        onPress={() => {
            props.onToggleTodo(props.todo.id);
        }}
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onLongPress={() => onLongPress(props.todo)}
      >
        <Text style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
      },
      todoItem: {
        margin: 5,
        padding: 10,
        width: '95%',
        minHeight: 20,
        color: 'white',
        borderRadius: 5,
        flexWrap: 'wrap'
      },
      todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
      todoInput: {
        width: '95%',
        minHeight: 30,
        color: 'black',
        borderWidth: 1,
        marginTop: '20%',
        marginBottom: '5%',
        borderColor: 'grey',
    
      },
      inputContainer: {
        flex: 1,
        width: '90%',
        marginTop: 20,
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'aquamarine',
        justifyContent: 'center'
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold'
      },

      scrollView: {
          flex: 1,
          paddingTop: 1000
      }

});