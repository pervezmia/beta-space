export const heroContent = {
  titleLines: ["Get Access to Hundreds", "Courses Available"],
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",
};

export const heroCards = {
  category: { name: "UI/UX Design", courses: "200 Courses", students: "1000+ Students" },
  progress: { label: "Learning Progress", value: 55 },
  students: {
    title: "Happy Students",
    rating: "4.5",
    reviews: "(240)",
    total: "2K+",
    avatars: [1, 2, 3, 4, 5, 6].map((n) => ({
      // Unsplash Source থেকে সরাসরি ডাইনামিক রেন্ডম ফেস ইমেজ চলে আসবে
      src: `https://picsum.photos/seed/student${n}/100/100`,
      alt: `Happy student ${n}`,
    })),
  },
};

export const heroShapes = [
  { src: "/images/hero/shape-squiggle-lime.png", width: 384, height: 546, position: "left-0 top-[171px] w-[192px]", amplitude: 10, duration: 6 },
  { src: "/images/hero/shape-squiggle-white-sm.png", width: 230, height: 248, position: "left-[214px] top-[393px] w-[115px]", amplitude: 8, duration: 5 },
  { src: "/images/hero/Electric-lime.png", width: 330, height: 600, position: "left-[1275px] top-[144px] w-[165px]", amplitude: 10, duration: 7 },
  { src: "/images/hero/shape-cylinder-lime.png", width: 256, height: 276, position: "left-[1130px] top-[373px] w-[128px]", amplitude: 8, duration: 5.5 },
  { src: "/images/hero/circle-white.png", width: 480, height: 514, position: "left-[64px] top-[629px] w-[240px]", amplitude: 12, duration: 6.5 },
  { src: "/images/hero/Frame.png", width: 394, height: 532, position: "left-[1196px] top-[599px] w-[197px]", amplitude: 10, duration: 6 },
];