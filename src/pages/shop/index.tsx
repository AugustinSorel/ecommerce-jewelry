import { useState } from "react";
import DropDown from "../../components/Dropdown";
import GridOfProducts from "../../components/GridOfProducts";
import RangeSlider from "../../components/RangeSlider";
import SwitchButton from "../../components/SwitchButton";
import {
  maxProductPrice,
  minProductPrice,
  ProductCategories,
  products,
  PRODUCTS_CATEGORIES,
  SortProductsBy,
  SORT_PRODUCTS_BY,
} from "../../utils/products";
import styles from "src/styles/shopPageStyles.module.scss";

const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [shopByValue, setShopByValue] = useState<ProductCategories | null>(
    null
  );
  const [sortProductsBy, setSortProductsBy] = useState<SortProductsBy | null>(
    null
  );
  const [value, setValue] = useState({
    min: minProductPrice,
    max: maxProductPrice,
  });

  const productsFiltered = [...products]
    .filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((product) => !shopByValue || product.category === shopByValue)
    .sort((a, b) => {
      if (sortProductsBy === "price") {
        return a.price - b.price;
      }

      if (sortProductsBy === "date") {
        return a.createdAt.getTime() - b.createdAt.getTime();
      }

      return 0;
    });

  return (
    <section className={styles["container"]}>
      <h2 className={styles["title"]}>shop</h2>
      <aside className={styles["side-bar"]}>
        <div className={styles["search-container"]}>
          <input
            type="text"
            placeholder="Search"
            className={styles["search-input"]}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["search-icon"]}
          >
            <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" />
          </svg>
        </div>

        <div className={styles["dropdown-container"]}>
          <DropDown<typeof shopByValue>
            defaultText={"shop by"}
            options={PRODUCTS_CATEGORIES}
            onChange={(e) => setShopByValue(e)}
            selectedOption={shopByValue}
          />
          <DropDown<typeof sortProductsBy>
            defaultText={"sort by"}
            options={SORT_PRODUCTS_BY}
            onChange={(e) => setSortProductsBy(e)}
            selectedOption={sortProductsBy}
          />
        </div>

        <div className={styles["range-slider-container"]}>
          <RangeSlider
            min={minProductPrice}
            max={maxProductPrice}
            onChange={setValue}
            value={value}
          />
          <p className={styles["range-slider-text"]}>
            Price: ${value.min} - ${value.max}
          </p>
        </div>

        <div className={styles["switch-button-container"]}>
          <p className={styles["switch-button-text"]}>on sale</p>
          <SwitchButton />
        </div>
        <div className={styles["switch-button-container"]}>
          <p className={styles["switch-button-text"]}>in stock</p>
          <SwitchButton />
        </div>
      </aside>

      <GridOfProducts products={productsFiltered} />
    </section>
  );
};

export default ShopPage;
