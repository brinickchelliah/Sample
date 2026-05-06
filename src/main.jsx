import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/*import Test01 from './Base1.jsx'*/
/*import Pictures from './logos.jsx';
import html from './assets/HTML.png';
import css from './assets/CSS.png';
import js from './assets/JS.png';*/
import Book from './Module/Books.jsx'
import psycho from './assets/book01.jfif'
import echo from './assets/book02.png'
import lost from './assets/book03.jfif'

createRoot(document.getElementById('root')).render(
  /*<StrictMode> 
  <>
    <Pictures name='HTML5' price='100' image={html}/>
    <Pictures name='CSS' price='1000' image={css}/>
    <Pictures name='JS' price='500' />
  </> 
           
  </StrictMode>,*/

  <StrictMode>
    <>
      <Book name='Psychology' by='An Author' image={psycho}/>
      <Book name='Echoes' by='An Author' image={echo}/>
      <Book name='Lost' by='An Author' image={lost}/>
      <Book/>

    </>
  </StrictMode>,
)
