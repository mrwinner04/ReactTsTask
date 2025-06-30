import React, { useCallback } from "react";
import Button from "./Button";
import type { ButtonProps } from "../../types";

interface ButtonLogicProps extends Omit<ButtonProps, "onClick"> {
  onClick?: () => void | Promise<void>;
  confirmMessage?: string;
  loading?: boolean;
  asyncAction?: boolean;
}

/**
 * Button Logic Component
 */
const ButtonLogic: React.FC<ButtonLogicProps> = ({
  onClick,
  confirmMessage,
  loading = false,
  asyncAction = false,
  disabled,
  children,
  ...buttonProps
}) => {
  const handleClick = useCallback(async () => {
    if (!onClick) return;

    if (confirmMessage) {
      const confirmed = window.confirm(confirmMessage);
      if (!confirmed) return;
    }

    try {
      if (asyncAction) {
        await onClick();
      } else {
        onClick();
      }
    } catch (error) {
      console.error("Button action failed:", error);
    }
  }, [onClick, confirmMessage, asyncAction]);

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`${buttonProps.className || ""} ${
        loading ? "btn--loading" : ""
      }`.trim()}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};

export default ButtonLogic;
