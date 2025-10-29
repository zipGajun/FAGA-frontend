import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './WritePost.css'
import { FaImage } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'

const WritePost = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageSize, setImageSize] = useState(100) // 이미지 너비 %
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = () => {
    if (!isLoggedIn) {
      alert('글을 등록하려면 로그인이 필요합니다.')
      navigate('/login')
      return
    }
    // TODO: 실제 글 등록 로직 (서버 API 호출 등)
    alert('게시글이 등록되었습니다.')
    navigate('/community') // 등록 후 커뮤니티 페이지로 이동
  }

  return (
    <main className="main-content">
      <header className="main-header">
        <h2>글쓰기</h2>
      </header>

      <div className="write-post-container">
        {/* 숨겨진 파일 입력 필드 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="input-group">
          <label htmlFor="post-title">제목</label>
          <input id="post-title" type="text" placeholder="제목을 입력하세요" />
        </div>
        <div className="input-group">
          <label htmlFor="post-content">내용</label>
          <textarea
            id="post-content"
            rows={15}
            placeholder="내용을 입력하세요"
          ></textarea>
          {/* 이미지 미리보기 및 크기 조절 */}
          {imagePreview && (
            <div className="image-preview-container">
              <img
                src={imagePreview}
                alt="Preview"
                className="preview-image"
                style={{ width: `${imageSize}%` }}
              />
              <div className="image-size-control">
                <label>이미지 크기: {imageSize}%</label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={imageSize}
                  onChange={(e) => setImageSize(Number(e.target.value))}
                />
              </div>
            </div>
          )}
        </div>
        <div className="action-buttons">
          <button onClick={handleImageUploadClick} className="image-upload-btn">
            <FaImage /> 이미지 추가
          </button>
          <button className="cancel-btn">취소</button>
          <button className="submit-btn" onClick={handleSubmit}>
            등록
          </button>
        </div>
      </div>
    </main>
  )
}

export default WritePost
