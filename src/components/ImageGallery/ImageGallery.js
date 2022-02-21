import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        onClick={() => onImageClick(image.largeImageURL)}
        tags={image.tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
