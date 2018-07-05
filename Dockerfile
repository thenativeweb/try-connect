FROM thenativeweb/wolkenkit-box-node:2.0.0
MAINTAINER the native web <hello@thenativeweb.io>

ADD ./package.json /app/package.json

RUN cd /app && \
    npm install --production --silent

ADD . /app/

CMD [ "node", "/app/src/bin/tryConnect.js" ]
