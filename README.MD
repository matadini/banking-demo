# Fullstack banking demo application.

## 1. Build applications
Execute `mvn clean install` in the main directory.
Alternatively, you can run `clean install -Pvue` to use the Vue frontend version.

# 2. Build docker image
Execute `mvn jib:dockerBuild -Dregistry=` in the main directory. 
`registry` argument is used only for CI/CD, for localhost usage, keep it blank

## 3. Run applications using `docker-compose` file.
Execute `docker compose up -d` in main directory to create containers.

## 3. Testing
Open `localhost:8080` in the web browser.
