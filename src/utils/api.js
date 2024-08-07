import axios from "axios";

export default axios.create({
    baseURL:"https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'a082eb287dmsh1380849a26b0703p124dc5jsn234c14270c84',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
})