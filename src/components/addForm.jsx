import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
  handleHabitAddForm = (e) => {
    e.preventDefault();
    const $input = e.target['habit-add-input'];

    $input.value && this.props.onAddHabit($input.value);
    e.target.reset();
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
