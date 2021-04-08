import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { name: 'Reading', count: 0, id: 1 },
        { name: 'Listening', count: 0, id: 2 },
        { name: 'Writing', count: 0, id: 3 },
      ],
    };
  }

  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const copyHabit = { ...habits[index] };
    copyHabit.count += 1;
    habits[index] = copyHabit;
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const copyHabit = { ...habits[index] };
    if (copyHabit.count === 0) return;

    copyHabit.count -= 1;
    habits[index] = copyHabit;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    this.setState(({ habits }) => ({
      habits: habits.filter(({ id }) => id !== habit.id),
    }));
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
