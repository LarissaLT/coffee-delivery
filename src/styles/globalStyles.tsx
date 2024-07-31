import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

/*  TODO: A biblioteca styled component
 *  faz com que a gente consiga criar componentes estilizados
 *  sem a necessidade de criar um className. 
 *  A estilização nunca vai ser compartilhada com outros componentes (default), podendo mudar isso.
 *  Ex: export const GlobalStyles = createGlobalStyle
 */
    :root {
        --background: #FAFAFA;
        --purple-dark: #4B2995;
        --purple: #8047F8;
        --purple-light: #EBE5F9;
        --yellow-dark: #C47F17;
        --yellow: #DBAC2C;
        --yellow-light: #F1E9C9;
        --title: #272221;
        --subtitle: #403937;
        --text: #574F4D;
        --label: #8D8686;
        --hover: #D7D5D5;
        --button: #E6E5E5;
        --input: #EDEDED;
        --card: #F3F2F2;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;    }


    /* TODO: Definir o tamanho de fonte da aplicação
     * diminuir o tamanho do font-size conforme
     * o tamanho da minha tela fica menor 
    */
       
    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
        // porcentagem permite que a letra aumente se o usuário quiser, se colocar 15px, fica fixo
        }

        @media (max-width: 720px) {
        font-size: 85.5%; // 14px
        } 
    }

        // REM = 1rem = 16px

    body{
        background: var(--backgroung);
        -webkit-font-smoothing: antialiased; // para as fontes ficarem mais detalhadas/nítidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        background: var(--background);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer; // tornar clicável
    }

    [disabled] { // para os botões desabilitados
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
  
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`