import styles from "./Header.module.css";

import kiericoImg from "../assets/images/icon1-kierico.png";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={kiericoImg} alt="Logo Kiérico" />
            <strong>Kiérico Feed</strong>
        </header>
    );
}