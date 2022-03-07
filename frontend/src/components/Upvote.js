import PropTypes from 'prop-types';
import styles from '../scss/Upvotes.module.scss'
import {BsHandThumbsUp} from 'react-icons/bs'

const Upvote = ( {upvotes} ) => {
  const upvoteArticle = () => {
    fetch( `/api/articles/` )
  }

  return (
    <div className={styles.upvotes}>
      <button onClick={upvoteArticle}><BsHandThumbsUp/></button>
      Upvotes: {upvotes}
    </div>
  );
};

Upvote.propTypes = {};

export default Upvote;
