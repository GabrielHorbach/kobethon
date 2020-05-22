import styled from 'styled-components';

export const Container = styled.section`
  background: #4E5B82;
  padding: 6rem 10rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: calc(100% - 7rem);

  @media (max-width: 1200px) {
    padding: 6rem 3rem;
  }

  @media (max-width: 650px) {
    height: calc(100vh - 7rem);
    padding: 0;
    flex-direction: column;
  }
`;

export const VideoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 650px) {
    margin: 0 auto;
  }

  video {
    width: 90%;
  }

  div {
    width: 82%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 950px) {
      flex-direction: column;
    }

    @media (max-width: 650px) {
      align-items: center;
    }

    p {
      color: #fff;
      display: flex;
      align-items: center;
      font-size: 1rem;

      @media (max-width: 1200px) {
        margin-top: 1.2rem;  
      }

      svg {
        margin-right: .5rem;
      }
    }

    button {
      width: auto;
      border: none;
      padding: 1rem 1.5rem;
      background:#75C46B;
      color: #fff;
      border-radius: 5px;
      font-size: 1rem;
      transition: all ease .2s;
      opacity: .5;

      @media (max-width: 900px) {
        padding: .8rem 1.3rem;
      }
 
      @media (max-width: 650px) {
        margin-top: 1rem;
      }

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;

export const InfoWrapper = styled.article`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3rem;
  margin-left: 3rem;

  @media (max-width: 800px) {
    margin-top: 2rem;
  }

  @media (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    margin: 3rem auto 0;
    padding: 1rem 3rem 0;
    align-items: flex-start;
  }

  p {
    color: #fff;
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
`;
