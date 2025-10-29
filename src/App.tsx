import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import './Dashboard.css'
import Layout from './components/Layout'
import Vote from './pages/Vote'
import Community from './pages/Community'
import QA from './pages/QA'
import AI from './pages/AI' // AI 페이지 컴포넌트 import
import WritePost from './pages/WritePost'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="vote" element={<Vote />} />
          <Route path="community" element={<Community />} />
          <Route path="community/write" element={<WritePost />} />
          <Route path="qa" element={<QA />} />
          <Route path="ai" element={<AI />} /> {/* AI 라우트 추가 */}
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
