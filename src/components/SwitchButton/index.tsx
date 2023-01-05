import styles from "./index.module.scss";

const SwitchButton = () => {
  return (
    <label className={styles["switch"]}>
      <input
        aria-label="checkbox"
        type="checkbox"
        className={styles["switch-input"]}
      />
      <span className={styles["switch-circle"]} />
    </label>
  );
};

export default SwitchButton;
