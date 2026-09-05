Node js is a sever-side platform
node.js was developed by Ryan Dahi in2009

Node.js is an open source
cross-platform runtime environment
for developing serverside and networking applications.

Node.js application are written in javascript,and can be run within the node.js runtime on os x, microsoft windows and linux.

node.js also provide a rich library of various javascript modules which simplifies the development of web applicaitons using node.js to great extent.

node.js=runtime environment+javascript library

where to use node.js?
I/o bound applications
Data streaming applications 
Data intensive real-time applications(DIRI)
Json APIs based applications
Single page applications


official website

https://nodejs.org/en/

features of Node.js


Asynchronous and Event Driven − 
All APIs of Node.js library are asynchronous, that is, non-blocking. 
It essentially means a Node.js based server never waits for an API to return data. 
The server moves to the next API after calling it and 
a notification mechanism of Events of Node.js 
helps the server to get a response from the previous API call.

Very Fast − Being built on Google Chrome's V8 JavaScript Engine, 
Node.js library is very fast in code execution.

Single Threaded but Highly Scalable − 
Node.js uses a single threaded model with event looping. 

components of a Node.js application. A Node.js application consists of the following three important components :
Import required modules − We use the require directive to load Node.js modules.
=======================
Create server − A server which will listen to client's requests similar to Apache HTTP Server.
==============
Read request and return response − 
===================================
The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.


Event mechanism helps the server to respond 
in a non-blocking way and makes the server highly scalable as opposed 
to traditional servers 

which create limited threads to handle requests. 
Node.js uses a single threaded program and 
the same program can provide service to a much 
larger number of requests than traditional servers like Apache HTTP Server.

No Buffering − Node.js applications never buffer any data. 
These applications simply output the data in chunks.

License − Node.js is released under the MIT license