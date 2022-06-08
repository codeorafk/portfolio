import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from "../../components/section"
const Work = () => (
    <Layout title="hercules">
        <Container maxW='container.md'>
            <Title>
                BKgram <Badge>10/2021</Badge>
            </Title>
            <P>
                The application is a photo-sharing social networking service similar
                to the Instagram application, including basic features for users.
                The application is built as a web application.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Laravel, VueJs </span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/codeorafk/Bkgram">
                        https://www.github.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Demo</Meta>
                    <Link href="https://www.youtube.com/watch?v=7duJnIuSSYs">
                        https://www.youtube.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <Section delay={0.5}>
                <Heading as='h3' variant="section-title">
                    Functional Requirement
                </Heading>

                <div style={{ marginLeft: '20px' }}>
                    <P>1. Log in to the social network through the account and log out of the social network </P>
                    <P>2. Change your password, account name </P>
                    <P>3. Edit basic information including: full name, date of birth, phone number, gender.</P>
                    <P>4. Post management: post, delete, edit my posts (photos) </P>
                    <P>5. Follow other users </P>
                    <P>6. Receive notifications for new posts by people you follow </P>
                    <P>7. See posts by people you follow, or trending posts on the homepage </P>
                    <P>8. Interact with people by liking, commenting, sharing other people&apos;s posts </P>
                    <P>9. Go to a person&apos;s profile and view basic information, posts of that person </P>
                    <P>10. Search for users by their account name</P>
                </div>

            </Section>
            <Section delay={0.5}>
                <Heading as='h3' variant="section-title">
                    Mock-up
                </Heading>
                <WorkImage src="/images/works/bkgram_01.png" alt="Inkdrop" />
            </Section>
            <Section delay={0.5}>
                <Heading as='h3' variant="section-title">
                    Demo web application
                </Heading>
                <AspectRatio maxW="640px" ratio={1.7} my={4} mx='auto'>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/7duJnIuSSYs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </AspectRatio>
            </Section>
        </Container>
    </Layout>
)

export default Work