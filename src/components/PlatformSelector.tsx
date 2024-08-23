import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatfrom";
import { platform } from "../hooks/UseGames";
import { IoIosArrowDropdown } from "react-icons/io";

interface Props {
  selectedPlatform: (platform: platform) => void;
  selectedPlatf: platform | null;
}

const PlatformSelector = ({ selectedPlatform, selectedPlatf }: Props) => {
  const { data, error } = usePlatform();

  console.log('platforms are' ,data)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDropdown />}>
        {selectedPlatf?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => selectedPlatform(platform)}
          >
            {" "}
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
