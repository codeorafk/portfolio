import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Section from"../../components/section"
  const Work = () => (
    <Layout title="hercules">
      <Container>
        <Title>
          hercules stock app <Badge>2022</Badge>
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
        </List>
        <Section delay={0.1}>
            <Heading as='h3' variant="section-title">
                Architecture
            </Heading>
            <P>
                Kiến trúc gồm 3 phần:
            </P>
            <P>
            Web application: fetch data from API endpoint and visualize data 
            </P>
            <P>
            API Server: as an intermediary, retrieves data from the database, normalizes the data, and returns the API
            </P>
            <P>
            python Server: as an daily crawler, crawles data to database
            </P>
        </Section>
        <WorkImage src="/images/works/hercules_01.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work