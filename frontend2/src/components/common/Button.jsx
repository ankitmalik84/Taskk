export default function Button({
  text = "Button",
  onClickFn,
  bgcolor = "bg-transparent",
  textcolor = "text-white",
  bordercolor,
  height,
  width,
  icon: Icon,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClickFn}
      className={` ${width || "w-full"} ${
        height || "h-auto"
      } ${bgcolor} rounded-full ${textcolor} 
      border-[0.6px] ${bordercolor} text-sm flex items-center 
      gap-2 justify-center`}
      disabled={disabled}
    >
      {text}
      {Icon && <Icon className="inline-block mr-2" />}
    </button>
  );
}
