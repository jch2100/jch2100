# 300번대 — 생성형AI 활용 프롬프트 라이브러리
*작성일: 2026-03-22 | 최종 업데이트: 2026-03-23 | 검증 기준: 논문·실전 경험*

> **자료 출처**: 정찬훈 자체 연구 + 나노바나나 이미지 가이드 + 2026 Gen AI 도구 리서치

---

## 카테고리 A: 프레임워크 기반 AI 활용 (#301~#306)

## #301 다중 프레임워크 스태킹 — 신제품/신사업 기획
**근거**: Chain-of-Thought Prompting (Wei et al., 2022, Google Brain) + 프레임워크 키워드 주입 실험
**역할**: 생성형AI 프롬프트 설계 전문가
**난이도**: 고급
**키워드**: [프레임워크 스태킹] [Chain-of-Thought] [JTBD] [RICE] [SCAMPER]

---
당신은 신제품/신사업 기획 전문가입니다. 다음 기획 과제를 여러 프레임워크를 단계적으로 적용하여 분석해주세요.

기획 과제: [예: 중소기업 대상 AI 회계 서비스 런칭]

**1단계 — 문제 정의 (JTBD 프레임워크)**
고객이 이 서비스를 "고용"하는 진짜 이유(Job)는 무엇인가?
- Functional Job: 기능적으로 원하는 것
- Emotional Job: 감정적으로 원하는 것
- Social Job: 사회적으로 보이고 싶은 모습

**2단계 — 아이디어 발상 (SCAMPER)**
기존 회계 서비스를 SCAMPER 7가지 관점으로 재해석해주세요.
(대체 / 결합 / 응용 / 수정 / 다용도 / 제거 / 역발상)

**3단계 — 우선순위 (RICE 스코어링)**
도출된 아이디어 중 상위 5개에 대해 RICE 점수를 계산해주세요.
(Reach × Impact × Confidence ÷ Effort)

**4단계 — 실패 방지 (역산 사고, Inversion)**
이 사업을 반드시 실패시키는 방법 5가지를 나열하고, 역으로 방지책을 도출해주세요.

각 단계 결과를 구분해서 출력해주세요. 단계를 건너뛰지 마세요.
---

**강사 팁**: 프레임워크를 하나씩 순서대로 강제하는 것이 핵심입니다. "좋은 아이디어를 내줘"라는 단순 지시는 평범한 답을 낳지만, 이렇게 4단계를 명시하면 AI가 각 프레임워크의 논리적 제약 안에서 사고합니다.

---

## #302 MECE 구조화 — 복잡한 문제를 빠짐없이 분해하기
**근거**: MECE 원칙 (McKinsey & Company 표준 사고법) + 구조적 문제해결 (바바라 민토, 피라미드 원칙)
**역할**: 맥킨지식 구조적 사고 전문가
**난이도**: 중급
**키워드**: [MECE] [이슈 트리] [로직 트리] [구조적 사고]

---
당신은 맥킨지 스타일의 구조적 사고 전문가입니다.

해결해야 할 문제: [예: 우리 팀의 생산성이 낮다]

MECE 원칙(상호 배타적, 전체 포괄적)에 따라 다음을 수행해주세요:

1. **이슈 트리 작성** — 문제를 2~3단계로 MECE하게 분해
   - 1레벨: 가장 큰 범주 (예: 인적 요인 / 시스템 요인 / 환경 요인)
   - 2레벨: 각 범주의 하위 원인 (겹치지 않고, 빠짐없이)
   - 3레벨: 측정 가능한 구체적 지표

2. **중복 및 누락 검증** — 각 분기가 MECE 기준을 충족하는지 스스로 점검하고 표시

3. **우선순위 표시** — 각 이슈에 영향도(High/Mid/Low)와 해결 가능성(Easy/Hard)을 표시

출력 형식: 계층형 목록 + 최종 우선순위 표
---

**강사 팁**: AI는 자연스럽게 중복된 아이디어를 생성합니다. MECE를 명시하지 않으면 비슷한 내용이 다른 표현으로 반복 등장합니다. 반드시 "MECE 기준을 충족하는지 스스로 점검하라"는 자기 검증 지시를 포함하세요.

