require("@babel/parser").parse("code", {
  // parse in strict mode and allow module declarations
  sourceType: "module",

  plugins: [
    // enable jsx and flow syntax
    "jsx",
    "flow",
  ],
});