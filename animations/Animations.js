export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const titleFade1 = {
  hidden: {
    opacity: 0,
    scale: 3,
  },
  show: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.75,
    },
  },
};

export const titleFade2 = {
  hidden: { opacity: 0, scale: 0.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
};

export const buttonFadeIn = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1, delay: 2 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1, y: "5rem" },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  transition: { type: "tween" },
};
