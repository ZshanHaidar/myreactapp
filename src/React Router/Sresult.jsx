import React from 'react'

const Sresult = (props) => {
    const img = `https://source.unsplash.com/random/300x300/?${props.name}`
  return (
    <>
        <div>
            <img src={img} alt="search"/>
        </div>
    </>
  )
}

export default Sresult