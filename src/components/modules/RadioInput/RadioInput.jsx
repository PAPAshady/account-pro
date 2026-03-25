import { FaCheck } from 'react-icons/fa';

import styles from './RadioInput.module.css';

export default function RadioInput({ className, ...props }) {
  return (
    <label>
      <input type="radio" className={styles.radioInput} {...props} />
      <span className={`${styles.customRadioInput} ${className}`}>
        <span className={styles.customRadioInputCheckMark}>
          <FaCheck className="text-box text-xs" />
        </span>
      </span>
    </label>
  );
}
