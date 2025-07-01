"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-black p-4 flex justify-between items-center z-[99]">
      <p className="text-sm">
        We use cookies to improve your experience. By using our site, you agree to our use of cookies.
      </p>
      <button
        onClick={handleAccept}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
