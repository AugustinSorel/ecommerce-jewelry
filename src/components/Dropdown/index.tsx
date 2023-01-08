import { useState } from "react";
import styles from "./index.module.scss";

function DropDown<T extends string>({
  options,
  defaultText,
  onChange,
}: {
  options: T[];
  defaultText: string;
  onChange: (e: T) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const toggleShowContent = () => setIsContentOpen((prev) => !prev);
  const closeContent = () => setIsContentOpen(() => false);
  const openContent = () => setIsContentOpen(() => true);

  const changeHandler = (option: T) => {
    setSelectedOption(option);
    closeContent();
    onChange(option);
  };

  return (
    <div
      className={styles["dropdown"]}
      tabIndex={0}
      onBlur={(e) =>
        !e.currentTarget.contains(e.relatedTarget) && closeContent()
      }
      onKeyDown={(e) => e.key === "Enter" && openContent()}
    >
      <div className={styles["dropdown-button"]} onClick={toggleShowContent}>
        {selectedOption ?? defaultText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isContentOpen && (
        <div className={styles["dropdown-content"]}>
          {options.map((option) => (
            <p
              key={option}
              className={styles["dropdown-item"]}
              onClick={() => changeHandler(option)}
              onKeyDown={(e) => e.key === "Enter" && changeHandler(option)}
              tabIndex={0}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
