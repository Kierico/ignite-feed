import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/kierico.png" />
                    <div className={styles.authorInfo}>
                        <strong>Kiérico Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="24 de Junho de 2022 às 18:27h" dateTime="2022-06-24 18:27:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir este projeto no meu portfólio. É um projeto top.</p>
                <p>👉{" "}<a href="https://github.com/kierico">Github/Kierico</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{" "}
                    <a href="#">#kierico</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}