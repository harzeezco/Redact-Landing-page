import PropTypes from "prop-types";

function Image({ defaultSrc, alternateSrc, alt, ...otherProps }) {
  return (
    <picture>
      <source srcSet={defaultSrc} type="image/webp" alt={alt} {...otherProps} />
      <img src={alternateSrc} alt={alt} {...otherProps} />
    </picture>
  );
}

Image.propTypes = {
  defaultSrc: PropTypes.string.isRequired,
  alternateSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
