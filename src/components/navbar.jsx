import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <>
        <h1 className="habit-title">
          Habit Tracker <span className="habit-count">{this.props.count}</span>
        </h1>
      </>
    );
  }
}

export default Navbar;
