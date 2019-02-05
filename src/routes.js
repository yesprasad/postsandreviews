import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';
import PostDetails from './components/posts/postsdetails';
import User from './components/User';

const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/postsdetails/:Id' exact component={PostDetails}/>
                <Route path='/user/:Id' exact component={User}/>
            </Switch>
        </Layout>
        
    )
}

export default Routes;