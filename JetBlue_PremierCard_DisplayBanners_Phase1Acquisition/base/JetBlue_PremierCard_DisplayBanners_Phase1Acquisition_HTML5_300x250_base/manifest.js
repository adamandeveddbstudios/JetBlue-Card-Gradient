FT.manifest({
  filename: "index.html",
  width: 300,
  height: 250,
  clickTagCount: 1,
  hideBrowsers: ["ie8"],
  richloads: [
    {
      name: "main_rl",
      src: "JetBlue_PremierCard_DisplayBanners_Phase1Acquisition_HTML5_300x250",
    },
  ],
  instantAds: [
    { name: "main_rl", type: "richload" },
    {
      name: "clickTag1_url",
      type: "text",
      default:
        "https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison",
    },
  ],
});