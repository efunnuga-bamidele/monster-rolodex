import { Component } from 'react';
import './App.css';

//Components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
//Onchange event handler for the textfield 
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

    //Filter the list of fetched array based in user input and return
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
  })
  return (
    <div className="App">

      <SearchBox 
        onChangeHandler = {onSearchChange} 
        className='search-box' 
        placeholder='search monsters'/>
      <CardList monstersList={filteredMonsters} />
    </div>
  );
}
}
export default App;
