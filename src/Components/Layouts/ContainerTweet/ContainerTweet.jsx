import { useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'

export const ContainerTweet = () => {

  const [text, setText] = useState('');
  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');

  const [valueQ, setValue] = useState(0)
  const maxLength = 255

  const [array, setArray] = useState([])


  const handleTextAreaChange = (e) =>{
    const value = e.target.value;

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

  const arrays = []

  const handleAssignClick2 = () =>{
    let save = assignedText
    arrays.push(save)
    // localStorage.setItem("dates", arrays)
  }

const mostrar = () =>{

  // let a = localStorage.getItem("dates")


  let iterator = 0

  arrays.map(item =>{
    <p>{iterator + item}</p>
    iterator++;
    console.log(iterator + item);
  })



}


  return (
    <div className='containerTweet'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea value={text} onInput={handleTextAreaChange} placeholder='Escribe un tweet(max 255 caracteres)' name=""  cols="30" rows="10"  className='containText'></textarea>
        <div className='containerBtns'>
          <ButtonUI event={handleAssignClick } style="btns-action" textButton="Publicar" />
          <ButtonUI event={handleAssignClick2} style="btns-action" textButton="Archivar" />
          <ButtonUI event={mostrar} style="btns-action" textButton="Mostrar Archivados" />
        </div>
        <p className='quantity'>{valueQ}</p>
        <p className='tweets' >{assignedText}</p>
    </div>
  )
}
