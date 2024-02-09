
const TextAreaComponent = ({label, value, placeholdel, type, className, name, handleChange}) => {
  return (
    <>
      <div className="inputComponentContainer">
        <p>{label}</p>
        <textarea
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

export default TextAreaComponent;
