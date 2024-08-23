import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";


interface Props {
  searchFunc: (searchValue: string) => void;
  userSearch: string;
}

const SearchInput = ({ userSearch, searchFunc }: Props) => {
  return (
    <Stack>
        <InputGroup>
        <InputLeftElement>
        <CiSearch size={20}/>
        </InputLeftElement>
      <Input 
      borderRadius={20}
      variant={"filled"}
        htmlSize={5}
        width={200}
        size={"md"}
        placeholder="Search"
        value={userSearch}
        onChange={(e) => searchFunc(e.target.value)
        }
        />
        </InputGroup>
            </Stack>
  );
};

export default SearchInput;
