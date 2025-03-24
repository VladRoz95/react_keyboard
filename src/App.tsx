import React from 'react';

export class App extends React.Component {
  state = { keyPressed: '' };

  updateLastKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.updateLastKeyPressed);
  }

  componentDidUnMount(): void {
    document.removeEventListener('keyup', this.updateLastKeyPressed);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed
            ? `The last pressed key is [${this.state.keyPressed}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
