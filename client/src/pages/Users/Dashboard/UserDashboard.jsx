import React from 'react'
import GalleryCard from '../../../components/GalleryCard'
import DialogBox from '../../../components/DialogBox'
function UserDashboard() {
  
  return (
    <div className='bg-gradient-to-br from-red-500 to-orange-500 '>

       <div  id='1'className=' flex  justify-center bg-blue-950 font-colort'> axasxaax</div>
      <div className='flex flex-row h-auto w-auto p-4 gap-4 justify-center items-center flex-wrap'>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <div >
          <DialogBox />
          </div>
        </div>
    </div>
  )
}

export default UserDashboard