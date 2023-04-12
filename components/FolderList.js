import React from 'react'
import 'material-icons/iconfont/material-icons.css';

function FolderList() {
  return (
    <div className='w-[200px] flex xl:flex-col items-center'>
      <div className='mt-1 p-4 text-xl text-[#000000e6] font-[500px] h-[60px] w-[150px] md:w-[200px] flex items-center'>
        <p>Notes</p>
      </div>
      <div className='ml-5 mr-2 text-[#000000cc] flex xl:flex-col items-center'>
        <button className='folderButton'>
          <span className="material-icons ">text_snippet</span>
          <p>All</p>
          <p>Notes</p>
        </button>
        <button className='folderButton'>
          <span className="material-icons">category</span>
          <p>Unclassified</p>
        </button>
        <button className='folderButton'>
          <span className="material-icons">folder</span>
          <p>Folders</p>
        </button>
      </div>
    </div>
  )
}

export default FolderList