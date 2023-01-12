import Link from "next/link";
import styles from "src/styles/404.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>404 error</h2>
      <p className={styles["main-text"]}>
        This page not found: <br /> back to home and start again
      </p>
      <Link href={"/"} className={styles["home-link"]}>
        homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
