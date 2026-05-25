export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // AdGuard DNS (Ads Blocker ပါဝင်သည်)
    const upstream = 'https://dns.adguard-dns.com/dns-query';
    
    const modifiedRequest = new Request(upstream, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });

    return fetch(modifiedRequest);
  }
};
