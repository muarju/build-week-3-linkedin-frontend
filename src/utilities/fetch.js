const accesstoken = localStorage.getItem('accesstoken');
const userId = localStorage.getItem('id');


export const getData = async (endpoint, accesstoken, validation, loading) => {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'authentication': `${accesstoken}`
            }
        })
        if (response) {
            const data = await response.json()
            return data
            validation(true)
            loading(false)
        } else {
            console.log("something wrong")
            validation(false)
        }
    } catch (error) {
        console.log(error);
        loading(false)
        validation(false)
    }
}


export const postData = async (endpoint, accesstoken, objBody) => {
    try {
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

        } else {
          
        }

    } catch (error) {
        console.log(error);
   
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

export const putImage = async (endpoint, accesstoken, formData) => {
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

