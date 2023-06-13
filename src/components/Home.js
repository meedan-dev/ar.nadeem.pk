import { Text, Card, Row, Grid } from '@nextui-org/react'
import './Component.css'
const Home = () => {


    return (
        <div id="#">
            <Text h1 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>
                Home
            </Text>


            <Card css={{ w: "30%" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src="/PF.png"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                        css={{
                            'border': '1px solid transparent',
                            'border-image': 'linear-gradient(to right, blue, purple) 1',
                            'border-image-slice': '1',
                        }}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light transparent $gray800",
                        bottom: 0,
                        zIndex: 1,
                        height: "6%",
                    }}

                >
                    <Row>
                        <Text >Software Enginner</Text>
                    </Row>
                </Card.Footer>
            </Card>

            <Grid.Container>
                <Grid Wrap='nowrap' Direction='row'>
                    <Text p size={20} >
                        I am &nbsp;
                    </Text>
                </Grid>
                <Grid Wrap='nowrap' Direction='row'>
                    <Text h3 css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}>
                        Software Engineer
                    </Text>
                </Grid>
                <Grid Wrap='nowrap' Direction='row'>
                    <Text p size={20} >, currently building full stack websites.</Text>
                </Grid>

            </Grid.Container>


        </div >
    );
}

export default Home;