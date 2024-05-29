import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  // input 입력값을 새로운 데이터에 저장하기
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: uuidv4(),
      date: date,
      category: category,
      price: price,
      description: description,
    };
    // 전체 데이터 가져오기: 기존 데이터 + 새로운 데이터 합치기
    setExpenses((prev) => [...prev, newExpense]);

    // 입력값 초기화
    setDate("");
    setCategory("");
    setPrice(0);
    setDescription("");
  };

  return (
    <>
      <form className="지출내역 저장" onSubmit={handleSubmit}>
        <div>
          <label>날짜</label>
          <input
            type="text"
            id="date"
            placeholder="yyyy-mm-dd"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div>
          <label>항목</label>
          <input
            type="text"
            id="category"
            placeholder="지출 항목"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </div>
        <div>
          <label>금액</label>
          <input
            type="number"
            id="price"
            placeholder="지출 금액"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div>
          <label>내용</label>
          <input
            type="text"
            id="description"
            placeholder="지출 내용"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <button type="submit">저장</button>
      </form>
      <div className="월별"></div>
    </>
  );
};

export default Home;
