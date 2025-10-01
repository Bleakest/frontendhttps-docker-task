#!/bin/bash

# Создаем папки для certbot
mkdir -p certbot/www certbot/conf

# Запускаем nginx без SSL
docker-compose -f docker-compose-prod.yml up -d nginx

# Получаем SSL сертификат:
docker-compose -f docker-compose-prod.yml run --rm certbot certonly \
  --webroot \
  -w /var/www/certbot \
  -d dmitry-kolesnikov.result-student.tw1.ru \
  --email ffeeaarrofdeath@mail.ru \  
  --agree-tos \
  --no-eff-email

# После получения сертификатов, перезапускаем nginx с SSL
docker-compose -f docker-compose-prod.yml down
docker-compose -f docker-compose-prod.yml up -d