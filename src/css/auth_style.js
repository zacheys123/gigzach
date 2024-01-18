import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:navy-blue;
  
  .auth__left{
    padding:1rem;
    flex:.4;
 
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    h4{
      text-align:center;
    }
    .typo{
      font-family:monospace;
      font-size:1.4rem;
      padding:.4rem;
    }
    
h5{
  font-family:'soffia' serif;
  font-size:1rem;
  padding:.7rem;
}
  }
  .auth__right{
    flex:.8;
    background:#16222d;
.img{
  height:400px;
  width:400px;
}
.img1{
  height:100px;
  width:100px;
  z-index:999;
}
  .form{
    width: 100%;
    height: 100%;
  }
`
