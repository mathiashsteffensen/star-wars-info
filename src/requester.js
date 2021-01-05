const BASE_API_URL = 'https://swapi.dev/api'

const requester = async (ENDPOINT_URI) => 
{
    return fetch(BASE_API_URL + ENDPOINT_URI).then((res) => res.json())
}

export default requester