const prefix = location.hostname.includes('github.io') ? '/DaycareWeb/' : '../../';

const script = document.createElement('script');
script.src = prefix + 'script.js';
script.type="text/javascript";
document.head.appendChild(script);