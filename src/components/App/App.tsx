import { useEffect } from "react";
import axios from "axios";

import { OpenEO } from "@openeo/js-client";

const App = () => {
  const url = "https://earthengine.openeo.org"; // Insert the openEO server URL here
  let connection: any = null;

  console.log("URL: " + url);
  console.log("Client Version: " + OpenEO.clientVersion());

  OpenEO.connect(url)
    .then((c: any) => {
      connection = c;
      return connection.capabilities();
    })
    .then((capabilities: any) => {
      console.log("Server Version: " + capabilities.apiVersion());
      return connection.listCollections();
    })
    .then((collections: any) => {
      console.log(
        "Number of supported collections: " + collections.collections.length
      );
      return connection.listProcesses();
    })
    .then((processes: any) => {
      console.log(
        "Number of supported processes: " + processes.processes.length
      );
    })
    .catch((err: any) => console.error(err.message));

  useEffect(() => {
    axios.get("https://openeo.dataspace.copernicus.eu").then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-red-700">Hello Hackaton!</h1>
    </>
  );
};

export default App;
