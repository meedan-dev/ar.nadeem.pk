import { Text, Grid, Row, Spacer, Col } from '@nextui-org/react'
import Card1 from './Card'

const Projects = () => {


    return (
        <Grid.Container id="#Project">
            <Col>
                <Row>
                    <Text h1 css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}>Projects</Text>
                </Row>
                <Row>
                    <Card1 name='Linux - Full Dev Op Server'
                        img='./DevOpServer.png'
                        description='Dev Op Server'
                        longDescription='A full-fledged Linux-based web server.'
                        superLongDescription="A full-fledged Linux-based web server hosts TeamSpeak servers on Box64, Nginx, 
                Network Storage, Portainer, and much more. I use it to host Docker containers, webapps and databases for my projects."
                        linkVisit='https://cloud.nadeem.pk'
                    />
                    <Spacer x={2} />
                    <Card1 name='Linux - Full Dev Op Server'
                        img='./DevOpServer.png'
                        description='Dev Op Server'
                        longDescription='A full-fledged Linux-based web server.'
                        superLongDescription="A full-fledged Linux-based web server hosts TeamSpeak servers on Box64, Nginx, 
                Network Storage, Portainer, and much more. I use it to host Docker containers, webapps and databases for my projects."
                        linkVisit='https://cloud.nadeem.pk'
                    />
                </Row>
            </Col>
            <Spacer y={2} />
            <Col>
                <Row>
                    <Card1 name='Linux - Full Dev Op Server'
                        img='./DevOpServer.png'
                        description='Dev Op Server'
                        longDescription='A full-fledged Linux-based web server.'
                        superLongDescription="A full-fledged Linux-based web server hosts TeamSpeak servers on Box64, Nginx, 
                Network Storage, Portainer, and much more. I use it to host Docker containers, webapps and databases for my projects."
                        linkVisit='https://cloud.nadeem.pk'
                    />
                </Row>
            </Col>

        </Grid.Container >
    );
}

export default Projects;