from ubuntu:latest

run apt-get update && apt-get install -y \
	curl
run curl -sL https://deb.nodesource.com/setup_10.x | bash -

run apt-get install -y nodejs

add html/ /home/

volume /home/cdn/

workdir /home/

entrypoint node /home/main.js
