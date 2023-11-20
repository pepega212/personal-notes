import React from "react";
import { getInitialData } from "./utils/index";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      querySearch: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchEventHandler({ query }) {
    this.setState(() => {
      return { querySearch: query };
    });
  }

  onDeleteHandler(id) {
    this.setState({
      notes: this.state.notes.filter((notes) => notes.id !== id),
    });
  }

  onArchiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    });
  }

  onActiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      ),
    });
  }

  render() {
    return (
      <>
        <Header searchNote={this.onSearchEventHandler} />
        <Body
          addNote={this.onAddNoteEventHandler}
          notes={this.state.notes}
          querySearch={this.state.querySearch}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onActive={this.onActiveHandler}
        />
      </>
    );
  }
}

export default App;
