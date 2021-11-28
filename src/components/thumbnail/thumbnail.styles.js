import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 10px;
  transition: all 0.3s;
  object-fit: cover;
  width: 100%;
  max-width: 720px;
  animation: animateThumbnail 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
