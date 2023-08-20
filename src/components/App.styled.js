import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
font-size: 24px;
text-decoration: none;
color: #34312D;
margin: 10px;
border: 1px solid gray;
border-radius: 5px;
padding: 10px;
display: inline-block;
background-color: lightgray;
width: 100px;

transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

&.active {
border-color: black;
background-color: white;
}
&:hover{
    color: #14110F;
    border-color: #14110F;
    background-color: #D9C5B2;
}
`
export const WrapNavStyled = styled.nav`
margin: 20px;
margin-bottom: 40px;
`