import React from 'react'

import styled from 'styled-components'

const TodoItem = ({ text, completed, onComplete, onRemove, button }) => (
  <Wrapper onClick={onComplete} button={button()} completed={completed}>
    <code>
      [{completed ? 'v' : '  '}] <Text completed={completed}>{text}</Text> <span className="remove" onClick={onRemove}>x</span>
    </code>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin: 20px 0;
  display: ${props => a(props.button, props.completed)};
  &>code{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
  }
  & span.remove{
    opacity: 0;
  }
  &:hover span.remove{
    opacity: 1;
  }
`;

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
function a(active, completed) {
    if(active === 'All') {
        return 'block';
    }
    if(active === 'Active'){
        return completed ? 'none' : 'block';
    }
    if(active === 'Completed'){
        return completed ? 'block' : 'none';

    }
}

export default TodoItem
