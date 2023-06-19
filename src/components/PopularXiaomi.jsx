import React from 'react'

const PopularXiaomi = ({poster,title,memory,price,url}) => {
  return (
    <div className='popular-sec'>
        <div className='img-pop'>
        <img src={poster} alt="" />
        </div>
        <div>
            <h3>{title}</h3>
            <h3>{memory}</h3>
            <h3>{price}</h3>
        </div>
    </div>
  )
}

export default PopularXiaomi;