import { GetStaticPaths, GetStaticProps } from "next";
import { Product, products } from "../../utils/products";
import styles from "src/styles/productDetails.module.scss";
import { useEffect, useState } from "react";
import { useCartStore } from "../../store/useCart";
import GridOfProducts from "../../components/GridOfProducts";
import ProductCarousel from "../../components/ProductCarousel";

const ProductPage = ({
  product,
}: {
  product: Omit<Product, "createdAt"> & { createdAt: string };
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));

  useEffect(() => setQuantity(() => 1), [product]);

  return (
    <>
      <div className={styles["container"]}>
        <ProductCarousel coverImage={product.coverImage} />
        <div className={styles["product-details-container"]}>
          <h2 className={styles["product-title"]}>{product.name}</h2>
          <p className={styles["product-price"]}>$ {product.price}</p>
          <h3 className={styles["product-description-title"]}>description</h3>
          <p className={styles["product-description"]}>
            {product.description}{" "}
          </p>
          <div className={styles["add-to-cart-container"]}>
            <div className={styles["add-to-cart-number-picker"]}>
              <button
                className={styles["add-to-cart-number-picker-button"]}
                onClick={decrementQuantity}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className={styles["add-to-cart-number-picker-button"]}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button
              className={styles["add-to-cart-button"]}
              onClick={() => addItem(product.id, quantity)}
            >
              add to cart
            </button>
          </div>
          <p className={styles["category-text"]}>
            <strong>category: </strong>
            {product.category}
          </p>
        </div>
      </div>
      <div className={styles["similar-items-container"]}>
        <h2 className={styles["similar-items-title"]}>similar items</h2>
        <GridOfProducts
          products={product.similarProducts.map(
            (productId) =>
              products.find((product) => product.id === productId) ??
              products[0]
          )}
        />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: products.map((product) => ({
      params: { index: product.path },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const product = products.find(
    (product) => product.path === (context.params ?? {}).index
  )!;

  console.log(product, context);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: {
        ...product,
        createdAt: product.createdAt.toISOString(),
      },
    },
  };
};

export default ProductPage;
