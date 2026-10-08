const coding = ["js", "rb", "py", "html", "css", "js"];

coci
coding.forEach(function (item) {
  console.log(item);
});
coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

// //can pass objects in for each

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]
coding.forEach((item) => {
  console.log(item);
});
