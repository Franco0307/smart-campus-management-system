import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "./mock"
import { Provider } from 'react-redux';
import { store } from './store';
import {ConfigProvider} from "antd"
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';  // ✓ 改这里
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Provider store={store}>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
    </Provider>
);

