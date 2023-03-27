import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/chunkwallet.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image
          src={logo}
          boxSize={8}
          marginLeft={"10px"}
          marginY={"5px"}
        ></Image>
        <SearchInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
