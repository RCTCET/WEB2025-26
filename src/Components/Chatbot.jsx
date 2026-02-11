import axios from "axios";
import { useState, useEffect } from "react";

export const Chatbot = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  

  const showdata = ["Hi 👋 I’m ROTO — your RC-TCET assistant!"];


  useEffect(() => {
    if (!isChatOpen) {
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isChatOpen]);


  



        

  return (
    <>
      
      {!isChatOpen && (
        <div>
         
          {showHint && (
            <div
              className="
                fixed bottom-28 right-6 z-[10000]
                max-w-[220px]
                bg-white
                text-gray-700
                text-sm
                px-4 py-3
                rounded-2xl
                shadow-lg
                border border-orange-100
              "
            >
              {showdata.map((item, index) => (
                <p key={index} className="leading-relaxed">
                  🤖 <span className="ml-1">{item}</span>
                </p>
              ))}

              <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white rotate-45 border-r border-b border-orange-100" />
            </div>
          )}

        
          <button
            onClick={(e) => {
              e.stopPropagation();
              setChatOpen(true);
              setShowHint(false); 
            }}
            className="
              fixed bottom-5 right-5 z-[10000]
              w-20 h-20 rounded-full
              bg-white
              shadow-2xl
              hover:scale-105 transition
              flex items-center justify-center
            "
          >
            <img
              src="https://res.cloudinary.com/dtlessn0g/image/upload/v1770378415/WhatsApp_Image_2026-02-06_at_4.54.12_PM_gkfoyr.jpg"
              alt="RC TCET Bot"
              className="w-full h-full rounded-full object-cover pointer-events-none"
            />
          </button>
        </div>
      )}

    
      {isChatOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setChatOpen(false);
              setShowHint(false);
            }
          }}
        >
          <div
            className="
              fixed bottom-4 left-1/2 -translate-x-1/2
              w-[92vw] h-[60vh]
              sm:bottom-16 sm:right-4 sm:left-auto sm:translate-x-0
              sm:w-[360px] sm:h-[72vh]
              bg-gradient-to-br from-orange-50 to-white
              rounded-3xl
              shadow-2xl
              flex flex-col
              overflow-hidden
            "
          >
           
            <div className="bg-[#EA580C] to-orange-600 p-4 text-white flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg">
                  Rotaract Assistant
                </h2>
                <p className="text-xs opacity-90">
                  Service • Leadership • Fellowship
                </p>
              </div>
              <button
                onClick={() => {
                  setChatOpen(false);
                  setShowHint(false);
                }}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 px-4 py-5 text-sm text-gray-700">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  🤝
                </div>
                <div className="bg-white/80 p-4 rounded-2xl shadow max-w-[85%]">
                  Hello 👋 <br />
                  I’m the <b>Rotaract Club Assistant</b>.<br />
                  I’ll soon help you explore events, activities,
                  and club initiatives!
                </div>
              </div>
            </div>

     
            <div className="p-3 bg-white border-t flex gap-2">
              <input
                
                placeholder="Chat coming soon…"
                className="
                  flex-1 px-4 py-2 rounded-full
                  border border-orange-200
                  text-sm text-gray-400
                  bg-orange-50
                  
                "
              />
              <button
               
                className="w-10 h-10 rounded-full bg-orange-300 text-white "
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};