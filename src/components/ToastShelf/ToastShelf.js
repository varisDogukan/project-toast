import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastes } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toastes?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} key={toast.id} variant={toast?.variant}>
            {toast?.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
