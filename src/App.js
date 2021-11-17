import './App.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function App() {
  const pageCoverRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // PAGE COVER
    gsap.to('.background', {
      x: 100,
      duration: 3,
      scrollTrigger: {
        trigger: '.page cover',
        start: 'top top',
        end: '500px top',
        scrub: true,
      },
    });
    gsap.to('.title', {
      opacity: 1,
      scale: 1.5,
      ease: 'power4',
      duration: 3,
    });

    // PAGE GUIDE
    gsap.to('.guide-announcement', {
      opacity: 1,
      duration: 3,
      ease: 'power.in',
      scrollTrigger: {
        trigger: '.guide-announcement',
        start: 'center 60%',
        markers: true,
      },
    });
  }, []);

  return (
    <div className='App'>
      <div className='container' ref={pageCoverRef}>
        <div className='page cover'>
          <div className='background'>
            <img src='cover_image_one.png' alt='one' />
            <img src='cover_image_two.png' alt='two' />
            <img src='cover_image_three.png' alt='three' />
          </div>
          <div className='title'>세상의 소리를 담은 '한글'</div>
        </div>
        <div className='page guide'>
          <p className='guide-announcement'>
            가운데 테이블에 놓여진 웹캠을 바라보고
            <br />
            아래의 문장 또는 원하는 그 어떤 단어든지
            <br />
            말씀해보세요
          </p>
          <p className='guide-example'>
            ex. 한글은 소리를 담기에 가장 적합한 글자이다.
          </p>
          <ul className='words-map'>
            <li className='word'>꿈</li>
            <li className='word'>훈민정음</li>
            <li className='word'>율동</li>
            <li className='word'>감성</li>
            <li className='word'>손글씨</li>
            <li className='word'>한글</li>
            <li className='word'>사랑</li>
            <li className='word'>술</li>
            <li className='word'>옹달샘</li>
            <li className='word'>삶</li>
            <li className='word'>울릉도</li>
          </ul>
        </div>
        <div className='page introduction'>
          <h1>전시 소개</h1>
          <p>
            우리는 한글의 ‘소리’와 ‘모양’에 집중하여 어디서 어떻게
            소리가 나오고 부딪히는지, 어떤 모양과 위치로 존재하는지에
            따라 변화하는 한글의 독창적인 특징을 다뤄보려고 합니다.
            저희 전시를 체험하고 관람하는 이 짧은 시간이 소리에 따라
            변화하는 글자를 보고 한글의 조형적인 아름다움과 소리를
            표현하는 재미를 느낄 수 있는 큰 기회가 되었으면 합니다.
          </p>
        </div>
        <div className='page explanation'>
          <h1>전시 설명</h1>
          <p>
            전세계에는 6000개 가량의 언어가 있습니다. 그중에서 세계
            유일하게 ‘한글’만이 창시자와 반포일과 글자를 만드는
            원리까지 알 수 있습니다. 한글의 훈민정음 해례본은 유네스코
            세계기록유산으로 등재 되었습니다. 한글은 소리가 나는
            원리와 규칙을 정밀히 분석하여 이를 바탕으로 만들어진 매우
            과학적인 글자이며 한류열풍에 힘입어 세계적으로 주목을 받고
            있습니다. 그런데 정작 우리들은 어떤 의미에서 한글이
            ‘과학적’인지 제대로 알고있지는 못합니다. 어떤 언어든지
            말할 때 음의 높낮이가 존재합니다. 일반적으로 언어는
            단기간에 습득하기 어렵지만 한글은 과학적으로 쉽고 빠르게
            터득할 수 있는 언어라고 합니다. 그 이유는 소리는 문자보다
            먼저 발생하는데 문자는 이를 뒤따라가지만, 한글은 소리의
            발생과 거의 비슷한 속도로 문자를 만들어냅니다. 한글의
            자음은 인간의 발성기관 모습을 본 따 만들어 졌습니다.
            모음은 하늘, 땅, 사람(천지인)의 뜻과 철학이 담긴 3개의
            기호 · , ᅳ, ᅵ 만으로 표현하였고 10개의 모음과 14개의 자음
            조합으로 11000개 이상의 소리를 표현해내는 것이 가능합니다.
            몇 가지 한글이 만들어지는 원리를 살펴보자면 혀가 입 천장에
            닿는 모양과 비슷하게 [ᄀ, ᄏ]을, 더 나아가 된소리까지
            표현하여 [ᄀ, ᄏ, ᄁ]까지 만들었습니다. 또한 [ᄏ, ᄐ, ᄑ,
            ᄒ]에서 보듯이 기본자 [ᄀ, ᄃ, ᄆ, ᄋ]에서 격음일 경우에
            힘이 더 드는걸 감안하여 줄을 한 두개 더 그었던 것 입니다.
            자음은 성대를 진동시키며 나오느냐에 따라 울림소리와
            안울림소리로 구분할 수 있고 파열음, 마찰음, 비음의 특징을
            가지고 만들어졌습니다. 이러한 인간의 발음기관을 본 떠
            만들어진 과학적인 원리 덕분에 우리는 쉽게 한글을 배우고
            사용해왔던 것입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
