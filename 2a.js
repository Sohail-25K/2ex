import React, { Component } from 'react';
class CounterClass extends Component {
state = { count: 0 };
render() {
return (
<div>
<h1>Counter using Class Component</h1>
<h2>Count: {this.state.count}</h2>
<button onClick={() =>
this.setState({ count: this.state.count + 1 })
}>
Increment
</button>
<button onClick={() =>
this.setState({ count: this.state.count - 1 })
}>
Decrement
</button>
</div>
);
}
}
export default CounterClass;