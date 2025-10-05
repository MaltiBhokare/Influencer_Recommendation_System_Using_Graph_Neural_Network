

import React, { useState, useEffect } from "react";
import { fetchRecommendations } from "./api";
import CategorySelector from "./components/CategorySelector";
import InfluencerList from "./components/InfluencerList";
import bg1 from "./assets/bg1.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

function App() {
  const [category, setCategory] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!category) return;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetchRecommendations(category);
        setInfluencers(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch influencer data.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [category]);

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Poppins, sans-serif",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FFD580",
            letterSpacing: "1px",
            fontWeight: "600",
            textShadow: "0 0 15px rgba(255,215,128,0.8)",
          }}
        >
          🎥 Influencer Recommendation Dashboard
        </h1>

        <CategorySelector setCategory={setCategory} />

        {!category ? (
          <p style={{ textAlign: "center", color: "#bbb", marginTop: "30px" }}>
            Please select a category to view top influencers.
          </p>
        ) : loading ? (
          <p style={{ textAlign: "center" }}>Loading data...</p>
        ) : error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : influencers.length === 0 ? (
          <p style={{ textAlign: "center" }}>No data available.</p>
        ) : (
          <>
            <h3
              style={{
                marginTop: "20px",
                color: "#FFD580",
                textAlign: "center",
                fontWeight: "500",
                textShadow: "0 0 10px rgba(255,215,128,0.8)",
              }}
            >
              Top 5 Influencers in {category.toUpperCase()}
            </h3>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={influencers}
                margin={{ top: 20, right: 30, left: 10, bottom: 70 }}
              >
                {/* Soft grid lines */}
                <CartesianGrid stroke="rgba(255,255,255,0.2)" />
                <XAxis
                  dataKey="YouTuber Name"
                  angle={30}
                  textAnchor="start"
                  interval={0}
                  height={100}
                  tick={{ fill: "#f5f5f5" }}
                />
                <YAxis
                  tick={{ fill: "#f5f5f5" }}
                  label={{
                    value: "Similarity Score",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#FFD580",
                    fontSize: 13,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(20,20,20,0.8)",
                    borderRadius: "10px",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffb347" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#ffcc33" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="Similarity Score"
                  fill="url(#barGradient)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

            <InfluencerList influencers={influencers} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
