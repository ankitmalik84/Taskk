export default function HighLightText({ text, size, type }) {
  return (
    <span className={`font-${type} text-customPurple ${size}`}>{text}</span>
  );
}
