import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
    this.tester();
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("http://localhost:5000/Server", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const body = response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  tester = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
    const useable = await res.json();

    if (res.status !== 200) {
      throw Error(body.message);
    }

    console.log(useable);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">** {this.state.data} **</p>
      </div>
    );
  }
}

export default App;
