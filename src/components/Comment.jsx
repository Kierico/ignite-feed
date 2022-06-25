import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/kierico.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kiérico Souza</strong>
                            <time title="24 de Junho de 2022 às 18:27h" dateTime="2022-06-24 18:27:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Kiérico, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Apludir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}