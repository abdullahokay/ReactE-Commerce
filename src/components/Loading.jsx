import React from 'react'
import '../styles/loading.css'

const Loading = () => {
  return (
    <>
    <div className='loading-container'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        <p className='loading-text'>Loading...</p>
    </div>
    </>
  )
}

export default Loading