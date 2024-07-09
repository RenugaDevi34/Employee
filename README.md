# The project uses employee database 
# express framework 
# MongoDB
# ROUTER  post get put delete

# POST 
http://localhost:port/employee  

/employee => Pathparameter

# GET
query parameter => email
headers => secret to check the secret field value in MongoDB, if matches return the data else error
http://localhost:PORT/employee/email?email=rrrr@gmail.com

http://localhost:PORT/employee/email => Pathparameter
?email=ram34@gmail.com => queryparameter Add in query

add headers key as secret and provide the value to retrieve data 

# PUT

pathparamter => email
headers => secret to check the secret field value in MongoDB, if matches update the data in body else error

http://localhost:PORT/employee/rrrr@gmail.com

rrrr@gmail.com => Pathparameter

body json data to update:
{

    "position":"Sssss",
    "description":"xxxxxx"
}

headers => to check the secret value

# DELETE

email =>Pathparameter
Headers secret to check the value

http://localhost:PORT/employee/rrrr@gmail.com

rrrr@gmail.com => pathparameter


