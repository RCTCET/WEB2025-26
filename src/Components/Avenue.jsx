// https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757666593/Untitled_design_ocbq9f.png
export const Avenue = () => {
  return (
    <div className="bg-white dark:bg-stone-900 min-h-screen">
      {/* the hero header is image not text with curve bg */}
      <div>
        {/* <img
          src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756820583/Frame_116_kxbhve.png"
          alt="avenue_page"
          className="w-full object-cover"
        /> */}
        <img
          src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756820583/Frame_116_kxbhve.png"
          alt="avenue_page"
          className="w-full object-cover dark:hidden"
        />

        {/* Dark mode image */}
        <img
          src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757603396/Frame_5826_exnrgn.png"
          alt="avenue_page_dark"
          className="hidden w-full object-cover dark:block"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-2 sm:px-4 mb-4 mx-10 mt-[30px]">
        {allinfo.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFEFD9] dark:bg-[#3D3027] flex flex-col items-center justify-start p-2 w-full h-[400px] 
                       relative rounded-[5px] shadow-[0_19px_38px_rgba(0,0,0,0.3),0_15px_12px_rgba(0,0,0,0.22)] 
                       dark:shadow-[0_19px_38px_rgba(0,0,0,0.5),0_15px_12px_rgba(0,0,0,0.4)]
                       transition-all duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35),0_20px_15px_rgba(0,0,0,0.25)]
                       dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.6),0_20px_15px_rgba(0,0,0,0.45)]"
          >
            {/* Image Container */}
            <div className="flex items-end justify-center h-[300px] w-full bg-white dark:bg-[#2D241C] rounded-[5px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              <img
                src={item.img}
                alt={item.title}
                className={`max-h-full max-w-full object-contain ${item.className || ""}`}
              />
            </div>

            {/* Title */}
            <h3 className="text-sm text-red-500 dark:text-[#D4A829] font-bold mt-3 mb-1 text-center sm:text-[20px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-black-600 dark:text-[#C4A575] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const allinfo = [
  {
    title: "Club Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950818/Club_service_bwnucs.png",
    description:
      "Enhances fellowship among members, organizes meetings and events, and strengthens club operations through well-planned activities.",
  },
  {
    title: "Community Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950812/Community_service_fncorv.png",
    description:
      "Focuses on projects and programs that benefit the local community; addresses needs through volunteerism and outreach.",
  },
  {
    title: "Sports",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950809/Sports_appwn5.png",
    description:
      "Organizes sporting activities to encourage physical fitness, teamwork, and friendly competition among members.",
  },
  {
    title: "Shiksha",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950809/Shiksha_eo6fay.png",
    description:
      "Promotes education initiatives, supports schools and students, and encourages lifelong learning and literacy.",
  },
  {
    title: "Public Relations",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950810/PR_qdlhsq.png",
    description:
      "Enhances the club’s visibility, manages communications, and fosters a positive image among stakeholders and the public.",
  },
  {
    title: "Digital Communication",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950811/Digi_comm_kvkifa.png",
    description:
      "Ensures effective online communication, manages social media channels, and facilitates digital engagement within and outside the club.",
  },
  {
    title: "Social Media Relations",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950809/SMR_mmc85w.png",
    description:
      "Handles online reputation, shares updates, and engages with the community on social media platforms.",
  },
  {
    title: "Entrepreneurship Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950811/ED_l0jubn.png",
    description:
      "Promotes entrepreneurship, supports budding entrepreneurs, and organizes training and mentorship programs.",
  },
  {
    title: "Editorial Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950810/EDI_jpoukm.png",
    description:
      "Manages club publications, newsletters, and articles to keep members informed and engaged.",
  },
  {
    title: "Partners-in-Service",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950809/PIS_edmx8t.png",
    description:
      "Collaborates with other organizations and service partners to extend the club’s reach and impact.",
  },
  {
    title: "Professional Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950811/PD_utl7ls.png",
    description:
      "Offers training and skill-building opportunities to help members advance in their professional lives.",
  },
  {
    title: "International Service Development",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950810/IS_ygzd0t.png",
    description:
      "Engages in international projects, promotes global understanding, and connects with clubs worldwide.",
  },
  {
    title: "Marketing",
    img: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757950811/Marketing_lq5zbq.png",
    description:
      "Engages in international projects, promotes global understanding, and connects with clubs worldwide.",
  }
];
