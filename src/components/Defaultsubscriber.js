import React from "react";

const Defaultsubscriber = props => {
  return (
    <React.Fragment>
      <ul className="row-align">
        <li>Name</li>
        <li>Number</li>
        <li>
          <span />
          Actions
        </li>
      </ul>
      <hr />
      {props.subscriberList.length > 0 ? (
        props.subscriberList.map(subscriber => (
          <ul key={subscriber.id} className="row-align">
            <li>{subscriber.name}</li>
            <li>{subscriber.number}</li>
            <li>
              <button
                onClick={() => props.deleteSubscriber(subscriber.id)}
                className="button delete-button"
              >
                Delete
              </button>
            </li>
          </ul>
        ))
      ) : (
        <ul className="row-align">
          <li>no users</li>
        </ul>
      )}
    </React.Fragment>
  );
};

export default Defaultsubscriber;
