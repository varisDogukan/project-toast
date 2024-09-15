import React from "react";
import useEscapeKey from "../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [content, setContent] = React.useState({
    variant: "notice",
    message: "",
  });
  const [toastes, setToastes] = React.useState([]);
  useEscapeKey(setToastes);

  const changeContent = ({ name, value }) => {
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const deleteToast = (id) => {
    setToastes((prevToastes) => prevToastes.filter((toast) => toast.id !== id));
  };

  const createToast = (evnt) => {
    evnt.preventDefault({ variant: "notice", message: "" });

    setToastes((prevToast) => [
      ...prevToast,
      {
        id: crypto.randomUUID(),
        variant: content?.variant,
        message: content?.message,
      },
    ]);

    setContent({ variant: "notice", message: "" });
  };

  return (
    <ToastContext.Provider
      value={{
        toastes,
        deleteToast,
        createToast,
        changeContent,
        content,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
