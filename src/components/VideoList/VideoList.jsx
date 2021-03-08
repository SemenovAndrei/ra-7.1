import React from 'react'
import Video from '../Video/Video'
import PropTypes from 'prop-types'

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />)
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
}

export default VideoList
