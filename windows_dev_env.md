# Instalacoes

Tudo no Powershell

# Install chocolatey

https://chocolatey.org/install

# Install chrome

choco install googlechrome

# Install GraalVM

choco install graalvm

# Install Maven

choco install maven

# Install Git

choco install git

# Install Github Desktop

choco install github-desktop

# Install VS Code

choco install vscode

# Install Docker Desktop

https://www.docker.com/products/docker-desktop

# Run MySQL 

docker run --rm  --name thedevconf-mysql -p 0.0.0.0:3307:3306 -e MYSQL_ROOT_PASSWORD=Masterkey123 -e MYSQL_DATABASE=thedevconf -d mysql:5.6

# Set Environment Variables

setx DATASOURCE_URL "jdbc:mysql://127.0.0.1:3307/thedevconf" -m
setx DATASOURCE_USERNAME "root" -m
setx DATASOURCE_PASSWORD "Masterkey123" -m
setx DATASOURCE_KIND "mysql" -m
setx HIBERNATE_ORM_DATABASE_GENERATION "none" -m

# Restart Powershell

# Run API module












