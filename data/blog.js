import fetch from 'isomorphic-unfetch';

export async function getPosts() {
    const slides = await getSlidesPresentations(process.env.API);
    const medium = await getMediumPosts(process.env.API, process.env.MEDIUM_AUTHOR);

    return [
        ...medium,
        ...slides,
    ];
};

async function getSlidesPresentations(baseUrl) {
    return await fetch(`${baseUrl}/slides`)
        .then(res => res.json())
        .then(res => res.map(item => ({ ...item, entryType: 'slides' })));
}

async function getMediumPosts(baseUrl, author) {
    return await fetch(`${baseUrl}/medium?author=${author}`)
        .then(res => res.json())
        .then(res => {
            return res.items
                .filter(item => item.thumbnail !== '')
                .map(item => ({ ...item, entryType: 'medium' }))
        });
}