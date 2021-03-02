import React, { Component } from 'react'
import { Text, View } from 'react-native'

export const AppContext = React.createContext()

 class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardList:null,
            mechanics:null,
            spinner:false,
            cardsByMechanics:null,
            searchCardText:'',
            searchingCardList:null,
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getCardList:this.state.cardList,
                    setCardList:(cardList)=>{this.setState({cardList})},
                    getMechanics:this.state.mechanics,
                    setMechanics:(mechanics)=>{this.setState({mechanics})},
                    getSpinner:this.state.spinner,
                    setSpinner:(bool)=>{this.setState({spinner:bool})},
                    getCardsByMechanics:this.state.cardsByMechanics,
                    setCardsByMechanics:(cardsByMechanics)=>{this.setState({cardsByMechanics})},
                    setSpinner:(bool)=>{this.setState({spinner:bool})},
                    getSearchCardText:this.state.searchCardText,
                    setSearchCardText:(searchCardText)=>{this.setState({searchCardText})},
                    getSearchingCardList:this.state.searchingCardList,
                    setSearchingCardList:(searchingCardList)=>{this.setState({searchingCardList})},
                    
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
