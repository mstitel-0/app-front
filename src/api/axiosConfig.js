import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://app-back-1f1x.onrender.com',
        headers: {"ngrok-skip-browser-warning": "true"
                    }
    }
);