---

## #303 근본 원인 5단계 추적 — 5 Whys + 피시본 다이어그램
**근거**: 5 Whys 기법 (Taiichi Ohno, Toyota) + Ishikawa Diagram (Kaoru Ishikawa, 1968)
**역할**: 품질관리 및 근본원인 분석 전문가
**난이도**: 중급
**키워드**: [5 Whys] [Fishbone Diagram] [근본원인 분석] [RCA]

---
당신은 근본 원인 분석(RCA) 전문가입니다.

발생한 문제: [예: 지난 분기 고객 이탈률이 15% 증가했다]

**1단계 — 5 Whys 추적**
"왜?"라는 질문을 5번 반복하여 표면적 증상에서 근본 원인까지 추적해주세요.
각 단계에서 멈추지 말고 반드시 5번 도달해주세요.

**2단계 — 피시본 다이어그램 구조화**
도출된 원인들을 6M 카테고리로 분류해주세요:
- Man (인적 요인)
- Machine (시스템/도구)
- Method (프로세스/방법)
- Material (데이터/콘텐츠/재료)
- Measurement (측정/지표)
- Mother Nature (외부 환경)

**3단계 — 핵심 원인 선별**
파레토 법칙(80/20)을 적용하여: 문제의 80%를 유발할 가능성이 높은 핵심 원인 1~2개를 선별하고, 즉시 실행 가능한 대응책을 제시해주세요.

출력 형식: 5 Whys 사슬 → 6M 분류표 → 핵심 원인 + 대응책 순서로 출력
---

**강사 팁**: "왜?"를 딱 한 번만 하면 증상 수준에서 멈춥니다. 5번을 강제해야 비로소 "사람이 아닌 시스템의 문제"가 드러납니다. 인재를 탓하는 1차 원인에서 멈추지 않게 AI에게 명시적으로 5번을 지시하세요.

---

## #304 소크라테스 문답법 — AI를 개인 교사로 설정하기
**근거**: 소크라테스 문답법 (고대 그리스) + 메타인지 학습 연구 (Dunlosky et al., 2013)
**역할**: 소크라테스식 개인 교사
**난이도**: 초급
**키워드**: [소크라테스 문답법] [메타인지] [비판적 사고] [개념 학습]

---
당신은 소크라테스식 교육 방법을 사용하는 개인 교사입니다.

내가 배우고 싶은 개념: [예: 손익계산서 읽는 법]

다음 규칙을 반드시 지켜주세요:
1. 설명하지 마세요. 질문만 하세요.
2. 한 번에 하나의 질문만 던지세요.
3. 내가 답하면 그 답을 바탕으로 다음 질문을 만드세요.
4. 내가 틀렸을 때는 바로 정답을 알려주지 말고, 다른 각도의 질문으로 스스로 발견하게 유도하세요.
5. 내가 핵심 개념에 도달하면 "정확합니다"라고 확인해주세요.

첫 번째 질문을 시작해주세요.
---

**강사 팁**: 이 프롬프트는 AI에게 "설명하지 마세요"라고 금지 조건을 명시하는 것이 핵심입니다. 금지 없이 쓰면 AI는 즉시 개념 설명을 시작합니다. 금지 조건이 AI를 교사가 아닌 코치로 바꿉니다.

---

## #305 인지 편향 진단 — 내 사고의 오류를 찾아라
**근거**: 인지 편향 연구 (Kahneman & Tversky, 1974) + CBT 인지 왜곡 목록 (Aaron Beck)
**역할**: 인지행동 기반 사고 감사(Thought Auditor)
**난이도**: 중급
**키워드**: [인지 편향] [확증 편향] [CBT] [의사결정 오류]

---
당신은 인지행동치료(CBT)와 행동경제학에 기반한 사고 감사 전문가입니다.

내가 내린 판단 또는 결정: [예: "우리 팀이 이 프로젝트를 성공시킬 수 있다. 과거에도 비슷한 걸 해냈고, 팀원들도 긍정적이다."]

다음 항목으로 내 사고를 분석해주세요:

