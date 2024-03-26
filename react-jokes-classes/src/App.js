import React, { Component } from "react";
import JokeList from "./JokeList";
import JokeListWithHooks from "./JokeListWithHooks";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <JokeList /> */}
        <JokeListWithHooks />
      </div>
    );
  }
}

export default App;
