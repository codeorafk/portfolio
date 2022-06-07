import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from '../components/section'
import Layout from "../components/layouts/article"
import { WorkGridItem} from "../components/grid-item";
import thumbHercules from "../public/images/works/hercules.png"
const Works = () =>{
    return (
        <Layout>
            <Container maxW='container.xl'>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.4}>
                        <WorkGridItem id='Hercules' title='Hercules' thumbnail={thumbHercules}>
                            A stock dashboard app
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id='Hercules' title='Hercules' thumbnail={thumbHercules}>
                            A stock dashboard app
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works