1. **인지 편향 스캔** — 내 판단에서 발견되는 편향 목록
   (확증 편향 / 가용성 휴리스틱 / 과신 편향 / 후광 효과 / 매몰비용 오류 등)

2. **ABC 모델 적용**
   - A (촉발 사건): 실제로 일어난 일
   - B (신념): 내가 가지고 있는 가정
   - C (결론): 그 신념이 만들어낸 결과

3. **반대 증거 수집 질문 3가지** — 내 결론을 반박하기 위해 확인해야 할 질문

4. **수정된 판단 제안** — 편향을 제거하면 어떤 판단이 나오는지

출력 형식: 각 항목을 순서대로, 판단문으로 직접 작성
---

**강사 팁**: 자신의 판단이 맞다고 생각할 때 쓰는 프롬프트입니다. 특히 중요한 결정 전에 "내가 틀렸다면 어디서 틀렸을까"를 AI에게 물어보는 습관을 만드세요. AI는 우리가 보고 싶은 것만 보는 확증 편향을 교정해주는 가장 저항이 없는 거울입니다.

---

## #306 시네핀 프레임워크 — 문제 유형 진단 후 접근법 결정
**근거**: Cynefin Framework (Dave Snowden, IBM, 1999) + 복잡계 시스템 이론
**역할**: 복잡성 관리 및 의사결정 전문가
**난이도**: 고급
**키워드**: [Cynefin] [복잡성] [의사결정] [VUCA]

---
당신은 시네핀(Cynefin) 프레임워크 전문가입니다.

내가 직면한 문제: [예: 경쟁사가 갑자기 50% 가격 인하를 발표했다]

**1단계 — 문제 영역 진단**
이 문제가 다음 4가지 영역 중 어디에 해당하는지 판단하고 근거를 설명해주세요:
- **단순(Simple)**: 원인-결과가 명확, 정해진 정답 존재
- **난해(Complicated)**: 전문가 분석이 필요하지만 정답이 존재
- **복잡(Complex)**: 원인-결과가 사후에만 파악, 실험과 탐색 필요
- **혼돈(Chaotic)**: 즉각 행동이 필요, 안정화 우선

**2단계 — 해당 영역에 맞는 대응 방식 제시**
- 단순 → 감지-분류-대응 (Best Practice 적용)
- 난해 → 감지-분석-대응 (전문가 분석)
- 복잡 → 탐색-감지-대응 (소규모 실험, 빠른 실패)
- 혼돈 → 행동-감지-대응 (즉각 안정화 조치)

**3단계 — 이 문제에 적합한 구체적 액션 3가지** (해당 영역 대응 방식에 맞춰)

출력 형식: 영역 진단 이유 → 대응 원칙 → 구체적 액션 순서로 작성
---

**강사 팁**: VUCA 환경에서 가장 흔한 실수는 복잡한 문제를 단순한 문제처럼 다루는 것입니다. "정답이 없는 문제"에 정답을 강요하면 조직이 경직됩니다. 먼저 문제 유형을 진단하는 이 프롬프트를 의사결정 전에 쓰세요.

---

## 카테고리 B: Gen AI 도구 선택 & 바이브코딩 (#307~#309)

## #307 Gen AI 도구 지도 — 작업별 최적 도구 선택
**근거**: 2026 Gen AI 도구 비교 리서치 (Cursor/Claude/Gemini/Midjourney 등 실사용 데이터)
**역할**: 생성형AI 도구 큐레이터
**난이도**: 초급
**키워드**: [Gen AI 도구 선택] [ChatGPT] [Claude] [Gemini] [Cursor] [Midjourney]

---
내가 하려는 작업: [예: 강의 PPT 초안 만들기 / 코드 없이 앱 만들기 / 프로필 사진 생성]

이 작업에 가장 적합한 AI 도구를 추천해줘. 아래 카테고리를 참고해서 답해줘:

