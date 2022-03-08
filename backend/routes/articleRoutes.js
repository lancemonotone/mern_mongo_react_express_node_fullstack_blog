const router = require( 'express' ).Router()

const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  upvoteArticle,
  commentArticle
} = require( '../controllers/articleController' )

// Basic GET and POST
router.route( '/' ).get( getArticles ).post( createArticle )

// GET, PUT, DELETE by 'id'
router.route( '/:id' ).get( getArticle ).put( updateArticle ).delete( deleteArticle )

// GET by 'name'
router.route( '/name/:name' ).get( getArticle )

// PUT upvote by 'id' or 'name'
router.route( '/:id/upvote' ).put( upvoteArticle )
router.route( '/name/:name/upvote' ).put( upvoteArticle )

// PUT comment by 'id' or 'name'
router.route( '/:id/add-comment' ).put( commentArticle )
router.route( '/name/:name/add-comment' ).put( commentArticle )

module.exports = router
