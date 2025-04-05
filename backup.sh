#!/bin/bash

# Variables
DATE=$(date +%F)
BACKUP_DIR="/home/rap_app/backups"
DB_NAME="nom_de_ta_db"
DB_USER="postgres"
APP_DIR="/home/rap_app/Rap_App_Django/rap_app_project"
MEDIA_DIR="$APP_DIR/media"
STATIC_DIR="$APP_DIR/staticfiles"

mkdir -p $BACKUP_DIR

# Sauvegarde PostgreSQL
pg_dump -U $DB_USER $DB_NAME > "$BACKUP_DIR/db_backup_$DATE.sql"

# Sauvegarde media/static
tar -czf "$BACKUP_DIR/media_static_$DATE.tar.gz" $MEDIA_DIR $STATIC_DIR

# Nettoyage des backups de plus de 7 jours
find $BACKUP_DIR -type f -mtime +7 -delete
