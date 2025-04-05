#!/bin/bash

# 📁 Dossier où on stocke les backups
BACKUP_DIR="/home/rap_app/Rap_App_Django/backups"
mkdir -p "$BACKUP_DIR"

# 🗓️ Date du jour
DATE=$(date +"%Y-%m-%d_%H-%M")

# 🎯 Nom du fichier
DB_NAME="rap_app_db""
DB_USER="postgresss"
BACKUP_FILE="$BACKUP_DIR/db_backup_$DATE.sql"
DB_PASSWORD="@Marielle1012""  # mets le vrai mot de passe ici

# 📦 Backup de la base PostgreSQL
PGPASSWORD="$DB_PASSWORD" pg_dump -U "$DB_USER" "$DB_NAME" > "$BACKUP_FILE"



# 📦 Optionnel : backup des fichiers media (et statiques si tu veux)
tar -czf "$BACKUP_DIR/media_backup_$DATE.tar.gz" /home/rap_app/Rap_App_Django/rap_app_project/media

# ☁️ Envoi sur Google Drive avec rclone
rclone copy "$BACKUP_DIR" gdrive:Backup_Rap_App --log-file="$BACKUP_DIR/rclone_log.txt" --log-level INFO


# ✅ Message de fin
echo "Sauvegarde terminée à $DATE"
