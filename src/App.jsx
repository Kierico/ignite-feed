import React from "react"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kierico.png",
      name: "Kiérico Souza",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },

      { type: "paragraph", content: "Acabei de subir este projeto no meu portfólio. É um projeto top." },

      { type: "link", content: '👉 Github/Kierico' },

      { type: "link", content: '#kierico' },
    ],
    publishedAt: new Date("2022-06-26 11:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/kierico.png",
      name: "Lucila Souza",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },

      { type: "paragraph", content: "Acabei de subir este projeto no meu portfólio. É um projeto top." },

      { type: "link", content: '👉 Github/Lucila' },

      { type: "link", content: '#Lucila' },
    ],
    publishedAt: new Date("2022-06-26 11:30:00"),
  },

];

export function App() {

  return (
    <React.Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </React.Fragment>
  )
}
