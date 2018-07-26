import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import TodoContainer from './todos/containers/todoContainer'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                {/* It's setup at the default index route */}
                <Route path="/" component={TodoContainer} />
            </Switch>
        </BrowserRouter>
    )
}
export { Routes }