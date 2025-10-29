import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

// 1. Context 타입 정의
interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

// 2. Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 3. Provider 컴포넌트 생성
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => setIsLoggedIn(true), [])
  const logout = useCallback(() => setIsLoggedIn(false), [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 4. Custom Hook 생성
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
