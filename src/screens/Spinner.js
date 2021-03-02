import React, { Component, useContext } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { AppContext } from '../context/AppContext'
import { getCardList } from '../services/api'

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
            this.cardList();
    }
    
    cardList = async () => {
        const response = await getCardList();
        if (!response === false) {
            this.context.setCardList(response.allCards)
            this.context.setMechanics(response.allMechanics)
            this.props.navigation.navigate('Mechanics')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <View style={{ alignItems: 'center' }}>
                    <Text>Please Wait</Text>
                    <Text>Card List Downloading</Text>
                </View>
            </View>
        )
    }

}


Spinner.contextType = AppContext;
