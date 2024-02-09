
const InputComponent = ({label, value, placeholdel, type, className, name, handleChange}) => {

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
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputComponent;
