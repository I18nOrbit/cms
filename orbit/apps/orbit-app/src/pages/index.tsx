import { useTranslation } from '@orbit/translations';
import { Layout, TranslationsList } from '@orbit/ui';
import { usePostLogin } from '@orbit/core';
import React from 'react';
import { Flex } from '@mantine/core';

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
       <TranslationsList plugins={{
          toolbar: (
            <Flex mb='lg' justify='flex-end'>
              <TranslationsList.Toolbar />
            </Flex>
          )
        }} />
    </Layout>
  );
}

export default Index;
