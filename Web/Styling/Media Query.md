## Read Before

* 목표: 반응형 웹을 만들기 위한 CSS 특징 학습

- To Learn
  - Media Query



## 1. Media Query

### 1.1 Description

- A Media query is a CSS3 feature that makes a webpage adapt its layout to different screen sizes and media types.
- so It works only in **CSS** 💃



### 1.2 Syntax

```css
@media () {
  // CSS rules
}
```

```css
@media media type and (condition: breakpoint) {
  // CSS rules
}
```



### 1.3 Breakpoints Screen Size

- 320px — 480px: Mobile devices
- 481px — 768px: iPads, Tablets
- 769px — 1024px: Small screens, laptops
- 1025px — 1200px: Desktops, large screens
- 1201px and more —  Extra large screens, TV



## 2. Media Query in JavaScript

### 2.1 matchMedia API

* ##### syntax

```javascript
var media = window.matchMedia(mediaQueryString)
```

브라우저에서는 css의 media 쿼리를 자바스크립트에서 사용하기 위해 matchMedia API를 제공한다. 문법은 위와 같이 사용하고, mediaQueryString 부분에 CSS의 미디어 쿼리 문법이 들어간다.



* ##### example

```javascript
var m = matchMedia("screen and (min-width: 1024px)");
m.media // "screen and (min-width: 1024px)"; return query
m.matches // true | false; return boolean value depending on current browser size
```

matchMedia() 함수는 MediaQueryList를 반환하는데, 이 객체는 media와 matches라는 두 프로퍼티가 존재한다. media는 사용한 미디어쿼리 문자열을 반환하고, matches는 현재 화면에 미디어쿼리의 범위에 들어가면 true를 반환하고 아니면 false를 반환한다.



### 2.2 Practical Use

```javascript
if (matchMedia("screen and (min-width: 1024px)").matches) {
  // 1024px 이상에서 사용할 JavaScript
} else {
  // 1024px 미만에서 사용할 JavaScript
}
```

다음과 같이 분기 문으로 나누어 코드를 적용할 수 있다. 하지만 브라우저 크기를 줄인다고 CSS처럼 자동적용되는것이 아니므로 resize이벤트와 묶어서 사용해야 해상도에 따라 처리할 수 있다.



## References

* Midea Query in CSS, https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
* Media Query in JavaScript, https://blog.outsider.ne.kr/1153