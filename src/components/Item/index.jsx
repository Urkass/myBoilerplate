import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import style from './index.pcss';

const enableResizing = {
  top: false,
  right: true,
  bottom: false,
  left: true,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 120
        }}
        enableResizing={enableResizing}
      >
        <div className={style.item} />
      </Rnd>
    );
  }
}
