import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen'
import AddScreen from './screens/AddScreen'
import { MaterialIcons } from '@expo/vector-icons';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
        </HomeStack.Navigator>
    )
};

const AddStack = createNativeStackNavigator();
function AddStackScreen() {
    return(
        <AddStack.Navigator>
            <AddStack.Screen name="Add" component={AddScreen} options={{headerShown: false}}/>
        </AddStack.Navigator>
    )
};

const BottomTab = createMaterialBottomTabNavigator();
function AppStack() {
    return (
        <BottomTab.Navigator 
            barStyle={{ backgroundColor: 'lightgrey' }}
            shifting={true}
        >
            <BottomTab.Screen 
                name="HomeTab" 
                component={HomeStackScreen} 
                options={{
                    headerShown: false, 
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={26} />
                    )}
                }
            />
            
            <BottomTab.Screen 
                name="AddTab" 
                component={AddStackScreen} 
                options={{
                    headerShown: false, 
                    tabBarLabel: 'Add',
                    tabBarIcon: () => (
                        <MaterialIcons name="create" size={24} color="black" />
                    )}
                }
            />
        </BottomTab.Navigator>
    );
};

export default AppStack;
