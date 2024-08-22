export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cairn Tools",
  description: "Create Encounter tables.",
  navItems: [
    {
      label: "Collections",
      href: "/collections",
    },
    {
      label: "Monsters",
      href: "/monsters",
    },
    {
      label: "Spells",
      href: "/spells",
    },
    {
      label: "Relics",
      href: "/relics",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Collections",
      href: "/collections",
    },
    {
      label: "Monsters",
      href: "/monsters",
    },
    {
      label: "Spells",
      href: "/spells",
    },
    {
      label: "Relics",
      href: "/relics",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "CairnRPG",
      href: "https://cairnrpg.com/cairn-srd/",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/dustatron/cairn-tools",
    docs: "https://cairnrpg.com",
    discord: "https://cairnrpg.com/discord-server/",
    cairn: "https://cairnrpg.com/cairn-srd/",
  },
};
