import GridOfProducts from "../../components/GridOfProducts";
import {
  maxProductPrice,
  minProductPrice,
  products,
} from "../../utils/products";
import styles from "/src/styles/shopPageStyles.module.scss";

const ShopPage = () => {
  return (
    <section className={styles["container"]}>
      <h2 className={styles["title"]}>shop the latest</h2>
      <aside className={styles["side-bar"]}>
        <div className={styles["search-container"]}>
          <input
            type="text"
            placeholder="Search"
            className={styles["search-input"]}
          />
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["search-icon"]}
          >
            <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" />
          </svg>
        </div>

        <div className={styles["drop-down-container"]}>
          <select name="shop by" className={styles["drop-down"]}>
            <option value="">shop by</option>
            {[
              ...Array.from(
                new Set(products.map((product) => product.category))
              ),
            ].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select name="sort by" className={styles["drop-down"]}>
            <option value="">sort by</option>
            <option value="price">price</option>
            <option value="date">date</option>
          </select>
        </div>

        <input type="range" min={minProductPrice} max={maxProductPrice} />
        <p>
          Price:${minProductPrice}-${maxProductPrice}
        </p>

        <div>
          <label>on sale</label>
          <input />
        </div>
        <div>
          <label>in stock</label>
          <input />
        </div>
      </aside>

      <GridOfProducts products={[...products]} />
    </section>
  );
};

export default ShopPage;
