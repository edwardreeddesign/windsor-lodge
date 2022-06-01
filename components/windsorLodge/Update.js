import Image from "next/image";
import styled from "styled-components";
import { H1, H2, H3, P } from "../../elements";
//Animations
import { motion } from "framer-motion";
import {
  scrollReveal,
  slideLeft,
  textFadeIn,
  titleAnimation,
} from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";

const Update = () => {
  const [element, controls] = useScroll();

  return (
    <Content ref={element} animate={controls} initial='hidden' exit='exit'>
      <H1 margin='1rem 0' color='Dark1' variants={slideLeft}>
        Windsor Lodge 403
      </H1>
      <H2 color='dark2' margin='1rem 0' variants={titleAnimation}>
        2008 Update
      </H2>
      <P variants={textFadeIn} margin='.75rem 0' color='Dark2'>
        The first mention of Windsor Lodge to the general public at large
        appeared in the Amherstburg Echo dated{" "}
        <span>September 21st, 1883.</span> it read as follows:
      </P>
      <SpecialSection variants={textFadeIn}>
        <p>
          &ldquo;A second lodge of FreeMasons has been opened in Windsor. This
          Lodge is known as the &ldquo;Windsor&rdquo;, and the charter members
          held the first communication last week. Lodge will be held on the
          second Wednesday in each month. The following are the officers and
          charter members of the new Lodge. J.E D&apos;Avignon, Worshipful
          Master, J. D. Thomas, Senior Warden, W. S. Bauer, Junior Warden,
          George Copeland, Secretary, James E. Guillett, Treasurer, J. A.
          Grosscup, Senior Deacon, Thomas McWhinney, Junior Deacon, T. M. White,
          Inner Guard.&rdquo;
        </p>
      </SpecialSection>
      <P variants={textFadeIn} margin='.75rem 0' color='dark2'>
        In <span>September 1983</span> Windsor Lodge celebrated its Hundredth
        Anniversary. It was given permission to embroider Gold Trim on our
        Aprons, signifying 100 years in existence.
      </P>
      <P variants={textFadeIn} margin='.75rem 0' color='dark2'>
        Approximately twenty years ago Windsor Lodge received a large bequest
        from the estate of longtime member Brother Stewart Douglas Band. This
        bequest changed the course of proceedings for the Lodge. Windsor Lodge
        continues to show young men the <span>Great Light of Masonry</span>, but
        now has the means to share one of the greatest tenants of Masonry...
        That being Charity. Over the last twenty years Windsor Lodge has taken
        philanthropy seriously donating to many dozens of Masonic and Community
        programs and charities. These acts of charity has helped the membership
        embrace the Ontario Masonic Foundations motto{" "}
        <span>&ldquo;For the Cause of Good&rdquo;</span>.
      </P>
      <H3 margin='2rem 0 0 0 ' color='dark1' weight='bold'>
        Malden Park War Memorial
      </H3>
      <TextImageWrapper variants={textFadeIn}>
        <P margin='.75rem 0' color='dark2'>
          In 2000, members of Windsor Lodge spearheaded a Millennium Project
          between the Windsor District, Erie District and the City of Windsor
          creating the Masonic War Memorial in Malden Park.
        </P>
        <div className='img'>
          <Image
            src='/images/lodge/warMemorial.jpeg'
            alt='Malden Park Masonic Memorial'
            layout='fill'
          />
        </div>
      </TextImageWrapper>
      <P variants={textFadeIn} margin='.75rem 0' color='dark2'>
        {" "}
        As Windsor Lodge celebrates its{" "}
        <span>One Hundred and Twenty Fifth Anniversary</span>, our early history
        was not overlooked. Prior to the festivities on September 20th, a
        granite tablet was unveiled on the grave of our First Worshipful Master
        John D&apos;Avignon, detailing his life and contributions to the
        community of Windsor and the Masonic Fraternity. It reads as follows;
      </P>
      <SpecialSection variants={textFadeIn}>
        <p>Very Worshipful Brother</p>
        <p>John Eugene D&apos;Avignon</p>
        <p>
          John D&apos;Avignon was born at Aux Sable Forks, New York State on
          June 14th, 1845.
        </p>
        <p>
          During the mid 1870&apos;s John moved to Windsor and opened
          D&apos;Avignon&apos;s Pharmacy.
        </p>
        <p>
          On <span>September 12th, 1883</span> John D&apos;Avignon was installed
          as the First Worshipful Master of Windsor Lodge No. 403.
        </p>
        <p>
          At the 1886 Grand Lodge held in Windsor, John D&apos;Avignon was
          elected Grand Senior Warden of the Grand Lodge of Canada in the
          Province of Ontario. In 1908 John was appointed Sheriff of Essex
          County. On <span>March 5th, 1917</span>, Very Worshipful Brother John
          D&apos;Avignon passed to the Grand Lodge above.
        </p>
      </SpecialSection>
      <H3 margin='2rem 0 0 0 ' color='dark1' weight='bold'>
        A Look to the Future
      </H3>
      <P variants={textFadeIn} margin='.75rem 0' color='dark2'>
        As Windsor Lodge marches towards its One Hundred and Fiftieth
        Anniversary in 2033, the Masonic principals of{" "}
        <span>Brotherly Love, Relief and Truth</span> will continue to guide us
        in the coming decades.
      </P>
      <figcaption>Gene Alfred Lotz, Windsor Lodge Historian</figcaption>
    </Content>
  );
};

const Content = styled(motion.div)`
  margin: 2rem auto;
  overflow: hidden;
  background: ${props => props.theme.colors.light2};
  padding: 0 1.5rem;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 1.5rem;
  }
`;

const SpecialSection = styled(motion.div)`
  font-size: clamp(0.775rem, 3vw, 0.875rem);
  font-style: italic;
  width: 75%;
  margin: 1rem auto;
  text-align: center;
  line-height: 1.175rem;
  color: ${props => props.theme.colors.dark2};
`;

const TextImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .img {
    position: relative;
    height: 12rem;
    max-width: 20rem;
    box-shadow: ${props => props.theme.shadows.shadow2};
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    overflow: hidden;
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;
export default Update;
