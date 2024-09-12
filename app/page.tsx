'use client'
import Image from "next/image";
import './styles/navbar.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from './assets/logo.png'
import {DrawerDialogDemo} from '../components/ui/elements/login'

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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="center">
      <div className="logo">
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
        
      </div>
    <DrawerDialogDemo/>
    </div>

  );
}
