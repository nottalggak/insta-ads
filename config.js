// 광고 앱 설정 — 친구에게 보내기 전에 여기만 채운다.
window.AD_CONFIG = {
  appId: "",                 // 메타 개발자 앱 번호 (비워 두면 시험 모드로 열림)
  brand: "논스 창업가 하우스",
  // 친구가 처음 열었을 때 채워져 있을 광고 기본값 (화면에서 바꿀 수 있음)
  defaults: {
    name: "헤테로토피아 2027 입주자 모집",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd5_glzqTEJ99tfngz6-IK51DkLlD-T8R9kmYJo84pKm2mRUQ/viewform?usp=header",
    cta: "APPLY_NOW",
    message: "역삼동 빌딩 숲 사이, 창업가 17명이 함께 사는 집.\n논스 창업가 하우스 헤테로토피아가 2027년 입주자를 모집합니다.\n전원 매월 도전 장학금 50만원 · 11월 11일(수) 신청 마감",
    title: "헤테로토피아 2027 입주자 모집",
    end: "2026-11-11T21:00",   // 끝나는 시각 (한국 시간)
    total: 0,                  // 총금액(원). 0이면 친구가 직접 입력
    ageMin: 18, ageMax: 65,
    positions: ["stream", "story", "reels", "explore", "explore_home"]
  }
};
