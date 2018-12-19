import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import Header from "./components/header";
import Card from "./components/card";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./sass/main.scss";

class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    try {
      const { data } = await Axios.get(config.corsProxy + config.apiUrl);
      this.setState({ data });
    } catch (ex) {
      console.log("Logging the error", ex);
      toast.error("An unexpected error ocurred.");
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main className="flex-grid">
          <Card data={this.state.data} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
