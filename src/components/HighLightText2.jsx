export default function HighLightText2({ text, index }) {
  const words = text.split(/\s+/);

  return (
    <span className="relative font-bold text-4xl text-center">
      {words.map((word, idx) => (
        <span
          key={word + idx}
          className={idx >= index ? "text-customPurple" : ""}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
}
