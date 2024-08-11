import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FormEvent, useState } from "react";

type Props = {
  onSearch: (search: string) => void;
  onClear: () => void;
};

export function SearchInput({ onClear, onSearch }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleClear = () => {
    setSearchInput("");
    onClear();
  };

  return (
    <form
      className="flex justify-center items-center gap-2 p-3 w-1/3"
      onSubmit={handleSearch}
    >
      <Input
        isClearable
        className="max-w-xs"
        label="Search by title and description"
        size="sm"
        type="text"
        value={searchInput}
        variant="flat"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onClear={handleClear}
      />
      <Button
        className="max-w-xs"
        color="primary"
        radius="sm"
        size="lg"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
