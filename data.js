// ============================================================
// Sample Data — Semiconductor VAD Sales Dashboard
// ============================================================

const PROJECT_MASTER = [
  { id:"PRJ-001", customer:"삼성전자", customerLine:"DX부문", industry:"가전", productFamily:"MCU", sales:"김철수", fae:"박기술", startDate:"2025-01-10", stage:"BOM Lock", nextStage:"MP", bomLockDate:"2025-11-20", mpDate:"2026-03-01", expectedRevenue:420000000, competitor:"TI", competitionLevel:"중", risk:"공급 리드타임", status:"Active" },
  { id:"PRJ-002", customer:"LG전자", customerLine:"H&A사업부", industry:"가전", productFamily:"Power IC", sales:"이영희", fae:"최FAE", startDate:"2025-02-15", stage:"DVT", nextStage:"PVT", bomLockDate:"2026-02-01", mpDate:"2026-08-01", expectedRevenue:180000000, competitor:"ADI", competitionLevel:"강", risk:"가격압박", status:"Active" },
  { id:"PRJ-003", customer:"현대모비스", customerLine:"전장부품팀", industry:"자동차", productFamily:"SiC MOSFET", sales:"김철수", fae:"박기술", startDate:"2024-11-01", stage:"PVT", nextStage:"BOM Lock", bomLockDate:"2026-04-01", mpDate:"2026-10-01", expectedRevenue:950000000, competitor:"Infineon", competitionLevel:"강", risk:"승인 지연", status:"Active" },
  { id:"PRJ-004", customer:"LS Electric", customerLine:"전력기기팀", industry:"산업용", productFamily:"Gate Driver", sales:"이영희", fae:"최FAE", startDate:"2025-03-05", stage:"Short List", nextStage:"EVT", bomLockDate:"2026-06-01", mpDate:"2027-01-01", expectedRevenue:230000000, competitor:"ON Semi", competitionLevel:"중", risk:"경쟁사 가격", status:"Active" },
  { id:"PRJ-005", customer:"KT", customerLine:"네트워크장비팀", industry:"통신", productFamily:"Ethernet PHY", sales:"정담당", fae:"한FAE", startDate:"2025-04-20", stage:"Spec In", nextStage:"Short List", bomLockDate:"2026-08-01", mpDate:"2027-02-01", expectedRevenue:120000000, competitor:"Marvell", competitionLevel:"강", risk:"기술 이슈", status:"Active" },
  { id:"PRJ-006", customer:"두산로보틱스", customerLine:"로봇제어팀", industry:"산업용", productFamily:"Motor Driver", sales:"김철수", fae:"박기술", startDate:"2025-05-01", stage:"EVT", nextStage:"DVT", bomLockDate:"2026-05-01", mpDate:"2026-11-01", expectedRevenue:310000000, competitor:"STMicro", competitionLevel:"중", risk:"없음", status:"Active" },
  { id:"PRJ-007", customer:"삼성전자", customerLine:"DS부문", industry:"산업용", productFamily:"PMIC", sales:"이영희", fae:"최FAE", startDate:"2025-01-20", stage:"BOM Lock", nextStage:"MP", bomLockDate:"2025-12-15", mpDate:"2026-04-01", expectedRevenue:560000000, competitor:"Qualcomm", competitionLevel:"강", risk:"없음", status:"Active" },
  { id:"PRJ-008", customer:"현대오토에버", customerLine:"ADAS팀", industry:"자동차", productFamily:"Radar SoC", sales:"정담당", fae:"한FAE", startDate:"2024-09-01", stage:"Lead", nextStage:"Spec In", bomLockDate:"2027-01-01", mpDate:"2027-09-01", expectedRevenue:1200000000, competitor:"NXP", competitionLevel:"강", risk:"고객 의사결정 지연", status:"Active" },
  { id:"PRJ-009", customer:"CJ올리브영", customerLine:"뷰티디바이스팀", industry:"가전", productFamily:"Touch IC", sales:"김철수", fae:"박기술", startDate:"2025-06-01", stage:"DVT", nextStage:"PVT", bomLockDate:"2026-01-15", mpDate:"2026-06-01", expectedRevenue:90000000, competitor:"Synaptics", competitionLevel:"약", risk:"없음", status:"Active" },
  { id:"PRJ-010", customer:"한화에어로", customerLine:"드론팀", industry:"산업용", productFamily:"Flight Controller MCU", sales:"이영희", fae:"최FAE", startDate:"2025-07-01", stage:"Spec In", nextStage:"Short List", bomLockDate:"2026-10-01", mpDate:"2027-04-01", expectedRevenue:270000000, competitor:"STMicro", competitionLevel:"중", risk:"공급 리스크", status:"Active" },
  { id:"PRJ-011", customer:"LG전자", customerLine:"VS사업부", industry:"자동차", productFamily:"BMS IC", sales:"정담당", fae:"한FAE", startDate:"2025-02-01", stage:"MP", nextStage:"-", bomLockDate:"2025-08-01", mpDate:"2026-01-15", expectedRevenue:680000000, competitor:"TI", competitionLevel:"강", risk:"없음", status:"Active" },
  { id:"PRJ-012", customer:"셀트리온", customerLine:"진단기기팀", industry:"의료", productFamily:"Signal Processor", sales:"김철수", fae:"박기술", startDate:"2025-08-01", stage:"Short List", nextStage:"EVT", bomLockDate:"2026-12-01", mpDate:"2027-06-01", expectedRevenue:150000000, competitor:"ADI", competitionLevel:"중", risk:"승인 지연", status:"Active" },
  { id:"PRJ-013", customer:"삼성전자", customerLine:"MX부문", industry:"통신", productFamily:"RF PA", sales:"이영희", fae:"최FAE", startDate:"2025-03-10", stage:"BOM Lock", nextStage:"MP", bomLockDate:"2025-10-30", mpDate:"2026-02-01", expectedRevenue:820000000, competitor:"Qorvo", competitionLevel:"강", risk:"없음", status:"Active" },
  { id:"PRJ-014", customer:"SK하이닉스", customerLine:"메모리팀", industry:"산업용", productFamily:"Voltage Regulator", sales:"정담당", fae:"한FAE", startDate:"2025-04-01", stage:"EVT", nextStage:"DVT", bomLockDate:"2026-07-01", mpDate:"2027-01-01", expectedRevenue:380000000, competitor:"Renesas", competitionLevel:"중", risk:"기술 이슈", status:"Active" },
  { id:"PRJ-015", customer:"KIA", customerLine:"전동화팀", industry:"자동차", productFamily:"OBC Controller", sales:"김철수", fae:"박기술", startDate:"2024-10-01", stage:"PVT", nextStage:"BOM Lock", bomLockDate:"2026-05-01", mpDate:"2026-12-01", expectedRevenue:1050000000, competitor:"Bosch", competitionLevel:"강", risk:"가격압박", status:"Active" },
];

