const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers':
    'x-test,Content-Type,Accept, Access-Control-Allow-Headers',
};
const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const PORT = 4321;

function myFunction(x, bodyParser, createReadStream, crypto, http) {
  const app = x();

  app.port = process.env.PORT || PORT;

  app
    .use((req, res, next) => {
      res.set(CORS);
      next();
    })
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/sha1/:input', (req, res) => {
      let hash = crypto.createHash('sha1');
      hash.update(req.params.input);
      res.send(hash.digest('hex'));
    })

    .get('/login/', (req, res) => res.send('alexlaikn'))
    .get('/code/', (req, res) => {
      let filename = import.meta.url.substring(9);
      createReadStream(filename).pipe(res);
    });

  app.all('/req/', (req, res) => {
    let url = req.query.addr;
    http.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => (data += chunk));
      response.on('end', () => {
        res
          .set(hu)
          .end(data);
      });
    });
  });
  app.all('*', (req, res) => {
    res.send('alexlaikn');
  });
  return app;
}

export default myFunction;
