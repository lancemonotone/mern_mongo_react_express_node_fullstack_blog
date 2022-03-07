const express = require( 'express' )
const router = express.Router()

const {
  getArticles,
  getArticleByName,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  upvoteArticle,
  commentArticle
} = require( '../controllers/articleController' )

// Basic GET and POST
router.route( '/' ).get( getArticles ).post( createArticle )

// GET by 'name'
router.route( '/name/:name' ).get( getArticleByName )

// GET, PUT, DELETE by 'id'
router.route( '/id/:id' ).get( getArticleById ).put( updateArticle ).delete( deleteArticle )

// PUT upvote by 'name'
router.route( '/name/:name/upvote' ).put( upvoteArticle )

// PUT comment by 'name'
router.route( '/name/:name/add-comment' ).put( commentArticle )

module.exports = router
