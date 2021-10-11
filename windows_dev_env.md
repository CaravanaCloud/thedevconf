# HOWTO Run from scratch on Windows

All commands should be ran in Powershell console.

# Check if system date is correct
```
date
```

https://answers.microsoft.com/en-us/windows/forum/all/how-to-force-windows-10-time-to-synch-with-a-time/20f3b546-af38-42fb-a2d0-d4df13cc8f43

# Install Docker Desktop

https://www.docker.com/products/docker-desktop

# Install chocolatey

https://chocolatey.org/install

# Install chrome
```
choco install googlechrome
```

# Install GraalVM
```
choco install graalvm
```

# Install Maven
```
choco install maven
```

# Install Git
```
choco install git
```

# Install Node JS
```
choco install nodejs
choco install yarn
```

# Install Github Desktop
```
choco install github-desktop
```

# Install VS Code
```
choco install vscode
```

# Run MySQL Container
```
docker run --rm  --name thedevconf-mysql -p 0.0.0.0:3307:3306 -e MYSQL_ROOT_PASSWORD=Masterkey123 -e MYSQL_DATABASE=thedevconf -d mysql:5.7
```

# Check if container is running
```
docker ps
```

# Set API Environment Variables
```
setx DATASOURCE_URL "jdbc:mysql://127.0.0.1:3307/thedevconf&useSSL=false" -m
setx DATASOURCE_USERNAME "root" -m
setx DATASOURCE_PASSWORD "Masterkey123" -m
setx DATASOURCE_KIND "mysql" -m
setx HIBERNATE_ORM_DATABASE_GENERATION "none" -m
```

# Restart Powershell
```
Start-Process Powershell ; exit
```

# Check Environment Variables 
```
$env:DATASOURCE_URL
$env:DATASOURCE_USERNAME
$env:DATASOURCE_PASSWORD
$env:DATASOURCE_KIND 
$env:HIBERNATE_ORM_DATABASE_GENERATION
```

# Run Backend API module
```
mvn -f .\tdc-api\pom.xml clean compile quarkus:dev
```

# Check if API is running
http://localhost:8181/q/dev/


# Run Fronted UI module (In a new Powershell)
```
cd frontend
yarn install
yarn serve
```

# Check if Frontend is Running
http://localhost:8080/

Happy developing!













