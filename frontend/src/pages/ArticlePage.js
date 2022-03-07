import React from 'react';
import {useEffect, useState} from 'react';
import articles from '../data/articles'
import ArticleList from '../components/ArticleList';
import {useParams} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const params = useParams()
  const article = articles.find( article => article.name === params.name )

  const [articleInfo, setArticleInfo] = useState( {
    upvotes : 0,
    comments: []
  } )

  useEffect( () => {
    setArticleInfo( {
      upvotes: 3
    } )
  }, [] )

  if ( !article ) return <NotFoundPage/>

  const relatedArticles = articles.filter( article => article.name !== params.name )

  return (
    <>
      <h2>{article.title}</h2>
      <p>Upvotes: {articleInfo.upvotes}</p>
      {article.content.map( ( paragraph, key ) => <p key={key}>{paragraph}</p> )}
      <h4>Related Articles</h4>
      <ArticleList className={'relatedArticles'} articles={relatedArticles}/>
    </>
  )
}

export default ArticlePage
