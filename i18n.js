const copy = {
  en: {
    langBtn: "한국어",
    kicker: "Junior full-stack developer",
    name: "Kwon Hyuk Jin",
    print: "Print / PDF",
    lead: "I build web and mobile products with React, Next.js, and TypeScript, and I am expanding into backend, auth, and APIs. I completed the HENNGE backend recursion challenge: Python recursion, RFC 6238 TOTP, HTTP Basic Auth.",
    projects: "Selected projects",
    p1role: "AI souvenir recognition app",
    p1a: "Camera-based search for Korean souvenirs, with Google and anonymous login.",
    p1b: "Cloud search history and UI copy in five languages.",
    p1c: "Native APIs: camera, image picker, location, maps.",
    p2role: "Club and meetup platform",
    p2a: "Create and join clubs, invite members, and share posts.",
    p2b: "Club analytics charts with Recharts.",
    p2c: "Axios API layer, Jest tests, and Mock Service Worker.",
    p3role: "Clothing shop",
    p3a: "Catalog, search, filters, cart, auth, and order history.",
    p3b: "Checkout without real payments — scoped on purpose.",
    p4role: "Cafe ordering demo",
    p4a: "Four-page site with cart and mock Kakao / Naver / Toss checkout UI.",
    p5role: "Node.js login",
    p5a: "First backend: routes, a user model, registration and login written by hand.",
    skills: "Skills",
    s1k: "Frontend",
    s2k: "Mobile",
    s3k: "Data",
    s4k: "Backend",
    s5k: "Tools",
    edu: "Education",
    edu1: "<strong>Undergraduate student</strong>, Korea · 2024 – Present",
    edu2: "University, major, and graduation date can be added on request.",
    recent: "Recent",
    recent1: "<strong>HENNGE Challenge 004</strong> — recursive Python solution with no loops, private gist, HMAC-SHA-512 TOTP. Mission 3: HTTP 200.",
    cl: "Cover letter (HENNGE)",
    md: "Markdown resume",
  },
  ko: {
    langBtn: "English",
    kicker: "주니어 풀스택 개발자",
    name: "권혁진",
    print: "인쇄 / PDF",
    lead: "React, Next.js, TypeScript로 웹·모바일 제품을 만들고, 백엔드·인증·API로 범위를 넓히는 중입니다. HENNGE 백엔드 재귀 챌린지(Python 재귀, RFC 6238 TOTP, HTTP Basic Auth)를 완료했습니다.",
    projects: "주요 프로젝트",
    p1role: "AI 한국 기념품 인식 앱",
    p1a: "카메라 기반 이미지 검색, Google / 익명 로그인.",
    p1b: "검색 기록 클라우드 저장, 5개 언어 UI.",
    p1c: "카메라, 앨범, 위치, 지도 네이티브 API 연동.",
    p2role: "동아리·모임 플랫폼",
    p2a: "모임 생성·초대·게시글 공유.",
    p2b: "Recharts 기반 동아리 분석 차트.",
    p2c: "Axios API 레이어, Jest, MSW 목 서버.",
    p3role: "의류 쇼핑몰",
    p3a: "상품 목록/상세, 검색, 필터, 장바구니, 로그인, 주문 내역.",
    p3b: "실제 결제 없는 체크아웃(의도된 범위).",
    p4role: "카페 주문 데모",
    p4a: "4페이지 구성, 장바구니, 카카오/네이버/토스 목 결제 UI.",
    p5role: "Node.js 로그인",
    p5a: "라우트와 사용자 모델, 로그인/회원가입을 직접 구현한 첫 백엔드.",
    skills: "기술",
    s1k: "프론트엔드",
    s2k: "모바일",
    s3k: "데이터",
    s4k: "백엔드",
    s5k: "도구",
    edu: "학력",
    edu1: "<strong>학부생</strong>, 대한민국 · 2024 – 현재",
    edu2: "대학교, 전공, 졸업 예정 시기는 알려주시면 넣겠습니다.",
    recent: "최근",
    recent1: "<strong>HENNGE Challenge 004</strong> — 반복문 없는 Python 재귀 풀이, 비공개 gist, HMAC-SHA-512 TOTP. 미션 3 HTTP 200.",
    cl: "자기소개서 (HENNGE)",
    md: "마크다운 이력서",
  },
};

let lang = "en";

function apply() {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });
  document.getElementById("lang").textContent = t.langBtn;
}

document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "en" ? "ko" : "en";
  apply();
});

document.getElementById("print").addEventListener("click", () => window.print());
apply();
