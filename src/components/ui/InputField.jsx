const InputField = ({ id, label, type, required, className }) => {
    return (
      <div>
        <label htmlFor={id} className="block text-gray-700">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            id={id}
            className={`input h-24 ${className}`}
            required={required}
          ></textarea>
        ) : (
          <input
            id={id}
            type={type}
            className={`input ${className}`}
            required={required}
          />
        )}
      </div>
    );
  };
  
  export default InputField;
  