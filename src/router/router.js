import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts';
import PostItem from '../pages/PostItem';

export default () => {
    return (
        <Switch>
            <Route exact path={["/", '/posts']} component={Posts} />
            <Route exact path='/posts/:id' component={PostItem} />
        </Switch>
    )
}