import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../assets/logo.svg";
import r from "../../assets/regsiter.svg";

export function Register() {
  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <div className="flex-[40%] bg-[#f9f9f9] p-6 flex flex-col items-center">
        {/* Logo at the Top */}
        <nav className="w-full mb-8">
          <img src={logo} alt="Logo" />
        </nav>
        <div className="flex flex-col justify-center items-center space-y-4 mt-8">
          <div className="flex justify-center mb-4 mt-40">
            <img
              src={r} // Replace with your salon icon/image URL
              alt="Salon Icon"
              className="h-24"
            />
          </div>
          <h2 className="text-2xl font-semibold">Setup your salon</h2>
          <p className="text-gray-500 text-center">
            Please fill in the details to set up your salon.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-[60%] p-8 flex flex-col justify-center items-center bg-white">
        <form className="w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold mb-4">Salon Setup</h2>
          <Input type="text" placeholder="Owner name" className="w-full" />
          <Input type="text" placeholder="Salon name" className="w-full" />
          <Input type="email" placeholder="you@company.com" className="w-full" />
          <Input
            type="text"
            placeholder="Eg. 12ABCD3456E1Z2 (optional)"
            className="w-full"
          />
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Select location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>
          <textarea
            placeholder="Enter a description..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
          ></textarea>
          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
          >
            Complete setup
          </Button>
        </form>
      </div>
    </div>
  );
}
