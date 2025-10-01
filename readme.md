# Frontend HTTPS Application

Статическое frontend-приложение, размещенное в Docker контейнере с Nginx и SSL сертификатом.

**Продакшен версия:** https://dmitry-kolesnikov.result-student.tw1.ru

## 🛠️ Технологии

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Web Server:** Nginx
- **Containerization:** Docker + Docker Compose
- **SSL Certificates:** Let's Encrypt (Certbot)
- **Security:** HTTPS, Security Headers

## 📦 Установка и запуск

### Локальная разработка (HTTP)

```bash
# Клонировать репозиторий
git clone https://github.com/Bleakest/frontendhttps-docker-task.git

cd frontendhttps-docker-task

# Запустить приложение
docker-compose up -d

```