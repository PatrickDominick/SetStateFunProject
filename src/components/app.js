import React, { Component } from 'react';
import AlignMe from "./align-me";
import Alignment from "../components/traditionalComponents/alignment";
import HideMe from "./hide-me";
import HideMe2 from "../components/traditionalComponents/hide-me-two";
import UpDowner from "./incredecrementor";
import UpDownerTwo from "../components/traditionalComponents/incredecrementor-two";
import Fontcrease from "./fontcrease";
import FontcreaseTwo from "../components/traditionalComponents/fontcrease-two";
import ColorMe from "./color-me";
import ColorMeTwo from "../components/traditionalComponents/color-me-two";
import ToggleClock from "./toggle-clock";
import ToggleClockTwo from "../components/traditionalComponents/toggle-clock-two";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="alignment">

          <AlignMe />
          <Alignment />

        </div>

        <div className="hide-and-show-wrapper">

          <HideMe />
          <HideMe2 />

        </div>

        <div className="incredecrementor-wrapper">
          <UpDowner />
          <UpDownerTwo />
        </div>

        <div className="fontcrease-wrapper">
          <Fontcrease />
          <FontcreaseTwo />
        </div>

        <div className="color-me-wrapper">
          <ColorMe />
          <ColorMeTwo />
        </div>

        <div className="toggle-clock-wrapper">
          <ToggleClock />
          <ToggleClockTwo />
        </div>

      </div>
    );
  }
}
