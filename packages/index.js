
import ElButton from './button/index.js';

const install = function(Vue, opts = {}) {
  Vue.component(ElButton.name, ElButton);
};

export default {
  install
}