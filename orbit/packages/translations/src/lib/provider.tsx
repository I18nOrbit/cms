import i18n from 'i18next'
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { http } from 'packages/core/src/http';
import { I18nextProvider } from 'react-i18next'

i18n
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    lng: 'en-US',
    fallbackLng: 'en-US',
    backend: {
      loadPath: '/translations/{{lng}}/{{ns}}',
      request: async (_options, url, _payload, callback) => {
        // @todo: handle error
        const response = await http.get(url);

        callback(null, {
          status: 200,
          data: response.data,
        })
      }
    },
  });


export function I18nProvider({ children }: React.PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
