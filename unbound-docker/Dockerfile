FROM alpine:3.11

RUN apk add --no-cache unbound
COPY unbound.conf /etc/unbound/unbound.conf

CMD ["unbound", "-d"]
