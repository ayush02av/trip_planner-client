import '@/styles/globals.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import StoreMiddleware from './storemiddleware'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <StoreMiddleware />
    {
      Component.pageLayout
        ? <Component.pageLayout children={<Component />} />
        : <Component {...pageProps} />
    }
  </Provider>
}
