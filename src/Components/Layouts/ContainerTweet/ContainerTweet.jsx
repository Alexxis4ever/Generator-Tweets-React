import { useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'

export const ContainerTweet = () => {

  const [text, setText] = useState('');
  const [assignedText, setAssignedText] = useState('Aquí verás tu tweet actual');

  const handleTextAreaChange = (e) =>{
    setText(e.target.value)
  }

  const handleAssignClick  = () =>{
    setAssignedText(text);
    setText('');
    localStorage.setItem('textArea', text);
  }

  const asi = () =>{
    let local =  localStorage.getItem('textArea')
    alert(local)
  }

  return (
    <div className='containerTweet'>
        <h2 className='info'>Publica tu tweet</h2>
        <hr />
        <textarea value={text} onChange={handleTextAreaChange}  placeholder='Escribe un tweet(max 255 caracteres)' name=""  cols="30" rows="10" maxLength='255' className='containText'></textarea>
        <div className='containerBtns'>
          <ButtonUI event={handleAssignClick } style="btns-action" textButton="Publicar" />
          <ButtonUI event={asi} style="btns-action" textButton="Archivar" />
          <ButtonUI event="" style="btns-action" textButton="Mostrar Archivados" />
        </div>
        <p className='tweets' >{assignedText}</p>
    </div>
  )
}
