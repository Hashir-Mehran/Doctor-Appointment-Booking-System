import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDocters from "../components/RelatedDocters";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // ✅ Fetch Doctor Info
  const fetchDocInfo = async () => {
    const doc = doctors.find((d) => d._id === docId);
    setDocInfo(doc);
  };

  // ✅ Generate Slots (Fix for today's day/date always visible)
  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const dayStart = new Date(currentDate);
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // 9 PM end time

      // Starting hour fix for today
      if (i === 0) {
        const now = new Date();
        const nextHalfHour = new Date(now);
        nextHalfHour.setMinutes(now.getMinutes() > 30 ? 0 : 30);
        nextHalfHour.setHours(now.getHours() + (now.getMinutes() > 30 ? 1 : 0));

        if (nextHalfHour.getHours() < 10) {
          dayStart.setHours(10, 0, 0, 0);
        } else {
          dayStart.setHours(nextHalfHour.getHours(), nextHalfHour.getMinutes(), 0, 0);
        }
      } else {
        dayStart.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (dayStart < endTime) {
        const formattedTime = dayStart.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        timeSlots.push({
          datetime: new Date(dayStart),
          time: formattedTime,
        });

        dayStart.setMinutes(dayStart.getMinutes() + 30);
      }

      // ✅ Even if today's slots are empty, push date/day info
      setDocSlots((prev) => [
        ...prev,
        timeSlots.length ? timeSlots : [{ datetime: currentDate, time: null }],
      ]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // ✅ Toggle Slot Selection
  const handleSlotClick = (time) => {
    setSlotTime((prev) => (prev === time ? "" : time));
  };

  return (
    docInfo && (
      <div className="max-w-6xl mx-auto p-6">
        {/* Doctor Profile */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white/60 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 transition-transform duration-500 hover:scale-[1.02]">
         <div className="relative w-full sm:max-w-80 bg-blue-50 rounded-2xl flex items-center justify-center p-4 shadow-lg">
            <img
              src={docInfo.image}
              alt=""
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-semibold text-gray-800">
                {docInfo.name}
              </h2>
              <img src={assets.verified_icon} alt="" className="w-5" />
            </div>

            <p className="text-gray-600 mt-2 text-base">
              {docInfo.degree} — {docInfo.speciality}
            </p>
            <span className="inline-block mt-2 py-1 px-3 text-xs font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-200">
              {docInfo.experience}
            </span>

            <div className="mt-5">
              <h3 className="text-gray-700 font-semibold flex items-center gap-2">
                About
                <img src={assets.info_icon} className="w-3" alt="info" />
              </h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            <p className="mt-5 text-gray-600 font-medium text-sm">
              Appointment Fee:{" "}
              <span className="font-semibold text-gray-900">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Slots Section */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5">
            Book Your Appointment
          </h2>

          {/* ✅ Day Selector (Always shows today’s day/date) */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3">
            {docSlots.length > 0 &&
              docSlots.map((day, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`min-w-20 text-center px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    slotIndex === index
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg scale-105"
                      : "bg-white/60 backdrop-blur-md text-gray-700 border border-gray-200 hover:shadow-md"
                  }`}
                >
                  <p className="font-semibold">
                    {day[0] && daysOfWeek[day[0].datetime.getDay()]}
                  </p>
                  <p className="text-sm mt-1">
                    {day[0] && day[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          {/* ✅ Time Slots with scroll */}
          <div className="overflow-x-auto no-scrollbar mt-6">
            <div className="flex gap-3 w-max min-w-full">
              {docSlots.length > 0 &&
                docSlots[slotIndex].map((slot, index) =>
                  slot.time ? (
                    <button
                      key={index}
                      onClick={() => handleSlotClick(slot.time)}
                      className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 flex-shrink-0 ${
                        slotTime === slot.time
                          ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg scale-105"
                          : "bg-white/50 backdrop-blur-md text-gray-600 border-gray-300 hover:bg-blue-50 cursor-pointer"
                      }`}
                    >
                      {slot.time.toLowerCase()}
                    </button>
                  ) : (
                    <p
                      key={index}
                      className="text-gray-400 italic text-sm px-5 py-2"
                    >
                      No slots available today
                    </p>
                  )
                )}
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center mt-10">
            <button className="relative inline-flex items-center justify-center px-12 py-4 text-white font-medium text-base rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full blur-md opacity-40 animate-pulse"></span>
              <span className="relative z-10 cursor-pointer">Confirm Appointment</span>
            </button>
          </div>
        </div>

        {/* Related Doctors */}
        <div className="mt-16">
          <RelatedDocters docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
