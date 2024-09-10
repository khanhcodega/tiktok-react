import PropTypes from "prop-types";

import HeaderTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PropperWrapper } from "~/components/Propper";
import { ClearIcon, SearchIcon } from "../../../components/Icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/services/searchServices";
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounce = useDebounce(searchValue, 500);
  const inputRef = useRef();
  const handleClear = () => {
    inputRef.current.focus();
    setSearchValue("");
    setSearchResult([]);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();

    // request
    //     .get(`users/search`, {
    //       params: {
    //         q: debounce,
    //         type: `less`,
    //       },
    //     })
    //     .then((res) => {
    //       setSearchResult(res.data.data);
    //       setLoading(false);
    //     })
    //     .catch(() => setLoading(true));
    // };
  }, [debounce]);
  return (
    <div>
      <HeaderTippy
        appendTo={document.body}
        visible={showResult && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <h4 className={cx("search-title")}>Account</h4>
              {searchResult.map((result, index) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PropperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            placeholder="Search"
            spellCheck="false"
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx("clear-btn")} onClick={handleClear}>
              <ClearIcon />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          )}

          <button
            className={cx("search-btn")}
            onClick={handleSubmit}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </HeaderTippy>
    </div>
  );
}

AccountItem.propTypes  = {
  data: PropTypes.object,
};
export default Search;
