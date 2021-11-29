import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 40px;
  text-align: center;
  margin: 20px auto;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontMed);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  padding-top: 4px;

  :active {
    transform: scale(0.95);
  }
`
