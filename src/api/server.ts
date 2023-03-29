const token = '43d5de5f78e5095c3e172821209cb4aa85216040318a91b2'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tableofcontents.glitch.me/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'       
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://tableofcontents.glitch.me/api/books`,
        {

            
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'       
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://tableofcontents.glitch.me/api/books/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',   
                'x-access-token': `Bearer ${token}`,  
                'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://tableofcontents.glitch.me/api/books/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',   
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'                 
            }
        })
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
        return;
    }
}