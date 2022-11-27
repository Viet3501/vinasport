import Slider from "~/Pages/Home/Slider";
import styles from './home.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider/>
            <div className={cx('content')}>

            </div>
        </div>
    );
}

export default Home;