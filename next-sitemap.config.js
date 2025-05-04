/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.energyplan-kr.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.energyplan-kr.com/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // ✅ 다음 인증 주석 추가
    additionalRobotsTxt: `
  #DaumWebMasterTool:d6a9eafc838c7b4a8b2aa6cb32bfd15106b291a46f6d58f642c83a0000ac5f92:Yzosx6SjVqxInf4teZmdGw==
      `,
  },
};
