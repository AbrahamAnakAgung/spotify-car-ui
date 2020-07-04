import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {basic_magnifier} from 'react-icons-kit/linea/basic_magnifier'

const SearchBar = () => (
   <SearchForm>
      <SearchInput type='text' placeholder='Search' />
      <SearchButton className='search-button'>
         <Icon icon={basic_magnifier} size={20} />
      </SearchButton>
   </SearchForm>
);

const SearchForm = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const SearchInput = styled.input`
   width: 90%;
   margin-right: -4.25rem;
   border-radius: 10rem;
   border: none;
   background-color: gray;
   font-family: inherit;
   padding: .8rem 1.4rem;
   transition: all 250ms;
   
   &:focus {
      outline: none;
      width: 100%;
      background-color: lightgray;
   }
`;

const SearchButton = styled.button`
   font-family: inherit;
   font-size: inherit;
   color: black;
   border: none;
   background-color: gray;
   transition: background-color 250ms;

   ${SearchInput}:focus + & {
      background-color: lightgray;
   }
`;

export default SearchBar;