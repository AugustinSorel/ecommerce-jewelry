import { products } from "../../utils/products";
import ProductItem from "../ProductItem";
import styles from "./index.module.scss";

const ShopLatest = () => {
  return (
    <section className={styles["container"]}>
      <h2 className={styles["title"]}>shop the latest</h2>

      <ul className={styles["grid"]}>
        {[...products]
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, 6)
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
};

export default ShopLatest;
