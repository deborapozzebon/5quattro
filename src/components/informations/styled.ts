import styled from "styled-components";

export const InformationStyled = styled.section`
  color: white;
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .main-information {
      display: flex;
      .left {
        padding: 0px 20px;
        .vertical-line {
          height: 100%;
          width: 8px;
          background-color: rgb(121, 99, 71);
        }
      }
      .right {
        .top-right {
          display: flex;
          align-items: center;
          padding-top: 20px;
          .top-right-text {
            font-size: 25px;
            font-weight: 200; 
            white-space: nowrap;
            padding-right: 20px;
          }
          .horizontal-line {
            height: 1px;
            width: 100%;
            background-color: rgb(139, 139, 141);
          }
        }
        .bottom-right {
          display: flex;
          flex-direction: column;
          .bottom-right-text-principal {
            font-weight: 700;
            font-size: 45px;
            padding: 10px 0;
          }
          .bottom-right-text {
            font-size: 18px;
            font-weight: 200;
            margin: 10px 0;
            padding-top: 10px;
          }
        }
      }
    }
  }

  @media(max-width:950px){
    .container .main-information {
      margin-right: 20px;
      margin-left: 5px;
    }
  }
`;
