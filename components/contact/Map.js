import styled from "styled-components";

const Map = () => {
  return (
    <StyledMap>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.5564837766096!2d-83.0354947845453!3d42.30932817919028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cfd212b8f15%3A0x9b39e67ae5f68825!2sMasonic%20Temple%20Ballroom!5e0!3m2!1sen!2sca!4v1653564705890!5m2!1sen!2sca'
        width='433'
        height='445'
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  border: 1px solid #000;

  iframe {
    width: 100%;
    height: 100%;
    @media ${props => props.theme.breakpoints.tablet} {
      width: 100%;
      height: 445px;
    }
  }
`;

export default Map;
