import React from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import { Icons } from './Icons';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icons.Logo className="h-8 w-auto text-[#002D57]" />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => scrollToSection('about')}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => scrollToSection('oada')}
              >
                OADA.ai
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="text-gray-600 hover:text-gray-900"
                href="#whitepaper"
              >
                Whitepaper
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => scrollToSection('teams')}
              >
                Teams
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-[#002D57] hover:bg-[#002D57]/90">
          Request A Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;