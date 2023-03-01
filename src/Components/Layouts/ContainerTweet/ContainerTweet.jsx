import { useEffect, useRef, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ListaTweets } from '../../UI/ListaTweets/ListaTweets';
import Swal from 'sweetalert2';

let arrayTweets = []

export const ContainerTweet = () => {

  const refTA = useRef();

  const [cap, captext] = useState('')

  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');
  const [tweet, setTweet] = useState([]);
  const [letters, setLetters] = useState(255);
  const [colorLt, setColorLt] = useState('counter');
  

   // Función para el contador
   const textAreaManagement = (e) => {
    let value = e.target.value
    captext(value)
    setLetters(letters-1); 
    
    if (letters<=0 ) {
      Swal.fire(
        'Haz completado el límite de caracteres permitidos',                
      )
      setLetters(0)
    }
  }

  // Función para el boton de Publicar
  const postButton = () => {
    setAssignedText(refTA.current.value)
    captext('')
  }

  // Función para el boton de Archivar
  const archiveButton = () => {
    arrayTweets.push(refTA.current.value);
    localStorage.setItem("tweets", arrayTweets);
  }

  // Función para el boton de MostrarArchivados
  const showFiles = () => {
      const tweetList = localStorage.getItem("tweets");
      // La cadena de caracteres obtenida del localStorage es dividida 
      // utilizando el separador de coma (',') y se almacena en la variable 
      // data. Esto significa que la variable data es ahora un array de 
      // subcadenas, donde cada subcadena es un tweet almacenado en el 
      // localStorage.
      const data = tweetList.split(',');
      setTweet(data);
  }

  useEffect(() => {
    if (letters <= 50) {
      setColorLt('counter-min')
    }
  }, [letters])



  return (
    <>
      <div className='generalContainer'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea ref={refTA} value={cap} className='containText' onChange={textAreaManagement} placeholder='Escribe un tweet(max 255 caracteres)' cols="30" rows="10"></textarea>

        <div className='containerBtns'>
          <ButtonUI event={postButton} style="btns-action" textButton="Publicar" />
          <ButtonUI event={archiveButton} style="btns-action" textButton="Archivar" />
          <ButtonUI event={showFiles} style="btns-action" textButton="Mostrar Archivados" />
        </div>

        <p className={colorLt}>{letters}</p>

        <div className='tweetsContainer'>
          <p className='tweets' >{assignedText}</p>
        </div>

      </div>

      <div className='listContainer'>
        {
          tweet.map((item, index) => <ListaTweets key={index} text={item} />)
        }
      </div>
    </>
  )
}
