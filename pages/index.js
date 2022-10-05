import { ChevronRightIcon } from "@chakra-ui/icons"
import {
    Box, Button, Container, Heading,
    Image, Link, SimpleGrid, useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import {
    IoLogoFacebook, IoLogoGithub, IoLogoInstagram
} from 'react-icons/io5'
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
const Page = () => {
    return (
        <Layout>
            <Container maxW='container.xl' px={[2, 5, 10]}>
                <Box
                    borderRadius='lg'
                    bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m a full-stack web developer based in VietNam
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Nguyen Tran Quoc Uy
                        </Heading>
                        <p>Full-Stack Developer</p>
                        <p>(Junior, ReactJS/ NextJS/ VueJS / Angular, Laravel / NestJS)</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor={useColorModeValue("gray.800", "whiteAlpha.900")}
                            borderWidth={3}
                            borderStyle="solid"
                            maxWidth="250px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profile.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as='h3' variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I&apos;m a web developer based in Ho Chi Minh
                        city with passion for building web application. I&apos;m young and surely
                        inexperienced, but eager to learn. I has a knack for all things, from
                        planning to solving problems with code. When not online, I
                        love hanging out alone and enjoy natural and wild beauties
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear> 10/2001</BioYear>
                        Born in Binh Dinh province
                    </BioSection>
                    <BioSection>
                        <BioYear> 10/2019</BioYear>
                        Studied Computer Science at Ho Chi Minh city University of Technology
                        (Trường Đại học Bách Khoa thành phố Hồ Chí Minh)
                    </BioSection>
                    <BioSection>
                        <BioYear> 03/2022</BioYear>
                        Intern at Grab VietNam
                    </BioSection>
                    <BioSection>
                        <BioYear> 07/2022</BioYear>
                        Junior web developer at FPT Information System
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>

                    <SimpleGrid columns={[2, 2, 3]} gap={6}>
                        <Link href="https://facebook.com/addifyouknow" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoFacebook />}
                            >
                                @addifyouknow
                            </Button>
                        </Link>
                        <Link href="https://instagram.com/uow._.y" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @uow._.y
                            </Button>
                        </Link>
                        <Link href="https://github.com/codeorafk" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @codeorafk
                            </Button>
                        </Link>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}
export default Page