import React from 'react'
import ListComix from './ListComix'

const ComicCard = ({props}) => {
  return (
     
        <div className="comic-card">
            <img src={props.thumb} alt="" />
            <div className='titol'>
                {props.title}
            </div>
        </div>
        
    
  )
}

export default ComicCard
