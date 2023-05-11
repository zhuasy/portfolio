import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="flex py-10 justify-center">
      <div className="hidden sm:block">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-4 text-xl text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
