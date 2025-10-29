import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="mt-12">
      <p className="pb-3 text-lg font-semibold text-zinc-700 border-b border-gray-300">
        My Appointments
      </p>

      <div className="mt-6 space-y-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-4 sm:p-6 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-5"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl bg-primary/10 border border-primary/30"
              />
            </div>

            {/* Appointment Details */}
            <div className="flex-1 text-zinc-700 text-sm w-full">
              <p className="text-lg font-semibold text-neutral-800">{item.name}</p>
              <p className="text-primary font-medium">{item.speciality}</p>

              <div className="mt-2 space-y-1">
                <p className="text-gray-500 font-medium">Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
              </div>

              <p className="mt-2">
                <span className="font-medium text-neutral-700">Date & Time:</span>{" "}
                26 Nov 2025 | 20:00
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button
                className="py-2.5 px-5 rounded-lg text-sm font-medium border border-primary text-primary 
                hover:bg-primary hover:text-white active:bg-primary active:text-white 
                transition-all duration-300 w-full"
              >
                Pay Online
              </button>
              <button
                className="py-2.5 px-5 rounded-lg text-sm font-medium border border-red-500 text-red-500 
                hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white 
                transition-all duration-300 w-full"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
