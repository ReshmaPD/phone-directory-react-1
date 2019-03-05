import React, { Component } from "react";
import "./App.css";
import Defaultsubscriber from "./components/Defaultsubscriber";
import SubscriberInputForm from "./components/SubscriberInputForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.addSubscriber = this.addSubscriber.bind(this);
    this.state = {
      subscriberList: [
        { id: 1, name: "Alok", number: "7774482277" },
        { id: 2, name: "Nitin", number: "8585669999" },
        { id: 3, name: "Anu", number: "7788899966" }
      ]
    };
  }

  getSubscriberList() {
    return this.state.subscriberList;
  }

  addSubscriber = (name, number) => {
    if (this._nameInputElement !== "" && this._numberInputElement !== "") {
      const subscriberList = this.getSubscriberList();

      subscriberList.push({
        name,
        number,
        id: Date.now()
      });
      this.setState({ subscriberList });
    }

    console.log(this.state.subscriberList);
  };

  deleteSubscriber = id => {
    const subscriberList = this.getSubscriberList();

    const filteredSubscriberList = subscriberList.filter(subscriber => {
      return subscriber.id !== id;
    });

    this.setState({ subscriberList: filteredSubscriberList });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>phone directory</h1>
        </header>
        <main className="container">
          <div className="main-content">
            <h2>add subscriber</h2>
            <SubscriberInputForm
              defaultFormState={this.state.defaultFormValue}
              addSubscriber={this.addSubscriber}
            />
          </div>
          <div className="main-content">
            <h2>view subscriber</h2>
            <Defaultsubscriber
              subscriberList={this.state.subscriberList}
              deleteSubscriber={this.deleteSubscriber}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
