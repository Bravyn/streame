import Image from "next/image";
import './styles/navbar.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from './assets/logo.png'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


export default function Home() {
  return (
    <div className="center">
      <div className="logo">
        <Avatar>
          <AvatarImage src = {logo} />
          <AvatarFallback>logo</AvatarFallback>
        </Avatar>

        <h1>Stream</h1>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="hover-options">Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover-options">Stream</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover-options">Pricing</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover-options">Blog</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="hover-options">Contact Us</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              X<MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Reddit</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Instagram</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>WhatsApp</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

      </Menubar>

      <div className="get-started">
        <h4>Get Started Now</h4>
      </div>
    </div>

  );
}
