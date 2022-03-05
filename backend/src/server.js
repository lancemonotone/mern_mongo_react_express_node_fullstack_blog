import express from 'express'
import bodyParser from 'body-parser'
import {MongoClient} from 'mongodb'

const app = express()
const port = 8000
const url = 'mongodb://localhost'
const dbName = 'fullstack'

const client = new MongoClient( url )

app.use( bodyParser.json() )
app.listen( port, () => console.log( `Listening on port ${port}` ) )

app.get( '/api/articles/:name', async ( req, res ) => {
  try {
    const articleName = req.params.name

    await client.connect()
    const db = client.db( dbName )
    const articles = await db.collection( 'articles' ).findOne( {
      name: articleName
    } )
    res.status( 200 )
      .json( articles )

    client.close()
  } catch ( error ) {
    res.status( 500 ).json( {message: 'Error connecting to db', error} )
  }
} )

app.post( '/api/articles/:name/upvote', ( req, res ) => {
  const articleName = req.params.name

  articlesInfo[articleName].upvotes += 2
  res.status( 200 )
    .send( `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!!!` )
} )

app.post( '/api/articles/:name/add-comment', ( req, res ) => {
  const {username, text} = req.body
  const articleName = req.params.name

  articlesInfo[articleName].comments.push( {username, text} )

  res.status( 200 )
    .send( articlesInfo[articleName] )
} )
