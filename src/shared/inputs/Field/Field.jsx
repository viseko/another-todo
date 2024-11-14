import "./Field.css";

const Field = ({
  inputRef,
  ...props
}) => {
  if (props.type === "textarea") {
    return (
      <div className="w-full">
        <textarea
          ref={inputRef}
          className="field"
          {...props}
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        className="field"
        type={props.type || "text"}
        {...props}
      />
    </div>
  );
};

export default Field;