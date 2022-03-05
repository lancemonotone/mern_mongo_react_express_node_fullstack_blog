import articles from '../data/articles'
import ArticleList from '../components/ArticleList';
import {useParams} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const params = useParams()
  const article = articles.find( article => article.name === params.name )
  if ( !article ) return <NotFoundPage/>

  const relatedArticles = articles.filter( ( article, key ) => {
    return article.name !== params.name
  } )

  return (
    <>
      <h2>{article.title}</h2>
      {article.content.map( ( paragraph, key ) => <p key={key}>{paragraph}</p> )}
      <h4>Related Articles</h4>
      <ArticleList className={'relatedArticles'} articles={relatedArticles}/>
    </>
  )
}

export default ArticlePage
