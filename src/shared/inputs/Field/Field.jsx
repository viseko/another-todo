import FieldLabel from "@/shared/small-parts/FieldLabel";
import "./Field.css";

const Field = ({
  inputRef,
  ...props
}) => {
  return (
    <label className="w-full">
      {/* Подпись */}
      {
        Boolean(props.label) && <FieldLabel label={props.label} />
      }
      {/* textarea или input */}
      {
        (props.type === "textarea") ?
          <textarea
            ref={inputRef}
            className="field"
            {...props}
          /> :
          <input
            ref={inputRef}
            className="field"
            type={props.type || "text"}
            {...props}
          />
      }
    </label>
  );
};

export default Field;