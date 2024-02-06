
const InputComponent = ({label, value, placeholdel, type, className, name}) => {
  return (
    <>
      <div className="inputComponentContainer">
        <p>{label}</p>
        <input
          type={type}
          className={className}
          value={value}
          placeholder={placeholdel}
          name={name}
        />
      </div>
    </>
  );
};

export default InputComponent;
