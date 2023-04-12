import React from 'react'

function NotesGlimpse({note}) {
  return (
    <div className='py-3 px-7 text-sm space-y-2 border-b border-[#f5f5f5]'>
        <div>
            <h3 className='text-[#000000cc]'>{note.title}</h3>
            <p className='text-[#00000099] overflow-y-hidden h-5'>{note.body}</p>
        </div>
        <p className='text-[12px] text-[#5e5e5e66]'>{note.date}</p>
    </div>
  )
}

export default NotesGlimpse