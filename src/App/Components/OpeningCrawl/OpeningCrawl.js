import React from 'react'
import './OpeningCrawl.css'

export const OpeningCrawl = ({crawlInfo}) => {

  return (
    <div className="crawl-main">
      <p className="main-text">{crawlInfo.crawl}</p>
      <p className="title">{crawlInfo.title}</p>
      <p className="title">{crawlInfo.release}</p>
    </div>
  )
}
