import { Card, Col, Row, Button, Text, Modal } from "@nextui-org/react";
import React from "react";



function Card1({
    name = 'Test Name',
    img = 'https://nextui.org/images/card-example-6.jpeg',
    description = 'My Description',
    longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    superLongDescription = "Blah Blah Blah Blah",
    linkVisit = 'https://nextui.org/components/card'

}) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        {name}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        {superLongDescription}
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button flat auto color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>



            <Card css={{ w: "500px", h: "350px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            {/* Your day your way */}
                        </Text>
                        <Text h3 color="white">
                            {description}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={img}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={name}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Text color="#d1d1d1" size={12}>
                                        {name}
                                    </Text>
                                    <Text color="#d1d1d1" size={12}>
                                        {longDescription}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button
                                    flat
                                    auto
                                    rounded
                                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                    onPress={handler}
                                >
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        More Info
                                    </Text>
                                </Button>
                                <Button
                                    flat
                                    auto
                                    rounded
                                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                    onPress={() => window.open(linkVisit, "_blank")}
                                >
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        View
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
};

export default Card1;   