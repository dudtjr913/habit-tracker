import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <header className="habit-header">
        <i className="habit-header-icon fas fa-leaf"></i>
        <h1 className="habit-title">Habit Tracker</h1>
        <span className="habit-count">{this.props.count}</span>
      </header>
    );
  }
}

export default Navbar;
