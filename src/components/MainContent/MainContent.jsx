import * as React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants.js"
import { AlbumsList } from "../AlbumsList/AlbumsList.jsx"

function MainContent(props) {
  return (
    <Container>
      <div className="wrapper">
        <Row>
          {props.data.map((title, idx) => {
            return (
              <li key={idx}>
                <div className="user-row-recomendation">
                  <RowTitle>
                    <h4>{title}</h4>
                  </RowTitle>
                  <div className="recomendation-albums">
                    <div>
                      <AlbumsList />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </Row>
      </div>
    </Container>
  )
}

const RowTitle = styled.div`
  text-transform: capitalize;
  font-size: 2.4rem;
  line-height: 3.2rem;
  position: relative;
  padding-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.gray};
  }
`

const Row = styled.ul`
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: row;
  row-gap: 3rem;
`

const Container = styled.div`
  margin-left: 7rem;
  margin-top: 6rem;
  padding: 2rem;
  background: black;
  color: ${COLORS.white};
  overflow-y: auto;
`

export { MainContent }
