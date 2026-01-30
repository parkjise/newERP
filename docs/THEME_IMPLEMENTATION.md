# ERP 시스템 테마 설정 구현 문서

## 1. Theme 작업 순서

### 1단계: 테마 색상 및 모드 정의
1. **기본 색상 팔레트 생성** ([src/styles/theme/colors.ts](../src/styles/theme/colors.ts))
   - neutral, grey 계열 색상 정의
   - 시스템 공통 색상 (red, white, black, navy 등) 정의

2. **라이트/다크 모드 색상 체계 구축**
   - [src/styles/theme/modes/light.ts](../src/styles/theme/modes/light.ts) - 라이트 모드 색상
   - [src/styles/theme/modes/dark.ts](../src/styles/theme/modes/dark.ts) - 다크 모드 색상

3. **액센트 컬러 테마 생성**
   - [src/styles/theme/blue.ts](../src/styles/theme/blue.ts) - 블루 테마
   - [src/styles/theme/red.ts](../src/styles/theme/red.ts) - 레드 테마
   - [src/styles/theme/brown.ts](../src/styles/theme/brown.ts) - 브라운 테마

### 2단계: 테마 시스템 구축
4. **테마 생성 함수 구현** ([src/styles/theme/createTheme.ts](../src/styles/theme/createTheme.ts))
   - 모드(light/dark)와 액센트(blue/red/brown)를 조합하여 최종 테마 생성
   - AppTheme 인터페이스 정의

5. **TypeScript 타입 정의** ([src/styles/theme/styled.d.ts](../src/styles/theme/styled.d.ts))
   - styled-components의 DefaultTheme 타입 확장

### 3단계: 상태 관리
6. **Zustand 스토어 생성** ([src/stores/themeStore.ts](../src/stores/themeStore.ts))
   - 테마 모드 및 액센트 컬러 상태 관리
   - localStorage 연동 (persist 미들웨어)
   - hydration 처리

### 4단계: 테마 적용
7. **ThemeProvider 설정** ([src/main.tsx](../src/main.tsx))
   - styled-components ThemeProvider로 앱 전체 감싸기
   - GlobalStyle 적용

8. **UI 컴포넌트에 테마 적용**
   - [src/app/layouts/Header/Header.tsx](../src/app/layouts/Header/Header.tsx) - 다크/라이트 모드 토글 버튼
   - [src/app/layouts/SideBar/SideBar.tsx](../src/app/layouts/SideBar/SideBar.tsx) - 액센트 컬러 선택 UI

---

## 2. 작업한 파일 위치

### 테마 정의 파일
```
src/styles/theme/
├── colors.ts              # 기본 색상 팔레트
├── createTheme.ts         # 테마 생성 로직
├── styled.d.ts            # TypeScript 타입 정의
├── modes/
│   ├── light.ts          # 라이트 모드 색상
│   └── dark.ts           # 다크 모드 색상
└── 액센트 컬러 테마
    ├── blue.ts           # 블루 테마
    ├── red.ts            # 레드 테마
    └── brown.ts          # 브라운 테마
```

### 상태 관리
```
src/stores/
└── themeStore.ts          # Zustand 테마 스토어
```

### UI 컴포넌트
```
src/app/
├── main.tsx               # ThemeProvider 최상위 적용
├── providers.tsx          # (대체 Provider 방식)
└── layouts/
    ├── Header/
    │   └── Header.tsx    # 다크/라이트 모드 토글
    └── SideBar/
        └── SideBar.tsx   # 액센트 컬러 선택
```

### 스타일 파일
```
src/styles/
└── globalStyles.ts        # 전역 스타일
```

---

## 3. 구현 이유 및 설계 의도

### 3.1 왜 Zustand를 선택했나?
**목적**: 테마 설정을 전역 상태로 관리하고 localStorage에 영구 저장

**이유**:
- Redux보다 가볍고 보일러플레이트 코드가 적음
- `persist` 미들웨어로 localStorage 연동이 간단함
- React 외부에서도 스토어 접근 가능 (유연성)
- TypeScript 지원 우수

**대안 비교**:
- Context API: 리렌더링 최적화 어려움
- Redux: 설정이 복잡하고 무거움

### 3.2 왜 라이트/다크 모드를 분리했나?
**목적**: 모드별로 완전히 다른 색상 체계 적용

**파일**: [modes/light.ts](../src/styles/theme/modes/light.ts), [modes/dark.ts](../src/styles/theme/modes/dark.ts)

