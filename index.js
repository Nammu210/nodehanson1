
let http=require('http')

let server=http.createServer((req,res)=>{

const url=req.url;
        if(url==='/')
        {
            res.write("<html>")
            res.write("<head><title>Node js Hanson1</title></head>")
            res.write("<body><h1> what is the use of Node JS?</h1><p>Node. js is widely used for the back-end of applications, like using Express. js to build the back-end of classic web applications. Also, it is used for server-side programming and non-blocking, event-driven servers like typical websites and backend API services.</p></body>")
            res.write("</html>")
            return res.end()
        }
            if(url==='/login')
            {
                
                res.write("<html>")
                res.write("<head><title>here is the Login Url part</title></head>")
                res.write("<body>")
                res.write("<h1>lets learn about something backend developer? </h1>")
                res.write("<p>Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes.</p>") 
                res.write("</body>")
                res.write("</html>")
                return res.end()
            
            }

                res.write("Default url executed")
                return res.end()

                })

server.listen(3000)