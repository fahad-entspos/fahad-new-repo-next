
function Navbar() {
  return <>

  
  <div className=' w-full bg-white h-[60px] sticky border-b-2 cursor-pointer '>
<div className='flex  justify-between px-8 pt-3'>


    <div className="relative border-none ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="  border-none block w-44 sm:w-72 p-2 pl-10 text-sm text-gray-900  rounded-md bg-gray-50  dark:placeholder-gray-700 " placeholder="Search or type"/>
    </div>
  

  <div className='flex gap-8 items-center'>

  <img className='w-4 h-5' src="notification@2x.png" alt="notification@2x.png" />


  <img className='w-8 h-8 rounded-full' src="portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper@2x.png" alt="logo@2x.png" />

  </div>


  </div>
  
  </div>


  </>
}

export default Navbar