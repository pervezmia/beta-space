export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing",
  "Animation", "Social Media", "UI/UX Design", "Cooking", "Photography",
];

export const levels = ["Beginner", "Intermediate", "Advanced"];

export const courses = [
  { id: 1, title: "Learn Figma from Basic", instructor: "purepearl studio", rating: 4.5, reviews: 120, level: "Beginner", price: 25, category: "UI/UX Design", image: "/images/courses/learn-figma.png" },
  { id: 2, title: "Build Digital Asset", instructor: "creative hub", rating: 4.3, reviews: 98, level: "Beginner", price: 29, category: "Marketing", image: "/images/courses/digital-asset.png" },
  { id: 3, title: "the Power of Big Data", instructor: "purepearl studio", rating: 4.8, reviews: 200, level: "Intermediate", price: 49, category: "Animation", image: "/images/courses/big-data.png" },
  { id: 4, title: "Balancing Productivity and...", instructor: "mindset lab", rating: 4.2, reviews: 75, level: "Beginner", price: 19, category: "Social Media", image: "/images/courses/productivity.png" },
  { id: 5, title: "Mastering Money Manage...", instructor: "finance pro", rating: 4.6, reviews: 160, level: "Intermediate", price: 39, category: "Marketing", image: "/images/courses/mastering.png" },
  { id: 6, title: "From Idea to Startup Succ...", instructor: "startup school", rating: 4.7, reviews: 180, level: "Advanced", price: 59, category: "Animation", image: "/images/courses/startup.png" },
  { id: 7, title: "Learn Figma from Basic", instructor: "purepearl studio", rating: 4.5, reviews: 120, level: "Beginner", price: 25, category: "UI/UX Design", image: "/images/courses/learn-figma.png" },
  { id: 8, title: "Build Digital Asset", instructor: "creative hub", rating: 4.3, reviews: 98, level: "Beginner", price: 29, category: "Marketing", image: "/images/courses/digital-asset.png" },
  { id: 9, title: "the Power of Big Data", instructor: "purepearl studio", rating: 4.8, reviews: 200, level: "Intermediate", price: 49, category: "Animation", image: "/images/courses/big-data.png" },
  { id: 10, title: "Balancing Productivity and...", instructor: "mindset lab", rating: 4.2, reviews: 75, level: "Beginner", price: 19, category: "Social Media", image: "/images/courses/productivity.png" },
  { id: 11, title: "Mastering Money Manage...", instructor: "finance pro", rating: 4.6, reviews: 160, level: "Intermediate", price: 39, category: "Marketing", image: "/images/courses/mastering.png" },
  { id: 12, title: "From Idea to Startup Succ...", instructor: "startup school", rating: 4.7, reviews: 180, level: "Advanced", price: 59, category: "Photography", image: "/images/courses/startup.png" },
  { id: 13, title: "Learn Figma from Basic", instructor: "purepearl studio", rating: 4.5, reviews: 120, level: "Beginner", price: 25, category: "UI/UX Design", image: "/images/courses/learn-figma.png" },
  { id: 14, title: "Build Digital Asset", instructor: "creative hub", rating: 4.3, reviews: 98, level: "Beginner", price: 29, category: "Marketing", image: "/images/courses/digital-asset.png" },
  { id: 15, title: "the Power of Big Data", instructor: "purepearl studio", rating: 4.8, reviews: 200, level: "Intermediate", price: 49, category: "Animation", image: "/images/courses/big-data.png" },
  { id: 16, title: "Balancing Productivity and...", instructor: "mindset lab", rating: 4.2, reviews: 75, level: "Beginner", price: 19, category: "Social Media", image: "/images/courses/productivity.png" },
  { id: 17, title: "Mastering Money Manage...", instructor: "finance pro", rating: 4.6, reviews: 160, level: "Intermediate", price: 39, category: "Music", image: "/images/courses/mastering.png" },
  { id: 18, title: "From Idea to Startup Succ...", instructor: "startup school", rating: 4.7, reviews: 180, level: "Advanced", price: 59, category: "Photography", image: "/images/courses/startup.png" },
];

export const COURSES_PER_PAGE = 9;


export const courseDetails = {
  1: {
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    instructor: "PurePearl Studio",
    instructorRole: "Professional Creator",
    instructorAvatar: "/images/testimonials/alex.png",
    rating: 4.6,
    reviews: 172,
    students: 799,
    level: "Intermediate",
    price: 25,
    totalLessons: 112,
    totalHours: 24,
    image: "/images/courses/course-2.jpg",
    category: "Marketing",
    description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.

In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.

As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
    sneakPeek: [
      "/images/courses/mastering.png",
      "/images/courses/productivity.png",
      "/images/courses/startup.png",
      "/images/courses/learn-figma.png",
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcases and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    curriculum: [
      { id: "01", title: "Introduction to Digital Assets", videos: 12 },
      { id: "02", title: "Design Principles for Impacts", videos: 21 },
      { id: "03", title: "Advanced Techniques in Digital Creation", videos: 16 },
    ],
    curriculumExtra: 99,
    includes: [
      "Learning Resources",
      "Quality Layout Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    lessons: [
      { id: 1, title: "Module 1: Introduction to Digital Assets", description: "Lay the groundwork with this module. Understanding Digital Elements and Navigating Design Software Tools. Dive into the essentials of digital asset creation." },
      { id: 2, title: "Module 2: Design Principles for Impact", description: "Master the principles that drive impactful designs with lessons on Color Theory in Digital Design and Typography Essentials. Elevate your visual communication skills." },
      { id: 3, title: "Module 3: User-Centric Design Strategies", description: "Understand Design Thinking in Digital Creation and delve into User Experience (UX) Essentials. Craft digital assets with a focus on your user's delight." },
      { id: 4, title: "Module 4: Interactive Media and Engagement", description: "Engage your audience with lessons like Creating Interactive Presentations and Integrating Multimedia Elements. Master the art of creating immersive digital experiences." },
      { id: 5, title: "Module 5: Project Showcases and Critique", description: "Perfect your presentation skills with Effective Presentation Techniques and embrace collaboration with Peer Critique and Collaboration. Showcase your work with confidence." },
      { id: 6, title: "Module 6: Designing Digital Assets for Various Platforms", description: "Adapt your digital creations for Mobile Platforms and optimize for Social Media. Ensure widespread accessibility and engagement across diverse digital landscapes." },
    ],
    lessonContent: "Immerse yourself in this course content as we break down each module into comprehensive lessons, providing practical insights into hands-on experiences.",
    lessonProgress: { label: "Learning Progress", value: 55 },
  },
};

export function getCourseDetail(id) {
  return courseDetails[String(id)] ?? {
    ...courseDetails[1],
    title: courses.find((c) => String(c.id) === String(id))?.title ?? courseDetails[1].title,
    subtitle: courseDetails[1].subtitle,
  };
}
// courses.js e courseDetails er pore add koro:
// export function getCourseDetail(id) {
//   return courseDetails[String(id)] ?? {
//     ...courseDetails[1],
//     title: courses.find((c) => String(c.id) === String(id))?.title ?? courseDetails[1].title,
//     subtitle: courseDetails[1].subtitle,
//   };
// }

