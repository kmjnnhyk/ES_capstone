import './App.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

function App() {
  const pageCoverRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // OBJETS
    gsap.to('.objet:nth-child(1)', {
      opacity: 0.3,
      duration: 2,
      ease: 'power.in',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+1200 center',
      },
    });
    gsap.to('.objet:nth-child(1)', {
      y: 520,
      duration: 1.5,
      ease: 'Bounce.easeOut',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+1200 center',
      },
    });
    gsap.to('.objet:nth-child(2)', {
      opacity: 0.3,
      duration: 2,
      ease: 'power.in',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+1800 center',
      },
    });
    gsap.to('.objet:nth-child(2)', {
      y: 520,
      duration: 1.5,
      ease: 'Bounce.easeOut',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+1800 center',
      },
    });
    gsap.to('.objet:nth-child(3)', {
      opacity: 0.3,
      duration: 2,
      ease: 'power.in',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+2600 center',
      },
    });
    gsap.to('.objet:nth-child(3)', {
      y: 520,
      duration: 1.5,
      ease: 'Bounce.easeOut',
      scrollTrigger: {
        trigger: '.page introduction',
        start: '+2600 center',
      },
    });

    // PAGE COVER
    gsap.to('.background-text:nth-child(2n)', {
      x: 100,
      duration: 3,
      scrollTrigger: {
        trigger: '.page cover',
        start: 'top top',
        end: '500px top',
        scrub: true,
      },
    });
    gsap.to('.background-text:nth-child(2n+1)', {
      x: -100,
      duration: 3,
      scrollTrigger: {
        trigger: '.page cover',
        start: 'top top',
        end: '500px top',
        scrub: true,
      },
    });
    gsap.to('.cover-title', {
      opacity: 1,
      scale: 2,
      ease: 'power4',
      duration: 5,
    });

    // PAGE GUIDE
  }, []);

  return (
    <div className='App'>
      <div className='container' ref={pageCoverRef}>
        <div className='objets-background'>
          <img
            className='objet'
            src={`${process.env.PUBLIC_URL}/images/objet5.png`}
            alt='objets5'
          />
          <img
            className='objet'
            src={`${process.env.PUBLIC_URL}/images/objet2.png`}
            alt='objets5'
          />
          <img
            className='objet'
            src={`${process.env.PUBLIC_URL}/images/objet4.png`}
            alt='objets5'
          />
        </div>
        <div className='page cover'>
          <ul className='background'>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image1.png`}
                alt='cover img1'
              />
              ;
            </li>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image2.png`}
                alt='cover img2'
              />
            </li>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image3.png`}
                alt='cover img3'
              />
            </li>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image4.png`}
                alt='cover img4'
              />
            </li>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image1.png`}
                alt='cover img1'
              />
            </li>
            <li className='background-text'>
              <img
                src={`${process.env.PUBLIC_URL}/images/cover_image2.png`}
                alt='cover img2'
              />
            </li>
          </ul>
          <div className='cover-title'>
            <p>세상의 소리를 담은</p>
            <h1>한글</h1>
            <p>ES-캡스톤 프로젝트</p>
          </div>
        </div>
        <div className='page introduction'>
          <h1>전시 소개</h1>
          <p>
            저희는 한글의 ‘소리’와 ‘모양’에 집중했습니다.
            <br />
            전시를 체험하고 관람하는 이 짧은 시간이 소리에 따라
            변화하는 글자를 보고 한글의 조형적인 아름다움과 소리를
            표현하는 재미를 느낄 수 있는 작은 기회가 되었으면 합니다.
          </p>
        </div>
        <div className='page guide'>
          <div className='wrapper'>
            <h1>전시 안내</h1>
            <p className='objet-announcement'>
              천장에 설치되어 있는 오브제들은 <br />
              우리나라의 전통 색채인 오방색으로 <br />
              포인트를 준 작품입니다. 음양오행의 <br />
              원리가 담겨있는 오방색과 천지인의 원리가 <br />
              담겨있는 한글의 조화를 표현해 보았습니다
            </p>
            <p className='screen-announcement'>
              가운데 테이블에 놓여진 <br />
              웹캠 앞에서서 화면에 나오는
              <br />
              단어를 따라읽고 소리 크기에 따라
              <br />
              반응하는 글자를 주목해주세요
            </p>
          </div>
        </div>
        <div className='page explanation'>
          <h1>한글의 과학성</h1>
          <p>
            한글은 소리가 나는 원리와 규칙을 정밀히 분석하여 이를
            바탕으로 만들어진 매우 과학적인 글자이며 한류열풍에 힘입어
            세계적으로 주목을 받고 있습니다. 그런데 정작 우리들은 어떤
            의미에서 한글이 ‘과학적’인지 제대로 알고 있지는 못합니다.
          </p>
          <p>
            일반적으로 언어는 단기간에 습득하기 어렵지만 한글은
            과학적으로 쉽고 빠르게 터득할 수 있는 언어라고 합니다. 그
            이유는 소리는 문자보다 먼저 발생하는데 문자는 이를
            뒤따라가지만, 한글은 10개의 모음과 14개의 자음 조합으로 약
            11,000개의 소리를 표현해내기 때문에 소리의 발생과 거의
            비슷한 속도로 문자를 만들어냅니다.
          </p>
          <p>
            따라서 한글은 인간의 발음기관을 본 떠 만들어진 과학적인
            원리 덕분에 우리는 쉽게 한글을 배우고 사용해왔던 것입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
