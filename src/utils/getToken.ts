import axios from "axios";

const client_id = import.meta.env.VITE_APP_SENTINEL_HUB_AUTH_ID;
const client_secret = import.meta.env.VITE_APP_SENTINEL_HUB_AUTH_SECRET;
const SENTINEL_HUB_BASE_URL = "https://services.sentinel-hub.com";

const instance = axios.create({
  baseURL: SENTINEL_HUB_BASE_URL,
});

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
};

const body = new URLSearchParams({
  client_id,
  client_secret,
  grant_type: "client_credentials",
}).toString();

export const getToken = async () => {
  try {
    const resp = await instance.post(
      "/auth/realms/main/protocol/openid-connect/token",
      body,
      config
    );

    Object.assign(instance.defaults, {
      headers: { authorization: `Bearer ${resp.data.access_token}` },
    });
    // console.log(
    //   `🚀 ~ getToken ~ resp.data.access_token:`,
    //   resp.data.access_token
    // );
    return resp.data.access_token;
  } catch (error) {
    console.error("Error receiving token:", error);
    return null;
  }
};
