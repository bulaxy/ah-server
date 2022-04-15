import { registerRoute } from "../index.js"
import axios from "axios"

const apiArkhamCardList = async (req, res) => {
    // TODO: Store it in some sort of nosql db might be ideal, but sql db could also works. 
    // TODO: Create a cron job to fetch data once a month or something, but more realistically, on request.
    console.log('Getting Data from Arkham db')

    axios
        .get('https://arkhamdb.com/api/public/cards')
        // .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log(new Date(), response)
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.warn(error.message)
            res.status(503).json({ errorMessage: error.message })
        })
    // .finally(() => );
}

export default function ArkhamCardRouter() {
    registerRoute('/api/arkhamcardlist', 'get', ['json'], apiArkhamCardList)
}

