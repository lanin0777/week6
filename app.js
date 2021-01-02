export default function(express, bodyParser, fs, crypto, http) {
   
 const app = express();
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Headers',
        'Content-Type': 'text/plain; charset=utf-8'
    };
    const login = "alexlaikn";

    app

   
        .all('/*', (req, res) => {
            res.set(CORS);
            res.send(login);
        });

    return app;
}
 
