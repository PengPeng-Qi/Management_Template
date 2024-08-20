/**
 * Read all environment variable configuration files to process.env
 */
export function wrapperEnv(envConfig: Record<string, any>) {
  const resObj = Object.create(null);

  for (const [key, value] of Object.entries(envConfig)) {
    switch (value) {
      case "true":
        resObj[key] = true;
        break;
      case "false":
        resObj[key] = false;
        break;
      default:
        resObj[key] = value;
        break;
    }

    if (key === "VITE_PORT") {
      resObj[key] = Number(value);
    }
  }

  return resObj;
}
