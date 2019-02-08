import * as React from "react";

export default ({client, format = 'auto'}) => (
  <div>
    <ins className="adsbygoogle" data-ad-client={client} data-ad-format={format}></ins>
  </div>
)