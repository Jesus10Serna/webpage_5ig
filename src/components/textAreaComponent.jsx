
const TextAreaComponent = ({label, value, placeholdel, type, className, name}) => {
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
        />
      </div>
    </>
  );
};

export default TextAreaComponent;
