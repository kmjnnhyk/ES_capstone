import './App.scss';
import { gsap } from 'gsap';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='explanation'>
          <h1 className='text'>
            가운데 테이블에 놓여진 웹캠을 바라보고 아래의 문장 또는
            원하는 그 어떤 단어든지 말씀해보세요
          </h1>
          <p className='ex'>
            ex. 한글은 소리를 담기에 가장 적합한 글자이다.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='example2'>
          <h1>sound</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos illo voluptatem facere ipsam, molestiae dolores esse
            harum perspiciatis saepe odit et beatae quisquam aliquam
            quae ducimus enim architecto voluptates ipsum.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='example3'>
          <h1>shape</h1>
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
