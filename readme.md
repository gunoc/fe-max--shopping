# 🌴아마존📦

# 학습계획
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
    - [] 메인페이지 진입시 1초 뒤, 상단 바 레이어로 로그인 버튼이 보인다
    - [] 스르륵 나타나는 애니메이션 추가
    - [] 상단바에 구성된 **로그인 버튼 영역**에 호버하면 사라진다
    - [] 호버 전까진 보이는 상태가 유지된다
    - [] **로그인 버튼 영역** 호버 하면 확장된 버전의 레이어가 뜬다
    - [x] 배경 딤처리 
    - [] 확장 버전 레이어에서 마우스가 벗어나면 사라진다
  - [] 배송처
    - [] 배송처 영역에 호버시 주소 변경 레이어가 뜬다
    - [] 배경 딤처리
    - [] 주소 변경 레이어에서 마우스가 벗어나면 사라진다
- [] 메인페이지
  - [] 히어로 영역
    - [] 무한 슬라이더로 구현
    - [] 좌우 화살표를 통해 내용을 계속해서 변경할 수 있다
    - [] 화살표를 누르지 않는 경우, 10초마다 다음 내용으로 넘어간다
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
## 참고 출처
mdn
[렌더러 프로세스의 내부 동작](https://d2.naver.com/helloworld/5237120)
[css애니메이션](https://poiemaweb.com/css3-animation)
[css애니메이션 js애니메이션](https://github.com/SeonHyungJo/FrontEnd-Note/blob/master/Performance/CSS%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%20vs%20JS%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98.md)

[뷰포트](https://pks2974.medium.com/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%B7%B0%ED%8F%AC%ED%8A%B8-layout-%EC%99%80-visual-viewport-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-47756d5ee3cf)
[뷰포트](https://velog.io/@ken1204/viewport%EB%9E%80)
[visual vs Layout Viewport](https://bokand.github.io/viewport/index.html)
[7-1패턴](https://github.com/KittyGiraudel/sass-guidelines/blob/main/pages/ko/_architecture.md)