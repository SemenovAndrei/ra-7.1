import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import PropTypes from 'prop-types'

function DateTimePretty(Component) {
  function NewDateTime(props) {
    console.log(props)

    const date = moment(props.date, 'YYYYMMDDhhmm').fromNow()

    return <Component {...props} date={date} />
  }
  return NewDateTime
}

DateTimePretty.propTypes = {
  date: PropTypes.string,
}

export default DateTimePretty
