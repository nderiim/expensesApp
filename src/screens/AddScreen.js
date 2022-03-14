import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'

const AddScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { searchResult } = useSelector((state) => state.movieReducer);
    const [keyword, setKeyword] = useState('')
    const [showActivityIndicator, setShowActivityIndicator] = useState(false)

    return (
    <>
        <SafeAreaView style={{ height: '100%'}}>
                {
                    searchResult.length == 0 && showActivityIndicator && keyword.length != 0
                    ? <ActivityIndicator size={'large'} color={'lightgrey'} style={{flex:1}}/>
                    :<FlatList
                        style={{ alignSelf: 'center' }}
                        numColumns={'2'}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={() => Math.random() * 10}
                        data={searchResult}
                        renderItem={({item}) => 
                            <MovieCard
                                navigation={navigation}
                                id={item.id && item.id}
                                title={item.title ? item.title : item.name}
                                imageUri={/undefined$/.test(item.image) ? 'https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg' : item.image}
                                genre={item.genre && item.genre}
                                released={item.release_date && item.release_date}
                                type={item.type && item.type}
                                description={item.overview && item.overview}
                                imdbID={item.imdbID && item.imdbID}
                                imdbRating={item.vote_average && item.vote_average}
                                video={item.video && item.video}
                                cast={item.cast && item.cast}
                                media_type={item.media_type}
                            />
                        }
                    />
                }
        </SafeAreaView>
    </>
    )
}

export default AddScreen


