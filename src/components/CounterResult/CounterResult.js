import React from 'react'
import classes from './CounterResult.module.css'
import PropTypes from 'prop-types'

const CounterResult = props => (
  <div className={classes.CounterResult} onClick={props.clicked}>
    {props.value}
  </div>
)

CounterResult.propTypes = {
  value: PropTypes.number,
  clicked: PropTypes.func
}

export default CounterResult