**텍스트·대화**: ChatGPT(생태계 최강) / Claude(장문·코딩) / Gemini(Google 연동) / Perplexity(실시간 검색)
**코딩·바이브코딩**: Cursor(IDE) / Lovable(초보자 풀스택) / Bolt.new(빠른 프로토) / v0.dev(UI컴포넌트) / Claude Code(터미널)
**이미지 생성**: Gemini 이미지(인물사진) / Midjourney(예술·화보) / Flux Pro(사진사실성) / Ideogram(텍스트 포함 이미지)
**영상 생성**: Runway(산업표준) / Kling(소셜·길이) / Pika(스타일화)
**프레젠테이션**: Gamma(슬라이드 자동생성)
**문서 분석**: NotebookLM(PDF·논문)
**음성**: ElevenLabs(다국어 TTS)

다음 형식으로 답해줘:
1. 1순위 추천 도구 + 이유 (1줄)
2. 대안 도구 1개 + 차이점
3. 주의사항 또는 조합 팁
---

**강사 팁**: "AI 뭐 써요?"라는 질문에 ChatGPT 하나로 대답하는 시대는 끝났습니다. 작업 유형에 따라 최적 도구가 다릅니다. 이 프롬프트를 ChatGPT나 Claude에게 던지면 현재 시점 기준 최신 추천을 받을 수 있습니다. 단, AI 도구 정보는 빠르게 바뀌므로 출시일도 함께 확인하세요.

---

## #308 바이브코딩 시작 — 코드 없이 첫 번째 앱 만들기
**근거**: Vibe Coding 개념 (Andrej Karpathy, 2025년 제시 / Collins 사전 2025 올해의 단어) + Lovable·Bolt.new 실사용 패턴
**역할**: 바이브코딩 가이드 (비개발자 전용)
**난이도**: 초급
**키워드**: [바이브코딩] [Vibe Coding] [Lovable] [Bolt.new] [노코드] [프로토타입]

---
나는 코딩을 모르는 비개발자입니다. 다음 앱/웹사이트를 만들고 싶습니다.

만들고 싶은 것: [예: 강의 일정을 보여주는 심플한 랜딩 페이지 / 수강생 피드백을 받는 폼 / 포트폴리오 사이트]

다음 순서로 안내해주세요:

1. **도구 선택** — Lovable / Bolt.new / v0.dev 중 이 작업에 가장 적합한 것 1개와 이유
2. **첫 번째 프롬프트** — 선택한 도구에 바로 붙여 넣을 수 있는 영어 시작 프롬프트 (구체적으로)
3. **다음 수정 명령 3가지** — 결과물을 개선할 때 쓸 수 있는 후속 프롬프트 예시
4. **주의사항** — 비개발자가 바이브코딩할 때 흔히 겪는 함정 2가지

계획 단계에서는 코드를 쓰지 말고, 내가 이해할 수 있는 언어로만 설명해주세요.
---

**강사 팁**: 바이브코딩의 핵심은 "계획 중엔 실행하지 마라" 원칙과 동일합니다. 도구를 열기 전에 먼저 만들고 싶은 것을 한 문장으로 쓸 수 있어야 합니다. 그 문장이 프롬프트의 전부입니다.

---

## #309 이미지 AI 영문 프롬프트 제작 — 파파고 금지, LLM 활용
**근거**: 이미지·영상 AI는 영어 데이터로 집중 훈련됨 (강수진 박사, Ti-Times) + 강사 현장 경험
**역할**: 이미지 AI 프롬프트 전문가
**난이도**: 초급
**키워드**: [이미지 프롬프트] [영문 프롬프트] [Gemini 이미지] [Midjourney] [프롬프트 번역]

---
나는 다음 이미지를 만들고 싶습니다.

사용할 도구: [예: Gemini 이미지(나노바나나 모드) / Midjourney / Flux Pro]
원하는 이미지 내용: [예: 전문적인 비즈니스 강사 프로필 사진 / 회사 소개 배경 이미지]
스타일: [예: 깔끔하고 신뢰감 있는 / 예술적이고 감성적인]
용도: [예: 링크드인 프로필 / 강의 소개 페이지 / 유튜브 썸네일]

위 내용을 바탕으로 [사용할 도구]에 최적화된 영문 프롬프트를 만들어줘.

