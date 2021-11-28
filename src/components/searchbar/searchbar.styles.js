import styled from 'styled-components'

export const Wrapper = styled.div`
  /* width: 100%;
  background-color: var(--darkGrey);
  height: 3.5rem;
  padding: 12px; */
  display: flex;
  align-items: center;
  height: 80px;
  background: var(--darkGrey);
  padding: 0 20px;
`

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: none;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`

// export const SearchInput = styled.input`
//   margin: 0 auto;
//   display: block;
//   width: 55%;
//   border: none;
//   border-radius: 12px;
//   background-color: var(--medGrey);
//   height: 2rem;
//   color: white;
// `
