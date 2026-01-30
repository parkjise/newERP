src/
├── app/ # 앱의 진입점 설정 (Providers, Global Router 등)
│ ├── App.tsx
│ ├── router.tsx # 라우팅 정의
│ └── providers.tsx # Context, Theme, QueryClient 등 Provider 모음
├── assets/ # 이미지, 폰트, 글로벌 정적 파일
├── components/ # "도메인과 무관한" 공통 UI 컴포넌트 (Design System)
│ ├── common/ # 버튼, 인풋, 모달 등 기초 컴포넌트
│ ├── layout/ # 헤더, 사이드바, 푸터 등 레이아웃 관련
│ └── ui/ # styled-components로 만든 순수 스타일 래퍼들
├── config/ # 환경변수, 상수값 (예: API_URL, DATE_FORMAT)
├── features/ # ⭐️ 핵심: 비즈니스 도메인별 기능 모음 (가장 중요!)
│ ├── auth/ # 로그인, 회원가입 관련
│ ├── inventory/ # 재고 관리
│ ├── hr/ # 인사 관리
│ └── sales/ # 영업/매출 관리
│ ├── api/ # 해당 기능 전용 API 호출 함수
│ ├── components/ # 해당 기능에서만 쓰는 컴포넌트
│ ├── hooks/ # 해당 기능 전용 커스텀 훅
│ ├── types/ # 해당 기능 전용 타입 정의
│ └── index.ts # 외부로 노출할 진입점 (Barreling)
├── hooks/ # 프로젝트 전역에서 쓰이는 커스텀 훅 (useDebounce 등)
├── lib/ # 외부 라이브러리 설정 (Axios, Dayjs, Antd Config 등)
├── pages/ # 실제 라우트와 매핑되는 페이지들 (로직 없이 조립만 함)
├── stores/ # 전역 상태 관리 (Zustand, Jotai 등)
├── styles/ # 전역 스타일 (GlobalStyles, Theme, Mixins)
├── types/ # 전역에서 쓰이는 공통 타입 (API 응답 포맷, User 모델 등)
├── utils/ # 순수 유틸리티 함수 (날짜 변환, 숫자 포맷팅)
└── main.tsx

src/
├─ main.tsx
├─ app/
│ ├─ App.tsx
│ ├─ providers.tsx
│ └─ router.tsx
│
├─ assets/
│ └─ react.svg
│
├─ components/ # (= shared 성격) 도메인 모르는 공용만
│ ├─ ui/
│ │ ├─ form/
│ │ │ ├─ Input.tsx
│ │ │ ├─ Button.tsx
│ │ │ └─ index.ts
│ │ ├─ modal/
│ │ ├─ tabs/
│ │ └─ index.ts
│ │
│ ├─ layout/
│ │ ├─ PageLayout/
│ │ │ ├─ PageLayout.tsx
│ │ │ ├─ PageLayout.styles.ts
│ │ │ └─ index.ts
│ │ ├─ SplitLayout/
│ │ │ ├─ SplitLayout.tsx
│ │ │ ├─ SplitLayout.styles.ts
│ │ │ └─ index.ts
│ │ └─ index.ts
│ │
│ └─ common/ # (가능하면 최소화) 정말 공용인 것만
│ ├─ ErrorBoundary.tsx
│ └─ index.ts
│
├─ pages/ # 라우트(화면) 단위: "조립" 위주로 얇게
│ ├─ sample/
│ │ ├─ Sample3Page.tsx
│ │ ├─ components/ # 이 페이지 전용(다른 곳에서 안 쓰면 여기)
│ │ ├─ styles/
│ │ └─ hooks/
│ └─ index.ts
│
├─ features/ # 기능(업무) 단위: 로직+API+기능UI 묶음
│ ├─ auth/
│ │ ├─ api/
│ │ ├─ components/
│ │ ├─ hooks/
│ │ ├─ store/ # (선택) slice/zustand
│ │ ├─ types.ts
│ │ └─ index.ts
│ ├─ users/
│ │ ├─ api/
│ │ ├─ components/
│ │ ├─ hooks/
│ │ ├─ types.ts
│ │ └─ index.ts
│ └─ index.ts
│
├─ stores/ # 전역 store 엔트리만(설정/루트)
│ ├─ index.ts
│ └─ rootStore.ts
│
├─ hooks/ # 전역 공용 훅만 (useDebounce 등)
│ ├─ useDebounce.ts
│ ├─ useToggle.ts
│ └─ index.ts
│
├─ lib/ # 외부 라이브러리 래핑(axios, queryClient 등)
│ ├─ http/
│ │ ├─ client.ts # axios instance
│ │ └─ interceptors.ts
│ ├─ react-query/
│ │ └─ queryClient.ts
│ └─ index.ts
│
├─ config/ # 환경/엔드포인트/feature flag
│ ├─ env.ts
│ ├─ endpoints.ts
│ └─ index.ts
│
├─ styles/ # 전역 스타일/테마/토큰/믹스인
│ ├─ theme.ts
│ ├─ tokens.ts
│ ├─ mixins.ts
│ ├─ globalStyles.ts
│ └─ index.ts
│
├─ types/ # 진짜 전역 공용 타입만
│ ├─ common.ts
│ └─ index.ts
│
└─ utils/ # 순수 유틸 함수
├─ format.ts
├─ date.ts
└─ index.ts

vite 설치

npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

ant design

npm install antd --save

remix icon

npm i remixicon

import "remixicon/fonts/remixicon.css";

스타일드 컴포넌트

npm i styled-components
npm i -D @types/styled-components
