import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { ClearButton } from './ClearButton'

export const Header = () => {
  // To get all tasks
  const taskStore = useSelector((store) => store.fridge.items)

  // To get tasks with completed status true
  const completedTasks = taskStore.filter((task) => task.done === true)

  return (
    <HeaderSection>
      <Wrapper>
        <HeaderText>To-Do</HeaderText>
        <RegularText>{moment().format('MMM Do')}</RegularText>
      </Wrapper>
      <Wrapper>
        <RegularText>
          {completedTasks.length}/{taskStore.length}done
        </RegularText>
        <ClearButton />
      </Wrapper>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
  background: #8e6e53;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
`
const HeaderText = styled.h1`
  font-size: 50px;
  margin: 10px;
  color: rgb(37, 37, 37);
`
const RegularText = styled.p``

const Wrapper = styled.div``