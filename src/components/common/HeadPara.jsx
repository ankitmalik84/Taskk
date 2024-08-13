import HighLightText from "./HighLightText";

export default function HeadPara({
  title,
  description,
  highlightIndex,
  leading,
}) {
  const words = title.split(" ");

  return (
    <div className="w-full mx-auto flex flex-col my-16">
      <h1 className={`text-4xl font-bold ${leading || ""} text-white`}>
        {words.map((word, index) =>
          index === highlightIndex ? (
            <HighLightText
              key={word + index}
              text={word + " "}
              size="text-4xl"
              type="bold"
            />
          ) : (
            <span key={word + index}>{word} </span>
          )
        )}
      </h1>
      {description && (
        <p className="mt-8 text-white opacity-75 text-md leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
