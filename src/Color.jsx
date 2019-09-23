import React from 'react';

export default class Color extends React.Component {
  render() {
    const { value, locked, toggle } = this.props;
    return (
      <div
        style={{ backgroundColor: value }}
        className="w-100 d-flex flex-column align-items-center justify-content-center"
      >
        <h1>{value}</h1>
        <button
          onClick={toggle}
          className={locked ? 'btn btn-dark' : 'btn btn-outline-dark'}
        >
          {locked ? 'UNLOCK' : 'LOCK'}
        </button>
      </div>
    );
  }
}
