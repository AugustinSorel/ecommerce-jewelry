import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useCartStore } from "../../store/useCart";
import { findProductById } from "../../utils/products";
import styles from "./index.module.scss";

const ViewCart = () => {
  const closeCart = useCartStore((state) => state.closeCart);
  const { items } = useCartStore();
  const deleteItem = useCartStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);
  const getNumberOfItems = useCartStore((state) => state.getNumberOfItems);
  const getCartPrice = useCartStore((state) => state.getCartPrice);
  const [startExitingAnimation, setStartExitingAnimation] = useState(false);

  return createPortal(
    <div
      className={`${styles["backdrop"]} ${
        startExitingAnimation ? styles["exit"] : ""
      }`}
      onClick={() => setStartExitingAnimation(() => true)}
      onAnimationEnd={() => {
        if (startExitingAnimation) {
          closeCart();
        }
      }}
    >
      <div
        className={`${styles["slider"]} ${
          startExitingAnimation ? styles["exit"] : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles["header"]}>
          <h2 className={styles["title"]}>shopping bag</h2>
          <button
            className={styles["close-button"]}
            onClick={() => setStartExitingAnimation(() => true)}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </button>
        </header>

        <p className={styles["number-of-items"]}>{getNumberOfItems()} items</p>
        <ul className={styles["list-of-items"]}>
          {Array.from(items).map(([itemId, quantity]) => {
            const product = findProductById(itemId);
            return (
              <li key={itemId} className={styles["item"]}>
                <Image
                  height={150}
                  width={150}
                  src={product.coverImage}
                  alt="product image"
                  className={styles["item-image"]}
                />
                <div className={styles["item-details-container"]}>
                  <h3 className={styles["item-title"]}>{product.name}</h3>
                  <p className={styles["item-price"]}>
                    $ {product.price * quantity}
                  </p>
                  <div className={styles["quantity-container"]}>
                    <p className={styles["quantity-text"]}>qty:</p>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() => addItem(product.id, -1)}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      className={styles["quantity-button"]}
                      onClick={() => addItem(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className={styles["remove-button"]}
                  onClick={() => deleteItem(product.id)}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
        {getNumberOfItems() > 0 && (
          <>
            <p>
              subtotal ({getNumberOfItems()} item{getNumberOfItems() > 1 && "s"}
              )
              <span className={styles["checkout-price"]}>
                ${getCartPrice()}
              </span>
            </p>
            <Link className={styles["checkout-link"]} href={"/checkout"}>
              proceed to checkout
            </Link>
          </>
        )}
      </div>
    </div>,

    document.getElementById("__next")!
  );
};

export default ViewCart;
