import './App.scss';
import { gsap } from 'gsap';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='container'>
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
          <h1>introduction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos illo voluptatem facere ipsam, molestiae dolores esse
            harum perspiciatis saepe odit et beatae quisquam aliquam
            quae ducimus enim architecto voluptates ipsum.
          </p>
        </div>
        <div className='page explanation'>
          <h1>explanation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos illo voluptatem facere ipsam, molestiae dolores esse
            harum perspiciatis saepe odit et beatae quisquam aliquam
            quae ducimus enim architecto voluptates ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
