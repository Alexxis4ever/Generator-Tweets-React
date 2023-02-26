import { useEffect, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'

export const ContainerTweet = () => {

  const [text, setText] = useState('');
  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');

  const [valueQ, setValue] = useState(0)
  const maxLength = 255


  const handleTextAreaChange = (e) =>{
    const value = e.target.value

    if (value.length <= maxLength) {
      setText(value);
      setValue(value.length)
    }
  }

  const handleAssignClick  = () =>{
    setAssignedText(text);
    setText('');
    setValue(0)
  }

  const [tweet, setTweet] = useState([]);

  const archivar = () =>{
    let save = assignedText
    localStorage.setItem("dates", save)
  }

  const showArchives = () =>{
    let local = localStorage.getItem("dates")
    setTweet([...tweet, local])
  }

  // Utilizo useEffect para visualizar en consola
  // los datos de mi arreglo

  // useEffect(() =>{
  //   console.log(tweet);
  // }, [tweet]);


  return (
    <>
    <div className='containerTweet'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea value={text} onChange={handleTextAreaChange} placeholder='Escribe un tweet(max 255 caracteres)' name=""  cols="30" rows="10"  className='containText'></textarea>
        <div className='containerBtns'>
          <ButtonUI event={handleAssignClick } style="btns-action" textButton="Publicar" />
          <ButtonUI event={archivar} style="btns-action" textButton="Archivar" />
          <ButtonUI event={showArchives} style="btns-action" textButton="Mostrar Archivados" />
        </div>
        <p className='quantity'>{valueQ}</p>
        <div className='padre'>
        <p className='tweets' >{assignedText}</p>
        </div>
    </div>
      <ul>
        {tweet.map((tw, index) => <li key={index}>{tw}</li>)}
      </ul>
    </>
  )
}
