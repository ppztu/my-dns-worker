export default {
  async fetch(request) {
    const upstream = 'https://dns.adguard-dns.com/dns-query';
    const modifiedRequest = new Request(upstream, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return fetch(modifiedRequest);
  }
};
