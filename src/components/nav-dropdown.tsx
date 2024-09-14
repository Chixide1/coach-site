import { AlignRight } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Page } from "@/payload-types";

type NavDropdownProps = {
  pages?: (number | Page)[]
}

export default function NavDropdown({pages}: NavDropdownProps) {

  return (
    <Menubar className="border-0 h-fit md:hidden bg-transparent">
      <MenubarMenu>
        <MenubarTrigger >
          <AlignRight className="text-secondary" />
        </MenubarTrigger>
        <MenubarContent collisionPadding={{ right: 20 }}>
          {pages?.map(page => (typeof(page) !== 'number' &&
            <MenubarItem key={page.id + '-mobile_menu'}>
              <Link href={page.title}>{page.title}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
} 