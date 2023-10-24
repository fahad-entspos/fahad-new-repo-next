
export default function Services() {
  return <>
  
 <div className="flex flex-row flex-wrap justify-around ">
                                         {/* first sections */}
  <div className=' flex  flex-col bg-[#F5F5F5] w-[20rem]  sm:w-[38rem]  '>
<h1 className="text-2xl font-semibold font-serif mt-8 text-black">Service Station</h1>
<div className="flex gap-1 sm:gap-3  flex-wrap mt-8 font-serif ">

<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A1</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A2</button>
<button className="bg-white w-12  h-14 rounded-md font-semibold text-[#41454b]">A3</button>
<button className="bg-[#FF6370] w-12  h-14 rounded-md font-semibold text-white">A4</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A5</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A6</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A7</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">A8</button>
<button className="bg-white w-12  h-14 rounded-mrounded-[4px]font-semibold text-[#41454b]">A9</button>
<button className="bg-[#FF6370] w-12  h-14 rounded-[4px] font-semibold text-white">A10</button>
<button className="bg-[#FF6370] w-12  h-14 rounded-[4px] font-semibold text-white">B1</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B2</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B3</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B4</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B5</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B6</button>
<button className="bg-[#FF6370] w-12  h-14 rounded-[4px] font-semibold text-white">B7</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B8</button>
<button className="bg-[#A162F7] w-12  h-14 rounded-[4px] font-semibold text-white">B9</button>
<button className="bg-white w-12  h-14 rounded-[4px] font-semibold text-[#41454b]">B10</button>

</div>

<div className="flex flex-row justify-center gap-10 cursor-pointer mt-8" >
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#FFFFFF] rounded-full border"></div><h1 className="text-[#72767C] font-medium">Ready</h1></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#FF6370] rounded-full "></div><h1 className="text-[#72767C] font-medium">Booked</h1></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#A162F7] rounded-full "></div><h1 className="text-[#72767C] font-medium">Current Station</h1></div>

</div>
<div className="flex flex-row flex-wrap justify-around mt-8">

<div className="w-[12rem] h-60 bg-white rounded-2xl cursor-pointer ">
  <h1 className="text-center text-2xl font-bold mt-8 text-black">Your Order</h1>
  <img src="Frame 155@3x.png" alt="Frame 155@3x.png" className="w-28 mt-5  m-auto" />
</div>



<div className="flex flex-col gap-4 mt-4 sm:mt-0">

   <div className="bg-white items-center w-[20rem] p-4 h-12 flex justify-between rounded-xl">
   <div className="flex items-center  gap-2"><div className="w-3 h-3 bg-[#70CF97] rounded-full "></div><h1 className="text-[#72767C] font-medium">Brake fluid change</h1></div>
<button className="h-6 w-14 bg-[#70CF97] text-white font-semibold rounded-md">$32</button>
 </div>
 <div className="bg-white items-center w-[20rem] p-4 h-12 flex justify-between rounded-xl">
   <div className="flex items-center  gap-2"><div className="w-3 h-3 bg-[#FF6370] rounded-full "></div><h1 className="text-[#72767C] font-medium">Diagnostics</h1></div>
<button className="h-6 w-14 bg-[#FF6370] text-white font-semibold rounded-md">$32</button>
 </div>

 <div className="bg-white items-center w-[20rem] p-4 h-12 flex justify-between rounded-xl">
   <div className="flex items-center  gap-2"><div className="w-3 h-3 bg-[#A162F7] rounded-full "></div><h1 className="text-[#72767C] font-medium">External Washing</h1></div>
<button className="h-6 w-14 bg-[#A162F7] text-white font-semibold rounded-md">$32</button>
 </div>

 <button className="w-[20rem] h-12 bg-[#D8D2E7] rounded-xl text-black font-serif font-semibold text-base">Add Services</button>
</div>



</div>
<button className=" w-[20rem]  sm:w-[35rem] h-12 text-white m-auto mt-6 font-semibold text-lg  bg-[#A162F7] rounded-xl">Pay $86</button>

</div>
                                         {/* 2nd sections */}
<div className="flex flex-col  ">
<h1 className="text-2xl font-semibold font-serif mt-8 text-black">Service Required</h1>
<div className="w-[19rem] sm:w-[28rem] h-72 bg-white rounded-2xl mt-8">
<div className="flex items-center gap-4 ml-2 sm:ml-12">
  <img className="w-10" src="Frame 172.png" alt="Frame 172.png" />
  <div>
    <h1 className="text-xl font-semibold font-serif mt-4 text-black">Center Care</h1>
    <div className="flex  items-center gap-2 sm:gap-8">

    <h1 className="text-base font-semibold font-serif mt-4 text-black">Price : $48 </h1>
    <h1 className="text-sm font-medium-  mt-4 text-black">Processing : 1 hours </h1>
    </div>
  </div>
</div>

<div className="flex items-center gap-4 ml-2 sm:ml-12">
  <img className="w-10" src="Frame 173.png" alt="Frame 172.png" />
  <div>
    <h1 className="text-xl font-semibold font-serif mt-4 text-black">Center Care</h1>
    <div className="flex  items-center gap-2 sm:gap-8">

    <h1 className="text-base font-semibold font-serif mt-4 text-black">Price : $78 </h1>
    <h1 className="text-sm font-medium-  mt-4 text-black">Processing : 2 hours </h1>
    </div>
  </div>
</div>


<div className="flex items-center gap-4 ml-2 sm:ml-12">
  <img className="w-10" src="Frame 174.png" alt="Frame 173.png" />
  <div>
    <h1 className="text-xl font-semibold font-serif mt-4 text-black">Center Care</h1>
    <div className="flex  items-center gap-2 sm:gap-8">

    <h1 className="text-base font-semibold font-serif mt-4 text-black">Price : $78 </h1>
    <h1 className="text-sm font-medium-  mt-4 text-black">Processing : 1 hours </h1>
    </div>
  </div>
</div>

</div>


<div className="w-[16rem] m-auto  rounded-2xl mt-4">
<h1 className="text-2xl font-semibold font-serif mt-6 text-black">Service Schedule</h1>


<div className="flex items-center gap-4 ">
<input type="radio" name="radio-1" className="radio radio-secondary"checked  />
<div>
    <h1 className="text-base font-semibold  mt-4 text-black">Upgrade your favorite car <br />
periodically</h1>
    <div className="flex  items-center gap-8">

    <h1 className="text-sm font-medium   text-gray-600">Today, 10.00 </h1>
    <h1 className="text-sm font-medium   text-gray-600">Fix Price : $1,200</h1>
    </div>
  </div>
</div>


<div className="flex items-center gap-4 ">
<input type="radio" name="radio-3" className="radio radio-secondary" />
  <div>
    <h1 className="text-base font-semibold  mt-4 text-black">Buy spare parts for <br />
    suspension</h1>
    <div className="flex  items-center gap-8">

    <h1 className="text-sm font-medium   text-gray-600">Today, 14.00 </h1>
    <h1 className="text-sm font-medium   text-gray-600">Fix Price : $1,400 </h1>
    </div>
  </div>
</div>


</div>

</div>

</div>
                                                            {/* 3rd section */}
<div className=' cursor-pointer w-[320px] gap-2 p-1 sm:w-[1260px] mt-16 m-auto rounded-xl bg-white h-auto sm:h-[180px] flex flex-wrap justify-around'>
<div className='flex mt-10 flex-col items-center'>
<img className='w-14' src="Ресурс-24.png" alt="Ресурс-24.png" />
<h1 className='text-black font-semibold '>Oil Level</h1>
<h1 className='text-gray-500 text-sm font-medium '>Engine Don’t Replace</h1>
<progress className="progress progress-secondary w-56 mt-3" value="70" max="100"></progress>

</div>
<div className='flex mt-10 flex-col items-center'>
<img className='w-14' src="Ресурс-24.png" alt="Ресурс-24.png" />
<h1 className='text-black font-semibold '>Brake Pads</h1>
<h1 className='text-gray-500 text-sm font-medium '>Wheels Still Good</h1>
<progress className="progress progress-success w-56 mt-3" value="40" max="100"></progress>
</div>
<div className='flex mt-10 flex-col items-center'>
<img className='w-14' src="Ресурс-24.png" alt="Ресурс-24.png" />
<h1 className='text-black font-semibold '>Steering</h1>
<h1 className='text-gray-500 text-sm font-medium '>Drivetrain Need Change</h1>
<progress className="progress progress-warning w-56 mt-3" value="10" max="100"></progress>

</div>
<div className='flex mt-10 flex-col items-center'>
<img className='w-14' src="Ресурс-24.png" alt="Ресурс-24.png" />
<h1 className='text-black font-semibold '>Oil Level</h1>
<h1 className='text-gray-500 text-sm font-medium '>Engine Don’t Replace</h1>
<progress className="progress progress-error w-56 mt-3" value="90" max="100"></progress>

</div>
  </div> 
  
  
   </>
}
