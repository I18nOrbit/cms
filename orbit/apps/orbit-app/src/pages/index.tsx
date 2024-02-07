import { useTranslation } from '@orbit/translations';
import { Layout, TranslationsList } from '@orbit/ui';
import { usePostLogin } from '@orbit/core';
import React from 'react';

export function Index() {
  const { t } = useTranslation('global');
  const { mutate } = usePostLogin()

  React.useEffect(() => {
    mutate({
      email: "i18n@orbit.com",
      password: "12345678@@aA",
    })
  }, []);
  return (
    <Layout>
       <TranslationsList />
    </Layout>
  );
}

export default Index;
