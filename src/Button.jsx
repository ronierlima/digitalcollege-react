export function Button(props) {

  return (
    <button
      disabled={props.disabled}
      className={`btn ${props.disabled ? "" : props.tipo}`}
    >
      {props.children}
    </button>
  );
}

