import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. It is a library for building user interfaces and can be integrated into any web application.'
        },
        {
            id: '2',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. It is a library for building user interfaces and can be integrated into any web application.'
        },
        {
            id: '3',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. It is a library for building user interfaces and can be integrated into any web application.'
        },
    ]
    return <Accordion items={items}/>;
}

export default AccordionPage;