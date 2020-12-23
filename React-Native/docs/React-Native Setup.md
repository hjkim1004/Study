# React-Native Setup

### 1. Settings

- Runtime Environment: Node.js
- Langauge: React(javascript)
- IDE: Visual Studio Code
  - Extensions: ESLint,  Prettier, Reactjs code snippets, Git/SVN



### 2. Setup Command

##### (1) 프로젝트 생성

* npm version fix
  * React Native는 버전이 업데이트될 때, 문제를 일으킬 가능성이 있으므로, 리액트 네이티브로 프로젝트를 진행할 때는 버전을 고정해서 사용하길 권장함.

```shell
npm config set save-exact=true
```



* Lastest Version

```shell
react-native init {Project Name}
```

* Fixed Version

```shell
react-native init version 0.59.10 {Project Name}
```

* Typescript로 template 지정 설치

```shell
react-native init {Project Name} --template typescript
```



##### (2) 라이브러리 설치

* typescript

```shell
npm install --save-dev typescript
```

* styled-components

```shell
npm install --save styled-components@5.2.1
npm install --save-dev @types/styled-components@5.1.5
```

* react, react-native type

```shell
npm install --save-dev @types/react @types/react-native
```

* babel-plugin-root-import

```shell
npm install --save-dev babel-plugin-root-import
```



* 통합 설치(한번에 설치)

```shell
npm install --save styled-components@5.2.1
npm install --save-dev typescript @types/react @types/react-native @types/styled-components@5.1.5 babel-plugin-root-import
```



##### (3) AsyncStorage

* 설치

```shell
npm install --save @react-native-community/async-storage
```

* Version 0.60 이하
  * 라이브러리 설치 후 연결

```shell
react-native link @react-native-community/async-storage
```



##### (4) App Icon

* App Icon

```shell
# 설치
npm install --save-dev @bam.tech/react-native-make
# 적용
react-native set-icon --path ./src/Assets/Images/app_icon.png
```



* Splash Screen
  * Launch Screen이라고도 함.

```shell
# 설치
npm install --save react-native-splash-screen
# 적용
react-native set-splash --path ./src/Assets/Images/app_splash.png
```



##### (5) Navigation

* 기본 설치 라이브러리

```shell
npm install --save @react-navigation/native
npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```



* 부가 설치

```shell
# Stack Navigation
npm install --save @react-navigation/stack
# Drawer Navigation
npm install --save @react-navigation/drawer
# Bottom Tab Navigation
npm install --save @react-navigation/bottom-tabs
# Material Bottom Tab Navigation
npm install --save @react-navigation/material-bottom-tabs react-native-paper
# Material Top Tab Navigation
npm install --save @react-navigation/material-top-tabs react-native-tab-view
```



##### (6) 기타 부가 라이브러리

* 위치 정보

```shell
npm install -save react-native-geoloaction-service
```

