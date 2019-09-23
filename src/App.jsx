import React, { Component } from 'react';
import './App.css';
import Color from './Color';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [
        {
          locked: false,
          value: this.getRandomColor(),
        },
        {
          locked: false,
          value: this.getRandomColor(),
        },
        {
          locked: false,
          value: this.getRandomColor(),
        },
        {
          locked: false,
          value: this.getRandomColor(),
        },
        {
          locked: false,
          value: this.getRandomColor(),
        },
      ],
    };
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  toggleLock(index) {
    const newColors = this.state.colors.map((color, i) => {
      if (index === i) {
        return {
          ...color,
          locked: !color.locked,
        };
      } else {
        return color;
      }
    });

    this.setState({
      colors: newColors,
    });
  }

  randomizeColors() {
    const newColors = this.state.colors.map(color => {
      if (color.locked) {
        return color;
      } else {
        return {
          ...color,
          value: this.getRandomColor(),
        };
      }
    });

    this.setState({
      colors: newColors,
    });
  }

  render() {
    const colors = this.state.colors.map((color, i) => {
      return (
        <Color
          value={color.value}
          locked={color.locked}
          toggle={() => this.toggleLock(i)}
          key={i}
        />
      );
    });
    return (
      <div className="App">
        <div className="App-controls">
          <button
            onClick={this.randomizeColors.bind(this)}
            className="App-randomize"
          >
            Randomize Colors
          </button>
        </div>
        <div className="App-colors w-100 d-flex" style={{ height: '100vh' }}>
          {colors}
        </div>
      </div>
    );
  }
}
