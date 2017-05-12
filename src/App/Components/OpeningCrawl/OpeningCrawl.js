import React from 'react'
import './OpeningCrawl.css'
import PropTypes from 'prop-types'

export const OpeningCrawl = ({crawlInfo}) => {

  return (
    <div className="crawl-main">
      <p className="main-text crawl">{crawlInfo.crawl}</p>
      <p className="title">{crawlInfo.title}</p>
      <p className="title release">{crawlInfo.release}</p>
    </div>
  )
}

OpeningCrawl.propTypes = {
  crawlInfo: PropTypes.object
}
