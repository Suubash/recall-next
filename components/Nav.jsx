import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href, children, props }) => {
  const router = useRouter();
  const active = router.asPath === href;
  return (
    <Link href={href} passHref>
      <a
        {...props}
        className={`${
          active && "bg-gray-200"
        } hover:bg-gray-200 px-4 py-2 rounded-md`}
      >
        {children}
      </a>
    </Link>
  );
};

function Nav() {
  return (
    <nav className="py-2 shadow-md sticky top-0 bg-white z-10">
      <ul className="flex font-semibold max-w-[80ch] mx-auto px-5">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blogs">Blogs</NavItem>
        <NavItem href="/photos">Photos</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
