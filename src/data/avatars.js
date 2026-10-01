import AvatarStack from "@/components/ui/AvatarStack";

export const defaultAvatars = [
  { src: "/images/testimonials/alex.png", alt: "Student 1" },
  { src: "/images/testimonials/sarah.png", alt: "Student 2" },
  { src: "/images/testimonials/james.png", alt: "Student 3" },
  { src: "/images/testimonials/alex.png", alt: "Student 4" },
];

<AvatarStack avatars={defaultAvatars} total="2K+" size="md" />