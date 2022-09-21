const getCurrency = 
    fetch('https://cdn.cur.su/api/latest.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('data ==>', data)
            if (data) {
                return Object.values(data);
            } else throw new Error(JSON.stringify(data.errors));
        });


export default getCurrency


