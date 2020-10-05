import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SingleTodoScreen = props => {
  const { id, status, body } = props.navigation.state.params.updatedTodo;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

SingleTodoScreen.navigationOptions = {
  title: 'SingleTodoScreen'
};

export default SingleTodoScreen;

/*
export default function SingleTodoScreen( {route} ) {
    return (
        <View style={styles.container}>
            <Text>DETAIL</Text>
            <View style={styles.headerContainer} >
                <Text style={styles.headerText}>{route.params?.id}</Text>
                <Text>{route.params?.status}</Text>
            </View>
            <Text style={styles.bodyText}>{route.params?.body}</Text>
       
        </View>
    );
}; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 50
  },
  bodyText: {
    fontSize: 30
  }
});