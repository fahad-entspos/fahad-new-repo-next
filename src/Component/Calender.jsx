import  { useState } from "react";
import Calendar from "react-calendar";
import Card from "../Component/card";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../assets/css/MiniCalendar.css";
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';

function Calender() {

    const [value, onChange] = useState(new Date());

  return <>

  <div className="flex justify-around mt-5 flex-wrap cursor-pointer">


  <div className='flex flex-col w-auto gap-5'>  
  <h1 className="text-black text-3xl font-semibold">Calender</h1>
  <div>
      <Card extra="flex sm:w-[360px] w-[320px]  px-10 py-10 h-[380px] flex-col ">
        <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
          />
      </Card>
    </div>
    <div className="flex sm:w-[360px] w-[320px]   h-[460px] flex-col rounded-2xl bg-white   no-scrollbar">
        <div>

   <h1 className="text-xl ml-6 mt-6 text-black font-semibold">Upcoming Events</h1>
   <div className="flex flex-row items-center justify-center gap-5  mt-3">
    <h1>08:00</h1>
    <div className="w-[70%] rounded-full  dark:bg-gray-700">
  <div className="bg-slate-300 h-[2px] rounded-full"></div>
</div>    </div>
  </div>

  <div className="mt-4">

<div className="flex flex-row items-center  justify-center gap-5">
 <h1>09:00</h1>


<div className="bg-[#A162F7] w-[14rem] sm:w-[16rem] px-5 rounded-xl py-2  text-white font-serif">
<h1 className="text-[14px]">
Drift Series Firs Round
</h1>
<div className="flex items-center justify-between ">

<h1>
JDM
</h1>
<img src="avator.png" alt="avator.png" />
</div>

    </div>  



  </div>

  <div className="flex flex-row items-center justify-center gap-5 mt-4">
    <h1>10:00</h1>
    <div className="w-[70%] rounded-full  dark:bg-gray-700">
  <div className="bg-slate-300 h-[2px] rounded-full"></div>
</div>    </div>


<div className="flex flex-row items-center justify-center gap-5  mt-4">
    <h1 className="text-[#F65E5E]">10:15</h1>
    <div className="w-[70%] rounded-full  ">
  <div className="bg-[#F65E5E] h-[2px] rounded-full"></div>
</div>    </div>


<div className="flex flex-row items-center justify-center gap-5  mt-4">
    <h1>11:00</h1>
    <div className="w-[70%] rounded-full  dark:bg-gray-700">
  <div className="bg-slate-300 h-[2px] rounded-full"></div>
</div>    </div>
</div>

<div className="flex flex-row items-center  justify-center gap-5">
 <h1>12:00</h1>


<div className="bg-[#A162F7] w-[14rem] sm:w-[16rem]  px-5 rounded-xl py-2  text-white font-serif  mt-4">
<h1 className="text-[14px]">
Drift Series Firs Round
</h1>
<div className="flex items-center justify-between ">

<h1>
JDM
</h1>
<img src="avator.png" alt="avator.png" />
</div>

    </div>  



  </div>


  <div className="flex flex-row items-center justify-center gap-5  mt-4">
    <h1>01:00</h1>
    <div className="w-[70%] rounded-full  dark:bg-gray-700">
  <div className="bg-slate-300 h-[2px] rounded-full"></div>
</div>    </div>
    </div>


  </div> 



  <div className="flex flex-col  gap-1 w-11/12 sm:w-4/6 ">

<div className="flex flex-row gap-2 sm:gap-6 ml-0 mt-4 sm:mt-0 justify-center  sm:justify-start sm:ml-2">


<button type="button" className="px-4 py-3 text-xs rounded-lg text-center font-semibold inline-flex items-center text-[#5F6165] bg-[#FFFFFF] focus:outline-none  gap-3">
Toyota
  <IoIosArrowDown className="w-5 h-4"/>
</button><button type="button" className="px-4 py-3 text-xs rounded-lg text-center font-semibold inline-flex items-center text-[#5F6165] bg-[#FFFFFF] focus:outline-none  gap-3">
Time  <IoIosArrowDown className="w-5 h-4"/>
</button><button type="button" className="px-4 py-3 text-xs rounded-lg text-center font-semibold inline-flex items-center text-[#5F6165] bg-[#FFFFFF] focus:outline-none  gap-3">
Status  <IoIosArrowDown className="w-5 h-4"/>
</button>
  </div>


  <div className="bg-[#2884FF] flex flex-row justify-around  rounded-t-2xl mt-3 p-3 ">
  <button type="button" className="px-3 py-2 text-xs  text-white rounded-md text-center font-semibold inline-flex items-center  bg-[#549CFD] focus:outline-none  gap-2">
  Day  <IoIosArrowDown className="w-5 h-4"/>
</button>

<button type="button" className="px-3 py-2 text-xs  text-white rounded-md text-center font-semibold inline-flex items-center  bg-[#549CFD] focus:outline-none  gap-2">
 <FaShoppingBag className="w-5 h-4"/> 
 Mar 15, 2022 
</button>
<div className="flex items-center  gap-3 bg-[#549CFD] px-3 py-2  rounded-md  text-white">

 <MdOutlineArrowBackIos/> 
  <MdOutlineArrowForwardIos className="w-5 h-4"/>
</div>

  </div>
  <div className="flex flex-col bg-white px-4 py-5 rounded-b-2xl">

<div className="flex justify-between  mt-3 w-full">
  <h1 className="text-[#72767C]">08:00 AM</h1>
  <div className="bg-[#A162F7]  px-5 rounded-xl py-2 w-5/6 text-white ">
    <div className="flex  justify-between">

<h1 className="text-[14px]">
08:00 am
</h1>
<h1 className="text-[14px]">
154K</h1>
    </div>

<h1>
Moto Track Day</h1>
<h1 className="text-xs">
All Motorbikes</h1>

    </div>  

    </div>


    <div className="flex justify-between  mt-3 w-full">
  <h1 className="text-[#72767C]">08:00 AM</h1>
  <div className="bg-[#725CFF]  px-5 rounded-xl py-6 w-5/6 text-white ">
    <div className="flex  justify-between">

<h1 className="text-[14px] sm:text-[20px]">
09:45</h1>
<h1 className="text-[14px] sm:text-[20px]">
1h 45 min</h1>
    </div>

<h1 className="text-[14px] sm:text-[20px]">
Drift Swries Second Round</h1>
<h1 className="text-[14px] sm:text-[20px]">
JDM</h1>

    </div>  

    </div>



    <div className="flex justify-between    mt-3 w-full">
  <h1 className="text-[#72767C] ">08:00 AM</h1>
  <div className="flex justify-between gap-1 sm:gap-7  ">
  <div className="bg-[#2884FF] px-4 sm:px-5 rounded-xl py-2  text-white ">
    <div className="flex  justify-between">

<h1 className="text-[10px] sm:text-[26px]">
09:45</h1>
<h1 className="text-[10px] sm:text-[26px]">
1h 45 min</h1>
    </div>

<h1 className="text-[10px] sm:text-[26px]">
Drift Swries Second Round</h1>
<h1 className="text-[10px] sm:text-[26px]">
JDM</h1>

    </div>  <div className="bg-[#C4C4C4] px-4 sm:px-5 rounded-xl py-2  text-white ">
    <div className="flex  justify-between">

<h1 className="text-[10px] sm:text-[26px]">
09:45</h1>
<h1 className="text-[10px] sm:text-[26px]">
1h 45 min</h1>
    </div>

<h1 className="text-[10px] sm:text-[26px]">
Drift Swries Second Round</h1>
<h1 className="text-[10px] sm:text-[26px]">
JDM</h1>

    </div> 
  </div>
  

    </div>



    <div className="flex justify-between  mt-3 w-full">
  <h1 className="text-[#72767C]">08:00 AM</h1>
  <div className="bg-[#70CF97]  px-5 rounded-xl py-3 w-5/6 text-white ">
    <div className="flex  justify-between">

<h1 className="text-[14px] sm:text-[20px]">
09:45</h1>
<h1 className="text-[14px] sm:text-[20px]">
1h 45 min</h1>
    </div>

<h1 className="text-[14px] sm:text-[20px]">
Drift Swries Second Round</h1>
<h1 className="text-[14px] sm:text-[20px]">
JDM</h1>

    </div>  

    </div>


    
    <div className="flex justify-between  mt-3 w-full">
  <h1 className="text-[#72767C]">08:00 AM</h1>
  <div className="bg-[#FF764C]  px-5 rounded-xl py-3 w-5/6 text-white ">
    <div className="flex  justify-between">

<h1 className="text-[14px] sm:text-[20px]">
09:45</h1>
<h1 className="text-[14px] sm:text-[20px]">
1h 45 min</h1>
    </div>

<h1 className="text-[14px] sm:text-[20px]">
Drift Swries Second Round</h1>
<h1 className="text-[14px] sm:text-[20px]">
JDM</h1>

    </div>  

    </div>


    
    <div className="flex justify-between  mt-3 w-full">
  <h1 className="text-[#72767C]">08:00 AM</h1>
  <div className="bg-[#C4C4C4]  px-5 rounded-xl py-3 w-5/6 text-white ">
    <div className="flex  justify-between">

<h1 className="text-[14px] sm:text-[20px]">
09:45</h1>
<h1 className="text-[14px] sm:text-[20px]">
1h 45 min</h1>
    </div>

<h1 className="text-[14px] sm:text-[20px]">
Drift Swries Second Round</h1>
<h1 className="text-[14px] sm:text-[20px]">
JDM</h1>

    </div>  

    </div>

    </div>



  


  </div>

  </div>

  </>
}
export default Calender