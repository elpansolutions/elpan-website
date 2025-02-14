/* eslint-disable max-len */

import React from "react";

const Careers = () => {
  const email = "enquire@elpan.in";
  const subject = "Job Inquiry";
  const body = "Hello, I am interested in any future opportunities at your company.";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <div className="bg-white/40 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center max-w-lg border border-white/30">
        <h1 className="text-3xl font-bold text-blue-700 drop-shadow-md">🚀 Join Our Team</h1>
        <p className="mt-4 text-lg text-gray-800">
          We currently don&apos;t have open positions. If you believe you&apos;d be a great fit, send us your resume.
        </p>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          ✉️ Send Us an Email
        </a>
      </div>
    </div>
  );
};

export default Careers;