// Stage History (for funnel DIBL calc)
const STAGE_HISTORY = [
  { projectId:"PRJ-001", stage:"Spec In", entryDate:"2025-01-10", exitDate:"2025-02-20", days:41 },
  { projectId:"PRJ-001", stage:"Short List", entryDate:"2025-02-20", exitDate:"2025-04-01", days:39 },
  { projectId:"PRJ-001", stage:"EVT", entryDate:"2025-04-01", exitDate:"2025-06-15", days:75 },
  { projectId:"PRJ-001", stage:"DVT", entryDate:"2025-06-15", exitDate:"2025-09-01", days:77 },
  { projectId:"PRJ-001", stage:"PVT", entryDate:"2025-09-01", exitDate:"2025-11-20", days:80 },
  { projectId:"PRJ-001", stage:"BOM Lock", entryDate:"2025-11-20", exitDate:null, days:null },
  { projectId:"PRJ-007", stage:"Spec In", entryDate:"2025-01-20", exitDate:"2025-03-05", days:44 },
  { projectId:"PRJ-007", stage:"Short List", entryDate:"2025-03-05", exitDate:"2025-05-01", days:57 },
  { projectId:"PRJ-007", stage:"EVT", entryDate:"2025-05-01", exitDate:"2025-07-20", days:80 },
  { projectId:"PRJ-007", stage:"DVT", entryDate:"2025-07-20", exitDate:"2025-10-01", days:73 },
  { projectId:"PRJ-007", stage:"PVT", entryDate:"2025-10-01", exitDate:"2025-12-15", days:75 },
  { projectId:"PRJ-007", stage:"BOM Lock", entryDate:"2025-12-15", exitDate:null, days:null },
  { projectId:"PRJ-013", stage:"Spec In", entryDate:"2025-03-10", exitDate:"2025-04-20", days:41 },
  { projectId:"PRJ-013", stage:"Short List", entryDate:"2025-04-20", exitDate:"2025-06-01", days:42 },
  { projectId:"PRJ-013", stage:"EVT", entryDate:"2025-06-01", exitDate:"2025-08-01", days:61 },
  { projectId:"PRJ-013", stage:"DVT", entryDate:"2025-08-01", exitDate:"2025-09-15", days:45 },
  { projectId:"PRJ-013", stage:"PVT", entryDate:"2025-09-15", exitDate:"2025-10-30", days:45 },
  { projectId:"PRJ-013", stage:"BOM Lock", entryDate:"2025-10-30", exitDate:null, days:null },
  { projectId:"PRJ-011", stage:"Spec In", entryDate:"2025-02-01", exitDate:"2025-03-10", days:37 },
  { projectId:"PRJ-011", stage:"Short List", entryDate:"2025-03-10", exitDate:"2025-04-25", days:46 },
  { projectId:"PRJ-011", stage:"EVT", entryDate:"2025-04-25", exitDate:"2025-06-01", days:37 },
  { projectId:"PRJ-011", stage:"DVT", entryDate:"2025-06-01", exitDate:"2025-07-10", days:39 },
  { projectId:"PRJ-011", stage:"PVT", entryDate:"2025-07-10", exitDate:"2025-08-01", days:22 },
  { projectId:"PRJ-011", stage:"BOM Lock", entryDate:"2025-08-01", exitDate:"2026-01-15", days:167 },
  { projectId:"PRJ-011", stage:"MP", entryDate:"2026-01-15", exitDate:null, days:null },
];

