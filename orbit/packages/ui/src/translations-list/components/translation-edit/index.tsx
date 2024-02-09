import { Modal, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function TranslationEdit() {
  const [opened, handlers] = useDisclosure(true);

  return (
    <Modal opened={opened} onClose={handlers.close} title="Authentication" centered>
      <Textarea label="PT"></Textarea>
      <Textarea label="EN"></Textarea>
      <Textarea label="ES"></Textarea>
    </Modal>
  )
}
