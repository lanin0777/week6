// require('http').Server{}.listen();
import {'Server'} from 'http';
const s = Server();
s.addListener('request', (req, res) => {
    res.end('OK\n');
});
s.listen(4321);
