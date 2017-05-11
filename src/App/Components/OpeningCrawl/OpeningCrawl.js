import React from 'react'
import './OpeningCrawl.css'

export const OpeningCrawl = ({crawlInfo}) => {


  return (
    <div className="crawl-main">
      <p className="crawl">{crawlInfo.crawl}</p>
      <p className="title">{crawlInfo.title}</p>
      <p className="release">{crawlInfo.release}</p>
    </div>
  )
}
