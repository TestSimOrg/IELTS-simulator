import { addColors, createLogger, format, transports } from 'winston';

// // Define log levels and corresponding colors
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
  }
};

// Configure Winston logger
const log = createLogger({
  levels: logLevels.levels,
  format: format.combine(
    // format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json()
  ),
  transports: [
    // Console transport
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.simple()
      )
    }),
    // File transport
    // new transports.File({
    //   filename: 'app.log',
    //   format: format.combine(
    //     format.uncolorize(),
    //     format.simple()
    //   )
    // })
  ]
});
log.level = 'error';

export default log;