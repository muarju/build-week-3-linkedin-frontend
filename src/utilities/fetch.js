const accesstoken = localStorage.getItem('accesstoken');
const userId = localStorage.getItem('id');


export const getData = async (endpoint, accesstoken) => {
    const response = await fetch(endpoint, {
        headers: {
            'authentication': `${accesstoken}`
        }
    })
    if (response) {
        console.log(response)
        const data = await response.json()
        return data
    } else {
        console.log("something wrong")
    }
}


export const postData = async (endpoint, accesstoken, objBody) => {

    const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(objBody),
        headers: {
            'Content-Type': 'application/json',
            'authentication': `${accesstoken}`
        },
    }
    );
    if (response.ok) {
        const data = await response.json()
        return data
    }

}

export const putData = async (endpoint, accesstoken, objBody) => {

    const response = await fetch(endpoint, {
        body: JSON.stringify(objBody),
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'authentication': `${accesstoken}`
        },
    }
    );
    if (response.ok) {
        const data = await response.json()
        return data
    }

}

export const putImage = (endpoint, accesstoken) => {
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            body: formData,
            headers: {
                'authentication': `${accesstoken}`
            },
        })

    } catch (error) {
        console.log(error);
    }
}

