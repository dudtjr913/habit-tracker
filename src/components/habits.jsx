import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';
import Navbar from './navbar';

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

  get habitCount() {
    return this.state.habits.reduce((acc, habit) => (habit.count > 0 ? acc + 1 : acc), 0);
  }

  handleAddHabit = (habitName) => {
    const habit = { name: habitName, count: 0, id: Math.floor(Math.random(999999) * 100) };
    const habits = this.state.habits.concat(habit);
    this.setState({ habits });
  };

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

  handleHabitResetAllButton = () => {
    const habits = this.state.habits.map((habit) => ({ ...habit }));
    habits.forEach((habit) => (habit.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar count={this.habitCount} />
        <AddForm onAddHabit={this.handleAddHabit} />
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
        <button class="habit-reset-all" onClick={this.handleHabitResetAllButton}>
          Reset all
        </button>
      </>
    );
  }
}

export default Habits;
