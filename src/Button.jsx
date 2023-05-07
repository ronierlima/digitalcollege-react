export function Button({ disabled, tipo, children }) {

  return (
    <button
      disabled={disabled}
      className={`btn ${disabled ? "" : tipo}`}
    >
      {children}
    </button>
  );
}

<Button disabled={true} tipo="primario"></Button>

