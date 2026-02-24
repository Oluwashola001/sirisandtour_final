"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {

  const [FullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [RoomNumber, setRoomNumber] = useState("");
  const [HomeCountry, setHomeCountry] = useState("");
  const [email, setEmail] = useState("");
  const [HotelName, setHotelName] = useState("");
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [comment, setComment] = useState("");

  const [errors, setErrors] = useState({
    checkIn: false,
    checkOut: false,
    dateOrder: false, // new error state for invalid date order
  });
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Reset errors
  setErrors({ checkIn: false, checkOut: false, dateOrder: false });

  let hasError = false;

 

  if (hasError) return;

  const subject = "New Booking Request – Siris & Tours";

  const body = `
Full Name: ${FullName}
Mobile Number: ${mobile}
Email Address: ${email}



Number of Adults: ${adults}
Number of Children: ${children}

Comment:
${comment}
`;

  const mailtoLink = `mailto:sirisandtours@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};


  return (
    <div className="max-w-4xl mt-30 mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0A7BBE]">
        Start Your Adventure – Book today
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">

        {/* Last Name */}
        <div>
          <label className="block font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name here"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Example: +1 212-695-1962"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-semibold mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example: user@website.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

    {/* Home country */}
        <div>
          <label className="block font-semibold mb-1">
            Home Country  <span className="text-red-500">*</span>
          </label>
          <input
            type="HomeCountry "
            value={HomeCountry }
            onChange={(e) => setHomeCountry (e.target.value)}
            placeholder="Example: USA"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Number of Adults */}
        <div>
          <label className="block font-semibold mb-1">
             Adults <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Number of Children */}
        <div>
          <label className="block font-semibold mb-1">Children</label>
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
          />
        </div>

     {/*Hotel name */}
        <div>
          <label className="block font-semibold mb-1">
            Hotel name 
  <span className="text-red-500">*</span>
          </label>
          <input
            type="HotelName"
            value={HotelName}
            onChange={(e) => setHotelName  (e.target.value)}
            placeholder="Example: USA"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        
{/*Room number 
*/}
        <div>
          <label className="block font-semibold mb-1">
            Room Number 

  <span className="text-red-500">*</span>
          </label>
          <input
            type=" RoomNumber"
            value={ RoomNumber}
            onChange={(e) => setRoomNumber  (e.target.value)}
            placeholder=""
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>
        {/* Selected Trips */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">
           Your Selected Trip (s) <span className="text-red-500">*</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Your comment..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#0A7BBE] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#075E94] transition"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
}
