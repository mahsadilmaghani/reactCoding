import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div className='row'>
        <br />
        <div className='col-1'>
          <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
            Reset
          </button>
        </div>
        <div className='col'>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              counter={counter}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
