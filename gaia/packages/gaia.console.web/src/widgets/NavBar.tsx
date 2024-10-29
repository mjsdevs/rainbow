import TopNavigation from "@cloudscape-design/components/top-navigation";
import GaiaSvg from '../components/icons/assets/gaia.svg';

export const Navbar = () => {
  return (
    <TopNavigation
      identity={{
        href: "/",
        title: "Gaia Console",
        logo: {
          src: GaiaSvg,
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
