import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

import styles from './Checkbox.module.css';

export default function CheckBox({ className, ...props }) {
  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" className={styles.checkboxInput} {...props} />
      <span className={clsx(styles.customCheckbox, className)}>
        <span className={styles.customRadioInputCheckMark}>
          <FaCheck className="text-box text-xs" />
        </span>
      </span>
    </label>
  );
}
