import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SignupPage.css'
import { FaGoogle, FaComment } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('') // 이전 오류 메시지 초기화

    if (!email || !password || !confirmPassword) {
      setError('모든 필드를 입력해주세요.')
      return
    }

    // 이메일 형식 검증 (정규식 사용)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('유효한 이메일 주소를 입력해주세요.')
      return
    }

    // 비밀번호 길이 검증
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.')
      return
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    // TODO: 실제 애플리케이션에서는 여기서 서버로 회원가입 요청을 보냅니다.
    console.log('Signing up with:', { email, password })
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.')
    navigate('/login') // 회원가입 성공 시 로그인 페이지로 이동
  }

  const handleSocialLogin = (provider: 'google' | 'kakao') => {
    // TODO: 실제 소셜 로그인/회원가입 로직을 구현해야 합니다. (e.g., Firebase, OAuth2)
    console.log(`Signing up and logging in with ${provider}`)
    // 현재는 성공적으로 로그인되었다고 가정합니다.
    login()
    navigate('/')
  }

  return (
    <div className="signup-page-container">
      <div className="signup-form-wrapper">
        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">FAGA에서 새로운 계정을 만드세요.</p>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="signup-error">{error}</p>}
          <button type="submit" className="signup-submit-btn">
            회원가입
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
            <span>Google 계정으로 계속하기</span>
          </button>
          <button
            className="social-login-btn kakao-btn"
            onClick={() => handleSocialLogin('kakao')}
          >
            <FaComment />
            <span>카카오 계정으로 계속하기</span>
          </button>
        </div>

        <p className="login-link">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage