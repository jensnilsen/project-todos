/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'

export const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fridge.actions.addItem(task))
    setTask('')
  }

  return (
    <NewTaskForm onSubmit={handleSubmit}>
      <AddNewTask
        type="submit"
        active={task.length > 0 ? true : false}
        disabled={task.length === 0}
        onClick={handleSubmit}
      >
        +
      </AddNewTask>
      <Label>
        <InputTask
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task"
        />
      </Label>
    </NewTaskForm>
  )
}

const NewTaskForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  height: 40px;
  background: #e3e6e4;
`
const InputTask = styled.input`
  width: 100%;
  height: 15px;
  font-size: 20px;
  padding: 5px;
  background: transparent;
  width: 80vw;
  border: none;
  color: rgb(37, 37, 37);
  @media (min-width: 769px) {
    width: 600px;
  }
`
const Label = styled.label``

const AddNewTask = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(37, 37, 37);
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0px 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.active ? '1' : '0.4')};
`
