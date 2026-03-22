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

---

## 5. 영업 도메인 심화 리서치 (2026-03-22)

### 5-1. 『무패영업』 올바른 저자 확인

**이전 참조는 잘못된 책이었음.** 올바른 정보:

| 항목 | 내용 |
|------|------|
| 원제 | 『無敗営業 「3つの質問」と「4つの力」』 |
| 저자 | **高橋浩一(다카하시 고이치)** — 도쿄대 경제학부, TORiX 주식회사 대표 |
| 출판 | 日経BP (2019) — 반년 만에 4만 부, 이후 시리즈 累計 22만 부 |
| 신작 | 『営業の科学』 (かんき出版, 2024) — 2만 명 조사 기반, 4만 부 돌파 |
| 직함 | 동경학예대학 客員准교수 겸임 |

---

### 5-2. 高橋浩一 설문 핵심 발견 (프롬프트 설계 근거로 활용)

**설문 규모:** 영업 1만 명 + 고객 1만 명 = 2만 명 조사

#### 고객이 영업에게 느끼는 불만 TOP 4 (아웃바운드 현장 데이터)
1. 요건 히어링 부족 — "내 상황을 제대로 듣지 않는다"
2. 영업 담당자로서 가치·매력이 없다
3. 고객 의도와 어긋난 제안을 가져온다
4. 영업 담당자의 움직임(대응)이 느리다

#### 목표 초과 달성자 vs 미달성자의 차이
- **초과 달성:** 사전 준비 후 질문 + 핵심 결정권자를 파악한 질문
- **미달성:** 준비 없이 그 자리에서 경청 (수동적)
- **격차가 가장 큰 항목:** 레스폰스 속도 + 고객에게 유익한 정보 제공

#### "왜 졌는지" 분석의 오류
> "가격 때문에 졌다" → 실제론 **비용 대비 가치(ROI) 납득 실패**가 원인인 경우가 대다수.
> 경쟁사가 이긴 것이 아니라 **'우리 제안의 가치 전달 실패'** 가 패인.

#### 고객 조사 핵심 발견
- 고객이 최고로 꼽은 영업의 특징: **"알아준다 / 의도를 파악한다 / 정확하다 / 명확하다"**
- 즉, 기술·가격보다 **"이해받는 경험"** 이 구매 결정을 좌우

#### 3가지 질문 프레임워크
1. 접전 상황 질문 — 경쟁사인지, 니즈 부재인지, 내제화인지 파악
2. 결정 장면 질문 — 어느 순간에 수주·실주가 결정됐는지
3. 배경 질문 — 깊은 탐색으로 본음(本音) 도출

#### 4가지 힘 (영업 스킬)
질문력 / 가치 소구력 / 제안 로직 구축력 / 제안 행동력

**출처:** 高橋浩一, TORiX株式会社. Amazon.co.jp 무패영업 상품 페이지, logmi.jp 인터뷰, note.com/takahashikoichi

---

### 5-3. B2B 기존 고객관리 — 왜 이것이 실질적 성장 레버인가

**찬훈님 현장 관찰:** 초기 발굴보다 기존 고객관리가 실제 볼륨업과 경쟁사 이탈 방지의 핵심이다.

#### 핵심 통계 (Bain/Reichheld + Gartner)

| 데이터 | 출처 |
|--------|------|
| 기존 고객 성사율 **60~70%** vs. 신규 고객 **5~20%** | Bain/Reichheld (HBR) |
| 고객 유지율 5% 향상 → 이익 **25~95% 증가** | Reichheld, Bain & Company |
| 신규 고객 획득 비용 = 유지 비용의 **5~25배** (B2B SaaS 5~10배) | Bain & Company |
| McKinsey: 교차판매로 매출 **20% 증가**, 이익 **30% 증가** | McKinsey & Company |
| 기존 고객 대상 계정 대화 집중 → 계정 성장 **48%** | Gartner (B2B Account Management) |
| 기존 고객이 신제품 시도할 확률 **50% 더 높음**, 평균 지출 **31% 더 많음** | Gartner/Yotpo |

