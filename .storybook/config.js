import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  // require('../src/stories/InputStory');
  // require('../src/stories/NewCounterStory');
  
  // context()로 /stories의 js 파일 가져옴
  const ctx = require.context('../src/stories', true, /Story\.js/);  
  ctx.keys().forEach((srcFile) => {
    interopRequireDefault(ctx(srcFile));
  });

  /*
  ctx.keys() = ["./InputStory.js", "./NewCounterStory.js"]
  ctx = webpackContext(req) {
    var id = webpackContextResolve(req);
    return __webpack_require__(id);
  } 
  */
}

setAddon(JSXAddon);
configure(loadStories, module);