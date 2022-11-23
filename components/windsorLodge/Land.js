import styled from 'styled-components';
import { H1, P } from '../../elements';
//Animations
import { motion } from 'framer-motion';
import { photoIn, slideLeft, scrollReveal } from '../../animations/Animations';
import { useScroll } from '../../helpers/useScroll';

const Land = () => {
  const [element, controls] = useScroll();
  return (
    <Content
      transition={{ duration: 0.85 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <H1 variants={slideLeft} weight="bold" margin="2rem 0" color="dark1">
        Land Acknowledgement
      </H1>
      <P size="small" variants={photoIn} margin="1rem 0">
        We are on land and surrounded by water, originally inhabited by
        Indigenous Peoples who have traveled this area since time immemorial.
        This territory is within the lands honoured by the Wampum Treaties;
        agreements between the Anishinaabe, Haudenosaunee, Lenni Lenape and
        allied Nations to peacefully share and care for the resources around the
        Great Lakes. Specifically, we would like to acknowledge the presence of
        the Three Fires Confederacy (Ojibwe, Odawa, Potawatomi) and Huron/Wendat
        Peoples. We are dedicated to honouring Indigenous history and culture
        while remaining committed to moving forward respectfully with all First
        Nations, Inuit, and Métis
      </P>
      <P size="small" variants={photoIn} margin="1rem 0">
        Nous reconnaissons que nous sommes sur terre et entourés d`&apos;eau,
        habités à l`&apos;origine par des peuples autochtones qui ont parcouru
        cette région depuis des temps immémoriaux. Ce territoire fait partie des
        terres honorées par les traités Wampum ; accords entre les Anishinaabe,
        Haudenosaunee, Lenni Lenape et leurs alliés Nations Unies à partager
        pacifiquement et à prendre soin des ressources autour des Grands Lacs.
        Plus précisément, nous tenons à souligner la présence de la
        Confédération des Trois Feux (Ojibwe, Odawa, Potawatomi) et des peuples
        Huron/Wendat. Nous nous engageons à honorer l`&apos;histoire et la
        culture autochtones. tout en restant déterminé à aller de l`&apos;avant
        dans le respect avec toutes les Premières Nations, les Inuits et les
        Métis.
      </P>
    </Content>
  );
};

const Content = styled(motion.div)`
  background: ${props => props.theme.colors.main3};
  overflow: hidden;
  padding: 1rem 4rem;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 2rem;
  }
`;

export default Land;
