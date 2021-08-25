import React, { Component } from 'react';

interface LiveGreeterClassState {
  name: string;
}

export class LiveGreeterClass extends Component<any, LiveGreeterClassState> {
  constructor( props: any ) {
    super( props );
    this.state = { name: '' };
  }

  handleUpdate = ( event: React.FormEvent<HTMLInputElement> ): void => {
    // console.log( 'Value in the form: ', event.currentTarget.value );
    this.setState( { name: event.currentTarget.value } );
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="your-name">Enter your name:</label>
        <input
          type="text"
          id="your-name"
          className="form-control"
          onInput={this.handleUpdate}
          value={this.state.name}
        />
        {this.state.name.length > 2
          ? (
            <p>Greetings, {this.state.name}</p>
          )
          : (
            <p></p>
          )}
      </div>
    );
  }
}

export default LiveGreeterClass;
