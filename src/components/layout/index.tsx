import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Allerta_Stencil } from "@next/font/google";
import { useRouter } from "next/router";
import { useCartStore } from "../../store/useCart";

const allerta = Allerta_Stencil({ weight: "400", subsets: ["latin"] });

const MobileMenu = () => {
  return (
    <div className={styles["nav-modal"]}>
      <nav>
        {[
          { href: "/", text: "home" },
          { href: "/shop", text: "shop" },
          { href: "/about", text: "about" },
          { href: "/blog", text: "blog" },
          { href: "/help", text: "help" },
          { href: "/contact", text: "contact" },
          { href: "/search", text: "search" },
        ].map((link) => (
          <Link key={link.href} href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>

      <button aria-label="account">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
        </svg>
        my account
      </button>
      <button aria-label="logout">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
        </svg>
        logout
      </button>
    </div>
  );
};

const Header = ({
  isMobileMenuOpen,
  toggleIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  toggleIsMobileMenuOpen: () => void;
}) => {
  const router = useRouter();
  const { getNumberOfItems } = useCartStore();

  return (
    <header className={styles.header}>
      <h1 className={allerta.className}>
        <Link href={"/"}>shoppe</Link>
      </h1>

      <nav>
        {[
          { href: "/shop", text: "shop" },
          { href: "/blog", text: "blog" },
          { href: "/our-story", text: "our story" },
        ].map((link) => (
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
      <button aria-label="cart" data-number-of-items={getNumberOfItems()}>
        <svg viewBox="0 0 24 24">
          <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z" />
        </svg>
      </button>
      <button aria-label="account">
        <svg viewBox="0 0 24 24">
          <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
        </svg>
      </button>
      <button onClick={toggleIsMobileMenuOpen} aria-label="menu">
        <svg viewBox="0 0 24 24">
          <path
            d="M 3 14 L 21 14 Q 23 15.5 21 17 L 3 17 Q 1 15.5 3 14 Z M 3 7 L 21 7 Q 23 8.5 21 10 L 3 10 Q 1 8.5 3 7 Z"
            className={isMobileMenuOpen ? styles["open"] : ""}
          />
        </svg>
      </button>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href="/contact">contact</Link>
        <Link href="/terms-of-services">terms of services</Link>
        <Link href="/shipping-and-returns">shipping and returns</Link>
      </nav>

      <form>
        <input placeholder="Give an email, get the newsletter" />
        <button aria-label="submit-email" type="submit">
          <svg viewBox="0 0 24 24">
            <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
          </svg>
        </button>
      </form>

      <p>
        © <strong>{new Date().getFullYear()} Augustin.</strong> Terms of use{" "}
        <strong>and</strong> privacy policy.
      </p>

      <div>
        <Link href="https://www.linkedin.com/" aria-label="linkedin link">
          <svg viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </Link>
        <Link href="https://www.facebook.com/" aria-label="facebook link">
          <svg viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </Link>
        <Link href="https://www.instagram.com/" aria-label="instagram link">
          <svg viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
        <Link href="https://www.twiter.com/" aria-label="twiter link">
          <svg viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleIsMobileMenuOpen = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => setIsMobileMenuOpen(() => false), [router.asPath]);

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleIsMobileMenuOpen={toggleIsMobileMenuOpen}
      />
      <main>{isMobileMenuOpen ? <MobileMenu /> : children}</main>
      {!isMobileMenuOpen && <Footer />}
    </>
  );
};

export default Layout;
