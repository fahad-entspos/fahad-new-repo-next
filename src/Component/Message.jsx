import { BiSolidPencil } from "react-icons/bi";
import { BsFill2CircleFill } from "react-icons/bs";
import { FaCheckDouble } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMoreVert } from "react-icons/md";
import { IoMdSend } from 'react-icons/io';


function Message() {
  return (
    <>
    <div className="flex  flex-wrap w-full cursor-pointer">
      <div className="   h-auto border-r-2 bg-white  w-[100%] sm:w-auto  m-0  px-[22px] ">
        <div className=" h-auto m-auto gap-10">
          {/* message */}
          <div className="flex items-center justify-between pt-8 ">
            <h1 className="text-black font-serif text-3xl">Message</h1>
            <BiSolidPencil className="w-6 h-6 text-[#9f5bff]" />
          </div>
          {/* input  */}

          <form className="pt-11">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full rounded-lg p-2 pl-10 text-sm text-gray-900 bg-[#F5F5F5] border-none"
                placeholder="Search..."
                required
              />
            </div>
          </form>

          {/* icons */}

          <div className="flex items-center pt-10">
            <BiSolidPencil className="w-4 h-4 text-[#A9ABAD]" />
            <h1 className="text-[#A9ABAD] text-sm font-serif ">PINNED</h1>
          </div>

          {/* chats */}

          <div className="flex items-center  gap-2 pt-7 ">
            <img
              className="rounded-full"
              src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                  Killan James
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                  4:30 PM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm font-medium   text-[#3eca51]">
                  Typing...
                </h1>
                <BsFill2CircleFill className="text-red-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center  gap-2 pt-7 ">
            <img
              className="rounded-full"
              src="serious-looking-male-handsome-guy-with-blond-hair-wearing-grey-hoodie-people-emotion-concept-watching-confident-isolated-grey-wall.png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Desian Tam
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                9:36 AM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm     text-black">
                Hello! Everyone
                </h1>
                <FaCheckDouble  className="text-[#41D37E] w-3 " />
              </div>
            </div>
          </div>


          <div className="flex items-center  gap-2 pt-7">
            <img
              className="rounded-full"
              src="chatimg (8).png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Ahmed Medi
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                1:15 AM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm ">
                Wow really Cool 🔥                </h1>
              </div>
            </div>
          </div>

               {/* message icons */}

          <div className="flex items-center pt-7 ">
            <BiSolidMessageDetail className="w-4 h-4 text-[#A9ABAD]" />
            <h1 className="text-[#A9ABAD] text-sm font-serif ">PINNED</h1>
          </div>




          <div className="flex items-center  gap-2 pt-7 ">
            <img
              className="rounded-full"
              src="chatimg (7).png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
Claudia Maudi                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                4:30 PM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm ">
                Nice           </h1>
              </div>
            </div>
          </div>



          <div className="flex items-center  gap-2 pt-7">
            <img
              className="rounded-full"
              src="chatimg (5).png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                  Killan James
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                  4:30 PM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm font-medium  ">
                  Typing...
                </h1>
                <BsFill2CircleFill className="text-red-500" />
              </div>
            </div>
          </div>



          <div className="flex items-center  gap-2 pt-7">
            <img
              className="rounded-full"
              src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Novita
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                4:30 PM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm font-medium   ">
                yah, nice design
                </h1>
                <BsFill2CircleFill className="text-red-500" />
              </div>
            </div>
          </div>




          <div className="flex items-center  gap-2 pt-7">
            <img
              className="rounded-full"
              src="chatimg (4).png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Milie Nose                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                8:20 PM                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm font-medium   ">
                Awesome 🔥                </h1>
                <BsFill2CircleFill className="text-red-500" />
              </div>
            </div>
          </div>




          <div className="flex items-center  gap-2 pt-7">
            <img
              className="rounded-full"
              src="chatimg (3).png"
              alt="Error"
            />
            <div className="w-[330px] sm:w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Ahmed Medi
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                1:15 AM
                </h1>
              </div>
              <div className="flex  items-center   justify-between">
                <h1 className="text-sm ">
                Wow really Cool 🔥                </h1>
              </div>
            </div>
          </div>


          <div className="flex items-center  gap-2 pt-7 ">
            <img
              className="rounded-full"
              src="chatimg (2).png"
              alt="Error"
            />
            <div className="w-[230px]">
              <div className="flex  items-center  justify-between">
                <h1 className="text-base font-semibold   text-black">
                Desian Tam
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                9:36 AM
                </h1>
              </div>
              <div className="flex  items-center  ">
                <MdKeyboardVoice />
                <h1 className="text-sm     text-black">
                Voice message                </h1>
              </div>
            </div>
          </div>


          








        </div>
      </div>
      <div className="flex flex-col w-[100%]   sm:w-[75%]  bg-white ">
        <div className="flex justify-between w-full border-b-2 h-20 items-center px-6">

      <div className="w-auto bg-white">

      <div className="flex items-center  gap-2 ">
            <img
              className="rounded-full w-9"
              src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png"
              alt="Error"
            />
           
              <div className="">
                <h1 className="text-base font-semibold   text-black">
                  Killan James
                </h1>
                <h1 className="text-xs font-medium    text-gray-400">
                Active Now
                </h1>
            
            </div>
          </div>
          </div>

<div className="flex gap-3 bg-white ">

      <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
        <BsCameraVideo className="w-5 h-5 text-gray-600"/></div>

        <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
        <BsTelephone className="w-5 h-5 text-gray-600"/></div>

        <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
        <MdOutlineMoreVert className="w-5 h-5 text-gray-600"/></div>
        </div>
        </div>
<div className="px-8 flex flex-col gap-7 pt-4">

        <div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
  
  <div className="chat-bubble bg-[#F5F6FA] text-[#242731]">Hi, I hope you are doing well, yesterday you have gave a pen This 
very nice, i am very happy for this.yesterday you have gave 
a pen This very nice</div>
  
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
 
  <div className="chat-bubble bg-[#A162F7] text-white">yea I’m well, Thank you, i am very happy for this.yesterday you 
have gave a pen This very nice yea I’m well, Thank you, i am very happy for this.yesterday you 
have gave a pen This very nice</div>
 
</div>

<div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
  
  <div className="chat-bubble bg-[#F5F6FA] text-[#242731]">Hi, I hope you are doing well, yesterday you have gave a pen This 
very nice 😍</div>
  
</div>

<div className="chat chat-start ">
  <div className="chat-image avatar">
   
  </div>
  
  <div className="chat-bubble bg-[#F5F6FA] text-[#242731]"> i am very happy for this.yesterday you have gave a pen This 
very nice</div>
  
</div>



<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
 
  <div className="chat-bubble bg-[#A162F7] text-white">yea I’m well, Thank you, i am very happy for this.yesterday you 
have gave a pen This very nice</div>
 
</div>



<div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
  
  <div className="chat-bubble bg-[#F5F6FA] text-[#242731]">Hi, I hope you are doing well, yesterday you have gave a pen This 
very nice 😍  Hi, I hope you are doing well, yesterday you have gave a pen This 
very nice 😍😍😍😍😍😍😍😍😍</div>
  
</div>

<div className="chat chat-start ">
  <div className="chat-image avatar">
   
  </div>
  
  <div className="chat-bubble bg-[#F5F6FA] text-[#242731]"> i am very happy for this.yesterday you have gave a pen This 
very nice</div>
  
</div>



<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
 
  <div className="chat-bubble bg-[#A162F7] text-white">yea I’m well, Thank you, i am very happy for this.yesterday you 
have gave a pen This very nice</div>
 
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.png" />
    </div>
  </div>
 
  <div className="chat-bubble bg-[#A162F7] text-white">yea I’m well, Thank you, i am very happy for this.yesterday you 
have gave a pen This very nice</div>
 
</div>


<form>
    <label htmlFor="chat" className="sr-only">Your message</label>
    <div className="flex items-center px-3 py-2 rounded-lg bg-[#E9E9F2] border">
        
        <button type="button" className="p-2 text-[#9549ff] rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
            </svg>
            <span className="sr-only">Add emoji</span>
        </button>
        <textarea id="chat" rows="1" className=" resize-none !border-0 focus:border-transparent focus:outline-none block mx-4 p-2.5 w-full text-sm text-black bg-[#E9E9F2] rounded-lg  border-none " placeholder="Type Something..."></textarea>
            <button type="submit" className="inline-flex justify-center p-2  text-[#46217a]">
            <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span className="sr-only">Send message</span>
        </button>
    </div>
</form>



</div>

</div>

      </div>
    </>
  );
}

export default Message;
