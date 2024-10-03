import {FC, memo} from 'react';

import styles from './Loader.module.css'; // Import the module

const Loader: FC = memo(() => {
  return (
    <div className={styles.loadingWave}>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
    </div>
  );
});

export default Loader;
