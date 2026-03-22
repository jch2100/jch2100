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

## 4. 상세 리서치 파일 위치

| 파일 | 내용 |
|------|------|
| `000-core-principles.md` | 총류 원칙 + 프레임워크 비교 |
| `100-sales-prompts.md` | 영업 프롬프트 36개 |
| `200-400-500-prompts.md` | 재무(15) + 스마트워크(20) + 경영전략(21) |
| `book2/references.md` | 에세이 책 참고자료 (도서/논문/콘텐츠) |
