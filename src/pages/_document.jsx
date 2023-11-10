import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

            <meta property="og:title" content="Rafael Rizzo, Rafael rizzo, rafael rizzo, Rafael Rizzo Desenvolvedor, Rafael rizzo Desenvolvedor, rafael rizzo Desenvolvedor, rafael rizzo programador, rafael rizzo desenvolvedor fullstack" />
            <meta property="og:description" content="Olá! Meu nome é Rafael Rizzo e sou Desenvolvedor Full stack, venha conhecer melhor os meus trabalhos." />
            <meta name="keywords" content="Rafael Rizzo Desenvolvedor Full stack" />
            <meta name="author" content="Rafael Rizzo" />
            <title>Rafael Rizzo - Portfólio</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
