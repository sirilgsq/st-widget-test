(function () {
  // Config: iframe ID or selector to post the message to
  const WIDGET_IFRAME_ID = "st_invest_widget"; // or use querySelector

  // Listener to receive messages from inner iframes (like KYC providers)
  window.addEventListener("message", function (event) {
    const { data } = event;

    // Optional: validate origin if needed
    // if (event.origin !== "https://trusted-kyc-provider.com") return;

    const { request_id, verification_status, method } = data || {};

    // Log for debugging
    // console.log("[ThirdPartyWeb] Received KYC message:", data);

    if (!request_id || !verification_status) return;

    // Find the Widget iframe
    const widgetIframe = document.getElementById(WIDGET_IFRAME_ID);
    if (!widgetIframe || !widgetIframe.contentWindow) {
      console.warn("Widget iframe not found or not ready");
      return;
    }

    // Relay the message down to Widget
    widgetIframe.contentWindow.postMessage(data, "*"); // replace '*' with Widget origin if known
    // console.log("[ThirdPartyWeb] Relayed message to Widget:", data);
  });
})();
