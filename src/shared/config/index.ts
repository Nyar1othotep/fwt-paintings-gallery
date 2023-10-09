const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(
      `Не удалось получить env переменную: ${key}. Возможно, необходимо переименовать .env.example на .env или .env.local`,
    );
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("REACT_APP_API_URL") as string;
export const IMAGE_CDN_URL = getEnvVar("REACT_APP_IMAGE_CDN_URL") as string;
