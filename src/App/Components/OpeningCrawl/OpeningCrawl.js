import React from 'react'
import './OpeningCrawl.css'

export const OpeningCrawl = ({crawlInfo}) => {


  return (
    <div className="crawl-main">
      <p>{crawlInfo.crawl}</p>
      <p>{crawlInfo.title}</p>
      <p>{crawlInfo.release}</p>
    </div>
  )
}
