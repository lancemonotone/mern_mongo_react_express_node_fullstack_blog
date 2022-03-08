import React from 'react';
import ArticleList from '../components/ArticleList';
import articles from '../data/articles';

const ArticlesPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>
    </>
  )
}

export default ArticlesPage
