export interface RoutesProps {
  label: string;
  href: string;
}
export const routes: RoutesProps[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "services",
    href: "/services",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];