요구사항:
- 단순 번역(파파고식)이 아닌, 해당 AI 도구의 프롬프트 문법과 스타일에 맞게 작성
- 조명(lighting), 카메라 렌즈(lens), 분위기(mood), 배경(background) 등 핵심 파라미터 포함
- 비율 지정이 필요하면 ar--1:1 또는 ar--4:5 형식으로 추가
- 얼굴 유지가 필요하면 "Keep the face and pose as in reference." 문장 포함

프롬프트와 함께, 수정하기 쉬운 변수 3가지(예: 배경색, 의상, 표정)를 표로 정리해줘.
---

**강사 팁**: 이미지 AI에 한국어나 파파고 번역문을 그대로 넣으면 결과가 어색합니다. 이미지·영상 AI는 LLM과 달리 번역 능력이 약하고, 영어 프롬프트로 훈련이 집중되어 있습니다. "내용을 한국어로 설명하고, LLM에게 해당 AI 도구에 맞는 영문 프롬프트를 만들어달라"고 하는 것이 가장 안정적입니다.

---

## 카테고리 C: 이미지 생성 AI 실전 (#310~#312)

## #310 인물 프로필 사진 — 5가지 스타일 선택 가이드 (Gemini 이미지)
**근거**: 나노바나나 Gemini 이미지 프롬프트 가이드 (실전 검증)
**역할**: 퍼스널 브랜딩 이미지 디렉터
**난이도**: 초급
**키워드**: [Gemini 이미지] [인물 프로필] [퍼스널 브랜딩] [헤드샷] [나노바나나]

---
*Gemini 이미지(사고 모델)에 기준 인물 사진 1장을 올린 후, 아래 스타일 중 하나를 선택해 프롬프트를 복사해서 사용하세요.*

**얼굴 유지 필요 시 앞에 추가**: `Keep the face and pose as in reference. Do not modify face or hairstyle.`

---

**스타일 1 — 시네마틱 스튜디오 화보**
*강사·대표 소개, 브랜드 메인 비주얼용. 가장 '화보 같은' 느낌.*
```
Create an elegant cinematic studio portrait with professional fashion photography lighting. Subject in sophisticated pose against seamless backdrop. Three-point lighting setup: main key light with large softbox camera left creating soft shadows, fill light camera right at lower intensity, rim light behind subject for edge separation. Shot with 50mm prime lens, f/1.4 for dreamy background bokeh. Soft focus on background with sharp eyes. Color grading: rich, saturated tones with slight warmth. Professional retouching: smooth skin while maintaining natural texture, enhanced eyes, perfect white balance. High-end fashion editorial quality. Magazine-ready finish. --ar 1:1
```

**스타일 2 — 자연광 뷰티 포트레이트**
*블로그 프로필, 친근한 개인 브랜딩용. 부드럽고 깨끗한 인상.*
```
Generate a natural light beauty portrait using only window light. Subject positioned near large window with soft diffused daylight. Window light as main source creating soft, flattering illumination with gentle shadows. Shot with 85mm lens, f/2.0. Bright, airy feel with predominantly white or light backgrounds. Natural skin texture maintained. Soft pastel color palette. Timeless natural portrait. --ar 1:1
```

**스타일 3 — 미니멀 모던 포트레이트**
*브랜드 소개, 강의안 프로필, 카드형 소개 이미지용. 배경 깔끔.*
```
Generate a minimalist modern portrait with clean contemporary aesthetics. Subject against plain solid color background (white, gray, or bold single color). Clean composition following rule of thirds. Flat, even lighting minimizing shadows. Shot with 50mm lens, f/4 for overall sharpness. Neutral expression or subtle smile. Crisp, sharp focus throughout. Modern, sleek aesthetic. High-end minimalist design sensibility. --ar 1:1
```

**스타일 4 — 미국식 비즈니스 헤드샷**
*링크드인, 명함, 제안서용. 정돈된 전문성.*
```
Create a professional corporate headshot portrait in American business style. Subject wearing a fitted black blazer over white shirt against a soft gradient blue-gray background. Natural studio lighting with key light at 45 degrees. Expression: confident, approachable, genuine smile with eyes engaged. Shot at eye level with 85mm lens equivalent, f/2.8 aperture for soft background blur. Sharp focus on eyes with catchlights visible. High resolution, realistic skin tones with natural texture. Photorealistic quality suitable for LinkedIn, corporate website, or business card. --ar 1:1
```

