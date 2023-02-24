import React from 'react'

export const ButtonUI = ({event, style, textButton}) => {
  return (
    <button onClick={event} className={style}>{textButton}</button>
  )
}
