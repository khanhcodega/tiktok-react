import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Propper.module.scss";

const cx = classNames.bind(styles);

function wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}
wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default wrapper;
