import "./globals.css";

export const metadata = {
  title: "에너지플랜 | 태양광 전문 기업 | ENERGYPLAN",
  description:
    "신재생에너지 개발 및 태양광 지붕임대, RE100 구독형 서비스를 제공하는 태양광 전문 기업 에너지플랜입니다.",
  keywords: [
    "에너지플랜",
    "energyplan",
    "ENERGYPLAN",
    "태양광 전문 기업",
    "esg경영",
    "신재생에너지 개발",
    "태양광 개발사",
    "태양광 설치문의",
    "태양광문의",
    "RPS",
    "태양광 지붕임대",
    "태양광임대",
    "태양광 리스사업",
    "태양광 RE100 구독형",
    "탄소중립",
    "재생에너지 솔루션",
    "태양광 컨설팅",
    "태양광 발전사업",
    "태양광 EPC",
  ],
  authors: [{ name: "에너지플랜" }],
  openGraph: {
    title: "에너지플랜 | 태양광 전문 기업",
    description:
      "태양광 설치, RE100 구독형, 태양광 임대 등 신재생에너지 솔루션 전문 기업 에너지플랜입니다.",
    url: "https://www.energyplan-kr.com",
    type: "website",
    images: [
      {
        url: "https://www.energyplan-kr.com/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "에너지플랜 미리보기 이미지",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: new URL("https://www.energyplan-kr.com"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="naver-site-verification"
          content="be9f1294516733dbcc1db13fa36b48a64481053e"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
