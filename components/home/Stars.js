import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Stars = () => {
  return (
    <StarWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '-960deg',
          }}
          transition={{ type: 'spring', duration: 3 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '1080deg',
          }}
          transition={{ duration: 2.5, ease: 'linear' }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '720deg',
          }}
          transition={{ ease: 'linear', duration: 3.5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '-1440deg',
          }}
          transition={{ duration: 2.5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '1080deg',
          }}
          transition={{ duration: 2.5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '-720deg',
          }}
          transition={{ duration: 2.5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="star star7"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            rotate: '-900deg',
          }}
          transition={{ duration: 2.5 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </StarWrapper>
  );
};

const StarWrapper = styled(motion.div)`
  margin-top: 12rem;
  position: absolute;
  top: 1rem;
  right: 1rem;

  .star1 {
    position: absolute;
    top: 2rem;
    right: 5.5rem;
  }
  .star2 {
    position: absolute;
    top: 4rem;
    right: 5.5rem;
  }
  .star3 {
    position: absolute;
    top: 2.75rem;
    right: 3.75rem;
  }
  .star4 {
    position: absolute;
    top: 5.25rem;
    right: 3.75rem;
  }
  .star5 {
    position: absolute;
    top: 1.45rem;
    right: 1.8rem;
  }
  .star6 {
    position: absolute;
    top: 3.75rem;
    right: 1.8rem;
  }
  .star7 {
    position: absolute;
    top: 1rem;
    right: 0rem;
  }

  svg {
    height: 1.75rem;
    width: 1.75rem;
    stroke: ${props => props.theme.colors.main3};
    /* fill: ${props => props.theme.colors.dark2}; */
  }
`;

export default Stars;
