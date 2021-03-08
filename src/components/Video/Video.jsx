import React from 'react'
import DateTime from '../DateTime/DateTime'
import PropTypes from 'prop-types'
import DateTimePretty from '../DateTimePretty/DateTimePretty'

const WithPretty = DateTimePretty(DateTime)

function Video(props) {
  return (
    <div className="video">
      <iframe
        title="This is a unique title"
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <WithPretty date={props.date} />
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Video
