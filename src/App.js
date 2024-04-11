import { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CoursesContext from './context/CoursesContext'
import Header from './components/Header'
import Home from './components/Home'
import Classes from './components/Classes'
import Products from './components/Products'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import Cart from './components/Cart'
import './App.css'

class App extends Component {
  state = {cartItemsList: []}

  addItem = productDetails => {
    const {id} = productDetails
    const {cartItemsList} = this.state
    const sortedProducts = cartItemsList.filter(eachObj => eachObj.id === id)
    if(sortedProducts.length === 0){
      const updatedProdcutDetails = {
        ...productDetails,
        quantity: 1
      }
      this.setState(prevState => ({
        cartItemsList: [...prevState.cartItemsList,updatedProdcutDetails]
      }))
    }
  }

  removeItem = productDetails => {
    const {id} = productDetails
    const {cartItemsList} = this.state
    const sortedProducts = cartItemsList.filter(eachObj => eachObj.id !== id)
    this.setState({cartItemsList: sortedProducts})
  }

  render() {
    const {cartItemsList} = this.state
    return (
      <CoursesContext.Provider value={{
        cartItemsList,
        addItem: this.addItem,
        removeItem: this.removeItem
      }
      }>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CoursesContext.Provider>
    )
  }
}

export default App
