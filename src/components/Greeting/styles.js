import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 7rem;
  background: #4E5B82;
  padding-top: 4rem;

  @media (max-width: 650px) {
    padding: 2rem 0;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-size: 4rem;

    @media (max-width: 650px) {
      font-size: 3rem;
    }
  }
`;

export default Header;
