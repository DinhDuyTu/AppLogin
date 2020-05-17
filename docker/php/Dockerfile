FROM php:7.3-apache-stretch
COPY docker/php/php.ini /usr/local/etc/php/
COPY docker/apache/000-default.conf /etc/apache2/sites-enabled/000-default.conf

RUN apt-get update && \
    apt-get install -y \
      # for GD
      libjpeg-dev \
      libpng-dev \
      libfreetype6-dev \
      # Essentials
      zlib1g-dev \
      libpq-dev \
      default-mysql-client \
      unzip \
      libzip-dev \
      # DevTools
      git \
      vim \
      less && \
    docker-php-ext-install pdo_mysql mysqli zip && \
    docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ && \
    docker-php-ext-install -j$(nproc) gd

# Composer install
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/local/bin/composer
RUN a2enmod rewrite

WORKDIR /var/www/html
