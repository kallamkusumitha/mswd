import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ notify}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notify === null) {
    return null
  }

  return <div style={style}>{notify}</div>
}

Notification.propTypes = {
  notification: PropTypes.string
}

export default Notification