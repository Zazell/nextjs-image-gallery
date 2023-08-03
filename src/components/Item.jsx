import Image from 'next/image';
import { bool, func, string } from 'prop-types';
import React from 'react';

const defaultProps = {
  description: '',
  fullscreen: '',
  isFullscreen: false,
  originalAlt: '',
  originalHeight: 0,
  originalWidth: 0,
  originalTitle: '',
  sizes: '',
  srcSet: '',
  loading: 'eager',
};

const Item = React.memo((props) => {
  const {
    description,
    fullscreen, // fullscreen version of img
    handleImageLoaded,
    isFullscreen,
    onImageError,
    original,
    originalAlt,
    originalHeight,
    originalWidth,
    originalTitle,
    sizes,
    loading,
  } = { ...defaultProps, ...props };
  const itemSrc = isFullscreen ? fullscreen || original : original;

  return (
    <React.Fragment>
      <Image
        className="image-gallery-image"
        src={itemSrc}
        alt={originalAlt}
        height={originalHeight}
        width={originalWidth}
        sizes={sizes}
        title={originalTitle}
        onLoad={(event) => handleImageLoaded(event, original)}
        onError={onImageError}
        loading={loading}
      />
      {description && (
        <span className="image-gallery-description">{description}</span>
      )}
    </React.Fragment>
  );
});

Item.displayName = 'Item';

Item.propTypes = {
  description: string,
  fullscreen: string, // fullscreen version of img
  handleImageLoaded: func.isRequired,
  isFullscreen: bool,
  onImageError: func.isRequired,
  original: string.isRequired,
  originalAlt: string,
  originalHeight: Number,
  originalWidth: Number,
  originalTitle: string,
  sizes: string,
  srcSet: string,
  loading: string,
};

export default Item;
