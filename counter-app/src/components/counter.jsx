import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() { 
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span style={this.styles} className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
                <p>{this.state.tags.length === 0 && "There are no tags!"}</p>
                {this.renderTags()}   
            </div>
        );
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>Please create a new tag!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;
