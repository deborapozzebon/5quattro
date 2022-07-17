import styled from 'styled-components'

export const AboutStyled = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    padding-top: 50px;
    .vertical-line {
      margin-right: 10px;
      height: 50px;
      width: 8px;
      background-color: rgb(121, 99, 71);
    }
    .main-title {
      font-weight: 700;
      font-size: 25px;
      padding: 10px 0;
    }
  }
  .content {
    display: flex;
    padding-bottom: 50px;
    .description {
      text-align: justify;
      padding: 20px;
      max-width: 50%;
    }
    img {
      max-width: 50%;
    }
  }
`