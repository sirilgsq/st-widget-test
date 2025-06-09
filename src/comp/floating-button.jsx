import { useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/react.svg";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg flex items-center justify-center p-0 z-50 bg-blue-600 transition-transform duration-200 ease-in-out hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
        )}
      </button>

      <div
        className={`fixed bottom-28 right-6 w-full max-w-[458px] h-[80vh] bg-red-800 rounded-lg shadow-lg z-50 overflow-hidden opacity-0 transform scale-75 translate-y-5 transition-opacity transition-transform duration-200 ease-in-out ${isOpen ? 'opacity-100 transform scale-100 translate-y-0' : ''}`}
      >
        <iframe
          className="w-full h-full border-none"
          src="http://localhost:5173/"
          frameBorder="0"
        />
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}
    </>
  );
}
