import { Component } from 'react';
import './App.css';

//Components
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    console.log('constructor')
    super();

    this.state = {
      monsters: [],
      searchField: ''
     
    }
    
  }
  

  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
        
      },
      () => {
        // console.log(this.state)
      }
      ))

    }

    onSearchChange = (event) => {
      const searchField = event.target.value.toLowerCase()
     
      this.setState(() => {
        return {searchField}
      })
  
    }

  render(){
    console.log('Render')
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
  })
  return (
    <div className="App">
      <input 
        type="text" 
        className='search-box' 
        placeholder='search monsters' 
        onChange={onSearchChange}
      />
      <CardList monstersList={filteredMonsters} />
    </div>
  );
}
}
export default App;
