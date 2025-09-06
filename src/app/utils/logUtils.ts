import logger from "loglevel";

const logLevel = __DEV__ ? "debug" : "info";

logger.setDefaultLevel(logLevel);

const isDebug = __DEV__;

const log = (...message: any) => {
  return isDebug && logger.log(message);
};

const debug = (...message: any) => {
  return isDebug && logger.debug(message);
};

const info = (...message: any) => {
  return isDebug && logger.info(message);
};

const error = (...message: any) => {
  return isDebug && logger.error(message);
};

const warn = (...message: any) => {
  return isDebug && logger.warn(message);
};

const LogUtils = {
  log,
  debug,
  info,
  error,
  warn,
};

export default LogUtils;
