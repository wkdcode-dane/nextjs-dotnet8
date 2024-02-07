const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ApiRequest = async (endpoint: string): Promise<any> => {
    try {
        const response = await fetch(`${apiUrl}${endpoint}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export { ApiRequest };