import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return {
            counter: prevState.counter + 1
          }
        })
        break
      case 'dec':
        this.setState(prevState => {
          return {
            counter: prevState.counter - 1
          }
        })
        break
      case 'add':
        this.setState(prevState => {
          return {
            counter: prevState.counter + value
          }
        })
        break
      case 'sub':
        this.setState(prevState => {
          return {
            counter: prevState.counter - value
          }
        })
        break
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
        <hr/>
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: value => dispatch({type: 'ADD', value: value}),
    onSubtractCounter: value => dispatch({type: 'SUBTRACT', value: value}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: id => dispatch({type: 'DELETE_RESULT', resultId: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
