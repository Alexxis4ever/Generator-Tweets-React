import { useEffect, useRef, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ListaTweets } from '../../UI/ListaTweets/ListaTweets';

let arrayTweets = []

export const ContainerTweet = () => {

  const refTA = useRef();

  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');
  const [tweet, setTweet] = useState([]);
  const [letters, setLetters] = useState(255);
  const [colorLt, setColorLt] = useState('counter');
  

  // Función para el boton de Publicar
  const postButton = () => {
    setAssignedText(refTA.current.value)
  }


  // Función para el boton de Archivar
  const archiveButton = () => {
    arrayTweets.push(refTA.current.value);
    localStorage.setItem("tweets", arrayTweets);
  }

  // Función para el boton de MostrarArchivados
  const showFiles = () => {
      const tweetList = localStorage.getItem("tweets");
      const data = tweetList.split(',');
      setTweet(data);
  }

   // Función para manipular datos del textarea
   const textAreaManagement = () => {
    setLetters(letters-1);
}


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
