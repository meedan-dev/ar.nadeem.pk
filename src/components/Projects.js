import { Text, Grid, Row } from '@nextui-org/react'
import { createStitches } from '@stitches/react';
import Card1 from './Card'
export const { styled, css } = createStitches({
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
});
const Projects = () => {


    return (
        <Grid.Container id="#Projects" gap={2} >
            <Row>
                <Grid>

                    <Text h1 css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}>Projects</Text>

                </Grid>
            </Row>

            < Grid >
                <Card1 name='Linux - Full Dev Op Server'
                    img='./DevOpServer.png'
                    description='Dev Op Server'
                    longDescription='A full-fledged Linux-based web server.'
                    superLongDescription="A full-fledged Linux-based web server hosts TeamSpeak servers on Box64, Nginx, 
                Network Storage, Portainer, and much more. I use it to host Docker containers, webapps and databases for my projects."
                    linkVisit='https://cloud.nadeem.pk'
                />
            </Grid >
            <Grid>
                <Card1 name='WhatsApp - Selenium API'
                    img='./Whatsapp.png'
                    description='WhatsApp - Selenium API'
                    longDescription='This is a selenium based python framework.'
                    superLongDescription="The App uses Web.Whatsapp.com to extract messages in an automated fashion. 
                    You will be provided with a QR-Code on first run to login. After that you can start extracting in Headless mode.
                     Browser Data/Session is saved in UserData folder in same directory as your script.
                     And hook into messages. You can also send messages to any contact."
                    linkVisit='https://github.com/ar-nadeem/WhatsApp-Selenium'
                />
            </Grid>
            <Grid>
                <Card1 name='VideoDownloader - MERN Stack'
                    img='./ytMern.png'
                    description='Video Downloader'
                    longDescription='Uses YT-DLP to download and serve MP4.'
                    superLongDescription="Used React framework with tailwindcss to create responsive single page app that leverges backend API to serve video downloads.
                    The components are atomic and seperate in the components directory.
                    Uses mongodb to store info related to downloads and use YT-DLP to download files and serve them."
                    linkVisit='https://ar-nadeem.github.io/YT-DLP-WEBAPP/'
                />
            </Grid>
            <Grid>
                <Card1 name='FutureAI - Backend API'
                    img='./FuturAI.png'
                    description='FutureAI - Backend API'
                    longDescription='Authentication and API for FutureAI.'
                    superLongDescription="Created a backend API using ExpressJS and Supabase to serve OpenAI and Stability Requests.
                    The API supports multiple endpoints and is hosted on Railway.
                    Uses JWT for authentication from supabase."
                    linkVisit='https://futurai.co/tools/'
                />
            </Grid>

        </Grid.Container >
    );
}

export default Projects;