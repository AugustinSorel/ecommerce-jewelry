import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product, products } from "../../utils/products";
import styles from "./index.module.scss";

const Slide = ({ product }: { product: Product }) => {
  if (!product.slide) {
    return null;
  }

  return (
    <li className={styles["slide-container"]}>
      <Image
        src={product.slide}
        alt={product.text}
        width={1000}
        height={1000}
        priority
        className={styles["slide-image"]}
      />
      <h2 className={styles["slide-text"]}>{product.text}</h2>
      <p className={styles["slide-price"]}>{product.price}</p>
      <Link href={`products/${product.id}`} className={styles["slide-link"]}>
        view product
      </Link>
    </li>
  );
};

const HomePageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsCarousel = products.filter((p) => p.slide);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => {
      const isLastSlide = currentIndex === productsCarousel.length - 1;
      return isLastSlide ? 0 : prev + 1;
    });
  };

  const jumpToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => goToNextSlide(), 10_000);

    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div className={styles["container"]}>
      <ul
        className={styles["carousel"]}
        style={{
          ["--current-index" as any]: currentIndex,
          ["--number-of-slides" as any]: productsCarousel.length,
        }}
      >
        {productsCarousel.map((product) => (
          <Slide key={product.id} product={product} />
        ))}
      </ul>
      <nav className={styles["dots-container"]}>
        {[...Array(productsCarousel.length)].map((_, index) => (
          <button
            key={index}
            className={`${styles["dot"]} ${
              currentIndex === index ? styles["active"] : ""
            }`}
            onClick={() => jumpToSlide(index)}
          />
        ))}
      </nav>
    </div>
  );
};

export default HomePageCarousel;
