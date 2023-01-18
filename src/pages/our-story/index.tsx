import Image from "next/image";
import styles from "./index.module.scss";

const OurStoryPage = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>our story</h2>
      <h3 className={styles["subtitle"]}>
        Who we are and why we do what we do!
      </h3>
      <p className={styles["paragraph"]}>
        We are a team of passionate jewelry enthusiasts who believe that every
        individual deserves to feel beautiful and confident. Our ecommerce
        jewelry app is built on the foundation of providing high-quality,
        affordable jewelry pieces that are tailored to suit every style and
        occasion.
      </p>

      <h3 className={styles["paragraph-title"]}>top trends</h3>

      <div className={styles["image-container"]}>
        <Image src={"/slides/slide-1.png"} alt="product" fill priority />
      </div>

      <p className={styles["paragraph"]}>
        At our ecommerce jewelry app, we are always on the lookout for the
        latest trends in the world of jewelry. From chunky statement pieces to
        delicate and dainty designs, we strive to bring you the best of
        what&lsquo;s hot and happening. Our collection is constantly updated
        with new designs that reflect the latest trends in fashion and jewelry.
        Whether you&lsquo;re looking for a bold and daring statement piece or
        something more understated and elegant, we have something for everyone.
      </p>

      <h3 className={styles["paragraph-title"]}>produced with care</h3>

      <div className={styles["image-container"]}>
        <Image src={"/slides/slide-2.png"} alt="product" fill />
      </div>

      <p className={styles["paragraph"]}>
        At our ecommerce jewelry app, we take great pride in the quality and
        craftsmanship of our products. Each piece is carefully produced with
        care and attention to detail, ensuring that our customers receive only
        the best. We source our materials from reputable suppliers and work with
        skilled artisans to create jewelry that is not only beautiful, but also
        made to last.
      </p>
    </div>
  );
};

export default OurStoryPage;
