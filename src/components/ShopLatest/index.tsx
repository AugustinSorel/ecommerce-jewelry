import { products } from "../../utils/products";
import GridOfProducts from "../GridOfProducts";
import styles from "./index.module.scss";

const ShopLatest = () => {
  return (
    <section className={styles["container"]}>
      <h2 className={styles["title"]}>shop the latest</h2>

      <GridOfProducts
        products={[...products]
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, 6)}
      />
    </section>
  );
};

export default ShopLatest;