#### B2B에서 기존 고객을 잃는 주요 경로 (현장+연구)
1. **고객 인게이지먼트 부재** — 설문 미응답, 인터랙션 저하 = 이탈 선행 신호
2. **챔피언 단일화 리스크** — 내부 지지자가 1명 → 이직 시 계정 전체 위험
3. **경쟁사의 조용한 침투** — 기존 고객 담당자가 관리를 소홀히 하는 사이 경쟁사가 접근
4. **ROI 재확인 실패** — 초기 도입 가치를 지속 상기시키지 않으면 계약 갱신 기반 소멸

#### KAM(Key Account Management) 핵심 프레임
- **Whitespace Mapping** — 기존 계정 내 미개척 수요 영역 시각화
- **nNPS / tNPS / CSAT** — 의사결정 접점별 만족도 측정
- **Champion 다각화** — 1개 부서 → 다부서 관계 확장
- **사용 데이터 모니터링** — 활용도 저하 = 조기 이탈 경보

**출처:** Bain & Company (Reichheld), Gartner 2024 CMO Spend Survey, McKinsey & Company, G2/SurveySensum 2025

---

### 5-4. 프롬프트 개발 로드맵 (기존 고객관리 카테고리 신설 제안)

현재 `100-sales-prompts.md`는 신규 발굴(아웃바운드) 중심.
아래 카테고리를 추가해야 실전 B2B 영업 커버리지가 완성됨.

#### 신설 필요 프롬프트 카테고리: **#150번대 — 기존 고객 관리 & 볼륨업**

| 번호 | 프롬프트 | 방법론 근거 |
|------|---------|-----------|
| #151 | 기존 고객 현황 진단 (만족도+리스크 동시 파악) | NPS + Champion Risk |
| #152 | Whitespace Mapping — 기존 계정 미개척 수요 발굴 | KAM (Key Account Management) |
| #153 | 계정 확장 제안서 (Upsell/Cross-sell 논리 구조화) | McKinsey Cross-sell Framework |
| #154 | 경쟁사 침투 조기 감지 질문 세트 | 無敗営業 3つの質問 응용 |
| #155 | 갱신 협상 전략 (가치 재확인 + 조건 협의) | Value-based Selling |
| #156 | 이탈 위기 고객 복구 스크립트 | Churn Prevention (Bain) |
| #157 | 챔피언 교체 시 관계 재건 플레이북 | Champion Risk Management |
| #158 | 정기 리뷰 미팅 아젠다 설계 | QBR (Quarterly Business Review) |

---

### 5-5. 100-sales-prompts.md 파일 문제 기록

현재 `100-sales-prompts.md`는 **JSONL 형식으로 잘못 저장**됨.
대화 기록(conversation history)이 마크다운 파일로 저장된 상태.
실제 프롬프트 콘텐츠는 JSON 내부에 있음 — 별도 추출 작업 필요.

**다음 세션 조치 필요:**
- [ ] JSON 파싱으로 실제 프롬프트 텍스트 추출
- [ ] 올바른 마크다운 형식(프롬프트-writing.md 규칙)으로 재작성
- [ ] #150번대 기존 고객관리 카테고리 신설 추가

---

## 6. 상세 리서치 파일 위치

| 파일 | 내용 |
|------|------|
| `000-core-principles.md` | 총류 원칙 + 프레임워크 비교 |
| `100-sales-prompts.md` | 영업 프롬프트 36개 |
| `100-sales-keywords.md` | **영업 도메인 키워드 사전** (신규, 2026-03-22) |
| `200-400-500-prompts.md` | 재무(15) + 스마트워크(20) + 경영전략(21) |
| `book2/references.md` | 에세이 책 참고자료 (도서/논문/콘텐츠) |
