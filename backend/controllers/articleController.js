const asyncHandler = require( 'express-async-handler' )

const Article = require( '../models/articleModel' )

// @desc Get articles
// @route GET /api/articles
// @access Private
const getArticles = asyncHandler( async ( req, res ) => {
  const articles = await Article.find()
  res.status( 200 ).json( articles )
} )

// @desc Get articles
// @route GET /api/articles/:id
// @route GET /api/articles/name/:name
// @access Private
const getArticle = asyncHandler( async ( req, res ) => {
  const findBy = req.params.id ? {id: req.params.id} : {name: req.params.name}
  const article = await Article.findOne( findBy )

  if ( !article ) {
    res.status( 400 )
    throw new Error( 'Article not found' )
  }
  res.status( 200 ).json( article )
} )

// @desc Set article
// @route POST /api/articles
// @access Private
const createArticle = asyncHandler( async ( req, res ) => {
  if ( !req.body.name ) {
    res.status( 400 )
    throw new Error( 'Please add a name field' )
  }

  const article = await Article.create( {
    text: req.body.name
  } )
  res.status( 200 ).json( article )
} )

// @desc Update article
// @route PUT /api/articles/:id
// @access Private
const updateArticle = asyncHandler( async ( req, res ) => {
  const article = await Article.findById( req.params.id )
  if ( !article ) {
    res.status( 400 )
    throw new Error( 'Article not found' )
  }

  const updatedArticle = await Article.findByIdAndUpdate( req.params.id, req.body, {
    new: true
  } )
  res.status( 200 ).json( updatedArticle )
} )

// @desc Delete article
// @route DELETE /api/articles/:id
// @access Private
const deleteArticle = asyncHandler( async ( req, res ) => {
  const article = await Article.findById( req.params.id )
  if ( !article ) {
    res.status( 400 )
    throw new Error( 'Article not found' )
  }

  await Article.findByIdAndDelete( req.params.id )

  res.status( 200 ).json( {id: req.params.id} )
} )

// @desc Upvote article
// @route PUT /api/articles/:id/upvote
// @route PUT /api/articles/name/:name/upvote
// @access Private
const upvoteArticle = asyncHandler( async ( req, res ) => {
  const findBy = req.params.id ? {id: req.params.id} : {name: req.params.name}
  const article = await Article.findOne( findBy )

  if ( !article ) {
    res.status( 400 )
    throw new Error( 'Article not found' )
  }

  const update = {upvotes: article.upvotes + 1}

  const updatedArticle = await Article.findOneAndUpdate( findBy, update, {
    new: true
  } )

  res.status( 200 ).json( updatedArticle )
} )

// @desc Comment article
// @route PUT /api/articles/name/:name/add-comment
// @route PUT /api/articles/:id/add-comment
// @access Private
const commentArticle = asyncHandler( async ( req, res ) => {
  const findBy = req.params.id ? {id: req.params.id} : {name: req.params.name}
  const {username, text} = req.body

  const article = await Article.findOne( findBy )

  if ( !article ) {
    res.status( 400 )
    throw new Error( 'Article not found' )
  }

  const update = {comments: article.comments.concat( {username, text} )}

  const updatedArticle = await Article.findOneAndUpdate( findBy, update, {
    new: true
  } )

  res.status( 200 ).json( updatedArticle )
} )

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  upvoteArticle,
  commentArticle
}
