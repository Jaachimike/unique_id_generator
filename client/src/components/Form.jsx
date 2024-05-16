import React, { useState, useEffect } from "react";
import axios from "axios";
import DialogBox from "./DialogBox";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [uniqueId, setUniqueId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      contact: contactNumber,
      city,
      country,
    };

    // performs post request to backend
    try {
      const response = await axios.post("http://localhost:3000/users", data);
      setUniqueId(response.data.uniqueId);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <form
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {/* name input field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        {/* email input field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        {/* contact number input field */}
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number:
          </label>
          <PhoneInput
            defaultCountry="ng"
            value={contactNumber}
            onChange={(contactNumber) => setContactNumber(contactNumber)}
          />
        </div>

        {/* country input field */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country:
          </label>
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
          />
        </div>
        {/* city input field */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            City:
          </label>
          <RegionDropdown
            country={country}
            value={city}
            onChange={(val) => setCity(val)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <DialogBox
        isOpen={isDialogOpen}
        uniqueId={uniqueId}
        onClose={closeDialog}
      />
    </>
  );
};

export default Form;