const TECH_SUPPORT_LOG = [
  { id:"TS-001", projectId:"PRJ-001", date:"2025-03-15", type:"회로 리뷰", detail:"전원부 레이아웃 최적화", personnel:1, hours:3, customerResponse:"긍정", result:"설계변경 반영", bomLockContrib:true },
  { id:"TS-002", projectId:"PRJ-001", date:"2025-05-20", type:"EMI/EMC 대응", detail:"방사노이즈 저감 필터 설계 지원", personnel:2, hours:8, customerResponse:"매우 긍정", result:"인증 통과", bomLockContrib:true },
  { id:"TS-003", projectId:"PRJ-002", date:"2025-04-10", type:"대체품 제안", detail:"단종 부품 대체 IC 제안 및 검증", personnel:1, hours:5, customerResponse:"긍정", result:"채택", bomLockContrib:false },
  { id:"TS-004", projectId:"PRJ-003", date:"2025-06-01", type:"열/전력 해석", detail:"SiC MOSFET 열저항 시뮬레이션", personnel:2, hours:12, customerResponse:"매우 긍정", result:"설계 최적화", bomLockContrib:true },
  { id:"TS-005", projectId:"PRJ-003", date:"2025-08-15", type:"샘플/EVB 지원", detail:"SiC MOSFET EVB 키트 제공", personnel:1, hours:2, customerResponse:"긍정", result:"EVT 가속화", bomLockContrib:true },
  { id:"TS-006", projectId:"PRJ-004", date:"2025-05-10", type:"FW 지원", detail:"Gate Driver 펌웨어 튜닝", personnel:1, hours:6, customerResponse:"중립", result:"검토 중", bomLockContrib:false },
  { id:"TS-007", projectId:"PRJ-005", date:"2025-07-01", type:"회로 리뷰", detail:"Ethernet PHY 임피던스 매칭 검토", personnel:1, hours:4, customerResponse:"긍정", result:"채택", bomLockContrib:false },
  { id:"TS-008", projectId:"PRJ-006", date:"2025-07-20", type:"EMI/EMC 대응", detail:"모터 드라이버 스위칭 노이즈 분석", personnel:2, hours:10, customerResponse:"매우 긍정", result:"설계변경 반영", bomLockContrib:true },
  { id:"TS-009", projectId:"PRJ-006", date:"2025-09-05", type:"FW 지원", detail:"모터 제어 알고리즘 최적화", personnel:1, hours:8, customerResponse:"긍정", result:"채택", bomLockContrib:true },
  { id:"TS-010", projectId:"PRJ-007", date:"2025-04-15", type:"열/전력 해석", detail:"PMIC 열설계 가이드 제공", personnel:1, hours:5, customerResponse:"매우 긍정", result:"설계 채택", bomLockContrib:true },
  { id:"TS-011", projectId:"PRJ-009", date:"2025-10-01", type:"샘플/EVB 지원", detail:"Touch IC 개발 키트 제공", personnel:1, hours:1, customerResponse:"긍정", result:"EVT 시작", bomLockContrib:false },
  { id:"TS-012", projectId:"PRJ-011", date:"2025-03-20", type:"회로 리뷰", detail:"BMS IC 균형회로 검토", personnel:2, hours:6, customerResponse:"매우 긍정", result:"설계 반영", bomLockContrib:true },
  { id:"TS-013", projectId:"PRJ-011", date:"2025-05-15", type:"열/전력 해석", detail:"배터리 팩 열관리 시뮬레이션", personnel:2, hours:15, customerResponse:"매우 긍정", result:"채택", bomLockContrib:true },
  { id:"TS-014", projectId:"PRJ-013", date:"2025-05-01", type:"EMI/EMC 대응", detail:"RF PA 격리도 개선 방안", personnel:2, hours:8, customerResponse:"매우 긍정", result:"설계 반영", bomLockContrib:true },
  { id:"TS-015", projectId:"PRJ-014", date:"2025-07-10", type:"대체품 제안", detail:"Voltage Regulator 효율 개선 대안 제시", personnel:1, hours:4, customerResponse:"긍정", result:"검토 중", bomLockContrib:false },
  { id:"TS-016", projectId:"PRJ-015", date:"2025-11-01", type:"열/전력 해석", detail:"OBC 전력변환 효율 해석", personnel:2, hours:14, customerResponse:"매우 긍정", result:"설계 최적화", bomLockContrib:true },
  { id:"TS-017", projectId:"PRJ-012", date:"2025-11-15", type:"FW 지원", detail:"Signal Processor 디지털 필터 구현", personnel:1, hours:7, customerResponse:"긍정", result:"검토 중", bomLockContrib:false },
  { id:"TS-018", projectId:"PRJ-008", date:"2025-12-01", type:"샘플/EVB 지원", detail:"Radar SoC 레퍼런스 보드 제공", personnel:1, hours:2, customerResponse:"긍정", result:"Spec In 진행", bomLockContrib:false },
  { id:"TS-019", projectId:"PRJ-002", date:"2025-09-10", type:"EMI/EMC 대응", detail:"Power IC 방사 노이즈 저감", personnel:2, hours:9, customerResponse:"긍정", result:"DVT 진행 중", bomLockContrib:false },
  { id:"TS-020", projectId:"PRJ-010", date:"2025-11-20", type:"회로 리뷰", detail:"Flight Controller 전원 안정성 검토", personnel:1, hours:5, customerResponse:"긍정", result:"검토 중", bomLockContrib:false },
];

