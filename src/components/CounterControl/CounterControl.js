import React from 'react'
import classes from './CounterControl.module.css'
import PropTypes from 'prop-types'

const CounterControl = props => (
  <div className={classes.CounterControl} onClick={props.clicked}>
    {props.label}
  </div>
)

CounterControl.propTypes = {
  label: PropTypes.string,
  clicked: PropTypes.func
}

export default CounterControl
