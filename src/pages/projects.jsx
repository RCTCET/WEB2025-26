import { useState, useRef, useEffect } from "react";

function Projects() {
  const sections = [
    {
      id: "Club-Service",
      title: "Club Service",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785685/Copy_of_IMG_0433_ppl19y.jpg",
          title: "Rotaract's Day Out",
          objective:
            "Rotaract Club of TCET organised Rotaract's Day Out at Bandstand, Bandra, as the first club service event of the year to build stronger bonds among members through fun games and fellowship.",
          impact: [
            "Engaged 80+ members in games like Dodgeball, Footloose, and Cricket — unforgettable moments of joy.",
            "Strengthened friendships and club spirit; members left motivated and connected.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732523/IMG_7706_d8rkg4.webp",
          title: "Jamfinity",
          objective:
            "Rotaract Club of TCET organised Jamfinity to create a cozy, stress-free space where members could relax after a hectic college day, enjoy live acoustic music, and bond through singing, games, and shared emotions.",
          impact: [
            "Created a warm emotional sanctuary that helped members unwind, connect, and feel at home within the club.",
            "Encouraged spontaneous participation, collective sing-alongs, and strong fellowship, leaving members refreshed, uplifted, and eager for more such sessions.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732439/IMG_9580_jjqwcw.webp",
          title: "Sang-e-Diwali",
          objective:
            "Rotaract Club of TCET, in collaboration with the Rotaract Club of Mumbai Anchors, organised Sang-e-Diwali to celebrate the festive spirit of Diwali while fostering unity, friendship, and stronger inter-club bonding through fun activities, culture, and togetherness.",
          impact: [
            "Brought both clubs closer through fun, cultural activities and shared celebrations.",
            "Created lasting memories, strong bonding, and a warm sense of togetherness among members.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732446/IMG_9927_aen5hf.webp",
          title: "Tides & Tribe",
          objective:
            "To give Rotaract members a calm post-exam break where they could relax, interact freely, and build genuine bonds through simple beach activities and shared moments.",
          impact: [
            "Helped members, especially first-years, feel comfortable, included, and connected within the club",
            "Created stress-free bonding, turning strangers into friends and strengthening the spirit of togetherness and Rotaract family.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732456/SAVE_20251207_204615_d95vny.jpg",
          title: "Peak Pursuit: The Kalsubai Trek",
          objective:
            "To strengthen bonding and teamwork among Rotaractors through an adventurous trek to Maharashtra’s highest peak, while promoting endurance, unity, and environmental awareness.",
          impact: [
            "Enhanced team bonding, resilience, and mutual support among members.",
            "Instilled a strong sense of achievement, adventure, and responsibility towards nature.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732451/IMG-20251203-WA0177_jvwkyq.webp",
          title: "Karting Break",
          objective:
            "To create a joyful and refreshing vacation-time experience for members who stayed back, helping them relax, feel included, and bond through fun and shared moments.",
          impact: [
            "Provided a refreshing stress-buster that strengthened bonding and teamwork among members.",
            "Created shared excitement, healthy competition, and lasting memories, reinforcing unity and inclusiveness within the club.",
          ],
        },
      ],
    },
    {
      id: "Community-Service",
      title: "Community Service",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929229/Copy_of_IMG_3439_ww2w3f_x6zmwz.jpg",
          title: "Kalakriti 2.0",
          objective:
            "Celebrate Ganesh Chaturthi in an eco-friendly and creative way.",
          impact: [
            "Benefited 120+ participants.",
            "Promoted sustainable celebrations.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785650/Copy_of_IMG-20250713-WA0085_1_l2cmv5.jpg",
          title: "Kindness Kart",
          objective: "Donation drive collecting stationery and essentials.",
          impact: [
            "Collected 100+ items.",
            "Inspired students and faculty to give back.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756929414/Copy_of_IMG_7989_nqrzgv_g4cxxc.jpg",
          title: "Tails and Tales",
          objective: "Awareness session on animal communication.",
          impact: ["Engaged 100+ students.", "Built empathy for animals."],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732308/IMG_7983_zii5fv.webp",
          title: "Saanjh -Twilight of Togetherness",
          objective:
            "To celebrate Diwali by sharing unconditional happiness, warmth, and togetherness with underprivileged children, spreading the true spirit of the festival beyond lights and celebrations.",
          impact: [
            "Brought genuine joy, smiles, and festive warmth to underprivileged children through shared activities and love.",
            "Strengthened the spirit of compassion, service, and meaningful celebration among Rotaractors.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732323/IMG-20251012-WA0052_atas3s.webp",
          title: "Antarman-Understanding the Inner Self",
          objective:
            "To observe World Mental Health Day by creating a safe, supportive space focused on self-discovery, emotional awareness, and practical strategies for mental well-being among students.",
          impact: [
            "Promoted mental health awareness and emotional well-being among participants.",
            "Encouraged open conversations, reduced stigma, and fostered a supportive environment.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732321/PXL_20251220_060745664_c4k1hh.webp",
          title: "The Crimson Carnival",
          objective:
            "Rotaract Club of TCET organised Christmas Party 2025 with Junoon Foundation to spread joy and festive warmth among underprivileged children through games, performances, and meaningful interactions.",
          impact: [
            "Brought smiles and happiness to 75+ children through a joyful Christmas celebration.",
            "Created lasting memories while strengthening the spirit of compassion and togetherness.",
          ],
        },
      ],
    },
    {
      id: "Professional-Development",
      title: "Professional-Development",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756785657/Copy_of_IMG20250627144703_cxmlno.jpg",
          title: "Prerana",
          objective:
            "Rotaract Club of TCET organised Prena, a 5-day learning fest, to spark curiosity and holistic development among students through hands-on sessions, creativity, and competitions.",
          impact: [
            "Covered diverse skills including solar robotics, Arduino, photography, Tableau, and breadboard circuits, along with engaging quiz contests.",
            "Concluded with a reel-making competition and prize distribution, leaving students motivated, skilled, and inspired to keep exploring.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732224/IMG_5176_vig5rz.webp",
          title: "Skill Sphere",
          objective:
            "Rotaract Club of TCET organised a two-day professional development workshop to help first-year students build confidence, communication skills, and career readiness by combining soft skills, technology insights, and professional guidance.",
          impact: [
            "Engaged 1000+ students through interactive sessions on communication, AI, and LinkedIn readiness.",
            "Boosted confidence, practical awareness, and clarity toward academic and professional growth.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732225/IMG_6552_jpywgk.webp",
          title: "CODEX – Codewali Diwali",
          objective:
            "Rotaract Club of TCET organised CODEX – Codewali Diwali to make coding fun and festive by blending Diwali traditions with logic-based challenges, encouraging creativity, learning, and consistent skill development among members.",
          impact: [
            "Engaged 200+ participants in a five-day festive coding challenge across multiple programming languages.",
            "Improved logical thinking, debugging skills, and enthusiasm for learning through a unique mix of culture and technology",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732233/Screenshot_2025-11-15_180025_u29mlg.png",
          title: "Craft Your Career",
          objective:
            "To equip students with essential professional skills and digital awareness, helping them build confidence and prepare for future career opportunities.",
          impact: [
            "Equipped students with practical career-readiness skills, including LinkedIn optimisation, resume building, and ATS awareness.",
            "Boosted confidence and clarity by helping participants build a strong professional identity aligned with industry expectations.",
          ],
        },
      ],
    },
    {
      id: "International Service",
      title: "International Service",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732138/IMG_1854_ilx28n.jpg",
          title: "Nations In Numbers",
          objective:
            "Rotaract Club of TCET organised Nations In Numbers on World Population Day to raise awareness about global demographics, culture, and challenges through creative pitches, quizzes, and interactive rounds",
          impact: [
            "Encouraged participants to think critically about real-world issues, linking numbers with stories of people and nations.",
            "Sparked cultural curiosity, empathy, and awareness, leaving students more mindful of global diversity and responsibility.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732136/WhatsApp_Image_2025-07-27_at_20.56.21_2_wuyzv8.jpg",
          title: "Sanskriti - A cross border fiesta",
          objective:
            "Rotaract Club of TCET co-hosted Sanskriti - A Cross-Border Fiesta to promote global unity by exchanging cultures, traditions, and values beyond geographical boundaries.",
          impact: [
            "Connected 50+ Rotaract and Interact clubs from multiple countries through cultural exchange.",
            "Strengthened international bonds and fostered appreciation for global diversity and harmony.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732225/IMG_6552_jpywgk.webp",
          title: "CODEX – Codewali Diwali",
          objective:
            "Rotaract Club of TCET organised CODEX – Codewali Diwali to make coding fun and festive by blending Diwali traditions with logic-based challenges, encouraging creativity, learning, and consistent skill development among members.",
          impact: [
            "Engaged 200+ participants in a five-day festive coding challenge across multiple programming languages.",
            "Improved logical thinking, debugging skills, and enthusiasm for learning through a unique mix of culture and technology",
          ],
        },
        {
          image: "",
          title: "Beyond Words",
          objective:
            "Rotaract Club of TCET organised Beyond Words to promote inclusivity and empathy by introducing participants to basic Sign Language and highlighting the importance of accessible communication with the Deaf community.",
          impact: [
            "Created awareness and empathy through interactive, non-verbal activities.",
            "Equipped participants with basic Sign Language skills, fostering inclusivity and understanding",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732128/IMG_8505_rfcci5.webp",
          title: "Around the World 2.0",
          objective:
            "Rotaract Club of TCET organised Around the World 2.0 to provide an immersive global learning experience that promotes cultural understanding, strategic thinking, adaptability, and strong inter-club collaboration through interactive challenges and role-play.",
          impact: [
            "Enhanced international awareness through knowledge, strategy, and creative activities.",
            "Strengthened inter-club bonding, teamwork, and decision-making skills among participants.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732131/IMG_0703_tuw1fu.webp",
          title: "We fly together",
          objective:
            "Rotaract Club of TCET organised We Fly Together to introduce members to the world of aviation while connecting technical knowledge with personal experiences, emotions, and dreams in a meaningful and engaging way.",
          impact: [
            "Enhanced understanding of aviation concepts through interactive learning and discussion.",
            "Fostered emotional connection, creativity, and bonding by encouraging members to share stories, dreams, and reflections on flying.",
          ],
        },
      ],
    },
    {
      id: "Editorial",
      title: "Editorial",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732045/IMG-20250922-WA0025_hukoi5.webp",
          title: "QUIRK QUEST",
          objective:
            "Rotaract Club of TCET organised Play Time to celebrate creativity and critical thinking by engaging members in fun, fast-paced writing and reflection-based challenges in a digital format.",
          impact: [
            "Boosted creative confidence, wit, and imaginative thinking through interactive challenges.",
            "Encouraged participation, self-expression, and valuable insights into members’ perspectives and aspirations.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732051/IMG_20260207_16113515_dc0o9y.webp",
          title: "What’s The Tea ?",
          objective:
            "Rotaract Club of TCET organised What’s the Tea? to transform everyday campus conversations into creative news stories, allowing members to experience journalism through fun, writing, and storytelling.",
          impact: [
            "Encouraged creativity and reporting skills among members.",
            "Strengthened editorial engagement and club communication.",
          ],
        },
      ],
    },
    {
      id: "Public Relation",
      title: "Public Relation",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/f_auto,q_auto/v1770732009/IMG_5635_bsfivf.heic",
          title: "Pandal Pulse",
          objective:
            "Rotaract Club of TCET organised Pandal Pulse to connect with local communities during Durga Puja, promote cultural understanding, and represent the club through meaningful interactions and volunteering.",
          impact: [
            "Strengthened community relations and cultural awareness through on-ground engagement",
            "Enhanced the club’s public presence while fostering service, unity, and team bonding.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770732002/IMG_7300_u28jxk.webp",
          title: "Rotaract Spark: The Orientation Drive",
          objective:
            "Rotaract Club of TCET organised Rotaract Spark to introduce first-year students to opportunities for leadership, service, and personal growth, helping them feel welcomed, confident, and connected beyond academics.",
          impact: [
            "Helped first-year students clearly understand Rotaract’s vision, opportunities, and culture.",
            "Built early confidence, curiosity, and a strong sense of belonging among new students.",
          ],
        },
      ],
    },
    {
      id: "Shiksha",
      title: "Shiksha",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731920/PXL_20250926_053602340_qemhs1.jpg",
          title: "Techworld",
          objective: "To bridge the gap between technology and underprivileged students by providing hands-on STEM exposure through interactive and experiential learning.",
          impact: [" Introduced hundreds of students to practical concepts in Electricals, AR/VR, Renewable Energy, and Space Science.", "Sparked scientific curiosity, innovation, and awareness of future technological careers.", "Made advanced technology accessible to underprivileged learners, turning classroom theory into real-life experience."],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731886/PXL_20251111_054004855_1_1_lax7mg.jpg",
          title: "Career Compass - Career Counselling",
          objective: "To guide young students in exploring their interests and strengths while inspiring them to dream big about their future careers.",
          impact: ["Built self-confidence and self-awareness among students of grades 3–5.", "Provided clarity about different career paths in a simple and friendly manner.", "Created a supportive space where children felt motivated, heard, and inspired."],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1771004109/IMG20251222110406_flcj2s.jpg",
          title: "Robotics Workshop",
          objective: "To introduce school students to practical robotics through hands-on learning, fostering early interest in technology and innovation.",
          impact: ["Enhanced technical understanding, logical thinking, and problem-solving skills among 116 students.", "Strengthened teamwork and confidence through group-based assembly and competition.", "Inspired curiosity toward emerging technologies and future career pathways in robotics."],
          drive: "https://drive.google.com/drive/folders/1_z5sLLRSPPVRc85ysyvXO9TEgOmXpl8W?usp=drive_link"
        },
      ],
    },
    {
      id: "Sports",
      title: "Sports",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731800/IMG_1440_xwfhzm.webp",
          title: "Monsoon Matchday 2.0",
          objective:
            "To create a competitive football platform that encourages teamwork, sportsmanship, and bonding among participants.",
          impact: [
            "Engaged 156 participants, creating high energy and enthusiastic participation.",
            "Strengthened team spirit, discipline, and Rotaract fellowship through healthy competition.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731797/IMG_0362_nyytoc.webp",
          title: "The Mismatched League",
          objective:
            "To provide an inclusive sports platform where participants of all skill levels could compete confidently, bond as a team, and experience unity through diverse sporting challenges.",
          impact: [
            "Boosted participation, confidence, and team spirit among members.",
            "Strengthened bonding, sportsmanship, and Rotaract fellowship through healthy competition.",
          ],
        },
      ],
    },
    {
      id: "Entrenupenrship Development",
      title: "Entrenupenrship Development",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731674/IMG_E3340_u6zhi2.webp",
          title: "REBRAND RUMBLE",
          objective:
            "To encourage creative thinking and entrepreneurial skills by challenging participants to reimagine popular brands in fun, unconventional ways while promoting teamwork, innovation, and confident pitching.",
          impact: [
            "Boosted creativity, teamwork, and quick thinking through fun rebranding challenges.",
            "Built confidence, adaptability, and inter-collegiate bonding in an engaging setting.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731708/Screenshot_2025-12-12_190941_szrza2.png",
          title: "Startup Spark",
          objective:
            "To expose students to real-world entrepreneurship through lived experiences, helping them understand failure, resilience, and practical execution beyond theory.",
          impact: [
            "Shifted student mindset from idealized startups to realistic, action-driven entrepreneurship.",
            "Inspired confidence to start early, embrace failure, and work on real-world ideas with clarity.",
          ],
        },
      ],
    },
    {
      id: "Digital Communication",
      title: "Digital Communication",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731622/IMG_7581_njoxgf.webp",
          title: "Visual Velocity 2.0",
          objective:
            "To enhance creativity, teamwork, and design skills among students through an interactive, time-bound design competition combined with hands-on learning.",
          impact: [
            "Boosted confidence in digital design tools, especially Canva, even among beginners",
            "Strengthened creativity, collaboration, and problem-solving under pressure.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731624/IMG_2364_bi4esk.webp",
          title: "T-Frame: The Short Film Festival 2.0",
          objective:
            "To provide a creative platform for students to express social awareness through short films, while promoting storytelling, filmmaking skills, and civic responsibility.",
          impact: [
            "Boosted creativity, confidence, and filmmaking exposure among participants.",
            "Raised awareness on civic sense through powerful visual storytelling.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731627/IMG_6556_jgl5bv.webp",
          title: "Frames of light",
          objective:
            "To celebrate Diwali by providing a creative platform for members to capture and express festive emotions through photography and visual storytelling.",
          impact: [
            "Enhanced creativity, storytelling, and visual skills among participants.",
            "Strengthened cultural connection and digital engagement within the Rotaract community",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731629/IMG_2490_Original_xuzttt.webp",
          title: "Polaroid Souls",
          objective:
            "To encourage mindful exploration of Mumbai’s heritage through a photography walk that blends creativity, storytelling, and emotional connection with the city",
          impact: [
            "Deepened participants’ connection with Mumbai’s culture and heritage.",
            "Enhanced visual storytelling, observation, and creative expression.",
          ],
        },
      ],
    },
    {
      id: "Partner in Service",
      title: "Partner in Service",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731425/PXL_20250718_060353784_agpqog.webp",
          title: "PANACHE",
          objective: "",
          impact: ["", ""],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731439/IMG_7424_ivwn9z.webp",
          title: "Multilingual Elocution Competition",
          objective:
            "To provide a platform for students to express themselves confidently while celebrating India’s linguistic diversity through a multilingual elocution competition.",
          impact: [
            "Boosted creativity, confidence, and filmmaking exposure among participants.",
            "Fostered cultural pride, mutual respect, and appreciation of linguistic diversity.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731442/IMG_7851_dqe3xe.webp",
          title: "Interact Training Session || RBHS",
          objective:
            "To prepare and inspire Interactors for their upcoming roles by building leadership clarity, confidence, and a sense of responsibility through an interactive training session.",
          impact: [
            "Boosted leadership confidence and role clarity among Interactors.",
            "Encouraged emotional ownership, teamwork, and readiness for installation responsibilities.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731444/IMG-20251007-WA0016_hz5xf2.webp",
          title: "Interact Training Session || VNS",
          objective:
            "To mentor young Interactors by building leadership clarity, confidence, and emotional understanding of Rotary, Rotaract, and Interact roles.",
          impact: [
            "Simplified leadership roles and inspired confidence among students.",
            "Strengthened mentorship, emotional leadership, and the three-tier club bond.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731489/IMG_3618_wprma0.webp",
          title: "Christmas Chronicles 2.0",
          objective:
            "To create a meaningful Christmas celebration for children from Jawhar by offering them joy, new experiences, and a sense of belonging through shared festivities and interactions.",
          impact: [
            "Brought happiness, confidence, and unforgettable memories to the children.",
            "Strengthened empathy, collaboration, and the true spirit of service among volunteers.",
          ],
        },
      ],
    },
    {
      id: "Social Media Relatioin",
      title: "Social Media Relatioin",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731331/IMG_6557_yl3ri2.webp",
          title: "Bappa X Me",
          objective:
            "To celebrate Ganesh Chaturthi digitally by encouraging members to creatively express their personal bond and devotion to Bappa through reels.",
          impact: [
            "Created a shared online space filled with faith, creativity, and festive spirit.",
            "Boosted engagement and emotional connection through meaningful digital storytelling.",
          ],
        },
        {
          image:
            "http://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731360/IMG_6552_atnyxy.webp",
          title: "CODEX – Codewali Diwali",
          objective:
            "To make coding engaging and festive by blending Diwali traditions with fun, inclusive coding challenges that promote learning and creativity.",
          impact: [
            "Enhanced coding logic, problem-solving, and consistency among members.",
            "Created high engagement by connecting technical learning with festive spirit and teamwork.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731378/Screenshot_2026-02-08-00-29-06-09_1c337646f29875672b5a61192b9010f9_odjxi1.webp",
          title: "Checked - Rotaract Memories",
          objective:
            "To encourage year-end reflection by helping Rotaractors revisit, share, and celebrate their memories and journey through a simple digital engagement.",
          impact: [
            "Strengthened emotional bonding and sense of belonging among Rotaractors.",
            "Boosted digital engagement through shared memories and collective reflection.",
          ],
        },
        {
          image:
            "http://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731391/IMG_4799_bte4bg.webp",
          title: "Binge Bell - Christmas Edition",
          objective:
            "To spread festive cheer and strengthen digital engagement by creating an interactive Christmas movie-based social media campaign.",
          impact: [
            "Boosted audience engagement through consistent interactive stories and reels.",
            "Created a warm sense of community, nostalgia, and festive connection online.",
          ],
        },
      ],
    },
    {
      id: "HRD",
      title: "HRD",
      projects: [
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731130/Screenshot_2025-06-19_214754_c6ihwb.webp",
          title: "R.O.T.A.R",
          objective:
            "To provide members with a relaxing and emotionally uplifting space for connection, expression, and stress relief.",
          impact: [
            "Created a warm, stress-free space that strengthened bonding and emotional connection among members.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731293/IMG_6299_wyerow.webp",
          title: "Jamfinity",
          objective:
            "To provide members with a relaxed, musical space for emotional release, bonding, and stress relief after academic hours.",
          impact: [
            "Created a warm, stress-free environment that strengthened emotional connection and fellowship among members",
            "Encouraged spontaneous participation, collective joy, and a strong sense of belonging within the club.",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1770731235/IMG_6822_hrvdnh.png",
          title: "Chai Pe Charcha",
          objective:
            "To create a relaxed and safe space for BODs and Vice Presidents to communicate openly, share feedback, and strengthen teamwork.",
          impact: [
            "To create a relaxed and safe space for BODs and Vice Presidents to communicate openly, share feedback, and strengthen teamwork.",
            " Encouraged honest discussions, collaborative problem-solving, and stronger team bonding.",
          ],
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].id);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    };

    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-smooth bg-white dark:bg-stone-900 min-h-screen">
      {/* HERO — UNCHANGED */}
      <div className="flex md:min-h-[60vh] justify-center items-center p-6 sm:p-8 relative">
        <div className="relative w-[70%] h-[80vh]">
          <img
            src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756821756/DSC02604_jmaoow.jpg"
            alt="Projects"
            className="h-full w-full object-cover object-[center_95%] rounded-xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              EXPLORE OUR{" "}
              <span className="text-orange-500 dark:text-yellow-400">
                PROJECTS
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-base max-w-lg">
              Discover the transformative initiatives that define our commitment
              to positive change in the community.
            </p>
            <a href="/">
              <button className="mt-6 bg-orange-500 dark:bg-yellow-600 hover:bg-orange-600 dark:hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
                Get Involved
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* LINKS — UPDATED TAB STYLE */}
      <div className="flex justify-center relative bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-700 sticky top-[4.5rem] z-20">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-0 h-full px-3 bg-gradient-to-r from-white dark:from-stone-900 to-transparent z-30 flex items-center"
          >
            <span className="text-xl text-stone-600 dark:text-stone-300">
              ❮
            </span>
          </button>
        )}

        {/* Scroll Container */}
        <nav
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide text-base font-medium px-10 space-x-8"
        >
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setActiveTab(sec.id)}
              className={`relative py-4 whitespace-nowrap transition-colors
          ${
            activeTab === sec.id
              ? "text-orange-600 dark:text-yellow-400"
              : "text-stone-700 dark:text-stone-200 hover:text-orange-600 dark:hover:text-yellow-400"
          }
        `}
            >
              {sec.title}

              {activeTab === sec.id && (
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-orange-500 dark:bg-yellow-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-0 h-full px-3 bg-gradient-to-l from-white dark:from-stone-900 to-transparent z-30 flex items-center"
          >
            <span className="text-xl text-stone-600 dark:text-stone-300">
              ❯
            </span>
          </button>
        )}
      </div>

      {/* NEW SLIDER SECTIONS */}
      <div className="p-6 space-y-20">
        {sections.map((section) => (
          <SliderSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

/* ---------------- Slider Component ---------------- */

function SliderSection({ section }) {
  const [current, setCurrent] = useState(0);
  const total = section.projects.length;
  const project = section.projects[current];

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section id={section.id} className="scroll-mt-[9rem]">
      <h2 className="text-4xl text-center font-bold mb-8 text-orange-600 dark:text-yellow-400">
        {section.title}
      </h2>

      <div className="relative max-w-6xl mx-auto bg-stone-100 dark:bg-stone-800 rounded-3xl shadow-xl p-8">
        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-orange-500"
            >
              ❮
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-orange-500"
            >
              ❯
            </button>
          </>
        )}

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-2xl w-full h-80 object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 bg-white dark:bg-stone-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-yellow-400">
              {project.title}
            </h3>

            <p className="font-semibold text-gray-900 dark:text-stone-100">
              Objective:
            </p>
            <p className="mb-4 text-sm text-gray-700 dark:text-stone-300">
              {project.objective}
            </p>

            <p className="font-semibold text-gray-900 dark:text-stone-100">
              Impact:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-stone-300">
              {project.impact.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {section.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-orange-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
