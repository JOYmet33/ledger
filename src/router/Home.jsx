import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Home = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Input 입력값을 새로운 데이터에 저장하기
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

  // section2.
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const onClick = () => {
    alert("hi");
  };

  const monthBtn = month.map((num, index) => {
    return <Btn key={index} onClick={onClick}>{`${num}월`}</Btn>;
  });

  const showExpenses = expenses.map((expense, index) => {
    return (
      <ExpenseCard key={index}>
        <ExpenseFront>
          <span>{expense.date}</span>
          <span>
            {expense.category} - {expense.description}
          </span>
        </ExpenseFront>
        <span>{expense.price} 원</span>
      </ExpenseCard>
    );
  });

  return (
    <>
      <Section>
        <Form className="지출내역 저장" onSubmit={handleSubmit}>
          <InputDiv>
            <Label>날짜</Label>
            <Input
              type="date"
              id="date"
              placeholder="yyyy-mm-dd"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></Input>
          </InputDiv>
          <InputDiv>
            <Label>항목</Label>
            <Input
              type="text"
              id="category"
              placeholder="지출 항목"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Input>
          </InputDiv>
          <InputDiv>
            <Label>금액</Label>
            <Input
              type="number"
              id="price"
              placeholder="지출 금액"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Input>
          </InputDiv>
          <InputDiv>
            <Label>내용</Label>
            <Input
              type="text"
              id="description"
              placeholder="지출 내용"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Input>
          </InputDiv>
          <SubmitBtn type="submit">저장</SubmitBtn>
        </Form>
      </Section>
      <Section>
        <BtnSection>{monthBtn}</BtnSection>
      </Section>
      <Section>{showExpenses}</Section>
    </>
  );
};

// Section styled-component
const Section = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
`;

// Section 1. 지출내역 저장
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-width: 120px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const SubmitBtn = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(0, 86, 179);
  }
`;

// Secton 2. 월별 버튼
const BtnSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Btn = styled.button`
  font-size: 18px;
  font-weight: 600;
  height: 60px;
  padding: 20px;
  width: 104px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
`;

// Section 3. 지출내역
const ExpenseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;

const ExpenseFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Home;
