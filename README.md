# 솔라커넥트 FE Assignment - Sorting Machine

---

### 🏕 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다. <br>
  https://sorting-machine.herokuapp.com/

---

### 💡 설치 및 시작

```js
//1. 설치
yarn

//2. 시작
yarn start
```

---

### 🧑‍💻 참여 멤버

|  이름  |                  역할                   |
| :----: | :-------------------------------------: |
| 김종원 |  UI스타일링, 에러핸들링, 정렬 알고리즘  |
| 박현아 | 전역상태관리, 커스텀 훅, 리팩토링, 배포 |

---

### 📋 컴포넌트 설계도

<a href="https://docs.google.com/presentation/d/1h4IkWs4X6zG6ExVKuzop4pgL0C1myERr2Z7Fwgu16kc/edit?userstoinvite=whddnjs1715@gmail.com&actionButton=1#slide=id.p" target="_blank">CLICK</a>으로 보러가기

---

### 📝 구현목록

#### 타이머

- [x] 1, 6의 타이머 컴포넌트 재사용
- [x] [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타내기
- [x] [6. 타이머]는 “en-US” 지역시간 표기법으로 나타내기
- [x] 한국 표준시를 기준으로 나타내기

#### 입력

- [x] 사용자의 입력 데이터 받기
- [x] 잘못된 형식의 입력 데이터 예외처리하기

#### 시작

- [x] 사용자가 버튼을 누르는 순간 소팅이 시작되게 하기
- [x] [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 되게 하기

#### 결과

- [x] 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 로 만들기
- [x] [4. 결과 필드]에서는 오름차순 결과를 나타내기
- [x] [5. 결과 필드]에서는 내림차순 결과를 나타내기
- [x] 알고리즘은 소팅알고리즘을 사용하지 않고, 정렬 방법으로 직접 구현하기

#### 기타

- [x] React.JS로 구현하기
- [x] 기획서 참고하여 레이아웃 짜고 UI 구현하기
- [x] Context API 및 Reducer함수 이용해 전역상태 관리하기

#### 참고한 레퍼런스

- 정렬 알고리즘: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=gi_balja&logNo=221245300411
- Context API: https://react.vlpt.us/basic/22-context-dispatch.html
