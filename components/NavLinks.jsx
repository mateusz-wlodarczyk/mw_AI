import Link from "next/link";

const links = [
  { href: "/chat", label: "chat" },
  { href: "/tours", label: "tours" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            {" "}
            <Link className="capitalize" href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
