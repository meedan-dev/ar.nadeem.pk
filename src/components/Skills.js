import { Text } from '@nextui-org/react'
import skillBar from './SkillBar'
import { Progress, Grid, Row, Spacer } from "@nextui-org/react";

function Skills() {


    return (
        <div id="#Skills">

            <Text h1 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>
                Skills
            </Text>

            <Grid.Container xs={12} sm={6} gap={2}>

                <Grid>
                    <Row >
                        <Text h3>Express.JS</Text>
                        <Progress color="primary" css={{ mt: 12, ml: 30 }} value={80} />
                    </Row>

                </Grid>

                <Grid>
                    <Row >
                        <Text h3>React.JS</Text>
                        <Progress color="primary" css={{ mt: 12, ml: 50 }} value={60} />
                    </Row>
                </Grid>

                <Grid>
                    <Row >
                        <Text h3>Python</Text>
                        <Progress color="primary" css={{ mt: 12, ml: 55 }} value={83} />
                    </Row>
                </Grid>



                <Grid>
                    <Row >
                        <Text h3>C++</Text>
                        <Progress color="primary" css={{ mt: 12, ml: 80 }} value={95} />
                    </Row>
                </Grid>

            </Grid.Container>

        </div>
    );
}

export default Skills;