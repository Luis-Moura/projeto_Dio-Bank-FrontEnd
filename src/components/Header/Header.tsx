import React from 'react';
import { LayoutHeader } from './Layout';
import { LogoHeader } from './Logo';
import { NavItensHeader } from './NavItens';
import { NavItensResponsiveHeader } from './NavItensResponsive';
import { useBreakpointValue } from '@chakra-ui/react';

export const Header = () => {
	const showText = useBreakpointValue({ base: false, md: false, lg: true });

	return (
		<LayoutHeader>
			<LogoHeader></LogoHeader>
			{showText ? (
				<NavItensHeader></NavItensHeader>
			) : (
				<NavItensResponsiveHeader></NavItensResponsiveHeader>
			)}
		</LayoutHeader>
	);
};
