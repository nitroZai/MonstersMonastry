import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    // Here state refers to local storage
    this.state = {
      monsters: [],
      searchValue: "",
    };

    console.log("Constructor");
  }
  // Lifecycle methods
  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state.monsters);
          }
        );
      });
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchValue = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchValue };
      },
      () => {
        console.log(this.state.monsters);
      }
    );
  };

  render() {
    console.log("Render");

    const { monsters, searchValue } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Monastry</h1>

        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="Search the Monster here"
          className="search-box"
        />

        {
          /* {this.state.monsters.map((monster) => {
          return <h1 key={monster.name}> {monster.name} </h1>;
        })} */

          // filteredMonsters.map((filteredMonster) => {
          //   return <h1 key={filteredMonster.id}>{filteredMonster.name}</h1>;
          // })

          <CardList monsters={filteredMonsters} anyting="Hello" />
        }
      </div>
    );
  }
}

export default App;
