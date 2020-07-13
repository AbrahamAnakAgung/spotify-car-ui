import * as React from "react"
import styled from "styled-components"
import Icon from "react-icons-kit"
import { home } from "react-icons-kit/ionicons/home"
import { musicNote } from "react-icons-kit/ionicons/musicNote"
import { phone } from "react-icons-kit/fa/phone"
import { navigate } from "react-icons-kit/ionicons/navigate"
import { ic_settings } from "react-icons-kit/md/ic_settings"
import { COLORS } from "../../constants"

function LeftMenu() {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <MainMenuLists>
          <MainNav>
            <Icon icon={home} size={"32"} />
          </MainNav>
          <MainNav>
            <Icon icon={musicNote} size={"32"} />
          </MainNav>
          <MainNav>
            <Icon icon={phone} size={"32"} />
          </MainNav>
          <MainNav>
            <Icon icon={navigate} size={"32"} />
          </MainNav>
          <MainNav>
            <Icon icon={ic_settings} size={"32"} />
          </MainNav>
        </MainMenuLists>
      </div>
    </Wrapper>
  )
}

const MainNav = styled.li`
  padding: 2rem;
  color: ${COLORS.gray};

  &:nth-child(2) {
    color: ${COLORS.white};
  }
`

const MainMenuLists = styled.ul`
  list-style-type: none;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: ${COLORS.blackDark};
  z-index: 999;
`

export { LeftMenu }
