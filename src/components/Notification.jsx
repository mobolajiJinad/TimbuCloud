import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Notification = () => {
  const { notification, closeNotification } = useContext(CartContext);

  // Return null if notification message is empty or falsy
  if (!notification.message) return null;

  return (
    <div className="fixed left-1/2 top-2 z-50 flex w-full max-w-72 -translate-x-1/2 items-center justify-center rounded-xl bg-white p-3 py-5 text-center shadow-md">
      <p className={`${notification.color}`}>{notification.message}</p>
      <button
        onClick={closeNotification}
        className={`${notification.color} ml-4`}
      >
        ✕
      </button>
    </div>
  );
};

export default Notification;
