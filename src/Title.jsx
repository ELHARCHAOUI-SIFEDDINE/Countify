export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Upgrade to <b>Pro</b> for unlimited clicks!
        </span>
      ) : (
        "Countify"
      )}
    </h1>
  );
}
