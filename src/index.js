/*
redux 無し todo
http://javascript-memo2.seesaa.net/article/436858441.html

http://qiita.com/erukiti/items/e16aa13ad81d5938374e
*/


import App from './components/App.jsx';
import store from './Store.js';


import { Provider } from 'react-redux';
import {render} from 'react-dom';

render(
  <Provider store = { store } >
    <App />
  </Provider>,
	document.getElementById('root')
);