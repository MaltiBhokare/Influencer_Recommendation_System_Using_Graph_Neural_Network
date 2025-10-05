# 🎥 Influencer Recommendation System Using Graph Neural Network (GNN)

This project leverages **Graph Neural Networks (GNN)** to recommend top YouTube influencers based on their similarity in content, engagement, and audience.  
It includes a **Flask backend (API)** and a **React frontend (dashboard)** integrated to visualize influencer recommendations interactively.

---

## 🚀 Project Overview

Influencer marketing plays a vital role in brand promotions, yet finding the *right* influencer remains a challenge.  
This system uses **GraphSAGE**, a GNN-based algorithm, to model relationships among influencers and recommend the top-5 most similar influencers in a chosen category (e.g., Food, Travel, Technology, Lifestyle).

---

## 🧩 Architecture

YouTube Dataset → Graph Construction → GraphSAGE Model (PyTorch Geometric)
↓
Flask API (Python Backend)
↓
React Dashboard (Frontend Visualization)


---

## 🧠 Technologies Used

### 🖥 Backend (AI + API)
- **Python 3.10+**
- **Flask** (REST API framework)
- **Flask-CORS** (for React integration)
- **Pandas** (data handling)
- **PyTorch Geometric** (GraphSAGE model)
- **Gunicorn** (for deployment on Render)

### 🌐 Frontend
- **React.js (Vite / CRA)**
- **Axios** (API communication)
- **Recharts** (data visualization)
- **CSS / Glassmorphism UI** with responsive layout

### 🧮 Model Training
- **GraphSAGE algorithm** implemented in  
  `train_graphsage.ipynb`
- Trained on a structured **YouTube Influencer dataset**
- Produces similarity embeddings used for recommendations

---

## 📊 Features

✅ Recommend top-5 influencers by category (Food, Travel, Lifestyle, Technology)  
✅ Interactive bar charts showing similarity scores  
✅ Dynamic list view with influencer metrics  
✅ Transparent & responsive UI with background image  
✅ Flask API integrated seamlessly with React  
✅ Fully deployable on **Render (backend)** and **Vercel (frontend)**

---

## 🧠 How It Works

1. **Data Preprocessing:**  
   A YouTube dataset containing influencer statistics (subscribers, views, likes) is cleaned and converted into graph form.

2. **Model Training (GraphSAGE):**  
   Each influencer node learns embeddings based on neighborhood similarity using PyTorch Geometric.

3. **Recommendation Generation:**  
   For each influencer category, the top-5 most similar nodes are extracted.

4. **API Service (Flask):**  
   Routes like `/recommend/<category>` serve JSON responses.

5. **Visualization (React):**  
   The frontend fetches and visualizes results dynamically.

---

