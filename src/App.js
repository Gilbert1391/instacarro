import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/header";
import Card from "./components/card";
import "./sass/main.scss";

class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await Axios.get(
      "https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json"
    );
    this.setState({ data });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="flex-grid">
          <Card data={this.state.data} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
