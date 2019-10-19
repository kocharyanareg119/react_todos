import React from 'react'

import styled from 'styled-components'
import FilterButton from "./FilterButton";

const FilterDiv = ({ html, onFilter}) => {


    return (
        <Div>
            {['All', 'Active', 'Completed'].map(v => <FilterButton onFilter={onFilter} key={v} html={v}/>)}
        </Div>
    )
};

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;
export default FilterDiv
