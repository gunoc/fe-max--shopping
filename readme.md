# 🌴아마존📦

# 실행하기 
1. 클론

        git clone https://github.com/gunoc/fe-max--shopping.git

2. npm 설치

        npm install

3. 실행

        npm run dev

# week 1 학습계획
- [x] SCSS에 대해 공부한다
- [] 모달영역 처리에 대해 고민한다
- [] 무한 슬라이딩 동작 방식을 알아본다
- [] 애니메이션 구현 방식 차이를 알아본다
  - [] js와 css 구현의 차이
  - [] css 애니메이션
  - [] 브라우저 렌더링, paint,  Reflow 발생
- [x] 뷰포트에 대해서
- [x] scss 폴더구조
# week 1
- 상단 네비게이션 (모달기능 포함)
  - 기획서 1번 기능
- 히어로 영역 슬라이딩(Carousel)
  - 기획서 2번 기능
  - 무한 슬라이딩으로 동작해야 한다.
  - 데이터는 실제 데이터가 아닌 임의로 구성해도 된다.
- 그외 영역의 HTML,CSS 작업은 나중으로 미룬다.
# week1 TODO
- [x] lint, prettier 적용
- [] 화면ui 구성
  - [x] 상단바
  - [] 메인 페이지
- [] 상단바
  - [x] 상단바의 가로사이즈가 1120px을 넘는경우 화면의 가로사이즈에 맞춰 늘어난다
  - [x] 로그인 버튼
    - [x] 메인페이지 진입시 1초 뒤, 상단 바 레이어로 로그인 버튼이 보인다
    - [x] 스르륵 나타나는 애니메이션 추가
    - [x] 상단바에 구성된 **로그인 버튼 영역**에 호버하면 사라진다
    - [x] 호버 전까진 보이는 상태가 유지된다
    - [x] **로그인 버튼 영역** 호버 하면 확장된 버전의 레이어가 뜬다
    - [x] 배경 딤처리 
    - [x] 확장 버전 레이어에서 마우스가 벗어나면 사라진다
  - [x] 배송처
    - [x] 배송처 영역에 호버시 주소 변경 레이어가 뜬다
    - [x] 배경 딤처리
    - [x] 주소 변경 레이어에서 마우스가 벗어나면 사라진다
- [] 메인페이지
  - [x] 히어로 영역
    - [x] 무한 슬라이더로 구현
    - [x] 좌우 화살표를 통해 내용을 계속해서 변경할 수 있다
    - [x] 화살표를 누르지 않는 경우, 10초마다 다음 내용으로 넘어간다
  - [] 콘텐츠 영역 
    - [] 이미지 사이즈에 따라 높이가 달라진다
    - [] 로딩 인디케이터를 사용한다
      - [] 처음 메인 페이지에 진입시
      - [] 스크롤 내릴 때
# 오류
## lint설정중...

1. 터미널 powershell 사용 환경 -> cmd로 변경   

        '' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.

- ctrl+shift+p 
- terminal: select default profile
- command prompt 선택
- vscode 재시작

2. 환경변수 조정

        'eslint'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

- 이전에 윈도우 계정명을 한글에서 영어로 변경
- 환경변수에서 npm의 PATH가 바뀌지 않은 상태였다
- 고급시스템보기 > 환경변수 > PATH > npm경로 이름부분 변경
- 재부팅

3. .eslintrc.js -> .eslintrc.json

        [error] Invalid configuration file `.eslintrc.js`: require() of ES Module 
        [error] .prettierrc.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.

- es6 모듈 사용중
- .eslintrc.json으로 변경 
- 형식도 json으로 변경


# week1 학습정리
## CSS 전처리기(Preprocessor)
- CSS 문법과 유사하다
- 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등 표준 CSS 보다 훨씬 많은 기능을 사용해서 편리하게 작성 가능

### 사용
전처리기 언어 문법으로 작성 뒤, css로 컴파일 해서 웹으로 동작시킨다

## Sass / scss
개발의 효율을 올리기 위해 등장한 CSS 전처리기 언어
Sass: Syntactically Awesome StyleSheet
- 코드를 css로 해석하는 전처리기로써의 의미
- 문법으로써의 의미
scss: Sass의 3버전에서 등장
- css코드와 유사한 형태를 띄고 있다
- 중괄호, 세미콜론
- 대중적으로 더 많이 사용된다
## 장점

    변수의 사용
    조건문과 반복문
    Import (모듈화)
    Nesting (선택자 반복 작성 줄여주는 기능)
    Mixin (함수 개념)
    Extend/Inheritance (확장/상속)

