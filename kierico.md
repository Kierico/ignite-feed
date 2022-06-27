# Ignite Feed

## Gerenciador do NodeJS (node management):

> [n](https://github.com/tj/n)

## Instalando o Node pelo n:

    `n install lts`

## [ <img src="https://vitejs.dev/logo.svg" style="width: 50px;"> ](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) Instalando o Vite

    `npm create vite@latest` | `yarn create vite`

## Instalar as dependências:

    `npm install` | `npm i`

## Inicializar o Projeto:

    `npm run dev`

## CSS Modules:

[CSS Modules](https://github.com/css-modules/css-modules)

[Vite CSS Modules](https://vitejs.dev/guide/features.html#css-modules)

## Icons:

[Phosphoricons](https://phosphoricons.com/)

[Phosphoricons Github](https://github.com/phosphor-icons/phosphor-home#react)

    `npm i phosphor-react`

## [ <img style="width: 50px; background-color: #770c56; border-radius: 50%;" src="https://date-fns.org/static/7ceafe855b131d457fe7de810ed31e0f.svg"/> ](https://date-fns.org/v2.28.0/docs/format) date-fns

    `npm i date-fns`

## Entendendo Closures no React:

```js
    /** 1ª FORMA */
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        const newLikeCount = likeCount + 1;

        setLikeCount((like) => {
            return like + 1;
        });

        /** de dois em dois: */
        setLikeCount((like) => {
            return like + 1;
        });
    }
    
    /** 2ª FORMA */
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        const newLikeCount = likeCount + 1;
        
        setLikeCount(newLikeCount);

        /** de dois em dois: */
        setLikeCount(newLikeCount + 1);
    }
```

