import React from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'

const TodoList = ({ items, toggleComplete, removeTodo, activeButton }) => (
  <Wrapper>
    {items.map(item => {
      const onComplete = e => {
        toggleComplete(item.id)
      };

      const onRemove = e => {
        removeTodo(item.id)
      };
      const button = () => {
          return activeButton()
      };

      return <TodoItem key={item.id} {...item} onComplete={onComplete} onRemove={onRemove} button={button}/>
    })}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TodoList