### 문법은 쓰면서 배워보자!

## CSS 애니메이션과 JS 애니메이션
transform 의 translate 를 사용해서 구현할 수 있는 애니메이션을 JavaScript의 style.top 과 style.left 로 변화 시키게 되면
- 브라우저 렌더링 과정에서 layout 이나 paint 단계를 거쳐야 할 경우가 생길 수 있기 때문에 성능 개선에 효율적이지 않을 수 있다
### CSS 애니메이션

- 외부 라이브러리를 필요로 하지 않는다
- 어떤 요소가 애니메이션을 가져야 한다는 직관적인 표현이 가능
- 미디어쿼리를 사용해서 반응형으로 애니메이션을 구현 할 수 있다
- 메인 쓰레드가 아닌 별도의 컴포지터 쓰레드(Compositor Thread)에서 그려지기 때문에 메인 쓰레드에서 작업하는 JS보다 효율적

@keyframes를 사용하여 애니메이션명을 지정하고 이를 animation-move라는 클래스 명을 가지는 요소에 입힌다
그에 따라 버튼을 클릭하면 div요소에 animation-move라는 클래스를 넣는다

### JavaScript 애니메이션

### 
![image](https://user-images.githubusercontent.com/86706366/229485064-926e0833-a836-4110-b923-283afba74f0c.png)

## **브라우저 렌더링 동작 과정**

렌더링의 기본적인 동작 과정은 다음과 같다.

1. HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다. (Parsing)
    1. 돔트리를 구성하는 단계 
    2. html에 css가 포함되어 있다면 CSSOM(CSS Object Model)트리구성도 함께 진행
    3. 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d074b5b2-400d-414f-9131-94a4dd4c1e44/Untitled.png)
    
2. 두 Tree를 결합하여 Rendering Tree를 만든다. (Style)
    1. 1-파싱단계에서 생성된 DOM CSSOM트리를 매칭시켜 Render Tree구성
    2. 렌더 트리란 실제로 화면에 그려질 트리
    3. Render Tree를 구성할때 `visibility: hidden`
    은 요소가 **공간을 차지하고**, 보이지만 않기 때문에 Render Tree에 포함이 되지만, `display: none`
     의 경우 **Render Tree에서 제외**
3. Rendering Tree에서 각 노드의 위치와 크기를 계산한다. (Layout)
    1. 크기 값을 %로 지정하였다면, Layout 단계에서 % 값을 계산해서 픽셀 단위로 변환
    2. 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97e2ad00-2858-4520-8eac-8b4227ecb0d5/Untitled.png)
    
4. 계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)
5. 레이어를 합성하여 실제 화면에 나타낸다. (Composite)

## **리플로우가 발생하는 상황**

리플로우: HTML 요소가 추가되거나, 기존 요소의 스타일이 바뀌거나 하는 변경에 영향을 받게되는 모든 노드에 대해서 렌더링 트리 생성과 레이아웃 과정을 다시 수행

**💡리플로우가 일어나면 반드시 리페인트가 일어난다**


- 노드의 추가, 제거
- 요소의 위치 변경 시
- 요소의 크기 변경 시
- 폰트변경, 이미지 변경
- 초기 렌더링
- 윈도우 리사이징 시

**💡 background-color, visibility 와 같이 레이아웃에는 영향을 주지 않는 속성이 변경되었을 때는 Reflow 를 수행할 필요가 없기 때문에 Repaint 만 수행하게 된다**


Reflow Repaint가 일어나지 않는 transform, opacitiy와 같은 속성도 있습니다. 따라서 left, right, width, height 보다 transform을, **visibility/display 보다 opacitiy를 사용하는 것이 성능 개선에 도움이 된다**

```jsx
리페인트만 일어나는 대표 속성
background, color, text-decoration, 
border-style, border-radius
```

