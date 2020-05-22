import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #67D493;
  display: flex;
  align-items: center;
  padding: 0 15rem;

  @media (max-width: 1200px) {
    padding: 0 3rem 0 5rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0 3rem 10%;
    height: auto;
  }

  div {
    width: 50%;

    @media (max-width: 650px) {
      width: 100%;
      margin-top: 7%;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: #f1f1f1;

      @media (max-width: 1100px) {
        font-size: 1.3rem;
        line-height: 2.3rem;
      }

      @media (max-width: 800px) {
        font-size: 1.2rem;
        line-height: 2.2rem;
      }
    }
  }

  img {
    width: 50%;
    margin-top: -2.5rem;

    @media (max-width: 650px) {
      margin-top: 2rem;
      width: 60%;
    }
  }
`;

export default Container;