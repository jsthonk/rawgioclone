import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/chunkwallet.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={8} marginLeft={"10px"} marginY={"5px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
