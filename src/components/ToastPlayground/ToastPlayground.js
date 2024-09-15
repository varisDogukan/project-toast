import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toastes, createToast, changeContent, content } =
    React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {toastes.length > 0 && <ToastShelf />}

      <form onSubmit={createToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              name='message'
              value={content?.message}
              className={styles.messageInput}
              onChange={(evnt) =>
                changeContent({
                  name: evnt.target.name,
                  value: evnt.target.value,
                })
              }
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type='radio'
                  name='variant'
                  checked={variant === content?.variant}
                  value={variant}
                  onChange={(evnt) =>
                    changeContent({
                      name: evnt.target.name,
                      value: evnt.target.value,
                    })
                  }
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
