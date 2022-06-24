import React from "react"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

export function App() {

  return (
    <React.Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Kiérico"
            content="Olá, tenho 37 anos, sou estudante do curso de Ciência da Computação."
          />
        </main>
      </div>
    </React.Fragment>
  )
}
