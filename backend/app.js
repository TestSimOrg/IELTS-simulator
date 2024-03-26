import express from 'express';
import morgan from 'morgan'
import ratelimit from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import log from './lib/logger.js'
import bodyParser from 'body-parser';
import swaggerDocs from './utils/swagger.js';

// env var setup
dotenv.config();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;
const env = process.env.NODE_ENV;

log.info(`Environment is set to ${env}`)

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
swaggerDocs(app, PORT); // open api docs

// routes and routes extension setup
import flowchartCompletionRouter from './routes/flowchartCompletion.js';
import formCompletionRouter from './routes/formCompletion.js';
import lMatchingRouter from './routes/lMatching.js';
import lShortAnswerRouter from './routes/lShortAnswer.js';
import listeningAnsSheetRouter from './routes/listeningAnsSheet.js';
import listeningTestRouter from './routes/listeningTest.js';
import mcqRouter from './routes/mcq.js';
import noteCompletionRouter from './routes/noteCompletion.js'; 
import planMapDiagramLabellingRouter from './routes/planMapDiagramLabelling.js';
import rMatchingRouter from './routes/rMatching.js';
import rShortAnswerRouter from './routes/rShortAnswer.js';
import readingTestRouter from './routes/readingTest.js';
import sentenceCompletionRouter from './routes/sentenceCompletion.js';
import summaryCompletionRouter from './routes/summaryCompletion.js';
import tableCompletionRouter from './routes/tableCompletion.js';
import tfngRouter from './routes/tfng.js';
import userLRAnsSheetRouter from './routes/userLRAnsSheet.js';
import ynngRouter from './routes/ynng.js';

app.use('/ynng', ynngRouter);
app.use('/userLRAnsSheet', userLRAnsSheetRouter);
app.use('/tfng', tfngRouter);
app.use('/tableCompletion', tableCompletionRouter);
app.use('/summaryCompletion', summaryCompletionRouter);
app.use('/sentenceCompletion', sentenceCompletionRouter);
app.use('/readingTest', readingTestRouter);
app.use('/rShortAnswer', rShortAnswerRouter);
app.use('/rMatching', rMatchingRouter);
app.use('/planMapDiagramLabelling', planMapDiagramLabellingRouter);
app.use('/noteCompletion', noteCompletionRouter);
app.use('/mcq', mcqRouter);
app.use('/listeningTest', listeningTestRouter);
app.use('/listeningAnsSheet', listeningAnsSheetRouter);
app.use('/lShortAnswer', lShortAnswerRouter);
app.use('/lMatching', lMatchingRouter);
app.use('/flowchartCompletion', flowchartCompletionRouter);
app.use('/formCompletion', formCompletionRouter);

// 404 and 500 Error handler Setup
// if req gets to here it is 404
app.use((req, res, next) => {
  const error = new Error("Non-exisitant endpoint. You lost buddy?");
  error.status = 404;
  next(error);
});

//req with errors get routed here
app.use((error, req, res, next) => {
  res.status(error.status || 500); // error from err obj, or catch all 500
  res.json({
    error: {
      message: error.message || "internal server error",
      status: error.status || 500,
    },
  });
});

// rate limiter
const limiter = ratelimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 2000, // limit each IP to 100 requests per windowMs
  message: "Pump the brakes there pal...",
});

//  apply to all requests
app.use(limiter);

// CORS setup
let whitelist = [
  `http:localhost${PORT}:`
];

if (process.env.NODE_ENV === 'development') {
  whitelist = [
    `http://localhost:${PORT}`,
    'http://localhost:8080'
  ];
} else {
  
  whitelist = [

  ];
}

for(let url of whitelist){
  log.info(`Allowed origins: ${url}`)
}

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));



// db setup
mongoose.connect(mongoDBURL, {});
mongoose.set("runValidators", true); 

let db = mongoose.connection;

db.on("error", (err) => {
  log.info("MongoDB error: ",err)
});

db.on("connected", () => {
  log.info("MongoDB connected");
  app.listen(PORT, () => {
    log.info(`Server is running on port ${PORT}`);
  })
});

db.on("disconnected", () => {
  log.info("MongoDB disconnected")
});

db.on("reconnected", () => {
  log.info("MongoDB reconnected")
});

export default app