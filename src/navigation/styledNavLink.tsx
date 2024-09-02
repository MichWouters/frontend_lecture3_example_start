import {FunctionComponent, PropsWithChildren} from 'react'
import {NavigationMenuItem, NavigationMenuLink} from '@/components/ui/navigation-menu.tsx'

interface StyledNavLinkProps extends PropsWithChildren {
  to: string
}

const StyledNavLink: FunctionComponent<StyledNavLinkProps> = ({to, children}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={to}>{children}</NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default StyledNavLink
