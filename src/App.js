import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './assets/css/main.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./containers/home";
import Contact from "./containers/contact";


const App = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path='/'>
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
    </>
);

export default App;
