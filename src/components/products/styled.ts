import styled from 'styled-components'

export const ProductsStyled = styled.div`
  width: 100%;
  position: relative;
  background-color: rgb(29, 29, 31);
  color: rgb(139, 139, 141);
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    padding: 50px 0;
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

  .images {
    display: flex;
    .first-column, .third-column {
      display: flex;
      flex-direction: column;
    }
    img :hover {
      filter: grayscale(100%)
    }
  }
`