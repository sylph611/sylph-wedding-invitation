import { useState } from 'react';
import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton';
// import { push, ref, serverTimestamp } from 'firebase/database';
// import { realtimeDb } from '../../firebase.ts';

// TODO: 방명록 기능 사용시, realtime db에 guestbook 추가
// const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!name || !message) {
      alert('이름과 메시지를 채워주세요. 🥹');
    } else {
      e.preventDefault();
      // TODO: 이름, 메시지, 생성시간, 작성날짜 저장.
      // const guestbookMessage = {
      //   sender: name,
      //   message: message,
      //   createdAt: serverTimestamp(),
      //   date: new Date().toLocaleString(),
      // };
      // void push(guestbookRef, guestbookMessage);
      //
      // alert('메시지를 보냈습니다. 💌');
      setName('');
      setMessage('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="이름"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <RoundButton as="button" type="submit">
        💌 등록
      </RoundButton>
    </FormWrapper>
  );
};
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 20px; /* 좌우 여백 */
  margin: 0 auto;
  border-radius: 12px;
  background-color: #ffffff;
  box-sizing: border-box;
`;


const NameInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #444;
  font-family: inherit;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #e88ca6;
    outline: none;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #444;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #e88ca6;
    outline: none;
  }
`;

export default CommentForm;
