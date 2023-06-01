import { Header } from './components'
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import store from './redux/store'
import { connect } from 'react-redux';

// function App() {
//
//     useEffect( () => {
//         axios.get( 'http://localhost:3001/db.json' )
//         .then( ( { data } ) => {
//             setPizzas( data.pizzas )
//         } )
//     }, [] )
//
//     return
// }

class App extends Component {

    componentDidMount() {
        axios.get( 'http://localhost:3000/db.json' )
        .then( ( { data } ) => {
            this.props.setPizzas( data.pizzas )
        } )
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={ <Home items={ this.props.items }/> }/>
                        <Route path="/cart" element={ <Cart/> }/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: ( items ) => dispatch( setPizzasAction( items ) ),
        dispatch
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( App )