**이유**:
- 단순 색상 반전이 아닌, 각 모드에 최적화된 색상 선택
- 다크 모드는 눈의 피로를 줄이기 위한 특별한 색상 조합 필요
  - 배경: 완전한 검은색(#000) 대신 짙은 청색(#0b1220) 사용 → OLED 번인 방지 + 가독성 향상
  - 텍스트: 순백색(#fff) 대신 연한 회색(#e5e7eb) → 눈부심 감소

### 3.3 왜 액센트 컬러를 3가지로 제한했나?
**목적**: 사용자 맞춤형 테마 경험 제공

**파일**: [blue.ts](../src/styles/theme/blue.ts), [red.ts](../src/styles/theme/red.ts), [brown.ts](../src/styles/theme/brown.ts)

**이유**:
- 너무 많은 선택지는 오히려 사용자 경험을 해침 (선택의 역설)
- 기업용 ERP 시스템에 적합한 안정적인 색상 선택
  - **Blue**: 신뢰감, 전문성 (기본값)
  - **Red**: 에너지, 강조 (긴급 대시보드)
  - **Brown**: 차분함, 전통 (재무/회계 업무)

### 3.4 왜 createTheme 함수를 만들었나?
**목적**: 모드와 액센트 컬러를 동적으로 조합

**파일**: [createTheme.ts](../src/styles/theme/createTheme.ts)

**이유**:
- 2개 모드 × 3개 액센트 = 총 6가지 테마 조합을 하나의 함수로 생성
- 코드 중복 제거 (DRY 원칙)
- 새로운 액센트 컬러 추가 시 확장 용이

**작동 방식**:
```typescript
const theme = createTheme('dark', 'blue');
// → 다크 모드 + 블루 액센트 테마 객체 반환
```

### 3.5 왜 TypeScript 타입을 확장했나?
**목적**: styled-components에서 테마 타입 자동완성

**파일**: [styled.d.ts](../src/styles/theme/styled.d.ts)

**이유**:
- `theme.colors.primary` 같은 코드 작성 시 자동완성 제공
- 타입 오류 사전 방지 (존재하지 않는 색상 접근 방지)
- 개발 생산성 향상

**효과**:
```typescript
// ✅ 자동완성 지원
const Button = styled.button`
  background: ${props => props.theme.accent.primary};
`;

// ❌ 컴파일 오류 발생
background: ${props => props.theme.invalidColor};
```

### 3.6 왜 persist에 hydration 처리를 했나?
**목적**: localStorage 로딩 지연으로 인한 UI 깜빡임 방지

**파일**: [themeStore.ts](../src/stores/themeStore.ts:37-39)

**이유**:
- Zustand의 persist는 비동기로 동작
- 초기 렌더링 시 기본값 → localStorage 값으로 순간 전환되며 깜빡임 발생
- `hasHydrated` 플래그로 로딩 완료 확인 후 렌더링

**구현**:
```typescript
// providers.tsx에서 사용
if (!hasHydrated) return null; // 로딩 중에는 렌더링 안 함
```

### 3.7 왜 Header와 SideBar에 테마 컨트롤을 배치했나?
**목적**: 사용자 접근성 최대화

**파일**:
- [Header.tsx](../src/app/layouts/Header/Header.tsx:18-36) - 모드 토글
- [SideBar.tsx](../src/app/layouts/SideBar/SideBar.tsx:11-37) - 액센트 선택

**이유**:
- **Header**: 항상 보이는 영역 → 다크/라이트 모드 빠른 전환 필요
- **SideBar**: 설정 영역 → 자주 바꾸지 않는 액센트 컬러 선택에 적합

**UX 고려사항**:
- 모드 토글은 아이콘으로 한 번 클릭 (햇/달 아이콘)
- 액센트 선택은 색상 칩으로 시각적 표현

### 3.8 왜 GlobalStyle을 별도 파일로 분리했나?
**목적**: 테마와 무관한 전역 스타일 관리

**파일**: [globalStyles.ts](../src/styles/globalStyles.ts)

**이유**:
- reset CSS, 기본 폰트, box-sizing 등은 테마와 무관
- 테마 파일과 책임 분리 (SRP 원칙)
- 테마 변경 시 전역 스타일 영향 방지

---

## 4. 주요 데이터 흐름

```
1. 사용자 테마 변경 (Header/SideBar 버튼 클릭)
   ↓
2. Zustand Store 업데이트
   - toggleMode() 또는 setAccent() 호출
   ↓
3. persist 미들웨어가 localStorage에 자동 저장
   ↓
4. useThemeStore 구독 컴포넌트 리렌더링
   ↓
5. ThemeProvider가 새로운 테마 객체 생성
   ↓
6. styled-components로 스타일링된 모든 컴포넌트 재렌더링
```

---

## 5. 확장 가능성

### 새로운 액센트 컬러 추가 방법
1. `src/styles/theme/green.ts` 파일 생성
2. `createTheme.ts`의 `accentThemes` 객체에 추가
3. `themeStore.ts`의 `ThemeAccent` 타입에 'green' 추가
4. `SideBar.tsx`의 `colorThemes` 배열에 항목 추가

### 새로운 모드 추가 (예: high-contrast)
1. `src/styles/theme/modes/high-contrast.ts` 생성
2. `createTheme.ts`의 조건문 수정
3. `themeStore.ts`의 `ThemeMode` 타입 확장

---

## 6. 테스트 방법

### 수동 테스트 체크리스트
- [ ] Header의 다크/라이트 모드 토글 동작
- [ ] SideBar의 3가지 액센트 컬러 선택 동작
- [ ] 페이지 새로고침 시 테마 유지 확인
- [ ] 브라우저 개발자 도구 → Application → Local Storage에서 'app-theme' 키 확인

### 자동 테스트 (향후 추가 권장)
```typescript
// themeStore.test.ts 예시
test('toggleMode should switch between light and dark', () => {
  const { result } = renderHook(() => useThemeStore());
  expect(result.current.mode).toBe('light');

  act(() => result.current.toggleMode());
  expect(result.current.mode).toBe('dark');
});
```

---

## 7. 참고 자료

- [Zustand 공식 문서](https://docs.pmnd.rs/zustand)
- [styled-components 테마 가이드](https://styled-components.com/docs/advanced#theming)
- [다크 모드 디자인 베스트 프랙티스](https://developer.apple.com/design/human-interface-guidelines/dark-mode)
