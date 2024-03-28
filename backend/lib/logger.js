import { createLogger, format, transports } from 'winston';

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

const customFormat = format.printf(({ level, message, ...meta }) => {
  let formattedMessage = `${level}: ${message}`;
  if (Object.keys(meta).length > 0) {
    formattedMessage += `\n${JSON.stringify(meta, null, 4)}`;
  }
  return formattedMessage;
});

const log = createLogger({
  levels: logLevels.levels,
  format: format.combine(
    format.colorize({ all: true }),
    customFormat
  ),
  transports: [
    new transports.Console()
  ]
});

log.level = 'error';

export default log;
