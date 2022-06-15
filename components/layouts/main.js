import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width initial-scale=1'/>
                <title>Homepage - Nguyen Tran Quoc Uy</title>
                <link rel="shortcut icon" href='/images/footprint-dark.png' />
            </Head>
            <Navbar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                <NoSsr>
                    <VoxelDog />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main