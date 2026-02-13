export const Magazine = () => {
  const magazines = [
    {
      id: 1,
      title: "Valerie",
      tagline: "Stories of Service, Leadership & Fellowship",
      cover:
        "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1771004255/Valerie_6_1_20260122_230656_0000_taiwh7_1_hsenuy.png",
      link: "https://heyzine.com/flip-book/4b3c042686.html",
      year: "2025-26",
    },
    {
      id: 2,
      title: "Ixlipse",
      tagline: "Ideas That Moved Communities",
      cover:
        "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1771004320/Ixlipse_25-26_20260122_230410_0000_djrwqo_1_gib3k9.png",
      link: "https://heyzine.com/flip-book/e65c2c32d9.html",
      year: "2025-26",
    },
    {
      id: 3,
      title: "F1 More than a Race",
      tagline: "Stories of Service, Leadership & Fellowship",
      cover:
        "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1771004388/IMG-20260211-WA0022.jpg_jnpg4m_1_dvfouh.jpg",
      link: "https://heyzine.com/flip-book/9a613c4d89.html",
      year: "2025-26",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#faf7f2] dark:bg-[#111111] transition-colors duration-500">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F97316] dark:text-orange-400">
          The Rotaract Library
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          A curated archive of our journals and stories.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center">
        {magazines.map((mag) => (
          <div
            key={mag.id}
            className="
              group
              w-full max-w-[300px]
              bg-white dark:bg-[#1b1b1b]
              rounded-2xl
              shadow-md dark:shadow-lg
              hover:shadow-xl
              transition-all duration-500
            "
          >
            
            <div className="relative aspect-[3/4] p-4 rounded-[20px] overflow-hidden bg-white dark:bg-[#1b1b1b]">
              <img
                src={mag.cover}
                alt={mag.title}
                className="
                  w-full h-full
                  object-contain
                  rounded-[20px]
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <div className="px-4 pb-4 text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 tracking-widest">
                {mag.year}
              </span>

              <h2 className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {mag.title}
              </h2>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {mag.tagline}
              </p>

              <a
                href={mag.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-xs font-medium text-orange-600 dark:text-orange-400 hover:underline"
              >
                Open Volume →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
