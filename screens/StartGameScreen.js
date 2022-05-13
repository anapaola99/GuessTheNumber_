import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native-web';

import Card from '../Components/Card'
import Colors from '../constants/Colors';
import Input from '../Components/input';
import {NumberContainer} from '../Components/NumberContainer';

function StartGameScreen (){
    const [enteredValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, serSelectNumber] = useState(undefined);

    const numberInputHandler = input => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = input => {
        const choseNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || choseNumber <= 0 || choseNumber > 99) return

        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setEnteredValue('')

    }
    
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if( isNaN(chosenNumber) || chosenNumber <= 1 || chosenNumber > 99) {
          return
        }
    
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
      }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={Styles.selectedContainer}>
                <Text>You selected:</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
            </Card>
        )
    }

    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.title}>Select a Number</Text>
                <Input
                style={styles.input}
                blurOnSubmit//Android
                autoCapitalize ='none'
                autoCorrect={false}
                keyboardType="numebr-pad"
                maxLenght={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button style={styles.button} title='Reset' color ={Colors.primary} onPress={confirmInputHandler}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    )
}

const styles = StyleSheet.create({
    selectedContainer:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    },
    button:{
        width: 100
    },
    buttonConatainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input:{
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;