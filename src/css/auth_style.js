import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:navy-blue;
  
  .auth__left{
    flex:.2;
    background:black;
  }
  .auth__right{
    flex:.8;
    background:green;
  }
  .form{
    width: 100%;
    height: 100%;
  }
`
