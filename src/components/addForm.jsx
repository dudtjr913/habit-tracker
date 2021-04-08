import React, { Component } from 'react';

class AddForm extends Component {
  handleHabitAddForm = (e) => {
    e.preventDefault();
    const $input = e.target['habit-add-input'];
    this.props.onAddHabit($input.value);
    $input.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleHabitAddForm} className="habit-add-form">
        <input id="habit-add-input" className="habit-add-input" placeholder="Habit" />
        <button className="habit-add-button">Add</button>
      </form>
    );
  }
}

export default AddForm;
