import { HomeIcon, SearchIcon, LibraryIcon } from '@icons/icons';
import { Link } from 'react-router-dom';
export default function SideMenuItem({slot, icon, href}: {slot: string, icon: string, href: string}) {
 const iconRender = (iconName: string) => {
  switch (iconName) {
   case 'home':
    return <HomeIcon/>
   case 'search':
    return <SearchIcon/>
   case 'library':
    return <LibraryIcon/>
  }
 
 }
 return (
  <>
   <li>
    <Link className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium trasition duration-300" to={href}>
     { iconRender(icon)}
     <span>{ slot }</span>
    </Link>
   </li>
  </>
 )
}