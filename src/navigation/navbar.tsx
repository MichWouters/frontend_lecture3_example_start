import {FunctionComponent} from 'react'
import {NavigationMenu, NavigationMenuList} from '@/components/ui/navigation-menu.tsx'
import StyledNavLink from '@/navigation/styledNavLink.tsx'

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-auto block m-2">
      <NavigationMenu>
        <NavigationMenuList>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/foo">Foo</StyledNavLink>
          <StyledNavLink to="/bar">Bar</StyledNavLink>
          <StyledNavLink to="/class">Class</StyledNavLink>
          <StyledNavLink to="/thisLinkProducesA404Error">Error Page</StyledNavLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
export default Navbar
