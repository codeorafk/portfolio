import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    AspectRatio,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Section from"../../components/section"
  const Work = () => (
    <Layout title="hercules">
      <Container maxW='container.md'>
        <Title>
          Hercules stock app <Badge>2022</Badge>
        </Title>
        <P>
         A stock app provide reputable data source from financial reports of hundreds of companies listed on HOSE,
        can helps you spot high-yield stocks, as well as risky stocks.

        </P>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Mock-up</Meta>
                <Link href="https://www.figma.com/file/pD57V4ghpAxvuuRgtLuTn5/Grab-Bootcamp-2022?node-id=0%3A1">
                https://www.figma.com/ <ExternalLinkIcon mx="2px" />
                </Link>
            </ListItem>   
            <ListItem>
                <Meta>Stack</Meta>
                <span>Django, ReactJS </span>
            </ListItem>
            <ListItem>
                <Meta>Github</Meta>
                <Link href="https://github.com/singsinghai/Stock-Market-GrabBootcamp">
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
                <P>1. Visualize barchart, treemap, column, table </P>
                <P>2. Fetch data from API Server <b>(RestAPI)</b> </P>
                <P>3. Export charts to pdf, xlxs, csv, jpg</P>
                <P>4. Search company info by its symbol </P>
            </div>

        </Section>
        <Section delay={0.5}>
            <Heading as='h3' variant="section-title">
                Non-functional Requirement
            </Heading>

            <div style={{ marginLeft: '20px' }}>
                <P>1. <b>Single-page</b> routing </P>
                <P>2. <b>Real-time </b>application (use setInterval) </P>
                <P>3. Processing time is <b>not over 3s</b> </P>
            </div>

        </Section>
        <Section delay={0.1}>
            <Heading as='h3' variant="section-title">
                System Architecture
            </Heading>
            <P>
            <b>Web application:</b> fetch data from API endpoint and visualize data 
            </P>
            <P>
            <b>API Server:</b> as an intermediary, retrieves data from the database, normalizes the data, and returns the API
            </P>
            <P>
            <b>Python Server:</b> as an daily crawler, crawles data to database
            </P>
            <WorkImage src="/images/works/hercules_01.png" alt="hercules" />
        </Section>
        <Section delay={0.5}>
            <Heading as='h3' variant="section-title">
                Demo web application
            </Heading>
            <AspectRatio maxW="640px" ratio={1.7} my={4} mx='auto'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/KyoV7jTMw_c"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{borderRadius:'20px'}}
                >
                </iframe>
            </AspectRatio>
        </Section>
      </Container>
    </Layout>
  )
  
  export default Work