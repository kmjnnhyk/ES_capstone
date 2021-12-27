# 세종대학교 4-2<br />Entertainment Software 융합전공<br />CAPSTONE PROJECT<br />

한글을 주제로 만든 미디어아트 전시회에 온라인 소개 책자로 쓰인 싱글 페이지 리액트 웹사이트입니다.

## GSAP

스크롤에 따른 반응형 애니메이션 구현을 위하여 GSAP 라이브러리를 사용해봤습니다.

```
gsap.registerPlugin(ScrollTrigger);
```

---

- 페이드인
  > <img src = "https://user-images.githubusercontent.com/80577900/147475234-563f8c29-68f3-4b7b-8dc3-86c9292c77d4.gif" width = "160">
  ```js
  gsap.to('.cover-title', {
    opacity: 1,
    scale: 2,
    ease: 'power4',
    duration: 5,
  });
  ```
- 양쪽으로 갈라지는 애니메이션
  > <img src = "https://user-images.githubusercontent.com/80577900/147475229-b141833b-744b-42e5-a860-76fa0641c7b8.gif" width = "160">
  ```js
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
  });
  ```
- 바운스
  > <img src = "https://user-images.githubusercontent.com/80577900/147475214-8976244d-3409-446b-be92-e27396fd7933.gif" width = "160">
  ```js
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
  ```
