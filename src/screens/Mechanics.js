import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ImageBackground, ActivityIndicator, Dimensions } from 'react-native'
import { AppContext } from '../context/AppContext'
import Styles from './style'
import Images from '../../static/images'
import { cardListMaking } from '../services/helper'
let ScreenHeight = Dimensions.get("window").height;

class Mechanics extends React.Component {

    async selectedMechanicCardList(mechanicName) {
        this.context.setSpinner(true);
        const selectedMechanicCardList = await cardListMaking(mechanicName, this.context.getCardList);
        this.context.setCardsByMechanics(selectedMechanicCardList);
        this.props.navigation.navigate('CardDetail', { name: mechanicName })
        this.context.setSpinner(false);


    }

    renderItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <ImageBackground source={Images.mechanicBorder} style={Styles.image}>
                    <TouchableOpacity style={Styles.button} onPress={() => this.selectedMechanicCardList(item)}>
                        <Text style={Styles.whiteText}>{item}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

    renderSpinner() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', height: ScreenHeight }}>
                <ActivityIndicator size="large" />
                <View style={{ alignItems: 'center' }}>
                    <Text>Please Wait</Text>
                    <Text>Creating a card list</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <SafeAreaView />
                {
                    this.context.getSpinner ?
                        this.renderSpinner()
                        :
                        <FlatList
                            data={this.context.getMechanics}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                }
            </View>
        )
    }
}
export default Mechanics;


Mechanics.contextType = AppContext;