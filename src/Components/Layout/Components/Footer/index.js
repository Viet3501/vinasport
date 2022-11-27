import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top')}>
                    <div className={cx('inner-left')}>
                        <img src={images.logo} />
                        <p>
                            Ứng dụng số một về Thể thao, Bóng đá Việt Nam; truyền hình trực tuyến tất cả các kênh thể
                            thao thuộc hệ thống VTVcab: On Football, Vina Sports, Vina Sports+, On Golf.
                        </p>
                        <div className={cx('society')}>
                            <a href="">
                                <img src={images.facebook} />
                            </a>
                            <a href="">
                                <img className={cx('youtube')} src={images.youtube} />
                            </a>
                            <a>
                                <img
                                    href=""
                                    src="https://j03qukjhr2obj.vcdn.cloud/image-upload/cae45c4d-9603-4048-adf7-fce15291cb88.png?auto=format&amp;fit=max&amp;w=256"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={cx('inner-right')}>
                        <div className={cx('qr-code')}>
                            <p>Tải ứng dụng tại:</p>
                            <div className={cx('app-item')}>
                                <div className={cx('qr-code-img')}>
                                    <img className={cx('qr-code-img')} src={images.qrcode} />
                                </div>
                                <div className={cx('app')}>
                                    <img src="https://j03qukjhr2obj.vcdn.cloud/image-upload/91af4b21-6541-4aac-b557-eedde81a0f0a.png?auto=format&amp;fit=max&amp;w=256" />
                                    <img src="https://j03qukjhr2obj.vcdn.cloud/image-upload/3c3bd6a8-bf15-48ab-9bcb-ec12ced5598e.png?auto=format&amp;fit=max&amp;w=256" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('inner-bottom')}>
                    <div className={cx('inner-bottom-left')}>
                        <p>Tổng Công ty Truyền hình Cáp Việt Nam.</p>
                        <div className={cx('footer-contact')}>
                            <p>Địa chỉ: Số 3/84 Ngọc Khánh, quận Ba Đình, Hà Nội, Việt Nam</p>
                            <p>Điện thoại: 19001515 Email: info@vtvcab.vn</p>
                        </div>
                        <p>Chính sách bảo mật</p>
                    </div>
                    <div className={cx('inner-bottom-right')}>
                        <p>
                            Giấy chứng nhận đăng ký doanh nghiệp số 0105926285 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                            cấp lần đầu ngày 26 tháng 6 năm 2012, thay đổi lần thứ 5 ngày 05 tháng 10 năm 2017.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
