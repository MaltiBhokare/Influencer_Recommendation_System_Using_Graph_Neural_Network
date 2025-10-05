


import React from "react";

export default function InfluencerList({ influencers }) {
  if (!influencers.length) return null;

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{ color: "#FFD580", textAlign: "center", marginBottom: "20px" }}>
        Top Influencers
      </h2>

      {influencers.map((i) => (
        <div
          key={i["YouTuber Name"]}
          style={{
            background: "rgba(0, 0, 0, 0.6)", // ✅ dark glass effect
            color: "#f1f1f1", // ✅ bright text
            borderRadius: "12px",
            padding: "15px 20px",
            marginBottom: "15px",
            backdropFilter: "blur(6px)",
            boxShadow: "0 0 12px rgba(255,255,255,0.15)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 0 18px rgba(255,153,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.15)";
          }}
        >
          <h3
            style={{
              marginBottom: "6px",
              color: "#ffb84d",
              textShadow: "0 0 8px rgba(255,153,0,0.5)",
            }}
          >
            {i["YouTuber Name"]}
          </h3>

          <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.6" }}>
            <strong style={{ color: "#FFD580" }}>Subscribers:</strong> {i["Subscribers"]}{" "}
            &nbsp; | &nbsp;
            <strong style={{ color: "#FFD580" }}>Avg Views:</strong> {i["Avg Views"]}{" "}
            &nbsp; | &nbsp;
            <strong style={{ color: "#FFD580" }}>Avg Likes:</strong> {i["Avg Likes"]}{" "}
            &nbsp; | &nbsp;
            <strong style={{ color: "#FFD580" }}>Similarity Score:</strong>{" "}
            {i["Similarity Score"].toFixed(3)}
          </p>
        </div>
      ))}
    </div>
  );
}
