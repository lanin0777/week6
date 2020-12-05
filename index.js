import bodyParser from 'body-parser';
import x from 'express';
import { createReadStream } from 'fs';
import crypto from 'crypto';
import { Server } from 'http';

import myFunc from './app.js';

const app = myFunc(x, bodyParser, createReadStream, crypto, Server );

app.listen(app.port);