**스타일 5 — 모노크롬 에디토리얼**
*포스터, 작가형 프로필, 콘셉트 있는 썸네일용.*
```
High-resolution monochrome portrait. Keep the face and pose as in reference. Outfit: crisp black turtleneck. Minimal white studio background with dramatic side lighting, casting long sharp shadows across the wall. Expression poised, elegant, cinematic atmosphere like a fashion editorial. Do not modify face or hairstyle.
```
---

**강사 팁**: 처음엔 스타일 4(비즈니스 헤드샷)나 스타일 2(자연광)부터 시도하세요. 방향이 잡히면 의상·배경색만 바꿔 재생성하는 방식이 가장 안정적입니다.

---

## #311 인물 사진 세부 수정 — 빠른 파라미터 교체
**근거**: 나노바나나 Gemini 이미지 가이드 (수정 패턴 실전 검증)
**역할**: 이미지 수정 디렉터
**난이도**: 초급
**키워드**: [이미지 수정] [파라미터] [Gemini 이미지] [얼굴 유지] [배경 변경]

---
*아래 문장을 기존 프롬프트에 덧붙이거나 교체해서 사용하세요.*

| 수정 항목 | 바로 복사할 문장 |
|-----------|----------------|
| 얼굴 유지 | `Keep the face and pose as in reference. Do not modify face or hairstyle.` |
| 의상 변경 | `Outfit: navy suit.` / `Outfit: white shirt with no tie.` |
| 배경 변경 | `Against a clean light-gray background.` / `Background: solid #1A1A1A studio tone.` |
| 표정 변경 | `Expression: warm smile.` / `Expression: calm and confident.` / `Expression: calm and approachable.` |
| 피부 보정 낮추기 | `natural skin retouching` (precision retouching 대신) |
| 비율 지정 | `--ar 1:1` (정방형) / `--ar 4:5` (세로형) / `--ar 16:9` (가로형) |
| 색조 조정 | `slight warmth` 삭제 → 차가운 느낌 / `warm golden tone` 추가 → 따뜻한 느낌 |

---

**강사 팁**: 첫 결과가 마음에 들면 조명·의상·배경만 조금씩 바꿔가며 재생성하는 것이 가장 효율적입니다. 전체 프롬프트를 새로 쓰기보다 한두 개 파라미터만 교체하세요.

---

## #312 고해상도 프로페셔널 변환 — 기존 사진을 AI 프로필로
**근거**: 나노바나나 Gemini 이미지 가이드 + 강사 소개·링크드인 활용 패턴
**역할**: 프로페셔널 이미지 리터칭 디렉터
**난이도**: 초급
**키워드**: [이미지 변환] [프로필 사진] [Gemini 이미지] [얼굴 구조 유지]

---
*기존 인물 사진을 올리고 아래 프롬프트를 사용하면, 얼굴 정체성을 유지하면서 조명·배경·디테일을 정제합니다.*

```
Transform this image into a high-resolution professional portrait while strictly maintaining the exact facial structure, identity, and key features of the subject. The subject should be wearing a crisp white shirt and a tailored black blazer with a confident expression. Apply an 85mm f/1.8 lens effect for shallow depth of field. Use 45-degree soft diffused lighting to refine facial contours. Set the background to a solid #1A1A1A studio tone. Perform precision retouching for skin texture (pores and fine lines) and sharpen clothing edges. Ensure a clean, editorial color grade with subtle warmth.
```

**자주 쓰는 수정**
- 배경색 변경: `#1A1A1A` → 원하는 색상 코드로 교체 (예: `#FFFFFF` 흰색, `#2C3E50` 다크블루)
- 표정 조정: `confident expression` → `calm and approachable expression`
- 피부 보정 낮추기: `precision retouching` → `natural skin retouching`
---

**강사 팁**: `facial structure, identity, key features`를 유지하라고 명확히 적어야 얼굴이 과하게 바뀌는 것을 막을 수 있습니다. 이 문장을 빼면 AI가 이상적인 얼굴로 '개선'해버립니다.

---
