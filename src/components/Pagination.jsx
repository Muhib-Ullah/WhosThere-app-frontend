import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = ({page, setPage, totalPages}) => {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-6">
      <button className="text-gray-300 transition hover:text-primary"
        onClick={() => setPage(page - 1)}
        disabled={page === 1} >
        <ChevronLeft size={20} strokeWidth={2}/>
      </button>
      <span className="font-google-sans text-xs text-gray-400">
        Page: <span className='text-primary text-md font-medium'>{page}</span>
      </span>
      <button className="text-gray-300 transition hover:text-primary" 
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages} >
        <ChevronRight size={20} strokeWidth={2}/>
      </button>
  </div>
  )
}

export default Pagination