import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './LoginPage.css'
import { FaGoogle, FaComment } from 'react-icons/fa'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 애플리케이션에서는 여기서 서버로 로그인 요청을 보냅니다.
    if (email && password) {
      console.log('Logging in with:', { email, password })
      login() // AuthContext의 login 함수 호출
      navigate('/') // 로그인 성공 시 대시보드로 이동
    } else {
      setError('이메일과 비밀번호를 모두 입력해주세요.')
    }
  }

  const handleSocialLogin = (provider: 'google' | 'kakao') => {
    // TODO: 실제 소셜 로그인 로직을 구현해야 합니다. (e.g., Firebase, OAuth2)
    console.log(`Logging in with ${provider}`)
    // 현재는 성공적으로 로그인되었다고 가정합니다.
    login()
    navigate('/')
  }

  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <h1 className="login-title">FAGA</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-submit-btn">
            로그인
          </button>
        </form>

        <div className="social-login-divider">
          <span>OR</span>
        </div>

        <div className="social-login-buttons">
          <button
            className="social-login-btn google-btn"
            onClick={() => handleSocialLogin('google')}
          >
            <FaGoogle />
            <span>Google 계정으로 로그인</span>
          </button>
          <button
            className="social-login-btn kakao-btn"
            onClick={() => handleSocialLogin('kakao')}
          >
            <FaComment />
            <span>카카오 계정으로 로그인</span>
          </button>
        </div>

        <p className="signup-link">
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage