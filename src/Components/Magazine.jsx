export const Magazine = () => {

  const magazines = [
    {
      id: 1,
      title: "ROTOVISION 2024",
      tagline: "Stories of Service, Leadership & Fellowship",
      subtitle: "The Annual Journal of Rotaract Club of TCET",
      cover: "https://res.cloudinary.com/dtlessn0g/image/upload/v1770408172/Valerie_6_1_20260122_230656_0000_taiwh7.png",
      link: "https://heyzine.com/flip-book/4b3c042686.htmlValerie",
      year: "2024"
    },
    {
      id: 2,
      title: "IMPACT EDITION",
      tagline: "Ideas That Moved Communities",
      subtitle: "A Special Curated Issue",
      cover: "https://res.cloudinary.com/dtlessn0g/image/upload/v1770408016/Ixlipse_25-26_20260122_230410_0000_djrwqo.png",
      link: "#",
      year: "2025"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#faf7f2]">

      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F97316] tracking-tight">
          The Rotaract Library
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          A carefully curated collection of our official journals —  
          chronicling service, leadership, fellowship, and the impact we create together.
        </p>
      </div>

   
      <div
        className={`
          grid gap-12
          sm:grid-cols-2
          ${magazines.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}
          max-w-6xl mx-auto
          justify-items-center
        `}
      >
        {magazines.map((mag) => (
          <div
            key={mag.id}
            className="
              bg-white
              rounded-2xl
              shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]
              overflow-hidden
              transition
              hover:shadow-[0_30px_70px_-25px_rgba(234,88,12,0.4)]
              w-[340px]
            "
          >

          
            <div className="relative h-[260px]">

             
              <img
                src={mag.cover}
                alt={mag.title}
                className="w-full h-full object-top"
              />

          
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

             
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                
              

               

              </div>
            </div>

            <div className="p-5 flex justify-between items-center">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Digital Journal
              </span>

              <a
                href={mag.link}
                className="
                  text-orange-600
                  text-sm font-medium
                  hover:underline
                "
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