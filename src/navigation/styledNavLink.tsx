import {FunctionComponent, PropsWithChildren} from 'react'
import {NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from '@/components/ui/navigation-menu.tsx'
import { Link } from 'react-router-dom'

interface StyledNavLinkProps extends PropsWithChildren {
  to: string
}

const StyledNavLink: FunctionComponent<StyledNavLinkProps> = ({to, children}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to={to}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default StyledNavLink
