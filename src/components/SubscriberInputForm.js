import React, { Component } from "react";

class SubscriberInputForm extends Component {
  onSubmit = event => {
    event.preventDefault();

    this.props.addSubscriber(
      this._nameInputElement.value,
      this._numberInputElement.value
    );

    this._nameInputElement.value = "";
    this._numberInputElement.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={_nameInputElement =>
              (this._nameInputElement = _nameInputElement)
            }
          />
          <label>Phone</label>
          <input
            type="text"
            name="contact number"
            ref={_numberInputElement =>
              (this._numberInputElement = _numberInputElement)
            }
          />
          <button className="button add-button">Add Subscriber</button>
        </form>
      </div>
    );
  }
}

export default SubscriberInputForm;
