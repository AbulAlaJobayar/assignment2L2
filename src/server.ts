
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";




async function main() {
    try {
        await mongoose.connect(config.database_url);
         app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(err)
    }

}


main()
