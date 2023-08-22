import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardWrapStyled = styled.div`
margin-left: 25px;
display: flex;
gap: 35px;

`
export const InfoMovieCardStyled = styled.div`
max-width: 600px
`
export const HeadingAddInfoStyled = styled.h4`

font-size: 20px;
margin-top: 35px;
`
export const AddInfoWrapStyled = styled.div`
margin-left: 25px;
`

export const ListWrapAddStyled = styled.ul`
list-style: none;
color: #34312D;
font-size: 18px;
text-decoration: none;
`

export const LinkStyled = styled(Link)`
font-size: 17px;
text-decoration: none;
color: #34312D;
margin: 25px;
border: 1px solid gray;
border-radius: 5px;
padding: 8px;
display: inline-block;
background-color: lightgray;
width: 90px;
cursor: pointer;

transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    color: #14110F;
    border-color: #14110F;
    background-color: #D9C5B2;
}
`