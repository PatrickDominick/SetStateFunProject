import React, { Component } from 'react';
import AlignMe from "./align-me";
import HideMe from "./hide-me";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AlignMe />
        <HideMe />
      </div>
    );
  }
}