const WIN_LOSS = [
  { projectId:"PRJ-001", result:"Win", date:"2025-11-20", reasonMain:"기술우위", reasonDetail:"EMI 인증 지원으로 경쟁사 대비 6주 빠른 통과", competitor:"TI", priceImpact:"보통", techImpact:"높음", supplyImpact:"보통", relImpact:"보통" },
  { projectId:"PRJ-007", result:"Win", date:"2025-12-15", reasonMain:"관계·레퍼런스", reasonDetail:"동일 고객사 기납품 실적과 신뢰 기반", competitor:"Qualcomm", priceImpact:"낮음", techImpact:"보통", supplyImpact:"낮음", relImpact:"높음" },
  { projectId:"PRJ-011", result:"Win", date:"2025-08-01", reasonMain:"기술우위", reasonDetail:"열관리 시뮬레이션 지원으로 배터리 팩 성능 최적화 입증", competitor:"TI", priceImpact:"보통", techImpact:"높음", supplyImpact:"보통", relImpact:"보통" },
  { projectId:"PRJ-013", result:"Win", date:"2025-10-30", reasonMain:"공급 안정성", reasonDetail:"국내 안정 공급망 + 레퍼런스 고객사 대응력", competitor:"Qorvo", priceImpact:"보통", techImpact:"보통", supplyImpact:"높음", relImpact:"보통" },
  // Past loss records for competitive analysis
  { projectId:"PRJ-L01", result:"Loss", date:"2025-06-01", reasonMain:"가격", reasonDetail:"경쟁사 15% 낮은 가격 제시", competitor:"TI", priceImpact:"높음", techImpact:"낮음", supplyImpact:"낮음", relImpact:"낮음" },
  { projectId:"PRJ-L02", result:"Loss", date:"2025-07-15", reasonMain:"기술열위", reasonDetail:"자동차 인증(AEC-Q100) 미보유", competitor:"Infineon", priceImpact:"낮음", techImpact:"높음", supplyImpact:"낮음", relImpact:"낮음" },
  { projectId:"PRJ-L03", result:"Loss", date:"2025-08-30", reasonMain:"가격", reasonDetail:"경쟁사 대비 8% 고가", competitor:"ADI", priceImpact:"높음", techImpact:"낮음", supplyImpact:"낮음", relImpact:"보통" },
  { projectId:"PRJ-L04", result:"Win", date:"2025-09-20", reasonMain:"기술우위", reasonDetail:"FW 최적화 지원으로 효율 3% 개선", competitor:"STMicro", priceImpact:"낮음", techImpact:"높음", supplyImpact:"낮음", relImpact:"보통" },
  { projectId:"PRJ-L05", result:"Win", date:"2025-10-05", reasonMain:"공급 안정성", reasonDetail:"리드타임 12주 vs 경쟁사 20주", competitor:"ON Semi", priceImpact:"낮음", techImpact:"보통", supplyImpact:"높음", relImpact:"보통" },
  { projectId:"PRJ-L06", result:"Loss", date:"2025-11-10", reasonMain:"관계", reasonDetail:"경쟁사 임원 레벨 영업 우위", competitor:"NXP", priceImpact:"낮음", techImpact:"낮음", supplyImpact:"낮음", relImpact:"높음" },
  { projectId:"PRJ-L07", result:"Win", date:"2025-12-01", reasonMain:"기술우위", reasonDetail:"열/전력 해석 지원으로 설계 신뢰도 확보", competitor:"Renesas", priceImpact:"낮음", techImpact:"높음", supplyImpact:"낮음", relImpact:"보통" },
];

