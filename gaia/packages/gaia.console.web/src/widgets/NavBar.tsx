import TopNavigation from "@cloudscape-design/components/top-navigation";

export const Navbar = () => {
  return (
    <TopNavigation
      identity={{
        href: "/",
        title: "Gaia Console",
        logo: {
          src: "/gaia.svg",
          alt: "Gaia Logo"
        }
      }}
      utilities={[
        {
          type: "button",
          text: "Github",
          href: "https://github.com/mjsdevs/rainbow",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
      ]}
    />
  );
}
