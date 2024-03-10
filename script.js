function Article() {
    return (
        <Container>
            <Heading>Topics covered</Heading>
            <Paragraph>The following is a list of all the topics we cover in the MDN learning area.</Paragraph>
            <Paragraph>
                <Link>Getting started with the web</Link>
                <Text>
                    Provides a practical introduction to web development for complete beginners.
                </Text>
            </Paragraph>
            <Paragraph>
                <Link>HTML — Structuing the web</Link>
                <Text>
                    HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
                </Text>

            </Paragraph>
            <Paragraph>
                <Link>CSS — Styling the web</Link>
                <Text>
                    CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
                </Text>
            </Paragraph>
        </Container>
    )
}
const Container = styled.div`
font-family: "Inter", sans-serif;
box-sizing:border-box;
padding:0 25px;
max-width:700px;
margin:auto;
`
const Heading = styled.h2`
margin-top:2rem;
`
const Paragraph = styled.div`
margin:20px 0;
font-size:16px;
color:rgb(27,27,27);
`
const Link = styled.a`
font-size:18px;
display:block;
color:#8cb4ff;
cursor:pointer;
text-decoration:underline;
`
const Text = styled.p`
margin:16px;
`
const element = <Article />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);


