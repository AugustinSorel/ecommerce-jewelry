import { ChangeEvent, useEffect, useState } from "react";
import DropDown from "../../components/Dropdown";
import GridOfProducts from "../../components/GridOfProducts";
import {
  maxProductPrice,
  minProductPrice,
  products,
} from "../../utils/products";
import styles from "/src/styles/shopPageStyles.module.scss";

const RangeSlider = ({
  min,
  max,
  onChange,
  value,
}: {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);
  const step = 1;

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={styles["slider-wrapper"]}>
      <div className={styles["input-wrapper"]}>
        <input
          className={styles["input"]}
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className={styles["input"]}
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className={styles["control-wrapper"]}>
        <div className={styles["control"]} style={{ left: `${minPos}%` }} />
        <div className={styles["rail"]}>
          <div
            className={styles["inner-rail"]}
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className={styles["control"]} style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

//TODO: create files //TODO: tab navigation for card

const ShopPage = () => {
  const [value, setValue] = useState({
    min: minProductPrice,
    max: maxProductPrice,
  });
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

        <div className={styles["dropdown-container"]}>
          <DropDown
            defaultText={"shop by"}
            options={Array.from(
              new Set(products.map((product) => product.category))
            )}
          />

          <DropDown defaultText={"sort by"} options={["price", "date"]} />
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
