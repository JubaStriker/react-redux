import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

const About = () => {
    const fileName = 'webhook-events'
    const [webhook, setWebhook] = useState('')

    useEffect(() => {
        import("../mdx/webhook-events.mdx")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setWebhook(res))
            })
            .catch(err => console.error(err));

    }, [])
    return (
        <div>
            <h1>About</h1>
            <Markdown>
                {webhook}
            </Markdown>
        </div>
    );
};

export default About;