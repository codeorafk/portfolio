import NextLink from "next/link"
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    Button,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from"../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return (
        <Layout>
            <Container maxW='container.xl'>
                <Box 
                    borderRadius='lg'
                    bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')} 
                    p={3} 
                    mb={6} 
                    align="center" 
                >
                    Hello, I&apos;m a full-stack developer based in VietNam
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Nguyen Tran Quoc Uy
                        </Heading>
                        <p>Full-Stack Developer</p>
                        <p>(Intern, ReactJS/ NextJS/ VueJS, Laravel)</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}}
                        ml = {{md: 6}}
                        align="center"
                    >
                        <Image 
                            borderColor={useColorModeValue("gray.800","whiteAlpha.900")}
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
                        I&apos;m an intern and a full-stack developer based in Ho Chi Minh 
                        city with passion for building web application. I&apos;m young and surely
                        inexperienced, but eager to learn. I has a knack for all things, from
                        planning to solving problems with code. When not online, I 
                        love hanging out alone and enjoy natural and wild beauties
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button bg={useColorModeValue("#f7a2af","#76e3d3")} rightIcon={<ChevronRightIcon />}>
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
                        <BioYear> 05/2022</BioYear>
                        Talent in Grab VietNam Bootcamp
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}
export default Page