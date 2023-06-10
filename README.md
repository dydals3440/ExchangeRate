# Exchange Rate 국가별 환율 계산 앱 프로젝트

---

## Exchange Rate 앱 실행 방법

### 실행 방법

`yarn start`를 통해 프로젝트를 시작할 수 있습니다.

### Exchange Rate 사용해보기

아래의 링크에서 실제 작동되는 App을 확인할 수 있습니다.

[💰 Exchange Rate 사용해보기](https://matthew--roaring-kelpie-519f5d.netlify.app/)

---

# 프로젝트 파일 구조

```js
📦src
 ┣ 📂components
 ┃ ┣ 📜InputAmount.jsx
 ┃ ┣ 📜SelectCountry.jsx
 ┃ ┗ 📜SwitchCurrency.jsx
 ┣ 📂context
 ┃ ┗ 📜CurrencyContext.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useAxios.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

---

### Commit Message Convention

`feat`: 기능 추가, 삭제, 변경

`fix`: 버그 수정

`docs`: 문서 추가, 삭제, 변경 - 코드 수정없음

`style`: 코드 형식, 정렬, 주석 등의 변경
(세미콜론 추가 같은 코드 수정이 있으나, 기능에 변동 X)

`refactor`: 코드 리펙토링 (변수명, JS -> TS)

`test`: 테스트 코드 추가, 삭제, 변경 등

`chore`: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경

---

### Exchange Rate 앱 핵심 기능

- [x] Material UI 이용 디자인
- [x] codepen.io에서 Background Animation 받아와 적용시켜보기
- [x] `CurrencyAPI` 이용
- [x] 국가별 환율 계산 구현
- [x] 모바일 환경 반응형 디자인
- [x] `useContext` 활용
- [x] `useAxios` hook 제작
- [x] `axios` `param` 접근
- [x] https://restcountries.com/v3.1/all 국가별 환율 관련 정보 / 이미지 받아오기
- [ ] `netlify` 활용 배포! (버그 수정 후)

---

### Exchange Rate 기능 실행 영상!

![앱 사용영상]('./src/images/Exchange-Rate.gif')

---

### Trouble Shooting 🛠️

`Exchange Rate` 프로젝트를 진행하면서 발생한 `버그 수정`, `문제 해결`, 기능 구현시 `어려웠던 점 정리`, `성능 개선`, `작업 효율 향상` 들에 관해 정리한 기록입니다.

[프로젝트를 진행시 배운점들 정리]()

---

### 버그 발생시 ☎️

연락 부탁드립니다. <dydals3440@gmail.com>

1. 현재 국가변경시 App이 Crash되는 현상이 발생되어 수정중입니다. 수정 후 배포하겠습니다.
