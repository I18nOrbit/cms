import { SegmentedControl } from "@mantine/core";

export function TableToolbar() {
  return <SegmentedControl
    data={[
      { value: 'a', label: 'All languages' },
      { value: 'b', label: 'Compare' },
      { value: 'c', label: 'Row Editor' },
    ]}
  />
}
