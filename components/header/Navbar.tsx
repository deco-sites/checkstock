import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { PLATFORM } from "$store/platform.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, searchbar, logo }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={logo.src} alt={logo.alt} width={126} height={16} />
          </a>
        )}

        <div class="flex gap-1">
          <SearchButton />
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      {/* Desktop Version */}

      <div class="bg-[#f53859] hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-144">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[200px]"
            >
              <Image src={logo.src} alt={logo.alt} width={200} height={60} />
            </a>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          <SearchButton />
          <Searchbar searchbar={searchbar} />
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <a
            class="btn btn-circle btn-sm btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" class="text-base-100" size={24} strokeWidth={0.4} />
          </a>
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      <div class="bg-[#f53859] hidden md:flex flex-row justify-between items-center w-full pl-2 pr-6">
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
