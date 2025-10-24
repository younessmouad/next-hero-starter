import { IconHome } from "@tabler/icons-react";

import { ROUTES } from "../routes";
import { MenuGroup, MenuItem } from "./types";

export const NAV_MENU: (MenuItem | MenuGroup)[] = [
  {
    label: "home",
    icon: IconHome,
    route: ROUTES.main.home,
  },
  {
    label: "more",
    items: [
      {
        label: "about",
        route: ROUTES.extra.about,
      },
      {
        label: "contact",
        route: ROUTES.extra.contact,
      },
    ],
  },
];

export function isMenuGroup(item: MenuItem | MenuGroup): item is MenuGroup {
  return "items" in item;
}
