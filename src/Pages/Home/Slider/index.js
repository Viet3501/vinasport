import classNames from 'classnames/bind';
import styles from './slider.module.scss';
import { useEffect, useState, useLayoutEffect } from 'react';

const cx = classNames.bind(styles);

function Slider() {
    const [posts, setPosts] = useState(() =>
        fetch('https://smarttv-api-dev.vinasports.com.vn/api/v2/publish/slides/')
            .then((response) => response.json())
            .then((data) => data),
    );
    console.log(posts);

    useEffect(() => {
        fetch('https://smarttv-api-dev.vinasports.com.vn/api/v2/publish/slides/')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);
    //   console.log(posts)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    {/* <h2>{posts.data[0].name}</h2> */}
                    <p></p>
                </div>
                <div>{/* <img src={posts.data[0].thumbnail} /> */}</div>
            </div>
        </div>
    );
}

export default Slider;
