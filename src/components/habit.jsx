import React, { Component } from 'react';

class Habit extends Component {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit-list">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.props.onIncrease.bind(this, this.props.habit)}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.props.onDecrease.bind(this, this.props.habit)}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.props.onDelete.bind(this, this.props.habit)}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
