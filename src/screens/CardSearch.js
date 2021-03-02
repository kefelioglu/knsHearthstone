import React, { Component } from 'react'
import { Text, View, TextInput ,Dimensions,ActivityIndicator,FlatList,Image,ImageBackground} from 'react-native'
import FlipCard from 'react-native-flip-card'
import { AppContext } from '../context/AppContext'
import { getSearchingCardList } from '../services/api'
import Images from '../../static/images'
import Styles from './style'
let ScreenHeight = Dimensions.get("window").height;

class CardSearch extends Component {
    
    async onChangeText(text) {
        this.context.setSpinner(true);
        this.context.setSearchCardText(text)
        const searchingCardList = await getSearchingCardList(text);
        this.context.setSpinner(false);
        this.context.setSearchingCardList(searchingCardList);
    }

    renderItem = ({ item }) => {
        return (
            <FlipCard 
            flipHorizontal={true}
            flipVertical={false}>
                <View >
                    {
                        item.img !== undefined ?
                            <View style={{ left: 20, right: 20, height: 600 }}>
                                <Image
                                    style={{ flex: 1, resizeMode: 'stretch' }}
                                    source={{ uri: item.img }}
                                />
                            </View>
                            :
                            <View style={{ left: 20, right: 20, height: 600 }}>
                                <Image
                                    style={{ flex: 1, resizeMode: 'stretch' }}
                                    source={Images.emptyCard}
                                />
                            </View>
                    }
                    <Text style={{ textAlign: 'center' }}>
                        {item.name}
                    </Text>
                </View>
                <View style={{margin:20, height: 580}}>
                    
                    <ImageBackground style={{ flex: 1, resizeMode: 'stretch'}}
                                    source={Images.cardBack}>
                    <View style={{backgroundColor:'rgba(0, 0, 0, 0.78)',height:580,justifyContent:'center',alignItems:'center'}}>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Name : {item.name} </Text>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Class : {item.playerClass} </Text>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Type : {item.type} </Text>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Card Set : {item.cardSet} </Text>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Card Id : {item.cardId} </Text>
                        <Text style={[Styles.whiteText,{marginTop:10}]}>Mechanics : {item.mechanics!==undefined?item.mechanics.map(x=>{return x.name+' '}):'-'} </Text>
                    </View>
                    </ImageBackground>
                    
                    
                </View>
            </FlipCard>

        )
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.context.getSearchCardText}
                />
                <View>
                    {this.context.getSpinner ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: ScreenHeight }}>
                            <ActivityIndicator size="large" />
                            <View style={{ alignItems: 'center' }}>
                                <Text>Please Wait</Text>
                                <Text>Card's Searching</Text>
                            </View>
                        </View>
                        :
                        <FlatList
                            data={this.context.getSearchingCardList}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.cardId}
                        />
                    }
                </View>
            </View>
        )
    }
}

export default CardSearch

CardSearch.contextType = AppContext;
