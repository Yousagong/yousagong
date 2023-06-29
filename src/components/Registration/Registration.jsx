import "./Registration.css";
import React, { useState } from "react";
import { child, getDatabase, push, ref, set, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const create = () => {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), "post")).key;
    const updates = {};
    updates["/post/" + newPostKey] = {
      key: newPostKey,
      title,
      content,
    };

    update(ref(db), updates);
    navigate("/kr/nearby-stores/");
  };

  return (
    <div className="WriteCode">
      <div className="write-title">
        <h1>가게 등록하기</h1>
      </div>
      <div className="title">
        <input
          className="title-input"
          placeholder="가게 이름을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="hr" />
      <div className="content">
        <textarea
          className="content-input"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="hr" />

      <button onClick={create} className="button">
        글 등록
      </button>
    </div>
  );
}
