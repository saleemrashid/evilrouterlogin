FROM alpine:3.11

RUN mkdir /run/nginx
RUN apk add --no-cache nginx ruby
COPY nginx-erb /usr/local/bin/

CMD ["nginx-erb"]
