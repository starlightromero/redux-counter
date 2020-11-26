import React from 'react'
import classes from './CounterOutput.module.css'
import PropTypes from 'prop-types'

const CounterOutput = props => (
  <div className={classes.CounterOutput}>
    Current Counter: {props.value}
  </div>
)

CounterOutput.propTypes = {
  value: PropTypes.number
}

export default CounterOutput
