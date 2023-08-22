import styled from 'styled-components';


export const ButtonStyled = styled.button`
font-size: 17px;
text-decoration: none;
color: #34312D;
margin: 10px;
border: 1px solid gray;
border-radius: 5px;
padding: 10px;
display: inline-block;
background-color: lightgray;
width: 140px;
cursor: pointer;

transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    color: #14110F;
    border-color: #14110F;
    background-color: #D9C5B2;
}
`
export const ButtonWrapStyled = styled.div`
display: flex;
`