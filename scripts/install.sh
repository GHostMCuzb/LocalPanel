#!/bin/bash

echo "LocalPanel o'rnatilmoqda..."

# Docker mavjudligini tekshirish
if ! command -v docker &> /dev/null; then
    echo "Docker topilmadi, o'rnatilmoqda..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
fi

echo "LocalPanel uchun direktoriyalar yaratilmoqda..."
mkdir -p /etc/localpanel
mkdir -p /var/lib/localpanel

echo "O'rnatish yakunlandi!"
