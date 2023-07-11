const Input = ({ id, value, onChange, type = 'text', label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} value={value} onChange={onChange} type={type} min={0} />
    </div>
  );
};

export { Input };
