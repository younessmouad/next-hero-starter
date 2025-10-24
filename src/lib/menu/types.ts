import { TablerIcon } from "@tabler/icons-react";

import { RoutePath } from "../routes";

export interface MenuItem {
  label: string;
  icon?: TablerIcon;
  href?: string;
  route?: RoutePath;
  disabled?: boolean;
}

export interface MenuGroup {
  label: string;
  items: MenuItem[];
}
