import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './scss/App.module.scss'
import Navigation from './components/Navigation';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ArticlesPage from './routes/ArticlesPage';
import ArticlePage from './routes/ArticlePage';
import NotFoundPage from './routes/NotFoundPage';

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
