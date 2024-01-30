import { Container } from "@mantine/core";
import { useTranslation } from "@orbit/translations";

export default function User() {
  // This will be loaded
  const { t } = useTranslation('user');
  const { t: ttt } = useTranslation('validations');
  // This will not be loaded
  const { t: tt } = useTranslation('global');

return (
  <Container>
    <h1>{t('hello_user')}</h1>
    <h1>{tt('hello_user')}</h1>
    <h1>{ttt('hello_there')}</h1>
  </Container>
)
}
