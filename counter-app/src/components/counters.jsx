import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <br />
        <button
          onClick={this.props.onReset}
          className='btn btn-primary btn-sm m2'
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
