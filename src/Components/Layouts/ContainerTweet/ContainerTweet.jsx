import { useEffect, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ListaTweets } from '../../UI/ListaTweets/ListaTweets';


export const ContainerTweet = () => {

  const [text, setText] = useState('');
  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');

  const [valueQ, setValue] = useState(0)
  const maxLength = 255

  // Función para manipular datos del textarea
  const textAreaManagement = (e) => {
    const value = e.target.value

    if (value.length <= maxLength) {
      setText(value);
      setValue(value.length)
    }
  }

  // Función para el boton de Publicar
  const postButton = () => {
    if (text == '') {
      setAssignedText("No has ingresado nada")
    } else {
      setAssignedText(text);
      setText('');
      setValue(0)
    }

  }

  // Hacemos uso del useState y lo establecemos 
  // con el estado inicial de un arreglo
  const [tweet, setTweet] = useState([]);

  let array = []

  // Función para el boton de Archivar
  const archiveButton = () => {
    let save = assignedText
    array.push(save)
    localStorage.setItem("dates", array)
  }

  // Función para el boton de MostrarArchivados
  const showFiles = () => {
    if (text=='') {
      setAssignedText("No hay tweets para mostrar")
    } else {
      const local = localStorage.getItem("dates")
      setTweet([...tweet, local])
    }

  }

  // Utilizo useEffect para visualizar en consola
  // los datos de mi arreglo

  // useEffect(() =>{
  //   console.log(tweet);
  // }, [tweet]);

  return (
    <>
      <div className='generalContainer'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea className='containText' value={text} onChange={textAreaManagement} placeholder='Escribe un tweet(max 255 caracteres)' cols="30" rows="10"></textarea>

        <div className='containerBtns'>
          <ButtonUI event={postButton} style="btns-action" textButton="Publicar" />
          <ButtonUI event={archiveButton} style="btns-action" textButton="Archivar" />
          <ButtonUI event={showFiles} style="btns-action" textButton="Mostrar Archivados" />
        </div>

        <p className='quantity'>{valueQ}</p>

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
