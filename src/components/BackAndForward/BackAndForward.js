import React from "react"
import styled from "styled-components"
import Icon from "react-icons-kit"
import { arrows_left } from "react-icons-kit/linea/arrows_left"
import { arrows_right } from "react-icons-kit/linea/arrows_right"

const BackAndForward = () => (
  <Wrapper>
    <Button>
      <Icon icon={arrows_left} size={"32"} />
    </Button>
    <Button>
      <Icon icon={arrows_right} size={"32"} />
    </Button>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  border: none;
  border-radius: none;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
  color: inherit;

  &:hover {
    color: red;
  }
`

export default BackAndForward
