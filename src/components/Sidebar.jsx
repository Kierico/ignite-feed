import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

import profileImg from "../assets/images/icon-kierico.png";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/kierico.png" alt="" />
                <strong>Kiérico Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18} weight="fill" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}