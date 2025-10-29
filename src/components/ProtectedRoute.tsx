import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) {
    // 로그인 페이지로 리디렉션
    // state에 현재 위치를 저장하여, 로그인 후 원래 페이지로 돌아올 수 있도록 함
    alert('로그인이 필요한 서비스입니다.')
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // 로그인 상태이면 요청된 페이지(자식 라우트)를 렌더링
  return <Outlet />
}

export default ProtectedRoute