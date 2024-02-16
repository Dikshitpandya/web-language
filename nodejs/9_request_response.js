var http = require('http');
var server = http.createServer(function(request, response) {
    console.log('request received');
    //return response 
    // step -1 set header
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Kids Story</h1><p>Once upon a time in a peaceful forest, there lived a boastful hare and a humble tortoise. The hare was known for his incredible speed, and he never missed an opportunity to tell everyone about it. He often teased the tortoise for being slow and lazy. One sunny day, the hare, unable to contain his arrogance, challenged the tortoise to a race. The animals of the forest gathered to watch. The tortoise, though slow and steady, accepted the challenge with a smile. As the race began, the hare dashed forward, leaving the tortoise far behind. The hare was so confident of his victory that he decided to take a nap under a tree, believing he had plenty of time. Meanwhile, the tortoise plodded along, one step at a time, never stopping or getting distracted. He was determined to do his best. When the hare woke up from his nap, he was shocked to see the tortoise near the finish line. He rushed forward with all his might, but it was too late. The tortoise had crossed the finish line first. The forest animals cheered for the tortoise, celebrating his victory over the proud hare. The hare learned a valuable lesson in humility and never underestimated anyone again. The moral of the story is that "slow and steady wins the race." It teaches us that overconfidence can lead to failure, and perseverance and determination can lead to success, no matter how slow the progress may seem.</p>');
    response.end();
});
server.listen(5000);
console.log('server started on port 5000');