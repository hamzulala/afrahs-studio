import React from 'react'

const AwardsList = ({about, colour}) => {
  return (
    <div className='flex flex-col space-y-2 space-x-2 w-full' style={{color : `${colour}`}}>
        <h1 className='text-3xl'>Awards / Nominations</h1>
        <ul className='list-disc list-inside'>
          {about?.awards.map((award) => (
            <li key={Math.random()}>{award}</li>
          ))}
        </ul>
    </div>
  )
}

export default AwardsList