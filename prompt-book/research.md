# 프롬프트 북 프로젝트 — Research (리서치)
*최종 업데이트: 2026-03-21*

---

## 1. 프롬프트 엔지니어링 논문/연구

### 검증 완료

| 원칙 | 출처 | 핵심 발견 |
|------|------|----------|
| 싱글턴 > 멀티턴 | Microsoft Research arXiv 2505.06120 (2025) | 15개 LLM 대상, 멀티턴 시 39% 성능 저하 |
| 브레인스토밍엔 예시 금지 | Wharton School SSRN 4708466 (2024) | 예시가 고정관념 유발 |
| 앵커링 효과 주의 | 카너먼 행동경제학 | 섣부른 답이 후속 탐색 오염 |
| 본업 전문가 = 좋은 프롬프터 | Ethan Mollick, Wharton | 도메인 지식이 프롬프트 품질 결정 |
| 병목은 맥락(사람) | Anthropic 공식 문서 | AI 성능보다 입력 품질이 중요 |

### 수집 예정

- [ ] 프롬프트 체이닝(Chain-of-Thought) 최신 논문
- [ ] Few-shot vs Zero-shot 효과 비교 메타분석
- [ ] 시스템 프롬프트 최적화 연구
- [ ] 역할 부여(Role Prompting) 효과 실증 연구
- [ ] 한국어 프롬프트 특화 연구 (있다면)

---

## 2. 전문가/크리에이터 레퍼런스

### 해외

| 이름 | 소속/채널 | 핵심 관점 | 활용 |
|------|----------|----------|------|
| Jeremy Utley | Stanford d.school | "AI가 너에게 질문하게 하라" | 대화형 프롬프트 원칙 |
| Ethan Mollick | Wharton School | "Jagged Frontier", Be the Human in the Loop | 전체 철학 |
| Anthropic | Claude 제작사 | 시스템 프롬프트, 맥락 설계 | 기술 근거 |

### 한국

| 이름 | 채널/플랫폼 | 방향 | 비고 |
|------|-----------|------|------|
| 조코딩 | YouTube | AI 코딩·바이브코딩 | 개발자+비개발자 |
| 테디노트 | YouTube | LangChain, RAG | 개발자 타깃 |
| 일잘러 장피엠 | YouTube | 직장인 AI 자동화 | 스마트워크 집중 |
| 박태웅 | 책/강연 | AI 교양 | "IT 현자" |
| 송길영 | 책/강연 | AI 시대 사고력 | 유사 포지셔닝 |
| 강수진 | 프롬프트 엔지니어 | 프롬프트 전문 | 리서치 필요 |
| choi.openai | Threads | OpenAI 뉴스/팁 | 프롬프트 특화는 아님 |

### 해외 스킬/프롬프트 빌더 (리서치 예정)

- [ ] @skirano (X) — 프롬프트/에이전트 빌더
- [ ] @mattshumer_ (X) — AI 에이전트 전문
- [ ] AI Jason (YouTube) — AI 워크플로우
- [ ] Matt Wolfe (YouTube) — AI 도구 리뷰
- [ ] All About AI (YouTube) — 실습 중심

---

## 3. 시장 조사

### 경쟁 환경
- 한국: 프롬프트 "라이브러리"는 사실상 부재. 유튜브/블로그 산재.
- 해외: The Rundown AI, Ben's Bites Pro, Superhuman 등 유료 모델 존재.
- 차별점: 도서관 분류 체계 + 강사 실전 경험 + 논문 근거 태깅.

### AI 인지 연구 (Book 2 연결)

| 연구 | 핵심 발견 |
|------|----------|
| MIT Media Lab (2025) "Your Brain on ChatGPT" | ChatGPT 사용자 뇌 연결성 약화, "인지적 부채" |
| 핀란드 알토대 (2025) | AI 리터러시 높을수록 자기 과대평가 (역 더닝-크루거) |
| Gerlich (2025, Societies) | AI 빈번 사용자의 비판적 사고 점수 유의미 하락 |

---

## 4. HTML 라이브러리 기술 구현 리서치 (2026-03-22)

### 핵심 결론 먼저

단일 HTML 파일로 오프라인 동작하는 프롬프트 라이브러리는 충분히 가능하다.
기술 난이도보다 JSON 데이터 설계가 더 중요하다.

---

### 4-1. CSS 전략

