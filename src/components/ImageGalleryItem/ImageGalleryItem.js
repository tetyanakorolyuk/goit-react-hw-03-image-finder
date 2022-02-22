import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <li className={s.galleryItem} onClick={onClick}>
        <img className={s.image} src={webformatURL} alt={tags}/>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
