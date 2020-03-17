import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    //1st step
    constructor() {
        super();
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    searchThings = (event) => {
        this.setState({SearchField: event.target.value })
    }

    //2nd step
    render(){
        const {robots , SearchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(SearchField.toLowerCase());
        })
        return !robots.length ? 
            <h1>Loading...</h1> :  
            (
                <div className='tc'>
                    <h1 className='f1'>Cut Cat Friends</h1>
                    <SearchBox search = {this.searchThings} />
                    <Scroll>
                        <CardList robots={filteredRobots} />    
                    </Scroll>
                </div>
            )
    }
    
    //3rd step
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users}));

    }
}

export default App;