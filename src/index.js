import html from '../public/index.html';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve the Japan guide at /japan_ideas
    if (url.pathname === '/japan_ideas' || url.pathname === '/japan_ideas/') {
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Fallback
    return new Response('Not found', { status: 404 });
  },
};
