---
name: bem-naming-helper
description: HTML 마크업에 대해 BEM(Block-Element-Modifier) 방법론을 적용한 클래스 네이밍을 제안하고 검수합니다.
---

# Context
사용자가 HTML/CSS 구조를 잡거나 클래스 네이밍을 물어볼 때 이 스킬을 활성화하세요.

# Instructions

1.  **Block 정의**: UI의 독립적인 컴포넌트(예: `card`, `gnb`, `login-form`)를 식별합니다.
2.  **Element 구조화**: 블록 내부의 요소는 `__`로 연결합니다 (예: `card__title`, `card__button`).
3.  **Modifier 처리**: 상태나 변형은 `--`로 연결합니다 (예: `card__button--primary`, `card__button--disabled`).
4.  **검증**: 제안한 네이밍이 중첩이 너무 깊지 않은지(Element의 Element는 피함) 확인합니다.

# Output Format
제안하는 코드는 아래와 같은 주석을 포함하여 출력하세요.

```html
<div class="card">
  <div class="card__image">...</div>
  <button class="card__button card__button--active">Click</button>
</div>