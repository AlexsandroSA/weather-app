import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display:inline-block;
    padding:0.5em 3em;
    margin:0 0.3em 0.3em 0;
    color: #494949;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    box-sizing: border-box;
    border: 4px solid #494949;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    text-align:center;
    text-decoration:none;
    text-transform:uppercase;
    transition: all 0.4s ease 0s;

  &:hover{
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }

  &:active{
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }
`;
