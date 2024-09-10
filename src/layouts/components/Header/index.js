import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import Menu from "~/components/Propper/Menu";
import {
  UploadIcon,
  InboxIcon,
  ProfileIcon,
  CoinsIcon,
  ToolsIcon,
  SettingsIcon,
  LanguagesIcon,
  FeedbackIcon,
  DarkModeIcon,
  LogoutIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import config from "~/config";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <ToolsIcon />,
    title: "Creator tools",
  },
  {
    icon: <LanguagesIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { code: "en", title: "English" },
        {
          code: "vn",
          title: "Vietnamese",
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: "Feedback and help",
  },
  {
    icon: <DarkModeIcon />,
    title: "Dark mode",
  },
];

const MENU_ACTIONS = [
  { icon: <ProfileIcon />, title: "View profile" },
  { icon: <CoinsIcon />, title: "Get Coins" },
  {
    icon: <ToolsIcon />,
    title: "Creator tools",
  },
  { icon: <SettingsIcon />, title: "Settings" },
  {
    icon: <LanguagesIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { code: "en", title: "English" },
        {
          code: "vn",
          title: "Vietnamese",
        },
        
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: "Feedback and help",
  },
  { icon: <DarkModeIcon />, title: "Dark mode" },
  {
    icon: <LogoutIcon />,
    title: "Log out",
    separate: true,
  },
];

// setTimeout(()=>{debugger;},3000)
function Header() {
  const currentUser = true;

  const handleMenuClick = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <Link to={config.routes.root} className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        {/* search */}
        <Search />

        {/* user */}
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button
                outline
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                className={cx("upload-btn")}
              >
                Upload
              </Button>
              <Tippy content="Message" placement="bottom" interactive appendTo={document.body}>
                <button className={cx("message-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom" appendTo={document.body} >
                <button className={cx("message-box-btn")}>
                  <InboxIcon />
                  <div className={cx("notice")}>1</div>
                </button>
              </Tippy>
          

              <Menu items={MENU_ACTIONS} onClick={handleMenuClick} trigger="click">
                <div className={cx("avatar")}>
                  <Image
                    src="https://lh3.googleusercontent.com/a/ACg8ocLvS6iXQe-8qtCS3n2_HwwqWv1Z3GpTsbonAd9pIniq2iJkr6Q=s360-c-no"
                    alt="avatar"
                  ></Image>
                </div>
              </Menu>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>

              <Menu items={MENU_ITEMS} onClick={handleMenuClick}>
                <button className={cx("action-more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
