import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSumbitHandler = (event) => {
    event.preventDefault();

    if (this.state.title.trim() === "" || this.state.body.trim() === "") {
      return;
    }

    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Add note</h2>
        <form onSubmit={this.onSumbitHandler}>
          <p className="note-input__title__char-limit">
            Characters left: {this.state.maxChar - this.state.title.length}
          </p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Title..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            placeholder="Your notes here..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
