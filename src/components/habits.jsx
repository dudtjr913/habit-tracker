import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  onIncrease = (habit) => {
    this.props.onIncrease(habit);
  };

  onDecrease = (habit) => {
    this.props.onDecrease(habit);
  };

  onDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.onIncrease}
            onDecrease={this.onDecrease}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
