import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(req){
    return new Response('Bun!');
  }
});

console.log(`Listering on http://localhost:${server.port}`);
