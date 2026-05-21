import { Label, SearchField } from "@heroui/react";

export function SearchInputField({ value, onChange }) {
  return (
    <SearchField name="search">
      <Label>Search</Label>

      <SearchField.Group>
        <SearchField.SearchIcon />

        <SearchField.Input
          className="w-[280px]"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />

        <SearchField.ClearButton
          onPress={() =>
            onChange({ target: { value: "" } })
          }
        />
      </SearchField.Group>
    </SearchField>
  );
}