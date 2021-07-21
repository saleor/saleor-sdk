import { AppProps } from "next/app";
import { SaleorProvider } from "@saleor/sdk";

const App = ({ Component, pageProps }: AppProps) => {
  const sdkConfig = {
    apiUrl: "https://master.staging.saleor.cloud/graphql/",
    channel: "default-channel",
  };
  return (
    <SaleorProvider config={sdkConfig}>
      <Component {...pageProps} />
    </SaleorProvider>
  );
};

export default App;
