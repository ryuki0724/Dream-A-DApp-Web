// 导入 node_modules 中的样式
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 导入本地 CSS
import '../css/styles.css';
import '../css/content.css';
import '../css/startPage.css';

// 导入 JavaScript 库
import 'bootstrap';
import $ from 'jquery';
import 'slick-carousel';
import Web3 from 'web3';

// 导入本地 JS 文件
import '../js/view/startPage.js';
import '../js/view/scripts.js';
import '../js/view/gallery.js';
import '../js/view/roadMap.js';
import '../js/web3/wallet.js';

// 确保 jQuery 在全局范围内可用
window.$ = window.jQuery = $;
