import { Table } from "@mantine/core";
import { useGetTranslations } from "@orbit/core";
import { TranslationEdit } from "./components/translation-edit";
import { TableToolbar } from "./components/toolbar";

export function TranslationsList({ plugins }: TranslationListProps) {
  const { data: result } = useGetTranslations()
  const data = result?.data ?? []
  const languages = result?.meta.languages ?? []

  const rows = (data ?? []).map((element) => (
    <Table.Tr key={element.key}>
      <Table.Td>{element.key}</Table.Td>
      {element.messages.map(groupMessage => (
        <Table.Td key={groupMessage.language}>{groupMessage.message}</Table.Td>
      ))}

    </Table.Tr>
  ));

  return (
    <>
    <TranslationEdit />
    { plugins?.toolbar }
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Key</Table.Th>
          {languages.map(languages => {
            const regionNames = new Intl.DisplayNames(['en'], {type: 'language'});
            const countryName = regionNames.of(languages);

            return <Table.Th key={languages}>{countryName}</Table.Th>
          })}
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  </>
  )
}

TranslationsList.Toolbar = TableToolbar;
