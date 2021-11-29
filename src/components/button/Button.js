import { Wrapper } from './button.styles'

const Button = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  )
}

export default Button
