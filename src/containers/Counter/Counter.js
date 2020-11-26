import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import CounterResult from '../../components/CounterResult/CounterResult'
import * as actionCreators from '../../store/actions/index'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label='Subtract 5' clicked={() => this.props.onSubtractCounter(5)} />
        <CounterControl label='Decrement' clicked={this.props.onDecrementCounter} />
        <CounterControl label='Increment' clicked={this.props.onIncrementCounter} />
        <CounterControl label='Add 5' clicked={() => this.props.onAddCounter(5)} />
        <hr />
        <CounterControl
          label='Store Result'
          clicked={() => this.props.onStoreResult(this.props.counter)} />
        {this.props.storedResults.map(result => (
          <CounterResult
            key={result.id}
            value={result.value}
            clicked={() => this.props.onDeleteResult(result.id)} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: value => dispatch(actionCreators.add(value)),
    onSubtractCounter: value => dispatch(actionCreators.subtract(value)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  storedResults: PropTypes.array,
  onIncrementCounter: PropTypes.func,
  onDecrementCounter: PropTypes.func,
  onAddCounter: PropTypes.func,
  onSubtractCounter: PropTypes.func,
  onStoreResult: PropTypes.func,
  onDeleteResult: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
