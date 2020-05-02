module.exports = {
  locales: ["en", "ja"],
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src"],
    },
  ],
  format: "po",
  sourceLocale: "en",
}
