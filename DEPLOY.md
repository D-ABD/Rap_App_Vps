# 🚀 Déploiement de Rap_App_Vps (Django)

Ce guide décrit les étapes pour modifier, tester et déployer le projet **Rap_App_Vps** sur le VPS de production.

---

## 🔁 1. Cloner le dépôt en local (depuis ton PC)

```bash
git clone git@github.com:D-ABD/Rap_App_Vps.git
cd Rap_App_Vps

✍️ 2. Faire des modifications en local, puis valider
bash
Copier
Modifier
git add .
git commit -m "Modifs du JJ/MM/AA"
git push origin main

🖥️ 3. Connexion au serveur (VPS)
bash
Copier
Modifier
ssh root@147.93.126.119

🧭 4. Aller dans le dossier du projet (via alias)
bash
Copier
Modifier
djapp

⚙️ 5. Déploiement rapide (via alias)
bash
Copier
Modifier
deploy_rapapp
Cet alias effectue :

git pull origin main

Activation de l’environnement virtuel

python manage.py migrate

python manage.py collectstatic --noinput

Redémarrage de Gunicorn

🔧 En cas d’absence des alias :
bash
Copier
Modifier
ssh root@147.93.126.119
cd /home/rap_app/Rap_App_Django
git pull origin main
source venv/bin/activate
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart gunicorn


