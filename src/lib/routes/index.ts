export const ROUTES = {
  main: {
    home: "/",
    blog: "/blog",
    products: "/products",
    tools: "/tools",
    social: "/social",
  },
  extra: {
    contact: "/contact",
    about: "/about",
  },
  private: {
    profile: "/profile",
  },
} as const;

// Recursive helper to get all nested values
type NestedValues<T> = T extends object ? NestedValues<T[keyof T]> : T;

export type RoutePath = NestedValues<typeof ROUTES>;

// Example usage of the RoutePath type
export const PRIVATE_ROUTES: RoutePath[] = [ROUTES.private.profile];
