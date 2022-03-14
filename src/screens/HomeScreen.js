import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { getPopularMovies } from '../actions';
import { searchMovie, clearSearchResult } from '../actions'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const {popularMovies} = useSelector((state) => state.movieReducer);
    const [keyword, setKeyword] = useState('')

    // useEffect(() => { dispatch(getPopularMovies()) }, [])
    
    const shpenzimet = [
        {
            2022: [
                {'Janar': []},
                {'Shkurt': []}
            ]
        },
        {
            2021: [
                {'Janar': []}
            ]
        }
    ]

    return (
        <>
            <SafeAreaView style={{ height: '100%'}}>
                <View style={styles.searchContainer}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        value={keyword}
                        style={styles.input} 
                        onChangeText={setKeyword}
                        placeholder='Kerko shpenzim...'
                        placeholderTextColor='black'
                    />
                    <TouchableOpacity onPress={() => {
                            setShowActivityIndicator(true)
                            dispatch(clearSearchResult())
                            dispatch(searchMovie(keyword))
                        }
                    }>
                        <AntDesign name="search1" size={35} color="black" />
                    </TouchableOpacity>
                </View>
                
                <View>
                    <FlatList
                        keyExtractor={() => Math.random() * 10}
                        data={shpenzimet}
                        renderItem={({item, index}) => 
                            <Text></Text>
                        }
                    />
                </View>


            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    input: {
        flex: 1,
        padding: 15,
        color: 'lightgrey',
        fontSize: 18
    }
})

export default HomeScreen

