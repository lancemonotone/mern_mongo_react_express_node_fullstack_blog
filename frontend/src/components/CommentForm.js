import PropTypes from 'prop-types'
import {useState} from 'react'
import {Button, Form} from 'react-bootstrap';

const CommentForm = ( {name, toggle, setArticleInfo} ) => {
  const [username, setUsername] = useState( '' );
  const [text, setText] = useState( '' );

  const addComment = e => {
    e.preventDefault()
    if ( !username || !text ) return

    fetch( `/api/articles/name/${name}/add-comment`, {
      method : 'PUT',
      body   : JSON.stringify( {
        username: username,
        text    : text
      } ),
      headers: {'Content-Type': 'application/json'}
    } )
      .then( res => res.json() )
      .then( body => {
        setUsername( '' )
        setText( '' )
        toggle()
        setArticleInfo( body )
      } )
      .catch( err => console.error( 'Fetch error: ', err ) )
  }
  return (
    <Form onSubmit={e => addComment( e )}>

      <Form.Group controlId={'username'} className={'mb-3'}>
        <Form.Label>Name</Form.Label>
        <Form.Control type={'text'} value={username} onChange={e => setUsername( e.target.value )}/>
      </Form.Group>

      <Form.Group controlId={'text'} className={'mb-3'}>
        <Form.Label>Comment</Form.Label>
        <Form.Control as={'textarea'} rows={5} value={text} onChange={e => setText( e.target.value )}/>
      </Form.Group>
      <Form.Control as={'button'}>Add Comment</Form.Control>
    </Form>
  )
}

export default CommentForm
