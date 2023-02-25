import React from 'react'

export default function Alert(props) {
  const capital = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height: '50px'}}>
    {props.alert &&
    <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{capital(props.alert.type)}</strong> {props.alert.message}
    </div>}
    </div>
   
  )
}
