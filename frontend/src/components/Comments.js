import styles from '../scss/Comments.module.scss'

const Comments = ( {comments} ) => {
  if ( !comments.length ) return ''
  return (
    <div className={styles.commentsStyle}>
      <h3>Comments</h3>
      {comments.map( ( comment, key ) => (
          <div key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        )
      )}
    </div>
  )
}

export default Comments
