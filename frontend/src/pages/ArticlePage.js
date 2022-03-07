import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import articles from '../data/articles'
import NotFoundPage from './NotFoundPage';
import Comments from '../components/Comments'
import RelatedArticles from '../components/RelatedArticles';
import Upvote from '../components/Upvote';

const ArticlePage = () => {
  const params = useParams()
  const name = params.name
  const article = articles.find( article => article.name === name )

  const [articleInfo, setArticleInfo] = useState( {
    upvotes : 0,
    comments: []
  } )

  useEffect( () => {
    const fetchData = () => {
      fetch( `/api/articles/name/${name}` )
        .then( response => response.json() )
        .then( data => setArticleInfo( data ) );
    }
    fetchData()

  }, [name] )

  if ( !article ) return <NotFoundPage/>

  const relatedArticles = articles.filter( article => article.name !== params.name )

  return (
    <>
      <h1>{article.title}</h1>
      <Upvote upvotes={articleInfo.upvotes}/>
      {article.content.map( ( paragraph, key ) => <p key={key}>{paragraph}</p> )}
      <Comments comments={articleInfo.comments}/>
      <RelatedArticles relatedArticles={relatedArticles}/>
    </>
  )
}

export default ArticlePage
