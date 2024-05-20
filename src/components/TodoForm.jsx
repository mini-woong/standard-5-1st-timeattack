import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    
  }
  return <div>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="제목"
      value={title}
      onChange={(e) => setTitle(e.target.value)}></input>
      <input type="text" placeholder="내용"
      value={content}
      onChange={(e) => setContent(e.target.value)}></input>
      <button type="submit">추가</button>
    </form>
  </div>;
}
