import '@/styles/globals.css'

import DashKeys from 'dashkeys'

console.log('App DashKeys', DashKeys)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
