import { Container } from "@mantine/core";
import { useTranslation } from "@orbit/translations";

export default function User() {
  const { t } = useTranslation('user');

return (
  <Container>
    <h1>{t('hello_user')}</h1>
  </Container>
)
}
