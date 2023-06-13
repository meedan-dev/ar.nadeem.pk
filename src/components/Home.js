import { Text, Card } from '@nextui-org/react'
import './Component.css'
const Home = () => {


    return (
        <div id="#">
            <Text h1 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>
                AbdulRahman
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
                            'border-image-slice': '1'
                        }}
                    />
                </Card.Body>
                {/* <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light transparent $gray800",
                        bottom: 0,
                        zIndex: 1,
                        maxHeight: "100s%",
                    }}

                >
                    <Row >
                        <Text >AbdulRahman</Text>
                    </Row>
                </Card.Footer> */}
            </Card>

            <div styles={{ clear: 'both' }}>
                <Text p size={20} style={{ float: "left" }}>
                    I am a &nbsp;
                </Text>

                <Text h3 css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }} style={{ float: "left" }}>
                    Software Engineer
                </Text>
                <Text p size={20} style={{ float: "left" }}>, &nbsp;</Text>
                <Text p size={20} style={{ float: "left" }}>currently building full stack websites.</Text>

            </div>



        </div >
    );
}

export default Home;