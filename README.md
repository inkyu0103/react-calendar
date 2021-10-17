# 페이워크 과제 1

**결과 : https://inkyu0103.github.io/react-calendar/**

---

### 1. 캘린더 구조

![캘린더구조](/docs/Calendar.png)

---

### 2. 기술 스택

- React.js
- emotion.js

---

### 3. 사용된 함수들

| 함수 명          | 파라미터                                       | 설명                                                                                  |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| isLeapYear       | year : number                                  | 해당 연도의 윤년여부를 알려줍니다.                                                    |
| handleIsSelected | year : number , month : number , date : number | year,month,date를 받아, 해당하는 날짜로 넘어가고, 그 날짜를 선택한 것으로 표시합니다. |
| goToday          |                                                | 버튼을 누르면 오늘 날짜로 이동하고, 오늘 날짜에 focus를 줍니다.                       |
| goNextMonth      |                                                | 다음달 달력을 렌더링합니다.                                                           |
| goPreviousMonth  |                                                | 이전달 달력을 렌더링합니다.                                                           |
| makeDateArray    |                                                | 렌더링 되는 날짜들을 배열에 담아 반환합니다                                           |

---

### 4. 캘린더 만들면서 고려한 점

- 렌더링될 모든 데이터는 App 컴포넌트에서 관리했습니다. ( 컴포넌트 간 독립성 유지를 위해)

- CalendarItem / CalendarButton은 따로 컴포넌트로 뽑아내어 재사용성을 고려하였습니다.

- 객체 생성을 최소화 해보려 노력했습니다.

---

### 5. 참고한 디자인

![](https://csshint.com/wp-content/uploads/2020/09/Calendar-js.jpg)
