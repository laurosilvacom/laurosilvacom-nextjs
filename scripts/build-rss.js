/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs'
import RSS from 'rss'
import getAllPostPreviews from '../src/getAllPostPreviews'

const feed = new RSS({
  title: 'Lauro Silva',
  site_url: 'https://laurosilva.com',
  feed_url: 'https://laurosilva.com/feed.xml',
})

getAllPostPreviews().forEach(({link, module: {meta}}) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://laurosilva.com${link}`,
    date: meta.date,
    description: meta.description,
    custom_elements: [].concat(
      meta.authors.map(author => ({author: [{name: author.name}]})),
    ),
  })
})

fs.writeFileSync('./out/feed.xml', feed.xml({indent: true}))
