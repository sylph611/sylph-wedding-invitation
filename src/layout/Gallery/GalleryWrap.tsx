import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';
import RoundButton from '@/components/RoundButton';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <RoundButton onClick={onClickImageMoreViewButton}>
          {isMoreView ? '접기' : '더보기'}
        </RoundButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${({ isMoreView }) => (isMoreView ? '1000px' : '30vh')}; // 충분히 큰 값으로 설정
  overflow: hidden;
  transition: max-height 0.5s ease;
`;

// 그라데이션 오버레이는 닫힌 상태에서만 표시
const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
  pointer-events: none;
`;
