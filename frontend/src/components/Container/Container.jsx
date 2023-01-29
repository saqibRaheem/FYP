export default function Container({ children }) {
  return (
    <div style={{ width: "1200px", margin: "0 auto", maxWidth: "100%" }}>
      {children}
    </div>
  );
}
