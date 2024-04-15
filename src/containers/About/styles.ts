import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
