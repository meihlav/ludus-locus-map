import styled from 'styled-components'

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;


  @media (max-width: 760px) {
    width: 100%;
  }

  .leaflet-container {
    background-color: var(--background);
  }
`

