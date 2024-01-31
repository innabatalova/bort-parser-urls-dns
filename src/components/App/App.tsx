import { FC, useState, useEffect } from 'react'

import styles from './App.module.scss'

import { IProductData } from '../../types/IProductData'
import { IDnsProductObject } from '../../types/IDnsProductObject'

import product1Json from '../../json/product1.json'
import product2Json from '../../json/product2.json'
import product3Json from '../../json/product3.json'
import dnsProductFile from '../../json/dns_products.json'

const App: FC = () => {
  //show on screen
  const [post, setPost] = useState<IProductData | null>(null)

  const linksProduct1: IProductData = product1Json.urlset.url
  const links: IProductData = linksProduct1.concat(product2Json.urlset.url).concat(product3Json.urlset.url)

  useEffect(() => {
    const bortSearch = links.filter((item) => item.loc.includes("-bort-"))
    setPost(bortSearch)
  }, [])
  
  const downloadFile = JSON.stringify(post)

  if (post === null) return 'null'

  //compare values
  const dnsProduct: IDnsProductObject = dnsProductFile
  const arrDnsProductLinks: string[] = []
  for (let value in dnsProduct) {
    if (dnsProduct[value].url != '') {
      arrDnsProductLinks.push(dnsProduct[value].url)
    }
  }

  const arrProductLinks = post.map((item) => item.loc)

  const arrSort = arrProductLinks.filter((item: string) => arrDnsProductLinks.indexOf(item) == -1)
  arrSort.forEach(item => console.log(item))

  return (
    <div className={styles.wrapper}>
      <a href={"data:application/json;charset:utf-8," + downloadFile} download="file.json" className={styles.link}>
        Download Json File
      </a>
      {post.map((item, index) => <a key={index} href={item.loc} target='_blank' className={styles.string}>{item.loc}</a>)}
    </div>
  )
}

export default App
