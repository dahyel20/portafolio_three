import React, { Component } from 'react';

class Room extends Component {
    render() {
      return (
    <div className="container">
        <div className="cubo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="loading">
            <h1>Loading</h1>
            <p>...</p>
        </div>
    </div>
      );
    }
  }

  export default Room