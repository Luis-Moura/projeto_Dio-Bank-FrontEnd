import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";

export const NavItensResponsiveHeader = () => {
    return (
			<Flex
				width="100%"
				height="10vh"
				alignItems="center"
				justifyContent="right"
			>
				<Icon cursor="pointer" as={HamburgerIcon} boxSize={6} />
			</Flex>
		);
}