import React from 'react'

import styled from 'styled-components'

const FilterButton = ({ html, onFilter}) => {
    const handleClick = e => {
        onFilter(e.target.innerHTML);
    };
    return (
        <Button onClick={handleClick}>{html}</Button>
    )
};

const Button = styled.button`
  background: #3b4049;
  color: #8d96a8;
  border: none;
  border-radius: 10px;
  padding: 10px 18px;
  font-size: 24px;
  margin-bottom: 16px;
  max-width: 30%;
  cursor: pointer;
  outline: none;

`;

export default FilterButton
