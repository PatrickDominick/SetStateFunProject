import React, { Component } from 'react';
import AlignMe from "./align-me";
import Alignment from "./hooksComponents/alignment";
import HideMe from "./hide-me";
import Toggle from "./hooksComponents/toggle";
import UpDowner from "./incredecrementor";
import Counter from "./hooksComponents/counter";
import Fontcrease from "./fontcrease";
import Resizer from "./hooksComponents/resizer";
import ColorMe from "./color-me";
import Color from "./hooksComponents/color";
import ToggleClock from "./toggle-clock";
import Clock from "./traditionalComponents/clock";

export default class App extends Component {
  constructor() {
    super()

    this.state= {
      colorExists: true,
      clockExists: true
    }
  }


  render() {
    return (
      <div className='app'>
        <div className="alignment">
          <AlignMe />
          <Alignment />
        </div>

        <div className="hide-and-show-wrapper">
          <HideMe />
          <Toggle />
        </div>

        <div className="incredecrementor-wrapper">
          <UpDowner />
          <Counter />
        </div>

        <div className="fontcrease-wrapper">
          <Fontcrease />
          <Resizer />
          {this.state.colorExists
          ? <Color />
          : null}
          <button onClick={() => this.setState({ colorExists: !this.state.colorExists })}>Toggle Color</button>
        </div>

        <div className="color-me-wrapper">
          <ColorMe />
          <Color />
        </div>

        <div className="toggle-clock-wrapper">
          <ToggleClock />
          {this.state.clockExists
          ? <Clock /> 
          : null}
          <button onClick={() => this.setState({ clockExists: !this.state.clockExists })}>Toggle Clock</button>
        </div>

      </div>
    );
  }
}
