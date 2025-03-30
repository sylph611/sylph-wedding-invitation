import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>
        <span>
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeader>

      <AccordionContent isOpen={isOpen}>
        <Inner>{children}</Inner>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: 'Iropke Batang', serif;
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(247, 192, 208);
  padding: 0 15px;
  cursor: pointer;

  & > p {
    color: #44484d;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.4s ease;
  overflow: hidden;
  background-color: #ffffff;
`;

// 자식 요소에 padding 주기
const Inner = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  text-align: justify;
`;