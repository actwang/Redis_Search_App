### Description
A special mini project using solely Redis in memory key-value pair storage for storing JSON document data, integrated with Next.js in the frontend UI. Allows for creation and searching abilities in the webpage.

### References
https://github.com/redis/redis-om-node/tree/main
https://github.com/redis/node-redis/tree/master

Keep in mind the redis-om version latest is currently v4, which includes drastic changes from previous version that was worth spending time reading about. You could change the version back to v3 and earlier if more comfortable with that version. 

## Note
Note that before searching, one must go to /api/createIndex to create an index according to https://github.com/redis/redis-om-node/tree/main. This is essential to avoid any errors in the search process. In the meantime, put REDIS_URL in .env.local in production always. By default the node-redis module assumes the default localhost:6379 without any specified parameters.