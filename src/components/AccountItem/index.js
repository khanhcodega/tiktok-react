import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Image from "../Image";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <div className={cx("info-box")}>
        <Image
          src={data.avatar}
          className={cx("avatar")}
          alt={data.full_name}
        />
        <div className={cx("info")}>
          <h4 className={cx("name")}>
            {data.full_name}
            {data.tick && (
              <FontAwesomeIcon
                className={cx("check-icon")}
                icon={faCheckCircle}
              />
            )}
          </h4>
          <span className={cx("username")}>{data.nickname}</span>
        </div>
      </div>
      <div className={cx("actions")}>
        {/* <Tippy
          placement="bottom"
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <h4 className={cx("search-title")}>Account</h4>
            </div>
          )}
        >
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </Tippy> */}
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
