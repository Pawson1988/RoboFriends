import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Button from "../components/button";
import Form from "../components/form";
import Scroll from "../components/Scroll";
import { CardList } from "../components/cardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import "tachyons";

function App() {
  const [state, setState] = useState({
    robots: [],
    searchField: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setState((prevState) => {
          return {
            ...prevState,
            robots: users,
          };
        })
      );
  }, []);

  function onSearchChange(e) {
    setState((prevState) => {
      return {
        ...prevState,
        searchField: e.target.value,
      };
    });
  }

  const { robots, searchField } = state;

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (robots.length === 0) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>

        <Header text="Hiiiiii" />
        <Header text="Second header!" />
        <Form />
        <Header />
        <Button />
        <Form />
        <Button />
        <Button />
        <Header />
      </div>
    );
  }
}

export default App;
