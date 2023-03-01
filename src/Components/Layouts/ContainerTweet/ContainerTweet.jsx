import { useEffect, useRef, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ListaTweets } from '../../UI/ListaTweets/ListaTweets';
import Swal from 'sweetalert2';

let arrayTweets = []

export const ContainerTweet = () => {

  const refTA = useRef();

  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');
  const [tweet, setTweet] = useState([]);
  const [letters, setLetters] = useState(255);
  const [colorLt, setColorLt] = useState('counter');
  
  // Función para el contador
  const textAreaManagement = (e) => {
    let value = e.target.value 
    if (value.length <= 255) {
      setLetters(255-value.length)
    } else if (letters>=0) {
      Swal.fire('has llegado al limite')
      setLetters(letters = 0)
    }
  }

  // Función para el boton de Publicar
  const postButton = () => {
    if (refTA.current.value == '') {
      Swal.fire('El campo esta vacio')
    } else {
      setAssignedText(refTA.current.value)
      arrayTweets.push(refTA.current.value);
      localStorage.setItem("tweets", arrayTweets)
    }
    refTA.current.value = ''
  }

  // Función para el boton de Archivar
  const archiveButton = () => {
    if (localStorage.getItem("tweets") === null) {
      Swal.fire('El local esta vacio')
    } else {
      arrayTweets.push(refTA.current.value);
      localStorage.setItem("tweets", arrayTweets)
    }
  }


  // Por medio de la funcion .split(',') toma la cadena de caracteres del
  // localStorage y la divide una sobre otra, para despues guardarla en la variable
  // data, siendo la variable data un array de subcadenas, donde cada subcadena es un
  // tweet almacenado en el localStorage

  // Función para el boton de MostrarArchivados
  const showFiles = () => {
    const tweetList = localStorage.getItem("tweets");
    if (localStorage.getItem("tweets") === null) {
      Swal.fire('El local esta vacio')
    } else {
      const data = tweetList.split(',');
      setTweet(data);
    }
  }


  useEffect(() => {
    if (letters <= 125) {
      setColorLt('counter-min')
    } else{
      setColorLt('counter')
    }
  }, [letters])



  return (
    <>
      <div className='generalContainer'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea ref={refTA} className='containText' onChange={textAreaManagement} placeholder='Escribe un tweet(max 255 caracteres)' cols="30" rows="10"></textarea>

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
