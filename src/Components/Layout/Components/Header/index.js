import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { images } from "~/assets";

const cx = classNames.bind(styles);

function Header() {

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("inner-left")}>
          <div className={cx("logo")}>
            <img src={images.logo} />
          </div>
          <div className={cx("nav")}>
            <ul className={cx("nav-list")}>
              <a href="/" className={cx("nav-item")}>
                Trang chủ
              </a>
              <a href="/livescore" className={cx("nav-item")}>
                Livescore
              </a>
              <a href="/rank" className={cx("nav-item")}>
                Bảng xếp hạng
              </a>
              <a href="/news" className={cx("nav-item")}>
                Tin tức
              </a>
            </ul>
          </div>
        </div>
        <div className={cx("inner-right")}>
          <div className={cx("search")}>
          <button className={cx("search-btn")}>
              <img src={images.search}/>
            </button>
            <input placeholder="Tìm kiếm" spellCheck={false}/>
          </div>
          <button className={cx("buy-btn")}>MUA GÓI</button>
          <div className={cx("login")}>
            <img src={images.login}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
