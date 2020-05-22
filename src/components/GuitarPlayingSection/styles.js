import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  height: 100vh;
  padding: 0 8rem;
  align-items: center;
  background: #f1f1f1;
  position: relative;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 10%;
  }

  img {
    width: 50%;
    object-fit: contain;
    margin-right: 4rem;
    margin-left: -5rem;
    height: 70%;

    @media (max-width: 900px) {
      margin-left: -1rem;
      margin-right: 3rem;
      width: 40%;
    }

    @media (max-width: 650px) {
      width: 25%;
      height: auto;
      margin: 10rem 0 1rem;
    }
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    height: auto;
    margin-top: 2.5rem;

    @media (max-width: 650px) {
      margin-top: 0;
      width: 100%;
    }

    h2 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 3.5rem;
      position: absolute;
      top: 10%;
      color: #4E5B82;

      @media (max-width: 900px) {
        font-size: 2.5rem;
        top: 7%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    p {
      color: #4E5B82;
      font-size: 1.5rem;
      line-height: 2.5rem;

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
`;

export default Container;
