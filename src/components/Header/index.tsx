import { HeaderContainer } from './styles'
import LogoIgnite from '../../assets/LogoIgnite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/Ignite-Timer/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/Ignite-Timer/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
