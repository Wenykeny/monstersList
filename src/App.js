import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/card_list_comp';
import { SearchBox } from './components/search/search_box';


// This is a Function Component
// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// This is a Class Component
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
      avatar: 0,
    }
  }

  componentDidMount() {
    // Fetch users data
    fetch('https://jsonplaceholder.typicode.com/users?_limit=12')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
      .catch(err => console.log(err))
  }

  searchMonster = (e) => this.setState({ [e.target.name]: e.target.value })

  handleAvatar = (e) => this.setState({ [e.target.name]: parseInt(e.target.value) })

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="App-logo">Monsters List</h1>

        {/* <input type="search" name="searchField" onChange={this.searchMonster} placeholder="Search Monster" />  
        we create a new component to the searchbox */}
        <SearchBox placeholder="Search Monster" handleChange={this.searchMonster} handleAvatar={this.handleAvatar} />

        {/* The 'name' is attribute 'called props' of the CardList component. 
        Note: All the 'props' has children and they are any element we place inside the component import.
        like below the '' and it can be accessed in the CardList component. */}
        {/* <CardList name='moises' >
          <h4>Hello there!</h4>
        </CardList> */}
        <CardList monsters={filterMonsters} avatar={this.state.avatar} />

      </div>
    );
  }
}
