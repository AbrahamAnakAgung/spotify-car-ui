import * as React from "react"
import styled from "styled-components"
import Icon from "react-icons-kit"
import { Link } from "gatsby"
import { spotify } from "react-icons-kit/fa/spotify"
import { home } from "react-icons-kit/feather/home"
import { podcast } from "react-icons-kit/fa/podcast"
import { ic_queue_music } from "react-icons-kit/md/ic_queue_music"
import { ic_fiber_new } from "react-icons-kit/md/ic_fiber_new"
import { COLORS } from "../../constants"

function TopNav() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo>
          <div className="logo-wrapper" style={{ color: "rgb(29,185,84)" }}>
            <Icon icon={spotify} size="40" />
          </div>
        </Logo>
        <SpotifyNav>
          <SpotifyNavLists>
            <SpotifyNavList>
              <StyledGatsbyLink to="/new" activeClassName="active">
                <Icon icon={ic_fiber_new} size="24" />
              </StyledGatsbyLink>
            </SpotifyNavList>
            <SpotifyNavList>
              <StyledGatsbyLink to="/" activeClassName="active">
                <Icon icon={home} size="24" />
              </StyledGatsbyLink>
            </SpotifyNavList>
            <SpotifyNavList>
              <StyledGatsbyLink to="/podcast" activeClassName="active">
                <Icon icon={podcast} size="24" />
              </StyledGatsbyLink>
            </SpotifyNavList>
            <SpotifyNavList>
              <StyledGatsbyLink to="/playlist" activeClassName="active">
                <Icon icon={ic_queue_music} size="24" />
              </StyledGatsbyLink>
            </SpotifyNavList>
          </SpotifyNavLists>
        </SpotifyNav>
      </InnerWrapper>
    </Wrapper>
  )
}

const StyledGatsbyLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.gray};
  background: ${COLORS.grayDark};

  &.active {
    background: ${COLORS.gray};
    color: ${COLORS.white};
  }
`

const SpotifyNavList = styled.li`
  &:not(:first-child) {
    border-left: 1px solid black;
    color: gray;
    background: inherit;
  }
`

const SpotifyNavLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  list-style-type: none;
`

const SpotifyNav = styled.div`
  width: 100%;
  height: 100%;
`

const Logo = styled.div`
  width: 7.6rem;
  display: flex;
  justify-content: center;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background: #333;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  padding-left: 7rem;
`

export { TopNav }
