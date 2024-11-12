const Field = ({
  inputRef,
  ...props
}) => {
  const className = `
    w-full
  `;

  return (
    <div
      className={className}
    >
      <input
        ref={inputRef}
        className={`
          w-full
          p-2
          bg-slate-100
          hover:bg-slate-50
          focus:bg-white
          rounded-md
          transition
          duration-2
          outline-none
        `}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Field;