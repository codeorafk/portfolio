import Logo from './logo'
import NextLink from 'next/link'

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    Flex,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                rounded={5}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const LinkMenuItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <MenuItem
                as={Link}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}

            </MenuItem>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <>
        <Box m={3} display={{base:'block', sm:'none'}}>
            <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                <Logo />
            </Heading>
        </Box>
        <Box
            position='fixed'
            bottom={{ base: '0', sm: 'auto'}}
            top={{ base: 'auto', sm: '0'}}
            as='nav'
            w='100%'
            bg={{base: useColorModeValue('#f0e7db', '#202023'), sm: useColorModeValue('#f0e7db80', '#20202380')}}
            boxShadow={{base:useColorModeValue('0px 10px 7px 5px #202023', '0px 10px 7px 5px #f0e7db'), sm: 'none'}}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5} display={{base:'none', sm:'flex'}}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'row', md: 'row' }}
                    display={{ base: 'flex', md: 'flex', sm:'none' }}
                    width={{ base: 'auto', md: 'auto' }}
                    alignItems='center'
                    justifyContent='center'
                    flexGrow={1}
                >
                    <LinkItem href='/' path={path}>
                        Home
                    </LinkItem>
                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href='/posts' path={path}>
                        Posts
                    </LinkItem>
                    <Link href='https://github.com/codeorafk/portfolio' target='_blank'>
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                        >
                            View Source
                        </Button>
                    </Link>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'none',sm:'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant='outline'
                                aria-label='Options'
                            />
                            <MenuList>
                                <LinkMenuItem href='/' path={path}>Home</LinkMenuItem>
                                <LinkMenuItem href='/works' path={path}>Works</LinkMenuItem>
                                <LinkMenuItem href='/posts' path={path}>Posts</LinkMenuItem>
                                <MenuItem as={Link} href='https://github.com/codeorafk/portfolio' target="_blank">View Source</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
        </>
    )
}

export default Navbar