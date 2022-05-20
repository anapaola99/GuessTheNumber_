import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const GameOverScreen = ({rounds, onGameRestart}) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.title}>The game is over</Text>
        <Text style={styles.subtitle}>Took me: {rounds} rounds </Text>
        <Text style={styles.subtitle}>The number was: </Text>
          <NumberContainer>{number}</NumberContainer>
        <Button title='Restart Game' onPress={onGameRestart} />
      </Card>
    </View>
  )
}

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    title: {
      fontSize: 25,
      marginVertical: 15,
      fontWeight: 'bold'
    },
    subtitle: {
      flex: 1,
      marginBottom: 10,
    },
  });

export default GameOverScreen