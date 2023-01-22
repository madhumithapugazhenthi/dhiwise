import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  OutlineGray500: "border-2 border-gray_500 border-solid text-gray_500",
  OutlineBluegray100: "border border-bluegray_100 border-solid text-gray_800",
  OutlineGray800: "border border-gray_800 border-solid text-gray_800",
  OutlineBluegray100_1:
    "bg-gray_800 border border-bluegray_100 border-solid text-white_A700",
  icbFillGray800: "bg-gray_800",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "p-[13px] sm:p-[5px] md:p-[6px]",
  md: "p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px]",
  lg: "p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px]",
  xl: "md:p-[11px] p-[23px] sm:px-[15px] sm:py-[9px]",
  "2xl": "md:p-[18px] p-[35px] sm:px-[15px] sm:py-[13px]",
  smIcn: "sm:p-[1px] md:p-[2px] p-[5px]",
  mdIcn: "p-[10px] sm:p-[3px] md:p-[5px]",
  lgIcn: "p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "FillGray800",
    "FillWhiteA700",
    "OutlineGray500",
    "OutlineBluegray100",
    "OutlineGray800",
    "OutlineBluegray100_1",
    "icbFillGray800",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};
Button.defaultProps = { className: "", variant: "", size: "" };

export { Button };
