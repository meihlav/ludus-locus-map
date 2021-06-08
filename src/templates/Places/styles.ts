import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  text-align: center;
  justify-content: center;
  max-width: var(--container);
  padding-bottom: var(--large);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`

export const Hover = styled(motion.div)``

export const Gallery = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--small);
  margin-top: var(--medium);

  @media (min-width: 760px) {
    flex-direction: row;
  }

  img {
    @media (min-width: 760px) {
    width: var(--mobile);
    height: var(--mobile);
  }

    @media (min-width: 1024px) {
    width: var(--desktop);
    height: var(--desktop);
  }

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
