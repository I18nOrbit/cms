import i18n from 'i18next'
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { I18nextProvider } from 'react-i18next'

i18n
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      request: (options, url, payload, callback) => {
        console.log(url)
        callback(null, {
          status: 200,
          data: {
            'hello_there': 'Hello there',
            'hello_user': 'Hello user',
          }
        })
      }
    },
  });


export function I18nProvider({ children }: React.PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
