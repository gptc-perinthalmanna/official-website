import React from "react";

function ContactForm() {
  return (
    <form className="form bg-white p-6 my-10 relative">
      <h3 className="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
      <p className="text-gray-600">For recruitment proccess and assistance.</p>
      <div className="flex space-x-5 mt-3">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2  w-1/2"
        />
        <input
          type="tel"
          placeholder="Your Number"
          className="border p-2 w-1/2"
        />
      </div>
      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 w-full mt-3"
      />
      <textarea
        cols={10}
        rows={3}
        placeholder="Tell us about desired property"
        className="border p-2 mt-3 w-full"
        defaultValue={""}
      />
      <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
      <div className="flex items-baseline space-x-2 mt-2">
        <input type="checkbox" className="inline-block" />
        <p className="text-gray-600 text-sm">
          I consent to having this website store my submitted information so
          they can respond to my inquiry.
        </p>
      </div>
      <input
        type="submit"
        defaultValue="Submit"
        className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
      />
    </form>
  );
}

export default ContactForm;
