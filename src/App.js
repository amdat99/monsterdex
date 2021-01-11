import React from 'react';
import CardList from './components/cardlist/Cardlist'
import Scroll from './components/cardlist/Scroll'
import SearchBox from './components/searchBox/SearchBox'

import './App.css';
 

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      monsters :[],
      searchField: ''
    }
  }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => this.setState({monsters: data}))
      }

    OnSearchChange = (event) => {
         this.setState({searchField: event.target.value})
        }

    filteredMonsters= () =>{
        return this.state.monsters.filter( monster =>{ 
        return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
    }

  render(){
  return (
    
    <div className="App">
      <h1> Monsters Rolodex</h1>
        <SearchBox searchChange= {this.OnSearchChange}/>
        <Scroll>  
          <CardList monsters = {this.filteredMonsters()} />
        </Scroll>
       
       
    </div>
  );
}
}
export default App;
