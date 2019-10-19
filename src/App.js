import React from 'react'
import { Provider, Subscribe } from 'unstated'

import styled from 'styled-components'

import TodosContainer from './store'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import FilterDiv from './components/FilterDiv'

function App () {
    // todos.removeTodo(6);
    // window.localStorage.setItem('appState', JSON.stringify({list: []}));
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todos => {

              const list = todos.getList();
            return (
              <TodosWrapper>
                <AddTodo onAddTodo={todos.createTodo} />
                <TodoList items={list} toggleComplete={todos.toggleComplete} activeButton={todos.getActiveButton} removeTodo={todos.removeTodo}/>
                <FilterDiv onFilter={todos.filterTodo}/>
              </TodosWrapper>
            )
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

const TodosWrapper = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
`;

export default App
