module.exports = {
  // 执行顺序从上到下，从左到右 eslint -> prettier
  "*.{js,jsx,ts,tsx,cjs}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc},.!(npmrc)": ["prettier --write"],
  "package.json": ["prettier --write"],
  "*.vue": ["eslint --fix", "stylelint --fix", "prettier --write"],
  "*.{css,scss,less,style,html}": ["stylelint --fix", "prettier --write"],
  "*.md": ["prettier --write"],
};
