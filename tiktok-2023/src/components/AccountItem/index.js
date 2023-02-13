import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/278620528_3109661485954799_7032740294356308003_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xGNHNqcqOYoAX9dDHzb&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDmDvmwfFyilbRHWFfeGIfCL6JTWeE3HkMfnBQrDdPeeA&oe=63EF701B"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Chang Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NCC</span>
            </div>
        </div>
    );
}

export default AccountItem;
