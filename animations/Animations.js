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
export const buttonFadeIn2 = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1, y: "5rem" },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  transition: {
    type: "spring",
    duration: 0.5,
    when: "beforeChildren",
    staggerChildren: 0.3,
  },
};

export const photoIn = {
  hidden: { opacity: 0, x: "5rem" },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.85, type: "tween" },
  },
};

export const photoFadeIn = {
  hidden: { opacity: 0, scale: 0.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, type: "spring" },
  },
};

export const titleReveal = {
  hidden: {
    y: "4rem",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      type: "tween",

      staggerChildren: 0.25,
    },
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: "-15rem",
    scale: 0.25,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", duration: 1.75 },
  },
};

export const textFadeIn = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween" },
  },
};

export const titleAnimation = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.75, type: "spring" } },
};
