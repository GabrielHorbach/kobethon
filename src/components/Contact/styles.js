import styled from 'styled-components';

const Container = styled.footer`
  background: #2d2d2d;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 1100px) {
      font-size: 1.3rem;
      line-height: 2.3rem;
    }

    @media (max-width: 800px) {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }

  div {
    width: auto;

    svg {
      font-size: 3.8em;
      color: #fff;
      margin: 0 .2rem;
      opacity: .7;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }

      @media (max-width: 1100px) {
        font-size: 3.2rem;
      }

      @media (max-width: 800px) {
        font-size: 2.95rem;
      }
    }
  }
`;

export default Container;