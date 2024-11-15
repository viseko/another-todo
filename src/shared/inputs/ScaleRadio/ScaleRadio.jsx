import { useEffect, useState } from "react";
import FieldLabel from "@/shared/small-parts/FieldLabel";
import cn from "classnames";

const ScaleRadio = ({label, size, value, onChange}) => {  
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(value);
  }, [value]);

  const clickHandler = (event) => {
    const button = event.target;
    const buttonValue = Number(button.dataset.value);
    const newValue = (buttonValue === val) ? 0 : buttonValue;

    setVal(newValue);
    onChange(newValue);
  };

  const createScale = () => {
    const items = [];
    const colors = ["green", "lime", "yellow", "orange", "red"];

    for (let i = 1; i <= size; i++) {
      const button = (
        <button
          type="button"
          className={cn(
            "grow h-3 border-r-2 border-r-slate-200 last:border-r-0",
            (val >= i) && `bg-${colors[i - 1]}-500 hover:opacity-100`,
            (val < i) && `bg-slate-300 hover:bg-slate-500 hover:opacity-60`,
            "active:opacity-70",
            "first:rounded-l-md last:rounded-r-md"
          )}
          key={i}
          title={i}
          data-value={i}
          onClick={clickHandler}
        />
      )
      items.push(button)
    }

    return items;
  };

  return (
    <div>
      {Boolean(label) && <FieldLabel label={label} />}
      <div className="flex flex-row">
        {createScale()}
      </div>
    </div>
  );
};

export default ScaleRadio;