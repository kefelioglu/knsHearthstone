import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {
    MechanicsScreen,
    CardDetailScreen,
    CardSearch,
    Spinner
} from '../screens/index'
import { Button } from 'react-native';
const Stack = createStackNavigator();

function AppNavigationContainer() {
    return (
        
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Spinner"}>
                    <Stack.Screen options={{headerShown:false}} name="Spinner" component={Spinner} />
                    <Stack.Screen options={({ navigation })=>({headerLeft: null,headerTintColor:'#A52A2A',headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('CardSearch')}
                  title="search"
                  color="#000"
                />
              ),})} name="Mechanics" component={MechanicsScreen} />
                    <Stack.Screen name="CardDetail" options={({ route }) => ({ title: route.params.name })} component={CardDetailScreen} />
                    <Stack.Screen name="CardSearch" component={CardSearch} />
                </Stack.Navigator>
            </NavigationContainer>
        
    );
}

export default AppNavigationContainer;