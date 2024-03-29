/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import '../containers/App/style.scss';
import List from '../containers/DataListing/DataList'


class App extends Component {

    render(){
        return (
            <div className="app-wrapper">
                <Helmet
                    titleTemplate="%s - React.js Boilerplate"
                    defaultTitle="React.js Boilerplate"
                >
                    <meta name="description" content="A React.js Boilerplate application" />
                </Helmet>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/features" component={List} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}


export default App;
