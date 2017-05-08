export const cleanCrawlData = (crawlData) => {
  return ({
    title: crawlData.title,
    release: crawlData.release_date,
    crawl: crawlData.opening_crawl
  })
}
