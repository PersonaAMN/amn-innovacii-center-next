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
      className={`flexCenter gap-3 px-4 py-3 
      ${textColor || "text-black"}
      ${
        isSubmitting ? "bg-black/50" : bgColor || "bg-indigo-100"
      } rounded-xl text-sm font-medium w-full lg:w-1/6`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
