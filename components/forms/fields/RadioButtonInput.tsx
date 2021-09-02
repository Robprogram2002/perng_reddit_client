import { ChangeEvent, FC } from 'react';
import styles from './RadioInput.module.css';

const RadioButtonInput: FC<{
  value: string;
  // eslint-disable-next-line no-unused-vars
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}> = ({ children, value, changeHandler, name }) => (
  <label className={styles.ContainerRadio}>
    {children}
    <input
      type="radio"
      name={name}
      checked={value === name}
      onChange={changeHandler}
    />
    <span className={styles.Checkmark} />
  </label>
);

export default RadioButtonInput;
