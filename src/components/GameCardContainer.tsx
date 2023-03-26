import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "220px", md: "280px" }}
      borderRadius="10px"
      overflow="hidden"
      height="300px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
