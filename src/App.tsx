import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Dashboard.css";
import Layout from "./components/Layout";
import Debate from "./pages/Debate";
import Community from "./pages/Community";
import QA from "./pages/QA";
import AI from "./pages/AI"; // AI 페이지 컴포넌트 import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="debate" element={<Debate />} />
        <Route path="community" element={<Community />} />
        <Route path="qa" element={<QA />} />
        <Route path="ai" element={<AI />} /> {/* AI 라우트 추가 */}
      </Route>
    </Routes>
  );
}

export default App;
