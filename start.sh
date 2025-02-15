#!/bin/sh

# Start nginx in background
nginx

# Try to obtain certificates
certbot --nginx -d elpan.in -d www.elpan.in --non-interactive --agree-tos --email enquire@elpan.in || true

# Reload nginx with new configuration
nginx -s reload

# Keep container running
tail -f /var/log/nginx/access.log 