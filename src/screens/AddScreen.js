import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, SafeAreaView, ActivityIndicator } from 'react-native'

const AddScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { searchResult } = useSelector((state) => state.movieReducer);
    const [keyword, setKeyword] = useState('')
    const [showActivityIndicator, setShowActivityIndicator] = useState(false)

    return (
    <>
        <SafeAreaView style={{ height: '100%'}}>
            <View style={{ marginHorizontal: 10, marginTop: 20}}>
                <Text style={styles.textHeader}>Shpenzimi</Text>
                <TextInput
                    style={styles.textInput}
                />

                <Text style={styles.textHeader}>Cmimi</Text>
                <TextInput
                    style={styles.textInput}
                />

                <Text style={styles.textHeader}>Data</Text>
                
                <Button title='Shto' onPress={() => console.log('Shto')}/>
            </View>
        </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 26,
        marginBottom: 10
    },
    textInput:{
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 10,        
        marginBottom: 10
    }
})
export default AddScreen