## 뷰포트
Viewport 란?
![image](https://user-images.githubusercontent.com/86706366/229474371-696e3517-8206-46dc-9d8e-2dd4348355ea.png)
- 현재 보고 있는 컴퓨터 화면 크기를 이야기한다
  - 메뉴바, 탭영역 등을 제외한 순수 화면 영역
  - Chrome의 경우 상단에 탭이 있기 때문에(주소 표시줄, 북마크 등을 포함하는), outerHeight이 innerHeight 보다 100px 정도 더 크다
```
document.documentElement.clientHeight /* 800 */
window.innerHeight /* 800 */
window.outerHeight /* 900 */ 
```
- 같은 웹페이지라도 디바이스 크기 등 환경에 따라 다양해진다
- viewport 보다 웹 문서가 클 경우 스크롤이 생성되며, 이를 가지고 viewport 를 이동시킬 수 있다

### Layout / Visual viewport
Visual viewport는 Layout viewport에서 현재 보이는 부분
- Visual viewport는 Layout viewport와 크기가 같거나 더 작다
### 데스크탑 / 모바일 viewport 차이점

데스크탑: 데스크탑의 viewport는 브라우저 창의 viewport와 같고, 사용자가 브라우저 창의 크기를 조정하면서 viewport의 크기도 조절할 수 있다

모바일: 모바일 viewport는 브라우저 창보다 크거나 작고, 상하 좌우로 움직이거나, 더블탭, 줌인, 줌아웃을 통해 viewport의 배율을 변경할 수 있다 (크기 X)

### 브라우저 Viewport 구하기
문서의 viewport 크기
- document.documentElement.clientWidth / clientHeight

**layout viewport**: 브라우저 viewport 의 스크롤 포함 크기
- window.innerWidth / innerHeight

브라우저 창 크기
- window.outerWidth / outerHeight

문서의 크기
- document.documentElement.offsetWidth / offsetHeight

**브라우저 화면을 확대하거나, 축소할 경우 viewport 크기는 변화하게 된다**
- document.documentElement.clientWidth(문서의 viewport 크기) 와 window.innerWidth(브라우저 viewport 의 스크롤 포함 크기)의 값은 변화하지만, outerWidth(브라우저 창의 크기) 는 변하지 않는다

### screen
viewport 와 관계없이 화면의 전체 크기와 픽셀값들을 가지고 있다
- 브라우저의 상태와 관계 없이 screen.width 와 screen.height 으로 현재 모니터 크기를 알 수 있다

### vw 와 vh
viewport width / viewport height
- 브라우저의 viewport 크기만큼 계산되어 적용
- 화면이 커지거나 작아질 때마다, 자동으로 크기가 변화하게 되며, 디바이스 사이즈에 맞는 크기를 적용할 수 있게 된다
- 1vh(=viewport height)는 Layout viewport 높이의 1%를 의미

### viewport의 속성
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="user-scaleble=no">
...

```

- width: viewport의 가로 크기를 조정   
일반적인 숫자값이 들어 갈 수도 있고, device-width와 같은 특정한 값을 사용할 수도 있다   
device-width는 100% 스케일에서 CSS 픽셀들로 계산된 화면의 폭을 의미

- height : viewport의 세로 크기를 조정

- initial-scale : 페이지가 처음 로딩될 때 줌 초기배율을 조정    
값이 1일때는 CSS 픽셀과 기기종속적인 픽셀 간의 1:1 관계를 형성
  - 1보다 작은 값을 사용하면 축소된 페이지를 표시
  - 1보다 큰 값을 사용하면 확대된 페이지를 표시

- minimum-scale : viewport의 최소 축소 비율값, 기본값은 0.25

- maximum-scale : viewport의 최대 확대 비율값, 기본값은 1.6

- user-scalable : 사용자의 확대/축소 기능을 설정, 기본값은 yes
  - 유저가 크롬에서 화면을 확대, 축소할 수 있는 이유
  - no로 설정하면 확대 축소를 막는다
### 정의된 속성의 value
- device-width : 기기의 가로 넓이 픽셀 값 (웹페이지의 가로(width) 값은 기기가 사용하는 가로 넓이 값(device-width) 만큼 적용하여 사용하라는 의미)

- device-height : 기기의 세로 높이 픽셀 값

### CSS Position
css fixed position 은 상태에 따라 viewport 의 영향을 받는다
- top, bottom, left, right 로 설정한 값은 viewport 의 위치에 따라, 계산되어 적용되며, viewport 위치에 고정되게 된다

### Media Query
화면의 크기 또는 Viewport 크기에 따라 CSS 를 조절할 수 있다
- 이때 width 는 브라우저 뷰포트의 스크롤 크기를 포함한 window.innerWidth 의 viewport 크기와 같다

### Mobile Viewport
모바일 디바이스는 해상도가 높지만 디바이스의 화면이 작기 때문에 데스크톱 모니터에 비해 가독성이 떨어질 수 밖에 없다
- 이를 해결하기 위해서 Apple 에서 viewport meta 태그를 도입하였고, 많은 브라우저에서 이 태그를 지원
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
이 태그를 가지는 웹 사이트는 브라우저에서 viewport 를 계산할때 참고하게 되는데, 위의 값은 device-width 은 디바이스 화면 크기인, screen.width 값을 참고하게 된다

## scss폴더구조
### 7-1 패턴(n-1 패턴)
7개의 폴더와 하나의 파일, 필요에 따라 n개의 폴더를 만든다

### mouseover와 mouseenter 차이
이벤트 버블링의 유무
mouseover : 이벤트 버블링이 존재하기 때문에 내부의 다른 element 안에 들어가면 이벤트를 다시 발생

---

# week2
객체지향 프로그래밍을 이해한다
웹프론트엔드에서 어떻게 객체지향 프로그래밍을 할 수 있는지 안다
ES Classes 표현방식을 알고, this를 통해서 객체를 다룰 수 있다
- 검색창(바) 개발
- 추천검색어, 최근검색어 노출
- 키보드를 통한 검색결과 선택
- 기타 UX를 고려한 검색창 기능
- 실제 검색결과를 노출하는 화면은 없다
## 요구사항
1. query에 따른 결과 데이터는 미리 생성해둔 json형태의 객체를 통해서 결과를 받아서 활용한다.
2. 검색창과 검색결과는 별도의 모듈(클래스)로 분리해서 개발한다.
3. es classes를 활용해서 객체를 표현한다.
4. 최근검색어를 어떻게 저장해야 할지 찾아본다.
# week2 TODO
- [x] 검색바 클릭
  - [x] 검색바 아래로 레이어가 뜬다
  - [x] 배경은 딤 처리 된다
  - [x] 추천 검색어 10개가 담긴다
  - [x] 키보드의 위, 아래 화살표를 통해 검색어 목록을 이동할 수 있다
    - [x] 이동하여 선택 되면 배경색이 바뀐다

  - [x] 검색한 내역이 있다면 
    - [x] 검색 목록이 5개까지 뜬다
    - [x] 추천 검색어 10개 위에 추가 된 형태
    - [x] 우측의 삭제 버튼이 있다
      - [x] 삭제 버튼을 누르면 검색어가 삭제된다(저장된 곳에서?)
    - [x] 이동하여 선택 되면 배경색이 바뀐다

- [x] 검색바 입력
  - [x] 검색바 아래로 레이어가 뜬다
  - [x] 딤 처리 
  - [x] 자동 완성 10개까지 표시
    - [x] 실제 이동은 없다
  - [x] 키보드의 위, 아래 화살표를 통해 자동 완성 목록을 이동할 수 있다
    - [x] 이동하여 포커싱이 되면 배경색이 바뀐다
  - [x] 데이터가 저장된다



# week2 학습정리

## 타입, 역할, 책임 // 객체지향의 사실과 오해 3,4장
타입은 동적으로 변하는 상태의 복잡성을 제거하고 객체를 정적인 모습으로 나타낼 수 있다
- 앨리스: 키/버섯을 먹다, 음료를 마시다, 부채질하다

요청과 응답은 협력에 참여하는 객체가 수행할 책임을 정의한다

책임
- 하는 것, 아는 것 
- 객체의 외부에 제공해 줄 수 있는 정보(아는 것)와 외부에 제공해 줄 수 있는 서비스(하는 것)의 목록
- 책임은 객체의 공용 인터페이스를 구성

메시지
어떤 객체가 어떤 책임을 수행하고 어떤 객체로부터 메시지를 수신할지 결정하자

역할
역할을 대체할 수 있는 객체는 동일한 메시지(책임)를 이해할 수 있는 객체로 한정된다

객체가 협력 안에서 어떤 책임과 역할을 수행할 것인지 결정하는 것



## JSON
JavaScript Object Notation
- 데이터를 쉽게 '교환' 하고 '저장' 하기 위한 텍스트 기반의 데이터 교환 표준
## NPM (package.json, package-lock.json, dependencies, devDependencies)

## Vanilla JS로 구현한 debounce로 성능 최적화하기
## 자바스크립트의 디바운싱과 쓰로틀링

## 모듈의 특징
- import, export를 사용할 수 있음
- 모듈 바깥쪽에 선언한 변수들은 전역(Globas scope)가 아닌 Module scope로 선언됨
- 기본적으로 Strict mode로 동작
- 같은 모듈을 다른 모듈에서 여러 번 불러도, 모둘 내부 코드는 단 한 번만 실행됨

### 모듈 스코프란?


### 내보내고 가져오기 
이름 바꾸기
``` javascript
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```
> export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있다

```javascript
export class { // 에러! (default export가 아닌 경우엔 이름이 꼭 필요합니다.)
  constructor() {}
}
```

## document.activeElement
현재 포커스된 요소를 반환

## 싱글톤
객체의 인스턴스가 오직 1개만 생성되는 패턴

### 사용 상황

- 프로그램 내에서 하나의 객체만 존재해야 한다
- 프로그램 내에서 여러 부분에서 해당 객체를 공유하여 사용해야한다


---

# week3
### 기존 기능에 데이터 통신을 포함한 기능을 만든다.
- fetch API를 활용해 get/post요청을 할 수 있다.
- Promise패턴이 어떻게 동작하는 이해하고 활용할 수 있다.
- mock server 를 연동해서 프론트엔드와 통신하는 방법을 안다.
- OOP개념과 프론트엔드 활용
- 브라우저 렌더링 방법 이해.
### 검색창 서버 연동
- 검색창의 '검색 자동완성' 데이터를 json-server와 연동해서 가져오는 방식으로 개발한다.
- get방식으로 query를 보내고 응답데이터를 받아온다.

### 슬라이딩 콘텐츠
- 기존 무한 슬라이딩 되는 영역의 초기데이터를 json -server와 연동해서 가져오는 방식으로 구현.

### 좌측 메뉴 영역 개발
- 사이드 메뉴 기능을 개발한다.
- 초기데이터와 더보기할때 데이터를 구분해서 서버와 통신을 통해서 가져온다.
## 요구사항
1. fetch API 를 활용한 데이터 통신 ( XHR사용금지, axios 등 라이브리 없이 구현)
2. promise/then 방식을 잘 이해하지 못하고 있다면, await 보다 then 메서드를 충분히 사용한다.
3. 서버 데이터 구성은 mock data로 반복적인 임의의 데이터를 구성해도 좋다.
# week3 TODO
- [x] 사이드바 UI
- [] 사이드바 열기
  - [] 상단바 '모두'버튼을 누르면 화면 좌측에서 사이드바가 나온다
  - [] 닫기 버튼 생성
  - [] 딤처리
  - [] 애니메이션 처리
- [] 사이드바 닫기 
  - [] 닫기 버튼을 누르면 사이드바가 원래자리로
  - [] 애니메이션 처리
- [] 사이드바 호버
  - [] 호버시 배경색과 아이콘 색이 변한다
  - [] 애니메이션 처리?
- [] 사이드바 기능
  - [] 모두보기를 누르면 접혀있는 카테고리들이 아래로 펼쳐진다
  - [] 애니메이션 처리
  - [] 간단히 보기를 누르면 다시 접힌다
  - [] '부서별 쇼핑' 하위의 카테고리들을 누르면 우측에서 좌측으로 목록이 이동한다
  - [] 이동하며 상세 카테고리 내역이 보인다
  - [] 애니메이션 처리

# week3 학습정리

## 프로미스 
### 비동기 함수
- 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다
- 비동기 함수의 처리결과(서버의 응답 등)에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다
- 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다
  - 후속 처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아진다
  - **콜백헬**
  - 에러 처리도 곤란하다

### 트라이 try, 캐치 catch, 파이널리 finally
1. try 코드 블록 실행
2. 블록에 포함된 문 중에서 에러 발생시
3. catch문의 err변수에 전달 
4. catch블록 실행
* finally코드블록은 에러 발생 상관 없이 반드시 한 번 실행

### 마스터클래스 : 프로미스란? 
콜백 안에 콜백을 쓰지 않고, 체이닝을 이용해서 비동기 프로그래밍을 할 수 있게 도와주는 재미난 도구

### 프로미스
- 콜백지옥을 해결하기 위해
  - 콜백 함수를 사용하지 않고도 비동기 처리를 수행할 수 있도록 만들어진 객체
- Promise 객체는 비동기 작업이 수행되는 동안 특정 상태를 가지며, 상태에 따라 세 가지 값 중 하나를 가진다

      대기(pending): 아직 완료되지 않았다
      이행(fulfilled): 성공적으로 완료
      거부(rejected): 실패


### 생성
promise 생성자 함수는 비동기 처리를 수행할 콜백함수(executer)를 인수로 전달받는다 이 콜백 함수는 resolve와 reject함수를 인수로 전달 받는다
- 전달받은 콜백함수 내부에서 비동기 처리를 수행하고 성공하면 그 전달받은 콜백함수의 인수로 전달받은 resolve함수 혹은 reject함수를 호출
- 프로미스의 상태는 resolve혹은 reject함수를 호출하는 것으로 결정
  - 성공해서 resolve된 fulfilled, 실패해서 rejected된 상태 : settled 상태
  - settled에서 더이상 다른 상태로 변할 수는 없다

> 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체

### then
then메서드는 두 개의 콜백 함수를 인수로 받는다
- 첫번째 함수는 resolve가 호출된 상태(fulfilled)
  - 비동기 처리 결과result를 인수로 받는다
- 두번째 함수는 reject가 호출된 상태(rejected) 
  - 에러를 인수로 전달 받는다

### Fetch
- Fetch는 XMLHttpRequest객체와 마찬가지로 HTTP요청 전송 기능을 제공하는 클라이언트 사이드 web api이다
- XMLHttpRequest객체보다 사용법이 간단하고 프로미스를 지원한다
- HTTP응답을 나타내는 response객체를 래핑한 Promise객체를 반환
- fetch함수에 첫번째 인수로 http요청을 전송할 url을 전달하면 GET요청을 전송한다
- .json메서드를 사용하여 response객체에서 http응답 몸체를 취득하여 역직렬화한다
  - 역직렬화

        
        {userId: 1, id: 1, title: "어쩌구저쩌구", completed: false}
        
- fetch가 반환하는 프로미스는 기본적으로 404 500 같은 http 에러가 발생해도 에러를 reject하지 않고 불리언 타입의 ok상태를 false로 설정한 response 객체를 **resolve**한다
- 오프라인등 네트워크 장애나 CORS에러에 의해 요청이 완료되지 못했을 때에 프로미스를 reject한다

      fetch(wrongUrl)
      .then(response => {
        if(!response.ok) throw new Error(response.statusText)
        return response.json();
      })


## 실행스크립트
- "npx sass src/scss:src/css --watch --style compressed"
  - Sass가 없으면 설치하고 
  - Sass 파일을 CSS 파일로 컴파일하는 명령어
  - src/scss: Sass 파일이 위치한 디렉토리
  - src/css: 변환된 CSS 파일을 저장할 디렉토리
  - --watch: 파일이 변경될 때마다 Sass 파일을 자동으로 감지하고, 변환된 CSS 파일을 업데이트
  - --style compressed: 컴파일된 CSS 파일의 코드를 압축한다 이 옵션을 사용하지 않으면 일반 CSS 파일형태로 컴파일
  - (페이지 로딩 속도를 향상시키기 위해서 압축)

- -p dev:* 
  - 패턴에 매칭되는 모든 스크립트를 병렬로 실행하도록 지정

### npm npx의 차이
npm은 패키지를 설치하고 관리하는 데 사용되며, npx는 로컬에 설치하지 않고도 패키지를 쉽게 실행할 수 있는 도구

## 쿼리 파라미터 인식 오류
- _like 쿼리 파라미터를 사용할 때, 파라미터 이름에 대한 혼동이 있어 발생한 문제
- _like은 검색하고자 하는 문자열을 포함하는 데이터를 찾기 위해 사용되는 파라미터 
- 현재 JSONServer는 _like로 전달된 파라미터 이름을 컬렉션의 필드 이름으로 인식하는 문제가 있어서, _like라는 이름으로 전달된 파라미터가 auto 필드와 연결되지 않았다
- 이 문제를 해결하기 위해서는, 검색하고자 하는 문자열을 포함하는 데이터를 찾기 위해 사용할 필드의 이름과 _like 파라미터 이름을 다르게 지정해 주어야 했다
- 예를 들어, name 필드를 사용하여 검색하고자 하는 경우에는 그냥 _like 파라미터 대신에 name_like 파라미터를 사용하여 요청을 보낸다

## 필터 기능을 수행하는 쿼리 파라미터


<details>
<summary>쿼리 파라미터모음</summary>

- _like: 와일드카드 문자(%나 _)를 이용하여 문자열 검색을 수행합니다.
- _ilike: 대소문자를 구분하지 않는 문자열 검색을 수행합니다.
- _regex: 정규표현식을 이용하여 문자열 검색을 수행합니다.
- _size: 배열이나 객체의 크기를 비교하여 검색합니다.
- _type: 필드의 타입을 비교하여 검색합니다.
- _all: 모든 필드를 대상으로 검색합니다.
- _and: 두 개 이상의 조건을 모두 만족하는 도큐먼트를 찾습니다.
- _or: 두 개 이상의 조건 중 하나 이상을 만족하는 도큐먼트를 찾습니다.
- _not: 조건을 만족하지 않는 도큐먼트를 찾습니다.
- _nested: 중첩된 객체를 검색합니다.
- _geo_distance: 지리적 거리를 이용하여 검색합니다.
- _geo_bounding_box: 경계 상자 내에 있는 지리적 위치를 검색합니다.
- _geo_polygon: 다각형 영역 내에 있는 지리적 위치를 검색합니다.
- _term_vector: 도큐먼트에서 특정 필드의 term vector 정보를 반환합니다.
- _suggest: 검색어 자동완성을 수행합니다.
- _stats: 도큐먼트 집계 정보를 반환합니다.
- _explain: 쿼리의 실행 계획과 결과를 설명합니다.
- _scroll: 검색 결과를 한 번에 가져오지 않고, 스크롤 방식으로 가져옵니다.
- _from: 검색 결과의 시작 인덱스를 지정합니다.
- _size: 검색 결과의 개수를 제한합니다.
- _source: 도큐먼트에서 가져올 필드를 선택합니다.
- _field_names: 검색 결과에서 가져올 필드를 선택합니다.
- _timestamp: 도큐먼트의 timestamp를 검색합니다.
- _index: 검색할 인덱스를 선택합니다.
- _score: 검색 결과를 점수 순서로 정렬합니다.
- _sort: 검색 결과를 지정한 필드를 기준으로 정렬합니다.
- _search_type: 검색 방식을 선택합니다.
- _default_operator: 검색 쿼리에서 사용할 연산자를 선택합니다.
- _minimum_should_match: OR 조건으로 검색할 때 최소한으로 만족해야 하는 조건의 수를 지정합니다. 예를 들어, - should 절에 A, B, C 3개의 조건이 있다면 _minimum_should_match=2로 설정하면 A, B 중 하나 이상의 조건은 반드시-  만족해야 합니다.
- _default_field: 검색할 필드가 지정되지 않았을 때 사용할 기본 필드를 지정합니다.
- _all_fields: 검색어를 모든 필드에서 검색합니다.
- _boost: 검색어에 가중치를 부여합니다.
- _boosting: 쿼리 결과에 대한 가중치를 지정합니다.
- _collapse: 도큐먼트를 그룹화하고, 그룹의 대표 도큐먼트를 선택합니다.
- _docvalue_fields: 검색 결과에서 반환할 doc_values 필드를 선택합니다.
- _expand_wildcards: 검색할 인덱스를 와일드카드로 지정합니다.
- _explain: 쿼리 결과의 점수 계산 방법을 설명합니다.
- _filter_path: 검색 결과에서 반환할 필드를 선택합니다.
- _from: 검색 결과의 시작 인덱스를 지정합니다.
- _if_seq_no: 검색할 문서의 sequence number를 지정합니다.
</details>

## 참고 출처
mdn
[렌더러 프로세스의 내부 동작](https://d2.naver.com/helloworld/5237120)
[css애니메이션](https://poiemaweb.com/css3-animation)
[css애니메이션 js애니메이션](https://github.com/SeonHyungJo/FrontEnd-Note/blob/master/Performance/CSS%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%20vs%20JS%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98.md)

[뷰포트](https://pks2974.medium.com/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%B7%B0%ED%8F%AC%ED%8A%B8-layout-%EC%99%80-visual-viewport-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-47756d5ee3cf)
[뷰포트](https://velog.io/@ken1204/viewport%EB%9E%80)
[visual vs Layout Viewport](https://bokand.github.io/viewport/index.html)
[7-1패턴](https://github.com/KittyGiraudel/sass-guidelines/blob/main/pages/ko/_architecture.md)