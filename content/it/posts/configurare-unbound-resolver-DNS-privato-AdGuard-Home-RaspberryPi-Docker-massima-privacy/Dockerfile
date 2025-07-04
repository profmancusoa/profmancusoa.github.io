FROM alpine:latest

# Installa Unbound
RUN apk add --no-cache unbound su-exec

RUN echo 'server:' >  /etc/unbound/unbound.conf && \
    echo 'include-toplevel: "/etc/unbound/unbound.conf.d/*.conf"' > /etc/unbound/unbound.conf

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]