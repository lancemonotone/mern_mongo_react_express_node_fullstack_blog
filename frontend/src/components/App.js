import React from 'react';
import {Routes, Route} from 'react-router-dom';
import '../scss/App.module.scss'
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ArticlesPage from '../pages/ArticlesPage';
import ArticlePage from '../pages/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage';

const App = () => {
  return (
    <main>
      <Navigation/>
      <Routes>
        <Route path={'/'} element={<HomePage/>} exact/>
        <Route path={'/about'} element={<AboutPage/>}/>
        <Route path={'/articles'} element={<ArticlesPage/>}/>
        <Route path={'/article'} element={<ArticlePage/>}>
          <Route path={'/article/:name'} element={<ArticlePage/>}/>
        </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </main>
  )
}

export default App
