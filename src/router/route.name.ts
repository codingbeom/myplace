export const ROUTER_NAME = {
  HOME: "home",
  ABOUT: "about",
  SERVICE: "service",
  SKILL: "skill",
  CONTACT: "contact",
  TEST: "test",

  NOTFOUND: "not_found",
} as const;

export type ROUTER_NAME = typeof ROUTER_NAME[keyof typeof ROUTER_NAME];
