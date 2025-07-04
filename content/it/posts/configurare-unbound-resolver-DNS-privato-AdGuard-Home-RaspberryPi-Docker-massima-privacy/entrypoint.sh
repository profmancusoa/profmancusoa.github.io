#!/bin/sh
# Crea la directory se non esiste e assegna permessi
mkdir -p /var/lib/unbound
chown unbound:unbound /var/lib/unbound

# Genera o aggiorna la root key
if [ ! -s /var/lib/unbound/root.key ]; then
    echo "Generating root trust anchor..."
    unbound-anchor -a /var/lib/unbound/root.key
    chown unbound:unbound /var/lib/unbound/root.key
fi

echo "Running unbound........."

# Avvia Unbound come utente unbound
exec su-exec unbound unbound -d -c /etc/unbound/unbound.conf