// Risk / Issue board
const RISK_ISSUES = [
  { id:"RSK-001", projectId:"PRJ-002", type:"가격압박", detail:"ADI가 15% 추가 할인 제안 — 대응 전략 수립 필요", owner:"이영희", dueDate:"2026-04-01", priority:"High" },
  { id:"RSK-002", projectId:"PRJ-003", type:"승인 지연", detail:"현대모비스 내부 부품 승인위원회 일정 지연 (2회 연기)", owner:"박기술", dueDate:"2026-04-15", priority:"High" },
  { id:"RSK-003", projectId:"PRJ-005", type:"기술 이슈", detail:"Ethernet PHY 지터 스펙 미달 — 추가 필터 설계 검토 중", owner:"한FAE", dueDate:"2026-03-30", priority:"High" },
  { id:"RSK-004", projectId:"PRJ-008", type:"고객 내부 의사결정 지연", detail:"현대오토에버 ADAS 예산 확정 지연으로 Spec In 보류", owner:"정담당", dueDate:"2026-05-01", priority:"Medium" },
  { id:"RSK-005", projectId:"PRJ-010", type:"공급 리스크", detail:"파운드리 케파 부족 — 한화에어로 수요 대응 물량 확보 필요", owner:"이영희", dueDate:"2026-04-10", priority:"High" },
  { id:"RSK-006", projectId:"PRJ-012", type:"승인 지연", detail:"의료기기 식약처 인증 연계 승인 절차 — 예상 6개월 추가 소요", owner:"김철수", dueDate:"2026-06-01", priority:"Medium" },
  { id:"RSK-007", projectId:"PRJ-014", type:"기술 이슈", detail:"SK하이닉스 전원 노이즈 스펙 재정의 — 현행 IC 한계치 근접", owner:"한FAE", dueDate:"2026-04-20", priority:"Medium" },
  { id:"RSK-008", projectId:"PRJ-015", type:"가격압박", detail:"KIA 원가절감 목표 5% 추가 요구 — 협상 전략 필요", owner:"김철수", dueDate:"2026-04-05", priority:"High" },
];
