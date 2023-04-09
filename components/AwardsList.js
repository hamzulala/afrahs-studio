import React from 'react'

const AwardsList = () => {
  return (
    <div className='flex flex-col space-y-2 space-x-2 w-full'>
        <h1 className='text-3xl'>Awards / Nominations</h1>
        <ul className='list-disc list-inside'>
            <li>Grammys Nomination</li>
            <li>Oscars best Actress</li>
            <li>Emmy best Actress Nomination</li>
            <li>Golden Globes best supporting Actress</li>
            <li>BAFTAs Nomination</li>
            <li>MTV Movie Awards Nomination</li>
        </ul>
    </div>
  )
}

export default AwardsList