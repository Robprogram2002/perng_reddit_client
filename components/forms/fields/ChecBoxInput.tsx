import { ChangeEvent, FC } from 'react';
import styles from './RadioInput.module.css';

const ChecBoxInput: FC<{
  // eslint-disable-next-line no-unused-vars
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ children, changeHandler }) => (
  <label className={styles.ContainerBox}>
    {children}
    <input type="checkbox" onChange={changeHandler} />
    <span className={styles.Checkmark} />
  </label>
);

export default ChecBoxInput;
