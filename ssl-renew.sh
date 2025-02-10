#!/bin/sh
certbot renew --nginx --non-interactive
nginx -s reload 