import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3'],
  };

  styles = {
    fontSize: 50,
    fontWeight: 'bold',
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}
        <h4>Part {this.props.id}</h4>
        <img src={this.state.imageUrl} alt='' />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
        <p>{this.state.tags.length === 0 && 'There are no tags!'}</p>
        {this.renderTags()}
      </div>
    );
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>Please create a new tag!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
