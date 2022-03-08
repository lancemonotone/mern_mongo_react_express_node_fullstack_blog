import styles from '../scss/Comments.module.scss'
import {useReducer} from 'react';
import CommentForm from './CommentForm'
import {BiCommentAdd, BiCommentMinus} from 'react-icons/bi';

const Comments = ( {name, comments, setArticleInfo} ) => {
  const [showForm, toggle] = useReducer( showForm => !showForm, false );

  const toggleButton = <button onClick={toggle}>{showForm ? <BiCommentMinus/> : <BiCommentAdd/>}</button>
  const toggleFormTitle = showForm ? 'Add a Comment' : 'Comments'

  return (
    <div className={styles.commentsStyle}>
      <h3>{toggleFormTitle} {toggleButton}</h3>

      {showForm && <CommentForm name={name} toggle={toggle} setArticleInfo={setArticleInfo}/>}

      <div className={styles.commentList}>
        {comments.map( ( comment, key ) => (
            <div key={key}>
              <h4>{comment.username}</h4>
              <p>{comment.text}</p>
            </div>
          )
        )}</div>
    </div>
  )
}

export default Comments
