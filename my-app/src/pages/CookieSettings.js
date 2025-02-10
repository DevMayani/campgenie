import React, { useState } from "react";

const CookiesSettings = () => {
  const [cookies, setCookies] = useState({
    performance: true,
    functional: true,
    advertising: false,
  });

  const toggleCookie = (type) => {
    setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-black">Cookies Settings</h1>
      <p className="text-gray-700 mt-2">
        We use cookies to improve your experience. Manage your preferences
        below.
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <p className="font-medium">Essential Cookies (Required)</p>
          <span className="text-green-600 font-medium">Always Enabled</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium">Performance Cookies</p>
          <input
            type="checkbox"
            checked={cookies.performance}
            onChange={() => toggleCookie("performance")}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium">Functional Cookies</p>
          <input
            type="checkbox"
            checked={cookies.functional}
            onChange={() => toggleCookie("functional")}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium">Advertising Cookies</p>
          <input
            type="checkbox"
            checked={cookies.advertising}
            onChange={() => toggleCookie("advertising")}
            className="w-5 h-5"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Save Preferences
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded-md">
          Reject Non-Essential
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">
          Accept All
        </button>
      </div>

      <p className="text-sm mt-4">
        Read more in our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default CookiesSettings;
