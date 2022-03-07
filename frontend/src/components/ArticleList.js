import React from 'react'
import {Link} from 'react-router-dom';
import listStyle from '../scss/ArticleList.module.scss'

const ArticleList = ( {articles} ) => {
  return (
    <section className={listStyle.listStyle}>
      <ul>
        {articles.map( ( article, key ) => {
          return (
            <li key={key}>
              <Link to={`/article/${article.name}`}>
                <h4>{article.title}</h4>
              </Link>
              <p>{article.content[0].substr( 0, 150 )} ...</p>
            </li>
          )
        } )}
      </ul>
    </section>
  )
}

export default ArticleList
