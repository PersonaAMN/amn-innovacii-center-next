import { ButtonProps } from "@/types/common.types";

const CustomButton = ({
  title,
  handleClick,
  isSubmitting,
  type,
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3 ${
        isSubmitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
      } rounded-xl text-sm font-medium lg`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
