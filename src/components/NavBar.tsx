import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/chunkwallet.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={8} marginLeft={"10px"} marginY={"5px"} />
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Chunk Games
      </Text>
    </HStack>
  );
};

export default NavBar;
