import styled from '@emotion/styled';

const RoundButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px; /* 아이콘과 텍스트 사이 */
  padding: 0.5em 1.2em;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  color: #44484d;
  background-color: #fcebef;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background-color: #f9dce3;
    transform: scale(1.03); /* 살짝 커짐 */
  }

  &:active {
    transform: scale(0.98); /* 눌림 효과 */
  }
`.withComponent('a');

export default RoundButton;
