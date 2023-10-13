module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.{scss,less,css,html}': ['prettier --write'],
  '*.md': ['prettier --write']
}
