import { useState } from "react";

const Home = () => {
  // const [expenses, setExpenses] = useState([
  //   {
  //     id: { date },
  //     date: { date },
  //     item: { item },
  //     price: { price },
  //     content: { content },
  //   },
  // ]);
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");

  const onChargeDate = (e) => {
    setDate(e.target.value);
  };
  const onChargeItem = (e) => {
    setItem(e.target.value);
  };
  const onChargePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChargeContent = (e) => {
    setContent(e.target.value);
  };

  // const onSubmit = () => {
  //   setExpenses([
  //     {
  //       id: { date },
  //       date: { date },
  //       item: { item },
  //       price: { price },
  //       content: { content },
  //     },
  //     ...expenses,
  //   ]);
  // };

  return (
    <form>
      <div>
        <label>날짜</label>
        <input
          onChange={onChargeDate}
          type="text"
          id="date"
          placeholder="yyyy-mm-dd"
          value={date}
        ></input>
      </div>
      <div>
        <label>항목</label>
        <input
          onChange={onChargeItem}
          type="text"
          id="item"
          placeholder="지출 항목"
          value={item}
        ></input>
      </div>
      <div>
        <label>금액</label>
        <input
          onChange={onChargePrice}
          type="number"
          id="price"
          placeholder="지출 금액"
          value={price}
        ></input>
      </div>
      <div>
        <label>내용</label>
        <input
          onChange={onChargeContent}
          type="text"
          id="content"
          placeholder="지출 내용"
          value={content}
        ></input>
      </div>
      <button>저장</button>
    </form>
  );
};

export default Home;
