export default function Button({ label, onClick, className, type }) {
    // Reusable Button
    // label for button name
    // onClick for click function (Optional)
    // className for additional className for button (Optional)
    // type for button type (Optional) 
  return (
    <button
      className={`p-2 px-3 rounded-xl bg-btnColor ${className} hover:brightness-90 active:brightness-75`}
      onClick={() => onClick && onClick()}
      type={type}
    >
      {label}
    </button>
  );
}
