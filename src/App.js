import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
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

  handleOffer = auction => {
    const data = [...this.state.data];
    const index = data.indexOf(auction);

    data[index].bids.length === 0
      ? (data[index].bids = [
          {
            amount: 250,
            dealership: "Instacarro",
            createdAt: new Date().toISOString(),
            channel: "Web"
          }
        ])
      : (data[index].bids = [
          ...data[index].bids,
          {
            amount: auction.bids[auction.bids.length - 1].amount + 250,
            dealership: "Instacarro",
            createdAt: new Date().toISOString(),
            channel: "Web"
          }
        ]);

    this.setState({ data });
  };

  render() {
    const { data } = this.state;

    if (data.length === 0)
      return (
        <div className="center">
          <ClipLoader color={"#3eb871"} />
        </div>
      );

    console.log(data[0].bids);

    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main className="flex-grid">
          <Card data={data} onOffer={this.handleOffer} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
