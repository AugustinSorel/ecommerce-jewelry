import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../store/useCart";
import { Product } from "../../utils/products";
import styles from "./index.module.scss";

const ProductItem = ({ product }: { product: Product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <li key={product.id} className={styles["product-container"]}>
      <div className={styles["product-image-container"]}>
        <Image
          className={styles["product-image"]}
          src={product.coverImage}
          width={300}
          height={300}
          alt={`product image for ${product.name}`}
          priority
        />
        <div className={styles["product-action-container"]}>
          <button
            aria-label="cart"
            className={styles["svg-button"]}
            onClick={() => addItem(product.id)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z" />
            </svg>
          </button>
          <Link
            aria-label={`view product ${product.name}`}
            href={`/products/${product.path}`}
            className={styles["svg-button"]}
          >
            <svg viewBox="0 0 24 24">
              <path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
            </svg>
          </Link>
          <button aria-label="heart" className={styles["svg-button"]}>
            <svg viewBox="0 0 24 24">
              <path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" />
            </svg>
          </button>
        </div>
      </div>
      <Link href={product.path} className={styles["product-name"]}>
        {product.name}
      </Link>
      <p className={styles["product-price"]}>$ {product.price}</p>
    </li>
  );
};

const GridOfProducts = ({ products }: { products: Product[] }) => {
  if (products.length < 1) {
    return <h2 className={styles["no-products-text"]}>no products</h2>;
  }

  return (
    <ul className={styles["grid"]}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default GridOfProducts;
