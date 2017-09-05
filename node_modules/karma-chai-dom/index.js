var path = require('path')

var framework = function(files) {
  files.unshift({
    pattern: path.join(path.dirname(require.resolve('chai-dom')), 'chai-dom.js'),
    included: true,
    served: true,
    watched: false
  })
}

framework.$inject = ['config.files']
module.exports = {
  'framework:chai-dom': ['factory', framework]
}
