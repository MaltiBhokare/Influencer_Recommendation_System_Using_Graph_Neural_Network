
export default function CategorySelector({ setCategory }) {
  const categories = ["food", "lifestyle", "technology", "travel"];

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <select
        defaultValue=""
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          fontSize: "16px",
          border: "1px solid #aaa",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
      >
        <option value="" disabled>
          -- Select Category --
        </option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
