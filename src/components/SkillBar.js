import { Progress, Grid, Text } from "@nextui-org/react";

function skillBar() {
    return (
        <div>
            <Grid.Container xs={12} sm={6} gap={2}>
                <Grid>
                    <Progress color="primary" value={75} />
                </Grid>
                <Grid>
                    <Progress color="primary" value={55} />
                </Grid>
                <Grid>
                    <Progress color="primary" value={35} />
                </Grid>
            </Grid.Container>
        </div>
    );
};

export default skillBar;