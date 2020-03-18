module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@tests/(.*)$": "<rootDir>/tests/$1"
  },
  moduleDirectories: ["node_modules"],
  transformIgnorePatterns: ["./node_modules/"],
  verbose: false,
  setupFilesAfterEnv: ["<rootDir>/tests/utils/setup-test.js"],
  moduleFileExtensions: ["js", "jsx", "scss", "css"]
};
