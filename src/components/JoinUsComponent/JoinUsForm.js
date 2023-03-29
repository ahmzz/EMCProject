import React from 'react'
import capture from "../../assets/Capture.PNG"
const JoinUsForm = () => {
  return (
    <div className="sm:m-8 m-4">
      <div className="flex-row sm:flex  ">
        <div className="w-full mr-4 mb-6">
          <div>
            <label>Name</label>
            <label className="text-red-600">*</label>
          </div>
          <input type="text" className="border w-full h-12 bg-gray-100 " />
        </div>
        <div className="w-full mb-6 sm:ml-4">
          <div>
            <label>Email</label>
            <label className="text-red-600">*</label>
          </div>
          <input type="text" className="border w-full h-12  bg-gray-100" />
        </div>
      </div>
      <div className="flex-row sm:flex">
        <div className="w-full mr-4 mb-6">
          <div>
            <label>Phone Number</label>
            <label className="text-red-600">*</label>
          </div>
          <input type="number" className="border w-full h-12 p-3  bg-gray-100" />
        </div>
        <div className="w-full sm:ml-4">
          <div>
            <label>Specialization</label>
            <label className="text-red-600">*</label>
          </div>
          <input type="text" className="border w-full h-12  bg-gray-100" />
        </div>
      </div>
      <div>
        <div>
        <label>Upload your CVs</label>
        </div>
        <button >
          <img src={capture}/>
        </button>
      </div>

      <div className="">
        <div>
        <label>Message</label>
        </div>
        <textarea className="w-full bg-gray-100 " rows="8" ></textarea>
      </div>

      <button  className="p-3 bg-[#0f59e0b66] w-full mt-4 text-white text-bold text-lg">Submit</button>
    </div>
  )
}

export default JoinUsForm
