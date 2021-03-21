import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from '../src/Component/Footer';
import Covid from '../src/Component/Home';
import Filter from '../src/Component/Filter'
const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Covid} />
            <Route exact path="/restaurantsearchpage" component={Filter} />

            <Footer />
        </BrowserRouter>
    )
}

export default Router;