import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import AddForm from './components/addForm';
import Navbar from './components/navbar';

class App extends Component {
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
    return this.state.habits.filter(({ count }) => count > 0).length;
  }

  handleAddHabit = (habitName) => {
    const habit = { name: habitName, count: 0, id: Date.now() };
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
    const habits = this.state.habits.map((habit) => {
      return habit.count > 0 ? { ...habit, count: 0 } : habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar count={this.habitCount} />
        <AddForm onAddHabit={this.handleAddHabit} />
        <Habits
          habits={this.state.habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />
        <button className="habit-reset-all" onClick={this.handleHabitResetAllButton}>
          Reset all
        </button>
      </div>
    );
  }
}

export default App;
