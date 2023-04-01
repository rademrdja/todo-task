import styles from './Header.module.css';
import Input from "../Input/Input";

const Header = () => {
    return (
        <div className={styles['header--container']}>
            <Input actionType='ADD_TODO' parentId={null}></Input>
        </div>
    );
}

export default Header;