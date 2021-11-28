import RMBDLogo from '../../images/react-movie-logo.svg'
import TMBDLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMBDLogoImg } from './header.styles'

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMBDLogo} alt='RMBD Logo' />
      <TMBDLogoImg src={TMBDLogo} alt='TMBD Logo' />
    </Content>
  </Wrapper>
)

export default Header
