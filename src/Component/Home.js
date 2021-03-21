import React from 'react';
import Wallpaper from '../Component/Wallpaper';
import QuickSearch from '../Component/QuickSearch';
import axios from 'axios';

class Home extends React.Component {
  

    constructor() {
        super();
        this.state = {
            mealtypes: []
        }
    }

    componentDidMount() {

        axios({
            method: 'GET',
            url: 'https://ck-api-project.herokuapp.com/Meal-Types',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => this.setState({ mealtypes: res.data.mealtypes }))
            .catch(err => console.log(err))

    }

    render() {
        // here we are sending data as properties(props)
        
        const {  mealtypes } = this.state;

        return (
            <React.Fragment>
                <Wallpaper  />        
                <QuickSearch  mealtype={mealtypes}/>
            </React.Fragment>
        )
    }
}

export default Home;