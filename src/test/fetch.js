async function fetchData(data, route) {
    const res = await fetch(route, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res;
}
module.exports = fetchData;
