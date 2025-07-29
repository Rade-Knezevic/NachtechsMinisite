FROM php:8.1-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git unzip zip curl libzip-dev libpng-dev libonig-dev libxml2-dev libcurl4-openssl-dev \
    && docker-php-ext-install pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html
