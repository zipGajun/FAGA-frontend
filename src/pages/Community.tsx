import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import "./CommunityPage.css";

// Mock Post Data
const mockPosts = [
  {
    id: 1,
    category: "자유",
    title: "FAGA 프로젝트 너무 기대되네요!",
    author: "ReactLover",
    createdAt: "2024-07-28",
    views: 128,
    likes: 15,
    comments: 4,
  },
  {
    id: 2,
    category: "정보",
    title: "나스닥, S&P 500 관련 유용한 사이트 공유합니다.",
    author: "StockMaster",
    createdAt: "2024-07-28",
    views: 256,
    likes: 32,
    comments: 8,
  },
  {
    id: 3,
    category: "질문",
    title: "베팅 시스템에서 코인 정산은 언제 되나요?",
    author: "궁금해요",
    createdAt: "2024-07-27",
    views: 98,
    likes: 5,
    comments: 2,
  },
  {
    id: 4,
    category: "자유",
    title: "다들 주말에 뭐하시나요?",
    author: "심심이",
    createdAt: "2024-07-26",
    views: 45,
    likes: 2,
    comments: 10,
  },
  {
    id: 5,
    category: "정보",
    title: "Recharts 라이브러리 커스텀 팁",
    author: "ChartPro",
    createdAt: "2024-07-26",
    views: 189,
    likes: 28,
    comments: 6,
  },
  {
    id: 6,
    category: "질문",
    title: "AI 어시스턴트 기능은 어떻게 사용하나요?",
    author: "AI초보",
    createdAt: "2024-07-25",
    views: 77,
    likes: 3,
    comments: 1,
  },
];

const CATEGORIES = ["전체", "자유", "정보", "질문"];
const POSTS_PER_PAGE = 5; // 페이지 당 게시글 수

const Community = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "전체") {
      return mockPosts;
    }
    return mockPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // 카테고리가 변경되면 1페이지로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // 페이지네이션 로직
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="main-content">
      <header className="main-header">
        <h2>Community</h2>
      </header>

      <div className="community-container">
        <div className="community-header">
          <div className="category-tabs">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`tab-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <Link to="/community/write" className="write-post-btn">
            <FaPen /> 글쓰기
          </Link>
        </div>

        <div className="post-list-container">
          <table className="post-table">
            <thead>
              <tr>
                <th className="col-id">번호</th>
                <th className="col-category">카테고리</th>
                <th className="col-title">제목</th>
                <th className="col-author">작성자</th>
                <th className="col-date">작성일</th>
                <th className="col-views">조회</th>
                <th className="col-likes">추천</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <span className={`category-badge ${post.category}`}>
                      {post.category}
                    </span>
                  </td>
                  <td className="post-title">
                    <a href="#">{post.title}</a>
                    {post.comments > 0 && (
                      <span className="comment-count">[{post.comments}]</span>
                    )}
                  </td>
                  <td>{post.author}</td>
                  <td>{post.createdAt}</td>
                  <td>{post.views}</td>
                  <td>{post.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </main>
  );
};

export default Community;
