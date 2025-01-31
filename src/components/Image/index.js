import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import styles from "./Image.module.scss";
import images from "~/assests/images";
import classNames from "classnames";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        {...props}
        alt={alt}
        src={fallback || src}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