**결정: Tailwind CDN 사용하지 않는다.**

Tailwind v4 CDN은 공식적으로 "개발/프로토타입 전용"이며 프로덕션 비권장.
단일 HTML 파일을 오프라인에서 사용하려면 CDN 의존성이 없어야 한다.

**대안 3가지:**

| 방법 | 장점 | 단점 | 적합도 |
|------|------|------|--------|
| 수동 CSS (`<style>` 태그) | 완전 제어, 의존성 없음 | 처음 작성 시간 필요 | 최적 |
| Tailwind Play → CSS 추출 → 임베드 | Tailwind 문법 사용 가능 | 일회성 작업, 수정마다 재추출 | 보통 |
| Pure CSS (경량 프레임워크) | 빌드 불필요, 가벼움 | 유틸리티 클래스 없음 | 보통 |

**권장:** 수동 CSS. 아이보리 팔레트 + 카드 스타일 + 사이드바, 총 CSS 200줄 이내로 충분.

---

### 4-2. 데이터 구조 전략

**결정: JSON을 `<script>` 태그 안에 인라인으로 임베드**

`fetch()`로 외부 JSON을 불러오는 방식은 `file://` 프로토콜(로컬 파일)에서 CORS 오류 발생.
오프라인 + 단일 파일 = 인라인 JSON이 유일한 선택.

```js
// HTML 내부 <script> 태그에 직접 선언
const PROMPTS = [
  {
    id: "101",
    title: "초기 접촉 이메일",
    domain: "100",
    role: "B2B 영업 전문가",
    difficulty: "초급",
    keywords: ["CRM", "파이프라인", "BANT"],
    source: "Wharton 2024",
    body: "당신은 {산업} 분야의 B2B 영업 전문가입니다...",
    tip: "BANT 변수를 먼저 채운 뒤 실행하세요."
  },
  // ...
];
```

**데이터가 많아질 때 대비:** 프롬프트 200개 기준 JSON 약 100~150KB — 브라우저에서 문제없음.

---

### 4-3. 검색/필터 구현

서버 없이 완전 클라이언트 사이드로 동작. 구현 난이도 낮음.

```js
// 핵심 로직 (10줄 이내)
input.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = PROMPTS.filter(p =>
    p.title.includes(term) ||
    p.keywords.some(k => k.toLowerCase().includes(term)) ||
    p.domain === activeDomain
  );
  renderCards(filtered);
});
```

---

### 4-4. 복사 버튼

`navigator.clipboard.writeText()` — 2025년 현재 모든 현대 브라우저 지원.

주의: HTTPS 또는 localhost에서만 동작. 로컬 `file://`에서는 작동 안 할 수 있음.
→ 폴백 처리 필요 (`execCommand` 방식 병행).

```js
async function copyPrompt(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('복사했습니다');
  } catch {
    // 폴백: 텍스트 선택 후 복사
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('복사했습니다');
  }
}
```

---

### 4-5. 변수 하이라이트

프롬프트 본문의 `{산업}`, `{역할}` 같은 변수를 시각적으로 구분.

```js
function highlightVariables(text) {
  return text.replace(/\{([^}]+)\}/g,
    '<mark class="var">$&</mark>'
  );
}
```

CSS:
```css
mark.var {
  background: #EDE9E0;
  color: #5C5C5C;
  padding: 1px 4px;
  border-radius: 3px;
  font-weight: 500;
}
```

---

### 4-6. 구현 순서 (권장)

1. HTML 껍데기 + 수동 CSS (색상 시스템 구현)
2. JSON 데이터 구조 확정 + 더미 데이터 5개
3. 카드 렌더링 (JS로 DOM 생성)
4. 사이드바 카테고리 필터
5. 검색
6. 복사 버튼 + 변수 하이라이트
7. 모바일 반응형

**각 단계가 독립적으로 작동함. 한 세션에 1~2단계씩 진행 가능.**

---

## 5. 상세 리서치 파일 위치

| 파일 | 내용 |
|------|------|
| `000-core-principles.md` | 총류 원칙 + 프레임워크 비교 |
| `100-sales-prompts.md` | 영업 프롬프트 36개 |
| `200-400-500-prompts.md` | 재무(15) + 스마트워크(20) + 경영전략(21) |
| `book2/references.md` | 에세이 책 참고자료 (도서/논문/콘텐츠) |
