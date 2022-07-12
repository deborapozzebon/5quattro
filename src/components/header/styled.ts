import styled from 'styled-components'

export const HeaderStyled = styled.nav`
  width: 100%;

  @media(max-width:950px){
    position: fixed;
    top: 0;
    padding: 15px;
    z-index: 10;  
  }

  .container {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    position: relative;
    z-index: 6;
    &:hover {
      filter: saturate(1);
    }
  }
  ul {
    list-style: none;
    display: flex;

    &.active{
      pointer-events: auto;
      opacity: 1;
    }

    @media(max-width:950px){
      opacity:0;
      pointer-events: none;
      width:100vw;
      height:100vh;
      position:fixed;
      top:0;
      left:0;
      align-items:center;
      flex-direction:column;
      background:#FFF;
      justify-content:center;
      z-index:5;
    }
    li {
      padding: 0px 20px;
      color: rgb(139, 139, 141);
      font-weight: bold;
      @media(max-width:950px){
        padding:10px 0px;
      }
      &:hover {
        color: white;
      }
    }
  }

  .btn_menu{
    display: none;
    position: relative;
    z-index: 6;
    svg {
      fill: rgb(139, 139, 141);
    }
    @media(max-width: 950px){
      display: block;
    }
  }
`