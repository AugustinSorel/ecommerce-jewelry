import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ProductsImages } from "../../utils/products";
import styles from "./index.module.scss";

const Slide = ({ image }: { image: ProductsImages }) => {
  return (
    <li className={styles["slide-container"]}>
      <Image
        src={image}
        alt={image}
        priority
        className={styles["slide-image"]}
        fill
      />
    </li>
  );
};

const ProductCarousel = ({ coverImage }: { coverImage: ProductsImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productImages = new Set<ProductsImages>([
    coverImage,
    "/products/img-1.png",
    "/products/img-2.png",
    "/products/img-3.png",
  ]);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => {
      const isLastSlide = currentIndex === productImages.size - 1;
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

  const [magnifierStyle, setMagnifierStyle] = useState({});
  const overflowContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!overflowContainerRef.current) return;

    const imgPosition = overflowContainerRef.current.getBoundingClientRect();
    const imgHeight = overflowContainerRef.current.clientHeight;
    const imgWidth = overflowContainerRef.current.clientWidth;

    const posX = e.clientX - imgPosition.left;
    const posY = e.clientY - imgPosition.top;

    const percX = (posX / imgWidth) * 100;
    const percY = (posY / imgHeight) * 100;
    const perc = percX + "% " + percY + "%";

    setMagnifierStyle(() => ({
      backgroundPosition: perc,
    }));
  };

  return (
    <div className={styles["container"]}>
      <nav className={styles["jump-to-container"]}>
        {Array.from(productImages).map((image, index) => (
          <button
            className={`${styles["jump-to-button"]} ${
              index === currentIndex ? styles["active"] : ""
            }`}
            key={image}
          >
            <Image
              src={image}
              alt={image}
              fill
              priority
              className={styles["jump-to-image"]}
              onClick={() => jumpToSlide(index)}
            />
          </button>
        ))}
      </nav>
      <div className={styles["carousel-container"]}>
        <div
          className={styles["overflow-container"]}
          ref={overflowContainerRef}
          onMouseMove={handleMouseMove}
        >
          <ul
            className={styles["carousel"]}
            style={{
              height: `calc(100% * ${productImages.size})`,
              translate: `0 calc(${currentIndex * -1} * 100% / ${
                productImages.size
              })`,
            }}
          >
            {Array.from(productImages).map((image) => (
              <Slide key={image} image={image} />
            ))}
          </ul>

          <div
            role="img"
            className={styles["magnifier"]}
            style={{
              backgroundImage: `url(${Array.from(productImages).at(
                currentIndex
              )})`,
              ...magnifierStyle,
            }}
          />
        </div>

        <nav
          className={styles["active-bar"]}
          style={{
            ["--translate" as any]: `calc(${currentIndex} * 100%)`,
            ["--width" as any]: `calc(100% / ${productImages.size})`,
          }}
        >
          {Array.from(productImages).map((_, index) => (
            <button
              aria-label={`view slide image ${index}`}
              key={index}
              className={styles["active-bar-button"]}
              onClick={() => jumpToSlide(index)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ProductCarousel;
