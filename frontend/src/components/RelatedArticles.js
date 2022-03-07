import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import styles from '../scss/RelatedArticles.module.scss'

RelatedArticles.propTypes = {};

function RelatedArticles( {relatedArticles} ) {
  return (
    <div className={styles.relatedArticles}>
      <h3>Related Articles</h3>
      <ArticleList className={'relatedArticles'} articles={relatedArticles}/>
    </div>
  )
}

export default RelatedArticles;
