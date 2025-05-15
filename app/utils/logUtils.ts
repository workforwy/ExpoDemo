/**
 * 日志管理
 */

// import Config from "react-native-config";

// 线上日志处理
// import * as Sentry from "@sentry/react-native";

// const isDebug = Config.ENVIRONMENT === 'DEV';
// jest.mock("os", () => require("./mock-os"));
// import winston from "winston";
// import RNFileTransport from "../RNFileTransport";

import logger from "loglevel";

// 创建logger
// const logger = winston.createLogger({
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(({timestamp, level, message}) => {
//       return `${timestamp} [${level}]: ${message}`;
//     })
//   ),
//   transports: [
//     new winston.transports.Console(), // 控制台日志输出
//     new RNFileTransport({filename: "8u8game.log"}), // 文件日志输出
//   ],
// });

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
