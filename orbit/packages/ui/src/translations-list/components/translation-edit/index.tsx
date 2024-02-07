import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function TranslationEdit() {
  const [opened, handlers] = useDisclosure(true);

  return (
    <Modal opened={opened} onClose={handlers.close} title="Authentication" centered>

    </Modal>
  )
}
