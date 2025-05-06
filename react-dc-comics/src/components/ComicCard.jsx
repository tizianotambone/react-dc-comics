import React from 'react'
import ListComix from './ListComix'

const ComicCard = ({props}) => {
  return (
     
        <div className="comic-card">
            <img src={props.thumb} alt="" />
            <div className='titol'>
                <h2>{props.title}</h2>
            </div>
        </div>
        
    
  )
}

export default ComicCard
