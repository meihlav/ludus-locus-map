import styled from 'styled-components'

export const Wrapper = styled.div`
position: fixed;
z-index: 1100; // bigger than leaflet
top: var(--medium);
right: var(--medium);
color: var(--white);
cursor: pointer;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 1));

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: #fff;
    }
  }
`
