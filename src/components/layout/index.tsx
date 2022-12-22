import Link from "next/link";
import { ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { Allerta_Stencil } from "@next/font/google";
import { useRouter } from "next/router";

const allerta = Allerta_Stencil({ weight: "400", subsets: ["latin"] });
const links = [
  { href: "/shop", text: "shop" },
  { href: "/blog", text: "blog" },
  { href: "/our-story", text: "our story" },
];

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <h1 className={allerta.className}>
        <Link href={"/"}>shoppe</Link>
      </h1>

      <nav>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              router.pathname === link.href ? styles["active-link"] : ""
            }
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <button aria-label="search">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" />
        </svg>
      </button>
      <button aria-label="cart" data-number-of-items="5">
        <svg viewBox="0 0 24 24">
          <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z" />
        </svg>
      </button>
      <button aria-label="account">
        <svg viewBox="0 0 24 24">
          <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
        </svg>
      </button>
      <button onClick={toggleMenu} aria-label="menu">
        <svg viewBox="0 0 24 24">
          <path
            d="M 3 14 L 21 14 Q 23 15.5 21 17 L 3 17 Q 1 15.5 3 14 Z M 3 7 L 21 7 Q 23 8.5 21 10 L 3 10 Q 1 8.5 3 7 Z"
            className={isMenuOpen ? styles["open"] : ""}
          />
        </svg>
      </button>
      <form>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" />
        </svg>
        <input type="text" placeholder="Search" />
      </form>
    </header>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
