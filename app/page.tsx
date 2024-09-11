import Image from "next/image";
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
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Contact Us</MenubarTrigger>
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

      {/*<Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>*/}
    </div>

  );
}
