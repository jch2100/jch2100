---
name: prompt-research
description: 프롬프트 엔지니어링 관련 논문, 연구, 크리에이터 콘텐츠를 리서치합니다. 새로운 도메인 프롬프트를 수집하거나 기존 원칙을 검증할 때 사용합니다.
user-invocable: true
argument-hint: [주제 또는 도메인]
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch, Agent
---

# 프롬프트 리서치 스킬

## 작업 순서
1. $ARGUMENTS 주제에 대해 다음을 병렬 리서치:
   - arXiv, SSRN에서 관련 논문 검색
   - 주요 크리에이터(Ethan Mollick, Anthropic 블로그 등) 콘텐츠 검색
   - 한국어 관련 콘텐츠 검색

2. 결과를 다음 형식으로 정리:
   - 논문: 저자, 연도, 핵심 발견, 프롬프트 원칙에의 시사점
   - 콘텐츠: 출처, 핵심 주장, 인용 가치

3. prompt-book/research.md에 추가

4. 000-core-principles.md에 반영할 내용이 있으면 제안

5. Book 2 소재로 적합한 인사이트가 있으면 book2/notes.md에 추가
