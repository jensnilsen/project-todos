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
    <form onSubmit={handleSubmit}>
      <AddNewTask
        type="submit"
        active={task.length > 0 ? true : false}
        disabled={task.length === 0}
        onClick={handleSubmit}
      >
        +
      </AddNewTask>
      <label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task"
        />
      </label>
    </form>
  )
}

const AddNewTask = styled.button`
  border: none;
  background-color: #fff;
  color: #000;
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0px 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.active ? '1' : '0.4')};
`