import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/HG001.png'

const Main = () => {
  const { greeting } = data;
  return (
    <Wrapper>
      <ImageWrapper>
        <MainImg src={mainImg} />
        {/* <OverlayImg src={overlayImg} /> */}
      </ImageWrapper>
      <MainTitle>{greeting.title}</MainTitle>
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
      
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 450px;
`;

const MainImg = styled.img`  
  width: 100%;
  display: block;
`;

const OverlayImg = styled.img`
  position: absolute;
  top: -100px;  // 원하는 위치로 조정
  left: 0px; // 원하는 위치로 조정
  width: 100%;
  height: 750px;
  z-index: 1;
  pointer-events: none; // 이미지 위 클릭 무시하고 싶으면 추가
`;

const MainTitle = styled.p`
  font-size: clamp(1.5rem, 5vw, 2.5rem); // 최소 1.5rem ~ 최대 2.5rem, 화면 폭에 따라
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  z-index: 2;
  text-align: center;
  margin-top: 1.5rem;
`;

const SubTitle = styled.p`
  position: absolute;
  font-size: 1.1rem;
  top: 600px;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
  text-align: center;
  margin-top: 1rem;
  z-index: 2; // overlayImg보다 위로
`;

