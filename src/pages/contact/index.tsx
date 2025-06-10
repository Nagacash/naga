"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { satoshiMedium, reverie } from "@/styles/fonts";
import { allArtists } from "@/utils/artistData";
import SpinningStar from "@/components/SpinningStar";
// import { sendContactForm } from "@/lib/api"; // <-- REMOVE THIS LINE
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [artist, setArtist] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  // const [success, setSuccess] = useState(""); // <-- REMOVE THIS LINE
  // const [loading, setLoading] = useState(false); // <-- REMOVE THIS LINE

  const select = [
    {
      value: "none",
      innerText: "Let us know why you&apos;re reaching out",
    },
    {
      value: "Event Booking",
      innerText: "Event Booking",
    },
    {
      value: "Collaboration",
      innerText: "Collaboration",
    },
    {
      value: "Naga Clothing",
      innerText: "Shout Out",
    },
    {
      value: "Referral",
      innerText: "Referral",
    },
    {
      value: "I want to sponsor Naga Apparel",
      innerText: "I want to join Naga Apparel",
    },
  ];

  const emailRegex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

  // This will now handle creating and opening the mailto link
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Basic validation
    if (!name.length || !email.length || !message.length) {
      setError("No fields should be left empty");
      return; // Stop execution
    } else if (!email.match(emailRegex)) {
      setError("Invalid email address");
      return; // Stop execution
    } else if (bookingType === "" || bookingType === "none") { // Check for initial select value
      setError("Please select a reason for reaching out.");
      return; // Stop execution
    } else {
      setError(""); // Clear any previous errors
    }

    const recipientEmail = "chosenfewrecords@hotmail.de";
    const subject = `ONaga Apparel website email: ${bookingType}`;

    // Construct the email body
    const emailBodyContent = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Why are you reaching out?: ${bookingType}`,
      // Only include artist if a valid one is selected and bookingType is relevant
      bookingType === 'Event Booking' && artist && artist !== 'none' && artist !== "Let&apos;s Work" ? `Artist: ${artist}` : null,
      `Message: ${message}`,
    ]
    .filter(Boolean) // Removes null entries from the array
    .join('\n\n'); // Joins with double newline for readability in email client

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBodyContent)}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Optional: Reset form fields after opening mailto link
    setName("");
    setEmail("");
    setBookingType("");
    setArtist("");
    setMessage("");

    // Optional: Give user feedback that their email client is opening
    alert("Your email client should now open with a pre-filled email. Please send it from there!");
  }

  const descAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const formAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section className="px-5 2xl:py-14">
      <div className="flex md:justify-between md:flex-row flex-col gap-12 mt-[2rem]">
        <motion.div
          variants={descAppear}
          initial="initial"
          animate="animate"
          className="flex-[1.5]"
        >
          <div>
            <h5
              className={`${satoshiMedium.className} uppercase md:text-[8vw] text-[18vw] leading-[1]`}
            >
              Give us
            </h5>
          </div>
          <div>
            <h5
              className={`${satoshiMedium.className} uppercase md:text-[8vw] text-[18vw] leading-[1]`}
            >
              a shout
            </h5>
          </div>
          <div className="flex justify-end mt-4">
            <p className="w-[70%] md:text-[16px] 2xl:text-[22px] text-[13px]">
              If you are in need for bookings, event organization or any other kind, reach out to us, we may be able to work something out. We&apos;ve booked Nolay, Rowdy Rebel, Kitty Kat, OTW, Capuz, Miss La Familia, Boot Camp Clique, Redman just to name a few.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={formAppear}
          initial="initial"
          animate="animate"
          className="flex-[2]"
        >
          {/* FORM SUBMIT */}
          <form onSubmit={handleSubmit} className="mb-8 md:w-[90%]">
            {/* ERROR MESSAGE FOR FORM VALIDATION */}
            {error.length ? (
              <div className="flex items-center justify-between rounded-xl border-[1px] border-accent px-6 py-3 mb-6">
                <p className="text-white">{error}</p>
                <SpinningStar size={"20px"} />
              </div>
            ) : null}
            {/* Success message removed as mailto doesn't confirm send */}
            {/* NAME INPUT */}
            <div className="flex flex-col mb-8">
              <input
                placeholder="Name *"
                className="placeholderForm text-[14px] 2xl:text-[20px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent"
                onChange={(e) => setName(e.target.value)}
                id="formName"
                value={name}
                type="text"
              />
            </div>
            {/* EMAIL ADDRESS INPUT */}
            <div className="flex flex-col mb-8">
              <input
                placeholder="Email *"
                className="placeholderForm text-[14px] 2xl:text-[20px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent"
                onChange={(e) => setEmail(e.target.value)}
                id="formEmail"
                value={email}
                type="email"
              />
            </div>
            {/* INQUIRY FOR REACHING OUT */}
            <div className="flex flex-col mb-8">
              <select
                id="formInquiry"
                className="text-[14px] 2xl:text-[20px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent"
                onChange={(e) => setBookingType(e.target.value)}
                value={bookingType}
              >
                {select.map((ele, index) => (
                  <option
                    key={ele.value}
                    value={ele.value}
                    className="bg-background text-[14px] 2xl:text-[20px]"
                  >
                    {ele.innerText}
                  </option>
                ))}
              </select>
            </div>
            {/* ARTIST THAT'S BEING ASKED FOR */}
            <div className="flex flex-col mb-8">
              <select
                id="formInquiry"
                className="placeholderForm px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent text-[14px] 2xl:text-[20px]"
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
              >
                <option value="none" className="bg-background text-[14px] 2xl:text-[20px]">
                  Tell us who you are reaching out for?
                </option>
                <option
                  value="Let&apos;s Work"
                  className="bg-background text-[14px] 2xl:text-[20px]"
                >
                  Clothing
                </option>
                {allArtists.map((ele) => (
                  <option
                    key={ele.artistName}
                    value={ele.artistName}
                    className="bg-background text-[14px] 2xl:text-[20px]"
                  >
                    {ele.artistName}
                  </option>
                ))}
              </select>
            </div>
            {/* MESSAGE TEXTAREA */}
            <div className="flex flex-col mb-8">
              <textarea
                placeholder="Send a Message *"
                id="formMessage"
                rows={4}
                className="placeholderForm text-[14px] 2xl:text-[20px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="flex justify-center items-center mt-8">
              <button
                type="submit" // Changed to "submit" to trigger the form's onSubmit
                className={`group hover:text-background hover:bg-accent duration-[.4s] flex justify-between items-center gap-10 px-8 py-1 border-[1.5px] border-accent rounded-full uppercase text-[22px] text-white`}
              >
                Submit
                <ArrowRightIcon className="w-6 text-white transform duration-[.4s] group-hover:text-background group-hover:translate-x-[10px]" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
