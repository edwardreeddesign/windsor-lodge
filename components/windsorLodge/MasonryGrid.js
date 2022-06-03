import styled from "styled-components";
import { motion } from "framer-motion";
import { photoIn } from "../../animations/Animations";
import Masonry from "react-masonry-css";
import { GridImages } from "../../data/GridImage";
import Images from "./Images";

const MasonryGrid = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
  };
  return (
    <GridWrapper variants={photoIn}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {GridImages.map(image => (
          <Images key={image.alt} image={image} />
        ))}
      </Masonry>
    </GridWrapper>
  );
};

const GridWrapper = styled(motion.div)`
  width: 100%;
  margin: 4rem 0;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 1.5rem;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    margin-bottom: 20px;
  }

  @media (max-width: 760px) {
    .my-masonry-grid {
      margin-left: -25px; /* gutter size offset */
      flex-wrap: wrap;
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 10px; /* space between items */
    }
  }
`;

export default MasonryGrid;
