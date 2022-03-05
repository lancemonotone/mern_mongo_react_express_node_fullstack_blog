import ArticleList from '../components/ArticleList';
import articles from '../data/articles';
import relatedArticles from '../scss/ArticlePage.module.scss'

const ArticlesPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList style={relatedArticles} articles={articles}/>
    </>
  )
}

export default ArticlesPage
