import {Component} from 'react'
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    async componentDidMount() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        this.setState({monsters: users});
    }

    onSearchChange(e) {
        this.setState({searchField: e.target.value});
    }

    render = () => {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

        return (
            <div className="App">

                <h1 className='app-title'>Monsters Rolodex</h1>

                <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monters'/>
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;
