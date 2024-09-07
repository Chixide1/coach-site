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
  pages?: Page[]
}

export default function NavDropdown({pages}: NavDropdownProps) {

  return (
    <Menubar className="border-0 h-fit md:hidden">
      <MenubarMenu>
        <MenubarTrigger >
          <AlignRight className="text-secondary" />
        </MenubarTrigger>
        <MenubarContent collisionPadding={{ right: 20 }}>
          {pages?.map(page => (page.page != 'Home' &&
            <MenubarItem>
              <Link href={'/'}>{page.page}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
} 