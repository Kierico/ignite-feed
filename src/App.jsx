import React from "react"
import { Header } from "./components/Header"
import { Post } from "./Post"

export function App() {

  return (
    <React.Fragment>
      <Header />
      <Post
        author="Kiérico"
        content="Olá, tenho 37 anos, sou estudante do curso de Ciência da Computação."
      />
    </React.Fragment>
  )
}
