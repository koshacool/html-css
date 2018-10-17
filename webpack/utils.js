const appRoot = require('app-root-path')
const path = require('path')

function getAbsolutePath (moduleRelativePath) {
  return path.resolve(appRoot.toString(), moduleRelativePath)
}

module.exports = { getAbsolutePath }
