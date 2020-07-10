import React, { useState, useEffect } from 'react';

// RENDER PROPS
class WithCounterState extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  };

  decrement = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter - 1,
    });
  };

  render() {
    const { children } = this.props;
    const { counter } = this.state;

    return children(counter, this.increment, this.decrement);
  }
}

// HOC - HIGH ORDER COMPONENT
export function withCounterState(Component) {
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
      };
    }

    increment = () => {
      const { counter } = this.state;

      this.setState({
        counter: counter + 1,
      });
    };

    decrement = () => {
      const { counter } = this.state;

      this.setState({
        counter: counter - 1,
      });
    };

    render() {
      const { counter } = this.state;

      return (
        <Component
          {...this.props}
          counter={counter}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    }
  }

  return WrappedComponent;
}

const useCounter = (initialState) => {
  const [counter, setCounter] = useState(initialState);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return { counter, increment, decrement };
};

export function Counter(props) {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div>
      {counter}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
