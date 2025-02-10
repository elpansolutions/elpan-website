#!/bin/sh

# Check if SSL certificate exists
if [ ! -f /etc/letsencrypt/live/your-domain.com/fullchain.pem ]; then
    # Get SSL certificate
    certbot --nginx \
            --non-interactive \
            --agree-tos \
            --email your-email@example.com \
            -d your-domain.com
fi

# Start crond for certificate renewal
crond

# Start nginx
nginx -g 'daemon off;' 