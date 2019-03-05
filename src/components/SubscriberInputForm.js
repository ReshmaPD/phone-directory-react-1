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
      <React.Fragment>
        <form onSubmit={this.onSubmit} className="form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={_nameInputElement =>
              (this._nameInputElement = _nameInputElement)
            }
            required
          />
          <label>Phone</label>
          <input
            type="text"
            name="contact number"
            pattern="[1-9]{1}[0-9]{9}"
            ref={_numberInputElement =>
              (this._numberInputElement = _numberInputElement)
            }
             required
          />
          <button className="button add-button">Add Subscriber</button>
        </form>
      <React.Fragment>
    );
  }
}

export default SubscriberInputForm;
