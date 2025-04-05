(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: README.md
================================================
# Rapp_App_Dj


================================================
FILE: __init__.py
================================================



================================================
FILE: fichier
================================================



================================================
FILE: formation.js
================================================



================================================
FILE: manage.py
================================================
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rap_app_project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()



================================================
FILE: requirements.txt
================================================
asgiref==3.8.1
attrs==25.1.0
chardet==5.2.0
Django==4.2.7
django-cors-headers==4.7.0
django-filter==25.1
django-guardian==2.4.0
djangorestframework==3.14.0
drf-spectacular==0.28.0
et_xmlfile==2.0.0
inflection==0.5.1
jsonschema==4.23.0
jsonschema-specifications==2024.10.1
lxml==5.3.1
numpy==2.2.3
openpyxl==3.1.5
pandas==2.2.3
pillow==11.1.0
psycopg2-binary==2.9.10
python-dateutil==2.9.0.post0
python-docx==1.1.2
python-dotenv==1.0.1
pytz==2025.1
PyYAML==6.0.2
referencing==0.36.2
reportlab==4.3.1
rpds-py==0.23.1
six==1.17.0
sqlparse==0.5.3
typing_extensions==4.12.2
tzdata==2025.1
uritemplate==4.1.1




================================================
FILE: rap_app/__init__.py
================================================



================================================
FILE: rap_app/apps.py
================================================
from django.apps import AppConfig


class RapAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rap_app'



================================================
FILE: rap_app/urls.py
================================================
from django.urls import path

from .views.vae_jury_views import (HistoriqueStatutCreateView, ObjectifCentreUpdateView, SuiviJuryCreateView, SuiviJuryDeleteView, SuiviJuryDetailView, 
                                   SuiviJuryListView, SuiviJuryUpdateView, VAECreateView, VAEDeleteView, 
                                   VAEDetailView, VAEListView, VAEUpdateView, api_jurys_data, api_vae_data, modifier_objectifs_tous_centres, vae_jury_dashboard, vae_jury_home)

from .views.prepa_views import (PrepaGlobalCreateView, PrepaGlobalDetailView, PrepaGlobalListView, 
                                PrepaHomeView, PrepaObjectifsView,  
                                PrepaSemaineCreateView, PrepaSemaineDeleteView, PrepaSemaineDetailView, 
                                PrepaSemaineListView, PrepaSemaineUpdateView )


from . import views

from .views.historique_formation_views import HistoriqueFormationDeleteView, HistoriqueFormationDetailView, HistoriqueFormationListView

from .views.prospection_views import HistoriqueProspectionDetailView, HistoriqueProspectionListView, ProspectionCreateView, ProspectionDeleteView, ProspectionDetailView, ProspectionHomeView, ProspectionListView, ProspectionUpdateView, export_prospections_csv

from .views.company_views import CompanyCreateView, CompanyDeleteView, CompanyDetailView, CompanyListView, CompanyUpdateView, export_companies_csv

from .views.rapport_views import RapportCreationView, RapportDeleteView, RapportDetailView, RapportExportView, RapportListView


from .views.parametres_views import parametres
from .views.formations_views import UpdateFormationFieldView

from .views.users_views import (UserDeleteView, UserDetailView, UserListView, UserUpdateView, 
user_login, register, user_logout, user_profile, change_password,reset_password, 
)

from .views import (
    home_views, DashboardView, centres_views, statuts_views, types_offre_views,
    commentaires_views, documents_views, partenaires_views, evenements_views, formations_views
)  # Import des vues

urlpatterns = [
    # Page d'accueil
    path('', home_views.home, name='home'),

    # Rapports
    # Liste des rapports
    path('rapports/', RapportListView.as_view(), name='rapport-list'),
    path('rapports/creer/', RapportCreationView.as_view(), name='rapport-create'),
    path('rapports/<int:pk>/', RapportDetailView.as_view(), name='rapport-detail'),
    path('rapports/<int:pk>/supprimer/', RapportDeleteView.as_view(), name='rapport-delete'),
    path('rapports/<int:pk>/export/', RapportExportView.as_view(), name='rapport-export'),

    # USERS
    path("register/", register, name="register"),
    path("login/", user_login, name="login"),
    path("logout/", user_logout, name="logout"),
    path("profile/", user_profile, name="user-profile"),
    path("password_change/", change_password, name="password_change"),
    path("password_reset/", reset_password, name="password_reset"),
    
    path("users/", UserListView.as_view(), name="user-list"),
    path("users/<int:pk>/", UserDetailView.as_view(), name="user-detail"),
    path("users/<int:pk>/update/", UserUpdateView.as_view(), name="user-update"),
    path("users/<int:pk>/delete/", UserDeleteView.as_view(), name="user-delete"),


    # Dashboard
    path('dashboard/', DashboardView.as_view(), name='dashboard'),


    # Centres de formation
    path('centres/', centres_views.CentreListView.as_view(), name='centre-list'),
    path('centres/<int:pk>/', centres_views.CentreDetailView.as_view(), name='centre-detail'),
    path('centres/ajouter/', centres_views.CentreCreateView.as_view(), name='centre-create'),
    path('centres/<int:pk>/modifier/', centres_views.CentreUpdateView.as_view(), name='centre-update'),
    path('centres/<int:pk>/supprimer/', centres_views.CentreDeleteView.as_view(), name='centre-delete'),

    # Statuts des formations
    path('statuts/', statuts_views.StatutListView.as_view(), name='statut-list'),
    path('statuts/<int:pk>/', statuts_views.StatutDetailView.as_view(), name='statut-detail'),
    path('statuts/ajouter/', statuts_views.StatutCreateView.as_view(), name='statut-create'),
    path('statuts/<int:pk>/modifier/', statuts_views.StatutUpdateView.as_view(), name='statut-update'),
    path('statuts/<int:pk>/supprimer/', statuts_views.StatutDeleteView.as_view(), name='statut-delete'),

    # Types d'offres
    path('types-offres/', types_offre_views.TypeOffreListView.as_view(), name='type-offre-list'),
    path('types-offres/<int:pk>/', types_offre_views.TypeOffreDetailView.as_view(), name='type-offre-detail'),
    path('types-offres/ajouter/', types_offre_views.TypeOffreCreateView.as_view(), name='type-offre-create'),
    path('types-offres/<int:pk>/modifier/', types_offre_views.TypeOffreUpdateView.as_view(), name='type-offre-update'),
    path('types-offres/<int:pk>/supprimer/', types_offre_views.TypeOffreDeleteView.as_view(), name='type-offre-delete'),

    # Commentaires
    path('commentaires/', commentaires_views.CommentaireListView.as_view(), name='commentaire-list'),
    path('commentaires/<int:pk>/', commentaires_views.CommentaireDetailView.as_view(), name='commentaire-detail'),
    path('commentaires/ajouter/', commentaires_views.CommentaireCreateView.as_view(), name='commentaire-create'),
    path('commentaires/<int:pk>/modifier/', commentaires_views.CommentaireUpdateView.as_view(), name='commentaire-update'),
    path('commentaires/<int:pk>/supprimer/', commentaires_views.CommentaireDeleteView.as_view(), name='commentaire-delete'),
    path('commentaires_all/', commentaires_views.AllCommentairesView.as_view(), name='all-commentaires'),
    path('export-commentaires/', commentaires_views.ExportCommentairesView.as_view(), name='export-commentaires'),

    # Documents
    path('documents/', documents_views.DocumentListView.as_view(), name='document-list'),
    path('documents/<int:pk>/', documents_views.DocumentDetailView.as_view(), name='document-detail'),
    path('documents/ajouter/', documents_views.DocumentCreateView.as_view(), name='document-create'),
    path('documents/ajouter/<int:formation_id>/', documents_views.DocumentCreateView.as_view(), name='document-create-formation'),
    path('documents/<int:pk>/modifier/', documents_views.DocumentUpdateView.as_view(), name='document-update'),
    path('documents/<int:pk>/supprimer/', documents_views.DocumentDeleteView.as_view(), name='document-delete'),
    
    # Partenaires
    path('partenaires/', partenaires_views.PartenaireListView.as_view(), name='partenaire-list'),
    path('partenaires/<int:pk>/', partenaires_views.PartenaireDetailView.as_view(), name='partenaire-detail'),
    path('partenaires/ajouter/', partenaires_views.PartenaireCreateView.as_view(), name='partenaire-create'),
    path('partenaires/<int:pk>/modifier/', partenaires_views.PartenaireUpdateView.as_view(), name='partenaire-update'),
    path('partenaires/<int:pk>/supprimer/', partenaires_views.PartenaireDeleteView.as_view(), name='partenaire-delete'),
    path('partenaires/ajouter/formation/<int:formation_id>/', partenaires_views.PartenaireCreateViewFormation.as_view(), name='partenaire-add-formation'),
    path('partenaires/export-csv/', partenaires_views.ExportPartenairesCSVView.as_view(), name='export-partenaires-csv'),

    # Événements
    path('evenements/', evenements_views.EvenementListView.as_view(), name='evenement-list'),
    path('evenements/<int:pk>/', evenements_views.EvenementDetailView.as_view(), name='evenement-detail'),
    path('evenements/ajouter/', evenements_views.EvenementCreateView.as_view(), name='evenement-create'),
    path('evenements/<int:pk>/modifier/', evenements_views.EvenementUpdateView.as_view(), name='evenement-update'),
    path('evenements/<int:pk>/supprimer/', evenements_views.EvenementDeleteView.as_view(), name='evenement-delete'),
    
    # Formations
    path('formations/', formations_views.FormationListView.as_view(), name='formation-list'),
    path('formations/<int:pk>/', formations_views.FormationDetailView.as_view(), name='formation-detail'),
    path('formations/ajouter/', formations_views.FormationCreateView.as_view(), name='formation-create'),
    path('formations/<int:pk>/modifier/', formations_views.FormationUpdateView.as_view(), name='formation-update'),
    path('formations/<int:pk>/supprimer/', formations_views.FormationDeleteView.as_view(), name='formation-delete'),
    path('formations/<int:pk>/commentaire/', formations_views.FormationAddCommentView.as_view(), name='formation-add-comment'),
    path("formations/export-excel/", formations_views.ExportFormationsExcelView.as_view(), name="export-formations-excel"),
    path("formations/update-champ/<int:id>/", UpdateFormationFieldView.as_view(), name="update_formation_field"),

        # Historique des Formations
    path('historique-formations/', HistoriqueFormationListView.as_view(), name='historique-formation-list'),
    path('historique-formations/<int:pk>/', HistoriqueFormationDetailView.as_view(), name='historique-formation-detail'),
    path("historique-formations/<int:pk>/delete/", HistoriqueFormationDeleteView.as_view(), name="historique-formation-delete"),

    # Company
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/add/', CompanyCreateView.as_view(), name='company-create'),
    path('companies/<int:pk>/edit/', CompanyUpdateView.as_view(), name='company-update'),
    path('companies/<int:pk>/delete/', CompanyDeleteView.as_view(), name='company-delete'),
    path('companies/export/', export_companies_csv, name='company-export'),

    # Paramètres
    path('parametres/', parametres, name='parametres'),

    # Prospections
    path('prospection_home', ProspectionHomeView, name='prospection-home'),
    path('prospections/', ProspectionListView.as_view(), name='prospection-list'),
    path('prospections/<int:pk>/', ProspectionDetailView.as_view(), name='prospection-detail'),
    path('prospections/add/', ProspectionCreateView.as_view(), name='prospection-add'),
    path('prospections/<int:pk>/edit/', ProspectionUpdateView.as_view(), name='prospection-update'),
    path('prospections/<int:pk>/delete/', ProspectionDeleteView.as_view(), name='prospection-delete'),
    path('historique-prospections/', HistoriqueProspectionListView.as_view(), name='historique-prospection-list'),
    path('historique-prospections/<int:pk>/', HistoriqueProspectionDetailView.as_view(), name='historique-prospection-detail'),
    path("prospections/export/", export_prospections_csv, name="prospection-export"),

 # Prepa_Comp
    path('prepa/', PrepaHomeView.as_view(), name='prepa_home'),
    path('prepa/objectifs/', PrepaObjectifsView.as_view(), name='prepa_objectifs'),
    path('prepa/objectifs/<int:annee>/', PrepaObjectifsView.as_view(), name='prepa_objectifs_annee'),


    # ---- Semaines ----
    path('prepa/semaines/', PrepaSemaineListView.as_view(), name='prepa_semaine_list'),
    path('prepa/semaines/ajouter/', PrepaSemaineCreateView.as_view(), name='prepa_semaine_create'),
    path('prepa/semaines/<int:pk>/', PrepaSemaineDetailView.as_view(), name='prepa_semaine_detail'),
    path('prepa/semaines/<int:pk>/modifier/', PrepaSemaineUpdateView.as_view(), name='prepa_semaine_update'),
    path('prepa/semaines/<int:pk>/supprimer/', PrepaSemaineDeleteView.as_view(), name='prepa_semaine_delete'),


    # ---- Global annuel ----
    path('prepa/global/', PrepaGlobalListView.as_view(), name='prepa_global_list'),
    path('prepa/global/<int:pk>/', PrepaGlobalDetailView.as_view(), name='prepa_global_detail'),
    path('prepa/global/ajouter/', PrepaGlobalCreateView.as_view(), name='prepa_global_create'),

    path('vae-jury/', vae_jury_home, name='vae-jury-home'),
    path('vae-jury/dashboard/', vae_jury_dashboard, name='vae-jury-dashboard'),
    path('vae-jury/<int:pk>/objectifs/', ObjectifCentreUpdateView.as_view(), name='centre-objectifs'),

    path('vae-jury/objectifs-centres/', modifier_objectifs_tous_centres, name='objectifs-centres'),
    path('vae/<int:vae_id>/historique/ajouter/', HistoriqueStatutCreateView.as_view(), name='vae-historique-create'),
    
    # Suivis des jurys
    path('jurys/', SuiviJuryListView.as_view(), name='jury-list'),
    path('jurys/<int:pk>/', SuiviJuryDetailView.as_view(), name='jury-detail'),
    path('jurys/nouveau/', SuiviJuryCreateView.as_view(), name='jury-create'),
    path('jurys/<int:pk>/modifier/', SuiviJuryUpdateView.as_view(), name='jury-update'),
    path('jurys/<int:pk>/supprimer/', SuiviJuryDeleteView.as_view(), name='jury-delete'),
    
    # VAE
    path('vae/', VAEListView.as_view(), name='vae-list'),
    path('vae/<int:pk>/', VAEDetailView.as_view(), name='vae-detail'),
    path('vae/nouvelle/', VAECreateView.as_view(), name='vae-create'),
    path('vae/<int:pk>/modifier/', VAEUpdateView.as_view(), name='vae-update'),
    path('vae/<int:pk>/supprimer/', VAEDeleteView.as_view(), name='vae-delete'),
    

    path('api/jurys-data/', api_jurys_data, name='api-jurys-data'),
    path('api/vae-data/', api_vae_data, name='api-vae-data'),
        
    # Historique des statuts VAE
    path('vae/<int:vae_id>/statut/', HistoriqueStatutCreateView.as_view(), name='historique-create'),   
    
    
    ]


================================================
FILE: rap_app/.DS_Store
================================================
[Non-text file]



================================================
FILE: rap_app/admin/__init__.py
================================================
"""
Importe les classes admin pour l'interface d'administration Django.
L'importation des classes admin enregistre automatiquement les modèles avec admin.site.
"""

from .centres_admin import CentreAdmin
from .statuts_admin import StatutAdmin
from .types_offre_admin import TypeOffreAdmin
from .formations_admin import FormationAdmin
from .commentaires_admin import CommentaireAdmin
from .partenaires_admin import PartenaireAdmin
from .evenements_admin import EvenementAdmin
from .documents_admin import DocumentAdmin
from .prospection_admin import ProspectionAdmin, HistoriqueProspection
from .prepa_admin import SemaineAdmin, PrepaCompGlobalAdmin  


================================================
FILE: rap_app/admin/centres_admin.py
================================================
import logging
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from ..models import Centre, Formation
from rap_app import models

# Configuration du logger
logger = logging.getLogger(__name__)

@admin.register(Centre)
class CentreAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour les centres de formation.
    
    Fonctionnalités:
    - Liste affichant nom, code postal et dates de création/modification
    - Filtrage par code postal
    - Recherche par nom ou code postal
    - Tri par nom par défaut
    - Affichage et organisation des champs en sections
    """
    
    # Colonnes affichées dans la liste des centres
    list_display = ('nom', 'code_postal', 'nombre_formations', 'created_at', 'updated_at')
    
    # Filtres disponibles dans le panneau latéral
    list_filter = ('code_postal',)
    
    # Champs pour la recherche
    search_fields = ('nom', 'code_postal')
    
    # Tri par défaut
    ordering = ('nom',)
    
    # Champs en lecture seule (non modifiables)
    readonly_fields = ('created_at', 'updated_at', 'nombre_formations', 'formations_list')
    
    # Organisation des champs en sections
    fieldsets = (
        ('Informations', {
            'fields': ('nom', 'code_postal'),
            'description': 'Informations principales du centre de formation'
        }),
        ('Formations associées', {
            'fields': ('nombre_formations', 'formations_list'),
            'classes': ('collapse',),
            'description': 'Liste des formations rattachées à ce centre'
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
            'description': 'Informations temporelles automatiques'
        }),
    )
    
    def nombre_formations(self, obj):
        """Affiche le nombre de formations associées au centre."""
        count = obj.formations.count()
        return format_html(
            '<span style="color:{}">{}</span>',
            'green' if count > 0 else 'grey',
            count
        )
    nombre_formations.short_description = "Nombre de formations"
    nombre_formations.admin_order_field = 'formations__count'
    
    def formations_list(self, obj):
        """Affiche une liste des formations associées avec liens."""
        formations = obj.formations.all()[:10]  # Limite à 10 formations pour éviter une liste trop longue
        
        if not formations:
            return "Aucune formation associée"
            
        formations_links = []
        for formation in formations:
            url = reverse('admin:rap_app_formation_change', args=[formation.pk])
            formations_links.append(
                f'<a href="{url}">{formation.nom}</a>'
            )
            
        html = '<ul>' + ''.join([f'<li>{link}</li>' for link in formations_links]) + '</ul>'
        
        if obj.formations.count() > 10:
            html += f'<a href="?formation__centre__id__exact={obj.pk}">Voir toutes les formations ({obj.formations.count()})</a>'
            
        return format_html(html)
    formations_list.short_description = "Formations associées"
    
    def get_queryset(self, request):
        """Surcharge pour optimiser les requêtes."""
        queryset = super().get_queryset(request)
        queryset = queryset.annotate(
            formations__count=models.Count('formations')
        )
        return queryset
    
    def save_model(self, request, obj, form, change):
        """Journalise les modifications des centres via l'admin."""
        if change:  # Modification d'un centre existant
            original = Centre.objects.get(pk=obj.pk)
            changes = []
            
            if original.nom != obj.nom:
                changes.append(f"nom: '{original.nom}' → '{obj.nom}'")
                
            if original.code_postal != obj.code_postal:
                changes.append(f"code_postal: '{original.code_postal}' → '{obj.code_postal}'")
                
            if changes:
                logger.info(
                    f"Admin - Modification du centre #{obj.pk} par {request.user}: "
                    f"{', '.join(changes)}"
                )
        else:  # Création d'un nouveau centre
            logger.info(
                f"Admin - Création d'un nouveau centre par {request.user}: "
                f"nom='{obj.nom}', code_postal='{obj.code_postal}'"
            )
            
        super().save_model(request, obj, form, change)
    
    def delete_model(self, request, obj):
        """Journalise la suppression d'un centre via l'admin."""
        formations_count = obj.formations.count()
        
        logger.warning(
            f"Admin - Suppression du centre #{obj.pk} '{obj.nom}' par {request.user}. "
            f"{formations_count} formations associées."
        )
        
        super().delete_model(request, obj)
    
    class Media:
        """Ajout de CSS pour l'interface d'administration."""
        css = {
            'all': ('css/admin/centre_admin.css',)
        }


================================================
FILE: rap_app/admin/commentaires_admin.py
================================================
import logging
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from ..models.commentaires import Commentaire
from ..models.formations import Formation

# Configuration du logger
logger = logging.getLogger(__name__)

Utilisateur = get_user_model()

@admin.register(Commentaire)
class CommentaireAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour la gestion des commentaires liés aux formations.
    
    Caractéristiques:
    - Liste avec formation, utilisateur, contenu, saturation et date
    - Filtres par formation, utilisateur, saturation et date
    - Recherche par formation, utilisateur et contenu
    - Vue détaillée organisée en sections
    - Attribution automatique de l'utilisateur lors de la création
    """

    # Affichage des principales informations
    list_display = ("formation_link", "utilisateur_link", "contenu_preview", "saturation_display", "created_at")

    # Ajout de filtres pour faciliter la recherche
    list_filter = (
        "formation__centre", 
        "utilisateur", 
        "saturation", 
        "created_at",
        ("saturation", admin.EmptyFieldListFilter),  # Filtrer les commentaires sans saturation
    )

    # Recherche rapide sur certains champs
    search_fields = ("formation__nom", "utilisateur__username", "utilisateur__email", "contenu")

    # Rendre certains champs en lecture seule
    readonly_fields = ("utilisateur", "created_at", "updated_at", "formation_details")

    # Organisation des champs
    fieldsets = (
        ("Informations générales", {
            "fields": ("formation", "formation_details", "utilisateur"),
            "description": "Information sur la formation et l'utilisateur concernés",
        }),
        ("Contenu du commentaire", {
            "fields": ("contenu",),
            "description": "Texte du commentaire",
        }),
        ("Données complémentaires", {
            "fields": ("saturation",),
            "description": "Données additionnelles liées au commentaire",
        }),
        ("Métadonnées", {
            "fields": ("created_at", "updated_at"),
            "classes": ("collapse",),
            "description": "Informations temporelles automatiques",
        }),
    )

    ordering = ("-created_at",)
    list_per_page = 20
    date_hierarchy = "created_at"  # Navigation par date
    
    def get_queryset(self, request):
        """Optimise les requêtes avec des jointures."""
        queryset = super().get_queryset(request)
        return queryset.select_related('formation', 'formation__centre', 'utilisateur')

    def formation_link(self, obj):
        """Affiche un lien vers la formation associée."""
        if obj.formation:
            url = reverse('admin:rap_app_formation_change', args=[obj.formation.id])
            return format_html('<a href="{}">{}</a>', url, obj.formation.nom)
        return "—"
    formation_link.short_description = "Formation"
    formation_link.admin_order_field = "formation__nom"

    def utilisateur_link(self, obj):
        """Affiche un lien vers l'utilisateur associé."""
        if obj.utilisateur:
            url = reverse('admin:auth_user_change', args=[obj.utilisateur.id])
            return format_html('<a href="{}">{}</a>', url, obj.utilisateur.username)
        return "Anonyme"
    utilisateur_link.short_description = "Utilisateur"
    utilisateur_link.admin_order_field = "utilisateur__username"

    def contenu_preview(self, obj):
        """Affiche un aperçu tronqué du contenu du commentaire."""
        max_length = 50
        if len(obj.contenu) <= max_length:
            return obj.contenu
        return format_html(
            '{}... <span class="viewlink">(<a href="{}">Voir tout</a>)</span>', 
            obj.contenu[:max_length], 
            reverse('admin:rap_app_commentaire_change', args=[obj.id])
        )
    contenu_preview.short_description = "Contenu"

    def saturation_display(self, obj):
        """Affiche le niveau de saturation avec code couleur."""
        if obj.saturation is None:
            return "—"
            
        # Détermination de la couleur selon le pourcentage
        if obj.saturation < 50:
            color = "green"
        elif obj.saturation < 80:
            color = "orange"
        else:
            color = "red"
            
        return format_html(
            '<div style="width:100%%; background-color: #f8f9fa; border-radius: 3px;">'
            '<div style="width:{}%%; background-color: {}; height: 10px; border-radius: 3px;"></div>'
            '</div>'
            '<span>{} %</span>', 
            min(obj.saturation, 100), color, obj.saturation
        )
    saturation_display.short_description = "Saturation"
    saturation_display.admin_order_field = "saturation"
    
    def formation_details(self, obj):
        """Affiche les détails de la formation associée."""
        if not obj.formation:
            return "Aucune formation associée"
            
        formation = obj.formation
        return format_html(
            '<table class="formation-details">'
            '<tr><th>Nom:</th><td>{}</td></tr>'
            '<tr><th>Centre:</th><td>{}</td></tr>'
            '<tr><th>Statut:</th><td>{}</td></tr>'
            '<tr><th>Dates:</th><td>{} → {}</td></tr>'
            '<tr><th>Commentaires:</th><td>{}</td></tr>'
            '</table>',
            formation.nom,
            formation.centre.nom if formation.centre else "—",
            formation.statut.nom if formation.statut else "—",
            formation.start_date.strftime('%d/%m/%Y') if formation.start_date else "—",
            formation.end_date.strftime('%d/%m/%Y') if formation.end_date else "—",
            formation.commentaires.count()
        )
    formation_details.short_description = "Détails de la formation"

    def save_model(self, request, obj, form, change):
        """
        Assigne l'utilisateur connecté à l'ajout d'un commentaire et
        journalise l'opération.
        """
        if not change:  # Création d'un nouveau commentaire
            if not obj.utilisateur:
                # Vérifie que request.user est bien du bon type
                if isinstance(request.user, Utilisateur):
                    obj.utilisateur = request.user
                else:
                    obj.utilisateur = Utilisateur.objects.get(pk=request.user.pk)
                    
            logger.info(
                f"Admin - Création d'un commentaire par {request.user.username} "
                f"pour la formation '{obj.formation.nom if obj.formation else 'N/A'}'"
            )
        else:  # Modification d'un commentaire existant
            original = Commentaire.objects.get(pk=obj.pk)
            changes = []
            
            if original.contenu != obj.contenu:
                changes.append("contenu modifié")
                
            if original.saturation != obj.saturation:
                changes.append(f"saturation: {original.saturation}% → {obj.saturation}%")
                
            if original.formation != obj.formation:
                changes.append(
                    f"formation: '{original.formation.nom if original.formation else 'N/A'}' → "
                    f"'{obj.formation.nom if obj.formation else 'N/A'}'"
                )
                
            if changes:
                logger.info(
                    f"Admin - Modification du commentaire #{obj.pk} par {request.user.username}: "
                    f"{', '.join(changes)}"
                )
                
        obj.save()

    def delete_model(self, request, obj):
        """Journalise la suppression d'un commentaire depuis l'admin."""
        logger.warning(
            f"Admin - Suppression du commentaire #{obj.pk} "
            f"(créé le {obj.created_at.strftime('%d/%m/%Y')} "
            f"par {obj.utilisateur.username if obj.utilisateur else 'Anonyme'}) "
            f"pour la formation '{obj.formation.nom if obj.formation else 'N/A'}' "
            f"par {request.user.username}"
        )
        super().delete_model(request, obj)
        
    class Media:
        """Ressources CSS et JS pour l'interface d'admin."""
        css = {
            'all': ('css/admin/commentaire_admin.css',)
        }


================================================
FILE: rap_app/admin/company_admin.py
================================================
import logging
from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.db.models import Count
from django.contrib.admin.filters import SimpleListFilter
from django.utils.safestring import mark_safe

from ..models.company import Company
from ..models.prospection import Prospection

# Configuration du logger
logger = logging.getLogger(__name__)

# Filtre personnalisé pour les entreprises avec/sans prospections
class HasProspectionsFilter(SimpleListFilter):
    title = 'a des prospections'
    parameter_name = 'has_prospections'
    
    def lookups(self, request, model_admin):
        return (
            ('yes', 'Avec prospections'),
            ('no', 'Sans prospection')
        )
    
    def queryset(self, request, queryset):
        if self.value() == 'yes':
            return queryset.annotate(prospections_count=Count('prospections')).filter(prospections_count__gt=0)
        if self.value() == 'no':
            return queryset.annotate(prospections_count=Count('prospections')).filter(prospections_count=0)
        return queryset

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    """
    Interface d'administration personnalisée pour le modèle Company.
    """
    list_display = (
        'name',                 # Nom de l'entreprise
        'city_with_code',       # Ville avec code postal
        'contact_info',         # Informations de contact
        'sector_name',          # Secteur d'activité
        'actions_display',      # Type d'action
        'prospections_count',   # Nombre de prospections
        'website_link',         # Lien vers le site web
        'created_at',           # Date de création
        'created_by',           # Utilisateur qui a créé l'entrée
    )

    list_display_links = ('name',)

    list_filter = (
        'city',                # Filtre par ville
        'sector_name',         # Filtre par secteur d'activité
        'actions',             # Filtre par type d'action
        HasProspectionsFilter, # Filtre personnalisé
        'created_at',          # Filtre par date
    )

    search_fields = (
        'name',               # Recherche par nom d'entreprise
        'contact_name',       # Recherche par nom du contact
        'contact_email',      # Recherche par email du contact
        'contact_job',        # Recherche par poste du contact
        'sector_name',        # Recherche par secteur
        'city',               # Recherche par ville
        'zip_code',           # Recherche par code postal
    )

    fieldsets = (
        ("Informations générales", {
            'fields': (('name', 'sector_name'), ('street_name', 'zip_code', 'city', 'country')),
            'description': 'Informations principales de l\'entreprise'
        }),
        ("Contact", {
            'fields': (('contact_name', 'contact_job'), ('contact_email', 'contact_phone_number')),
            'description': 'Coordonnées du contact principal'
        }),
        ("Opportunités", {
            'fields': ('actions', 'action_description'),
            'description': 'Actions possibles avec cette entreprise'
        }),
        ("Présence en ligne", {
            'fields': ('website', 'social_network_url'),
            'description': 'Sites web et profils sur les réseaux sociaux'
        }),
        ("Métadonnées", {
            'fields': ('created_by', 'created_at', 'updated_at'),
            'classes': ('collapse',),
            'description': 'Informations sur la création et les modifications'
        }),
    )

    readonly_fields = ('created_at', 'updated_at', 'prospections_list')
    list_per_page = 20
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    
    def get_queryset(self, request):
        """
        Optimise les requêtes en préchargeant les relations
        et en calculant le nombre de prospections.
        """
        queryset = super().get_queryset(request)
        queryset = queryset.select_related('created_by').annotate(
            num_prospections=Count('prospections', distinct=True)
        )
        return queryset
    
    def city_with_code(self, obj):
        """Affiche la ville avec le code postal."""
        if obj.city and obj.zip_code:
            return f"{obj.city} ({obj.zip_code})"
        elif obj.city:
            return obj.city
        elif obj.zip_code:
            return f"CP: {obj.zip_code}"
        return "—"
    city_with_code.short_description = "Localisation"
    city_with_code.admin_order_field = 'city'
    
    def contact_info(self, obj):
        """Affiche les informations de contact de manière compacte."""
        if obj.contact_name:
            contact_parts = [obj.contact_name]
            if obj.contact_job:
                contact_parts.append(f"<em>{obj.contact_job}</em>")
            if obj.contact_email:
                contact_parts.append(f'<a href="mailto:{obj.contact_email}">{obj.contact_email}</a>')
            return format_html(' - '.join(contact_parts))
        return "—"
    contact_info.short_description = "Contact"
    contact_info.admin_order_field = 'contact_name'
    
    def actions_display(self, obj):
        """Affiche le type d'action avec une étiquette colorée."""
        if not obj.actions:
            return "—"
            
        action_labels = {
            'accueil_stagiaires': ('bg-info', 'Stagiaires'),
            'recrutement_cdi': ('bg-success', 'CDI'),
            'recrutement_cdd': ('bg-success', 'CDD'),
            'recrutement_stage': ('bg-info', 'Stage'),
            'recrutement_formation': ('bg-primary', 'Formation'),
            'recrutement_apprentissage': ('bg-warning', 'Apprentissage'),
            'partenariat': ('bg-primary', 'Partenariat'),
            'taxe_apprentissage': ('bg-warning', 'Taxe'),
        }
        
        # Valeur par défaut pour les actions non spécifiées
        bg_class, label = action_labels.get(obj.actions, ('bg-secondary', dict(obj.CHOICES_TYPE_OF_ACTION).get(obj.actions, 'Autre')))
        
        return format_html(
            '<span class="badge {}">{}</span>',
            bg_class, label
        )
    actions_display.short_description = "Action"
    actions_display.admin_order_field = 'actions'
    
    def website_link(self, obj):
        """Affiche un lien vers le site web s'il existe."""
        if obj.website:
            return format_html('<a href="{}" target="_blank">Visiter</a>', obj.website)
        return "—"
    website_link.short_description = "Site Web"
    
    def prospections_count(self, obj):
        """Affiche le nombre de prospections avec un lien vers le filtre."""
        count = getattr(obj, 'num_prospections', 0)
        if count > 0:
            url = reverse('admin:rap_app_prospection_changelist') + f'?company__id__exact={obj.pk}'
            return format_html('<a href="{}">{} prospection(s)</a>', url, count)
        return "Aucune"
    prospections_count.short_description = "Prospections"
    prospections_count.admin_order_field = 'num_prospections'
    
    def prospections_list(self, obj):
        """Affiche la liste des prospections associées dans le détail."""
        prospections = Prospection.objects.filter(company=obj).select_related('formation', 'responsable')
        if not prospections.exists():
            return "Aucune prospection associée à cette entreprise."
            
        html = ['<table class="table"><thead><tr>',
                '<th>Date</th><th>Formation</th><th>Statut</th><th>Objectif</th><th>Responsable</th>',
                '</tr></thead><tbody>']
        
        for p in prospections:
            formation_name = p.formation.nom if p.formation else "—"
            responsable_name = p.responsable.username if p.responsable else "—"
            
            html.append(f'<tr>')
            html.append(f'<td>{p.date_prospection.strftime("%d/%m/%Y")}</td>')
            html.append(f'<td>{formation_name}</td>')
            html.append(f'<td>{p.get_statut_display()}</td>')
            html.append(f'<td>{p.get_objectif_display()}</td>')
            html.append(f'<td>{responsable_name}</td>')
            html.append('</tr>')
            
        html.append('</tbody></table>')
        
        return mark_safe(''.join(html))
    prospections_list.short_description = "Activités de prospection"

    def save_model(self, request, obj, form, change):
        """
        Assigne l'utilisateur actuel comme créateur si nécessaire
        et journalise l'action.
        """
        is_new = not obj.pk
        
        if not obj.created_by:
            obj.created_by = request.user
        
        if is_new:
            logger.info(f"Admin - Création d'une nouvelle entreprise '{obj.name}' par {request.user.username}")
        else:
            if form.changed_data:
                logger.info(
                    f"Admin - Modification de l'entreprise #{obj.pk} '{obj.name}' par {request.user.username}. "
                    f"Champs modifiés: {', '.join(form.changed_data)}"
                )
                
        super().save_model(request, obj, form, change)

    def delete_model(self, request, obj):
        """Journalise la suppression d'une entreprise."""
        logger.warning(
            f"Admin - Suppression de l'entreprise #{obj.pk} '{obj.name}' "
            f"par {request.user.username}"
        )
        super().delete_model(request, obj)

    def has_delete_permission(self, request, obj=None):
        """
        Empêche la suppression si l'entreprise a des prospections associées.
        """
        if obj is None:
            return True
            
        prospections_count = Prospection.objects.filter(company=obj).count()
        
        if prospections_count > 0:
            return False
            
        return True
    
    class Media:
        """Ressources CSS et JS pour l'interface d'admin."""
        css = {
            'all': ('css/admin/company_admin.css',)
        }


================================================
FILE: rap_app/admin/documents_admin.py
================================================
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from ..models import Document, Formation


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour la gestion des documents associés aux formations.
    """
    
    # Affichage des principales informations
    list_display = ('nom_fichier', 'formation_link', 'type_document', 'taille_fichier', 'file_link', 'created_at')
    
    # Ajout de filtres pour faciliter la navigation
    list_filter = ('type_document', 'formation__centre', 'created_at')
    
    # Recherche rapide sur certains champs
    search_fields = ('nom_fichier', 'formation__nom', 'source')

    # Rendre certains champs en lecture seule pour éviter toute modification accidentelle
    readonly_fields = ('created_at', 'updated_at', 'taille_fichier', 'file_link', 'image_preview', 'formation_link')

    # Organisation des champs dans l'interface d'administration
    fieldsets = (
        ('Informations générales', {
            'fields': ('formation', 'formation_link', 'nom_fichier', 'type_document', 'taille_fichier')
        }),
        ('Fichier', {
            'fields': ('fichier', 'file_link', 'source', 'image_preview'),
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)  # Masquer cette section par défaut
        }),
    )

    ### ✅ **Ajouts de méthodes utiles**
    
    def formation_link(self, obj):
        """
        Affiche un lien vers la formation associée dans l'interface d'administration.
        """
        if obj.formation:
            url = reverse('admin:rap_app_formation_change', args=[obj.formation.id])
            return format_html('<a href="{}">{}</a>', url, obj.formation.nom)
        return "Aucune formation"
    
    formation_link.short_description = 'Formation'
    formation_link.admin_order_field = 'formation__nom'

    
    def file_link(self, obj):
        """
        Ajoute un lien pour télécharger le fichier directement depuis l'admin Django.
        """
        if obj.fichier:
            return format_html('<a href="{}" target="_blank">Télécharger</a>', obj.fichier.url)
        return "-"
    
    file_link.short_description = "Téléchargement"

    
    def image_preview(self, obj):
        """
        Affiche un aperçu de l'image si le document est de type `image`.
        """
        if obj.type_document == Document.IMAGE and obj.fichier:
            return format_html('<img src="{}" width="150" style="border:1px solid #ddd; padding:5px;"/>', obj.fichier.url)
        return "Aperçu non disponible"
    
    image_preview.short_description = "Aperçu"

    
    def taille_fichier(self, obj):
        """
        Affiche la taille du fichier en Ko pour plus d'informations.
        """
        if obj.taille_fichier:
            return f"{obj.taille_fichier:.2f} Ko"
        return "-"

    
    # Ajout de fonctionnalités supplémentaires à l'admin
    ordering = ("-created_at", "nom_fichier")  # Trie les documents par date de création descendante
    list_per_page = 20  # Nombre de documents affichés par page



================================================
FILE: rap_app/admin/evenements_admin.py
================================================
import logging
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from django.db.models import Count
from django.contrib.admin import SimpleListFilter
from django.utils import timezone

from ..models import Evenement


# Filtre personnalisé pour le statut de l'événement
class EventStatusFilter(SimpleListFilter):
    """
    Filtre personnalisé permettant de filtrer les événements par statut
    (passés, aujourd'hui, à venir, imminents).
    """
    title = 'Statut'
    parameter_name = 'status'

    def lookups(self, request, model_admin):
        return (
            ('past', 'Passés'),
            ('today', 'Aujourd\'hui'),
            ('coming_soon', 'Imminents (7 jours)'),
            ('future', 'À venir'),
        )

    def queryset(self, request, queryset):
        today = timezone.now().date()
        
        if self.value() == 'past':
            return queryset.filter(event_date__lt=today)
        elif self.value() == 'today':
            return queryset.filter(event_date=today)
        elif self.value() == 'coming_soon':
            return queryset.filter(event_date__gt=today, 
                                  event_date__lte=today + timezone.timedelta(days=7))
        elif self.value() == 'future':
            return queryset.filter(event_date__gt=today)
        return queryset


@admin.register(Evenement)
class EvenementAdmin(admin.ModelAdmin):
    """
    Configuration de l'interface d'administration pour le modèle Evenement.
    
    Cette classe définit l'affichage, le filtrage, la recherche et les formulaires
    dans l'interface d'administration Django.
    """
    list_display = (
        'type_evenement_display', 
        'event_date_formatted', 
        'formation_link', 
        'lieu_display',
        'details_preview', 
        'participants_display',
        'status_badge',
        'created_at',
    )
    list_filter = (
        EventStatusFilter,
        'type_evenement', 
        'formation__centre',
        'event_date',
    )
    search_fields = (
        'formation__nom', 
        'details', 
        'description_autre',
        'lieu',
    )
    readonly_fields = (
        'created_at', 
        'updated_at', 
        'participation_rate_display',
        'status_display',
    )
    date_hierarchy = 'event_date'
    autocomplete_fields = ['formation']
    list_select_related = ('formation', 'formation__centre')
    save_on_top = True
    list_per_page = 25
    
    # Regroupement des champs par sections
    fieldsets = (
        ('Informations générales', {
            'fields': (
                'formation', 
                'type_evenement', 
                'description_autre', 
                'event_date',
                'lieu',
                'status_display',
            )
        }),
        ('Participants', {
            'fields': (
                'participants_prevus', 
                'participants_reels',
                'participation_rate_display',
            ),
            'description': 'Information sur la participation à l\'événement.'
        }),
        ('Détails', {
            'fields': ('details',),
            'classes': ('wide',)
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    # Personnalisation des actions disponibles
    actions = ['mark_as_completed']
    
    def get_queryset(self, request):
        """
        Optimise les requêtes en préchargeant les relations.
        """
        return super().get_queryset(request).select_related(
            'formation', 
            'formation__centre'
        )
    
    def formation_link(self, obj):
        """
        Génère un lien vers la formation associée à l'événement.
        """
        if obj.formation and obj.formation.id:
            url = reverse('admin:rap_app_formation_change', args=[obj.formation.id])
            return format_html(
                '<a href="{}" title="{}">{}</a>', 
                url, 
                f"Centre: {obj.formation.centre.nom if obj.formation.centre else 'N/A'}", 
                obj.formation.nom
            )
        return "Aucune formation"
    formation_link.short_description = "Formation"
    formation_link.admin_order_field = 'formation__nom'

    def type_evenement_display(self, obj):
        """
        Affiche le type d'événement ou la description personnalisée.
        """
        if obj.type_evenement == Evenement.AUTRE and obj.description_autre:
            return format_html('<span title="Type: Autre">{}</span>', obj.description_autre)
        return obj.get_type_evenement_display()
    type_evenement_display.short_description = "Type d'événement"
    type_evenement_display.admin_order_field = 'type_evenement'

    def event_date_formatted(self, obj):
        """
        Formate la date de l'événement de manière lisible.
        """
        if not obj.event_date:
            return "Non définie"
        
        today = timezone.now().date()
        formatted_date = obj.event_date.strftime('%d/%m/%Y')
        
        # Ajouter une indication visuelle selon la date
        if obj.event_date == today:
            return format_html('<b style="color: #d35400;">{} (Aujourd\'hui)</b>', formatted_date)
        elif obj.event_date < today:
            return format_html('<span style="color: #7f8c8d;">{}</span>', formatted_date)
        elif obj.event_date <= today + timezone.timedelta(days=7):
            return format_html('<b style="color: #2980b9;">{}</b>', formatted_date)
        
        return formatted_date
    event_date_formatted.short_description = "Date"
    event_date_formatted.admin_order_field = 'event_date'

    def details_preview(self, obj):
        """
        Génère un aperçu des détails avec bouton d'affichage complet.
        """
        if not obj.details:
            return "-"
            
        # Tronquer les détails s'ils sont trop longs
        max_length = 50
        preview = obj.details[:max_length] + ('...' if len(obj.details) > max_length else '')
        
        # Ajouter un bouton pour voir les détails complets
        if len(obj.details) > max_length:
            return format_html(
                '<span title="Cliquer pour voir tout le texte">{}</span> '
                '<button type="button" class="button" '
                'onclick="alert(\'{}\')">Voir</button>',
                preview, 
                obj.details.replace("'", "\\'").replace("\n", "\\n")
            )
        return preview
    details_preview.short_description = 'Détails'
    
    def participants_display(self, obj):
        """
        Affiche les informations sur les participants avec formatage conditionnel.
        """
        if obj.participants_prevus is None:
            return "-"
            
        if obj.participants_reels is not None:
            # Calcul du taux et couleur selon la valeur
            rate = (obj.participants_reels / obj.participants_prevus) * 100
            if rate >= 90:
                color = "green"
            elif rate >= 70:
                color = "orange"
            else:
                color = "red"
                
            return format_html(
                '<span title="Taux: {:.1f}%">'
                '<b style="color: {};">{}/{}</b>'
                '</span>',
                rate, color, obj.participants_reels, obj.participants_prevus
            )
        else:
            return f"{obj.participants_prevus} prévus"
    participants_display.short_description = "Participants"
    
    def participation_rate_display(self, obj):
        """
        Calcule et affiche le taux de participation.
        """
        rate = obj.get_participation_rate()
        if rate is None:
            return "Données incomplètes"
            
        # Formatage avec code couleur selon le taux
        if rate >= 90:
            color_class = "success"
        elif rate >= 70:
            color_class = "warning"
        else:
            color_class = "error"
            
        return format_html(
            '<span style="font-weight: bold; color: {};">{:.1f}%</span>',
            {"success": "green", "warning": "orange", "error": "red"}[color_class],
            rate
        )
    participation_rate_display.short_description = "Taux de participation"
    
    def status_display(self, obj):
        """
        Affiche le statut actuel de l'événement.
        """
        status = obj.get_status_display()
        
        # Définition des couleurs selon le statut
        colors = {
            "Passé": "#7f8c8d",
            "Aujourd'hui": "#d35400",
            "À venir": "#2980b9"
        }
        
        return format_html(
            '<span style="font-weight: bold; color: {};">{}</span>',
            colors.get(status, "black"),
            status
        )
    status_display.short_description = "Statut"
    
    def status_badge(self, obj):
        """
        Génère un badge visuel pour indiquer le statut de l'événement.
        """
        if obj.is_past():
            return mark_safe('<span style="color: white; background-color: #7f8c8d; padding: 3px 6px; border-radius: 3px;">Passé</span>')
        elif obj.is_today():
            return mark_safe('<span style="color: white; background-color: #d35400; padding: 3px 6px; border-radius: 3px;">Aujourd\'hui</span>')
        elif obj.is_coming_soon():
            return mark_safe('<span style="color: white; background-color: #2980b9; padding: 3px 6px; border-radius: 3px;">Imminent</span>')
        else:
            return mark_safe('<span style="color: white; background-color: #27ae60; padding: 3px 6px; border-radius: 3px;">À venir</span>')
    status_badge.short_description = "Statut"
    
    def lieu_display(self, obj):
        """
        Affiche le lieu de l'événement ou une valeur par défaut.
        """
        if obj.lieu:
            return obj.lieu
        return format_html('<span style="color: #999;">Non défini</span>')
    lieu_display.short_description = "Lieu"
    lieu_display.admin_order_field = 'lieu'
    
    def mark_as_completed(self, request, queryset):
        """
        Action personnalisée pour marquer les événements comme terminés.
        
        Cette action permet de mettre à jour les événements sélectionnés
        pour indiquer qu'ils sont terminés, en mettant participants_reels
        égal à participants_prevus s'il n'est pas défini.
        """
        updated = 0
        for event in queryset:
            if event.participants_prevus and event.participants_reels is None:
                event.participants_reels = event.participants_prevus
                event.save()
                updated += 1
                
        if updated:
            self.message_user(
                request, 
                f"{updated} événement(s) ont été marqués comme terminés."
            )
        else:
            self.message_user(
                request,
                "Aucun événement n'a été mis à jour. Vérifiez que les événements "
                "sélectionnés ont des participants prévus mais pas de participants réels.",
                level='WARNING'
            )
    mark_as_completed.short_description = "Marquer les événements sélectionnés comme terminés"
    
    # Personnalisation de l'interface d'édition
    def get_fieldsets(self, request, obj=None):
        """
        Ajuste les sections du formulaire selon que l'objet existe ou non.
        """
        fieldsets = super().get_fieldsets(request, obj)
        
        # Pour un nouvel événement, simplifie le formulaire
        if obj is None:
            return (
                ('Informations générales', {
                    'fields': (
                        'formation', 
                        'type_evenement', 
                        'description_autre', 
                        'event_date',
                        'lieu',
                    )
                }),
                ('Participants', {
                    'fields': ('participants_prevus',),
                }),
                ('Détails', {
                    'fields': ('details',),
                }),
            )
        return fieldsets
    
    def save_model(self, request, obj, form, change):
        """
        Personnalise la sauvegarde pour journaliser l'action d'administration.
        """
        # Journaliser l'action
        logger = logging.getLogger("application.admin")
        
        if change:
            logger.info(
                f"Admin: Utilisateur {request.user} a modifié l'événement #{obj.pk}"
            )
        else:
            logger.info(
                f"Admin: Utilisateur {request.user} a créé un nouvel événement de type '{obj.get_type_evenement_display()}'"
            )
            
        super().save_model(request, obj, form, change)


================================================
FILE: rap_app/admin/formations_admin.py
================================================
import logging
from django.contrib import admin
from django.utils.html import format_html
from django.db.models import F, Sum, Case, When, Value, IntegerField, FloatField, Q, Count
from django.urls import reverse
from django.utils import timezone

from ..models.formations import Formation, HistoriqueFormation

# Configuration du logger
logger = logging.getLogger("application.formation.admin")


class HistoriqueFormationInline(admin.TabularInline):
    """
    Inline pour afficher l'historique des modifications des formations.
    Permet de voir les changements récents directement dans la page d'édition de la formation.
    """
    model = HistoriqueFormation
    extra = 0
    readonly_fields = (
        'date_modification', 'action', 'champ_modifie', 
        'ancienne_valeur', 'nouvelle_valeur', 'modifie_par'
    )
    fields = readonly_fields
    can_delete = False
    max_num = 0  # Empêche l'ajout manuel
    verbose_name = "Historique de modification"
    verbose_name_plural = "Historique des modifications"
    
    def has_add_permission(self, request, obj=None):
        """Désactive l'ajout manuel d'historique"""
        return False
    
    def get_queryset(self, request):
        """Récupère les 10 dernières modifications"""
        queryset = super().get_queryset(request)
        return queryset.order_by('-date_modification')[:10]


@admin.register(Formation)
class FormationAdmin(admin.ModelAdmin):
    """
    Administration du modèle Formation avec fonctionnalités avancées:
    - Affichage optimisé avec indicateurs visuels
    - Filtres contextuels
    - Statistiques globales
    - Actions personnalisées
    - Interface responsive
    """
    # Champs affichés dans la liste des formations
    list_display = (
        'nom', 
        'centre_display', 
        'type_offre_display', 
        'statut_display', 
        'statut',  # Ajout de ce champ pour list_editable
        'periode_display',
        'places_dispo_display', 
        'taux_saturation_display',
        'prospections_count',
        'evenements_count'
    )
    
    # Filtres dans la barre latérale avec filtres personnalisés
    list_filter = (
        'centre', 
        'statut', 
        'type_offre',
        ('start_date', admin.DateFieldListFilter),
        ('end_date', admin.DateFieldListFilter),
        'convocation_envoie',
    )
    
    # Champs de recherche
    search_fields = (
        'nom', 
        'num_kairos', 
        'num_offre', 
        'num_produit', 
        'assistante',
        'centre__nom',
        'type_offre__nom',
        'statut__nom'
    )
    
    # Actions personnalisées
    actions = [
        'marquer_convocation_envoyee', 
        'reset_convocation_envoyee',
        'export_selected_formations',
        'dupliquer_formations'
    ]
    
    # Champs pour édition rapide depuis la liste
    list_editable = (
        'statut',
    )
    
    # Champs cliquables dans la liste
    list_display_links = (
        'nom',
    )
    
    # Pagination pour la liste des formations
    list_per_page = 25
    
    # Filtres date dans le panneau latéral
    date_hierarchy = 'start_date'
    
    # Relations préchargées pour optimiser les performances
    list_select_related = ('centre', 'type_offre', 'statut', 'utilisateur')
    
    # Inlines pour afficher les relations
    inlines = [HistoriqueFormationInline]
    
    # Groupes de champs dans le formulaire d'édition
    fieldsets = (
        ('Informations générales', {
            'fields': (
                'nom', 
                'centre', 
                'type_offre', 
                'statut',
                'utilisateur'
            ),
            'description': 'Informations principales de la formation'
        }),
        ('Dates et identifiants', {
            'fields': (
                ('start_date', 'end_date'), 
                ('num_kairos', 'num_offre', 'num_produit'),
            ),
            'description': 'Dates et codes de référence pour la formation'
        }),
        ('Gestion des places', {
            'fields': (
                ('prevus_crif', 'inscrits_crif'),
                ('prevus_mp', 'inscrits_mp'),
                'cap',
                'entresformation',
                'calcul_places_disponibles'
            ),
            'description': 'Configuration des places et inscriptions'
        }),
        ('Recrutement', {
            'fields': (
                'nombre_candidats', 
                'nombre_entretiens', 
                'convocation_envoie',
                'calcul_taux_transformation'
            ),
            'description': 'Données liées au recrutement et à la sélection des candidats'
        }),
        ('Informations supplémentaires', {
            'fields': (
                'assistante', 
                'nombre_evenements',
                'dernier_commentaire',
                'partenaires'
            ),
            'classes': ('collapse',),
            'description': 'Informations complémentaires et associations'
        })
    )
    
    # Champs en lecture seule (calculés automatiquement)
    readonly_fields = (
        'calcul_places_disponibles',
        'calcul_taux_transformation',
    )
    
    # Sauvegarde en haut de page pour les longs formulaires
    save_on_top = True
    
    # Relations many-to-many dans un widget filtrable
    filter_horizontal = ('partenaires',)
    
    # Méthodes pour les champs personnalisés dans l'affichage en liste
    
    def centre_display(self, obj):
        """Affiche le centre avec lien vers sa page d'administration"""
        if obj.centre:
            url = reverse('admin:rap_app_centre_change', args=[obj.centre.id])
            return format_html('<a href="{}">{}</a>', url, obj.centre.nom)
        return "-"
    centre_display.short_description = "Centre"
    centre_display.admin_order_field = 'centre__nom'
    
    def type_offre_display(self, obj):
        """Affiche le type d'offre avec une pastille de couleur"""
        if obj.type_offre:
            color = "#3498db"  # Bleu par défaut
            return format_html(
                '<span style="color: white; background-color: {}; padding: 3px 7px; border-radius: 3px;">{}</span>',
                color, obj.type_offre.nom
            )
        return "-"
    type_offre_display.short_description = "Type d'offre"
    type_offre_display.admin_order_field = 'type_offre__nom'
    
    def statut_display(self, obj):
        """Affiche le statut avec une pastille de couleur basée sur sa valeur"""
        if obj.statut:
            # Récupérer la couleur depuis le modèle statut ou utiliser une couleur par défaut
            color = obj.get_status_color() if hasattr(obj, 'get_status_color') else "#7f8c8d"
            return format_html(
                '<span style="color: white; background-color: {}; padding: 3px 7px; border-radius: 3px;">{}</span>',
                color, obj.statut.nom
            )
        return "-"
    statut_display.short_description = "Statut"
    statut_display.admin_order_field = 'statut__nom'
    
    def periode_display(self, obj):
        """Affiche la période (à venir, en cours, terminée) avec formatage visuel"""
        today = timezone.now().date()
        
        if not obj.start_date:
            return format_html('<span style="color: #95a5a6;">Non programmée</span>')
        
        if obj.start_date > today:
            days = (obj.start_date - today).days
            return format_html(
                '<span style="color: #3498db;">À venir</span> <small>(dans {} jour{})</small>',
                days, 's' if days > 1 else ''
            )
        
        if not obj.end_date or obj.end_date >= today:
            if obj.end_date:
                days = (obj.end_date - today).days
                return format_html(
                    '<span style="color: #27ae60;">En cours</span> <small>({} jour{} restant{})</small>',
                    days, 's' if days > 1 else '', 's' if days > 1 else ''
                )
            return format_html('<span style="color: #27ae60;">En cours</span>')
        
        days = (today - obj.end_date).days
        return format_html(
            '<span style="color: #7f8c8d;">Terminée</span> <small>(depuis {} jour{})</small>',
            days, 's' if days > 1 else ''
        )
    periode_display.short_description = "Période"
    periode_display.admin_order_field = 'start_date'
    
    def places_dispo_display(self, obj):
        """Affiche le nombre de places disponibles avec formatage visuel"""
        if hasattr(obj, 'places_disponibles'):
            places = obj.places_disponibles
        else:
            places = obj.get_places_disponibles()
            
        total = obj.prevus_crif + obj.prevus_mp
        if total == 0:
            return format_html('<span style="color: #95a5a6;">N/A</span>')
            
        if places <= 0:
            return format_html('<span style="color: #e74c3c;">Complet</span>')
            
        color = '#27ae60' if places > 5 else '#f39c12' if places > 0 else '#e74c3c'
        return format_html(
            '<span style="color: {};">{}/{}</span>',
            color, places, total
        )
    places_dispo_display.short_description = "Places disponibles"
    places_dispo_display.admin_order_field = 'places_disponibles'
    
    def taux_saturation_display(self, obj):
        """Affiche le taux de saturation avec une barre de progression interactive"""
        if hasattr(obj, 'taux_saturation'):
            taux = obj.taux_saturation
        else:
            taux = obj.get_taux_saturation()
            
        if obj.prevus_crif + obj.prevus_mp == 0:
            return format_html('<span style="color: #95a5a6;">N/A</span>')
            
        taux = min(100, max(0, taux))  # Garantit que le taux est entre 0 et 100
        
        # Définition de la couleur en fonction du taux
        if taux < 70:
            color = '#27ae60'  # Vert
        elif taux < 95:
            color = '#f39c12'  # Orange
        else:
            color = '#e74c3c'  # Rouge
            
        return format_html(
            '<div class="progress" style="width:100px; height:10px; background-color:#ecf0f1; border-radius:5px;">'
            '<div style="width:{}%; height:100%; background-color:{}; border-radius:5px;" '
            'title="{}% de saturation"></div>'
            '</div>'
            '<span style="color: {};">{:.1f}%</span>',
            taux, color, taux, color, taux
        )
    taux_saturation_display.short_description = "Taux de saturation"
    taux_saturation_display.admin_order_field = 'taux_saturation'
    
    def evenements_count(self, obj):
        """Affiche le nombre d'événements avec lien vers la liste filtrée"""
        count = obj.nombre_evenements
        if count > 0:
            url = reverse('admin:rap_app_evenement_changelist') + f'?formation__id__exact={obj.id}'
            return format_html('<a href="{}" title="Voir les événements">{}</a>', url, count)
        return "0"
    evenements_count.short_description = "Événements"
    
    def prospections_count(self, obj):
        """Affiche le nombre de prospections avec lien vers la liste filtrée"""
        if hasattr(obj, 'nb_prospections'):
            count = obj.nb_prospections
        else:
            count = obj.prospections.count()
            
        if count > 0:
            url = reverse('admin:rap_app_prospection_changelist') + f'?formation__id__exact={obj.id}'
            return format_html('<a href="{}" title="Voir les prospections">{}</a>', url, count)
        return "0"
    prospections_count.short_description = "Prospections"
    
    def calcul_places_disponibles(self, obj):
        """Affiche le calcul détaillé des places disponibles"""
        places_crif = max(0, obj.prevus_crif - obj.inscrits_crif)
        places_mp = max(0, obj.prevus_mp - obj.inscrits_mp)
        total = places_crif + places_mp
        
        return format_html(
            '<div style="margin-top: 10px;">'
            '<p><strong>Places CRIF:</strong> {} - {} = <span style="color:#27ae60;">{}</span></p>'
            '<p><strong>Places MP:</strong> {} - {} = <span style="color:#27ae60;">{}</span></p>'
            '<p><strong>Total disponible:</strong> <span style="color:#2980b9; font-weight:bold;">{}</span></p>'
            '</div>',
            obj.prevus_crif, obj.inscrits_crif, places_crif,
            obj.prevus_mp, obj.inscrits_mp, places_mp,
            total
        )
    calcul_places_disponibles.short_description = "Calcul des places disponibles"
    
    def calcul_taux_transformation(self, obj):
        """Affiche le calcul du taux de transformation (candidats -> inscrits)"""
        inscrits = obj.inscrits_crif + obj.inscrits_mp
        
        if obj.nombre_candidats == 0:
            return format_html('<p>Pas de candidats enregistrés</p>')
            
        taux = (inscrits / obj.nombre_candidats) * 100
        
        if taux < 40:
            color = '#e74c3c'  # Rouge
        elif taux < 70:
            color = '#f39c12'  # Orange
        else:
            color = '#27ae60'  # Vert
            
        return format_html(
            '<div style="margin-top: 10px;">'
            '<p><strong>Candidats:</strong> {}</p>'
            '<p><strong>Inscrits:</strong> {}</p>'
            '<p><strong>Taux de transformation:</strong> <span style="color:{}; font-weight:bold;">{:.1f}%</span></p>'
            '</div>',
            obj.nombre_candidats, inscrits, color, taux
        )
    calcul_taux_transformation.short_description = "Calcul du taux de transformation"
    
    # Actions personnalisées
    
    def marquer_convocation_envoyee(self, request, queryset):
        """Marque les convocations comme envoyées pour les formations sélectionnées"""
        updated = queryset.update(convocation_envoie=True)
        logger.info(f"Admin: {request.user} a marqué {updated} formations avec convocations envoyées")
        self.message_user(request, f"{updated} formations marquées avec convocations envoyées.")
    marquer_convocation_envoyee.short_description = "Marquer les convocations comme envoyées"
    
    def reset_convocation_envoyee(self, request, queryset):
        """Réinitialise le statut d'envoi des convocations"""
        updated = queryset.update(convocation_envoie=False)
        logger.info(f"Admin: {request.user} a réinitialisé le statut des convocations pour {updated} formations")
        self.message_user(request, f"Statut d'envoi des convocations réinitialisé pour {updated} formations.")
    reset_convocation_envoyee.short_description = "Réinitialiser statut d'envoi des convocations"
    
    def export_selected_formations(self, request, queryset):
        """Exporte les formations sélectionnées au format CSV"""
        import csv
        from django.http import HttpResponse
        
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="formations_export.csv"'
        
        writer = csv.writer(response)
        writer.writerow([
            "Nom", "Centre", "Type d'offre", "Statut", "Début", "Fin",
            "Places CRIF", "Inscrits CRIF", "Places MP", "Inscrits MP",
            "Candidats", "Entretiens", "Places disponibles", "Taux de saturation"
        ])
        
        for formation in queryset:
            writer.writerow([
                formation.nom,
                formation.centre.nom if formation.centre else "",
                formation.type_offre.nom if formation.type_offre else "",
                formation.statut.nom if formation.statut else "",
                formation.start_date.strftime('%d/%m/%Y') if formation.start_date else "",
                formation.end_date.strftime('%d/%m/%Y') if formation.end_date else "",
                formation.prevus_crif,
                formation.inscrits_crif,
                formation.prevus_mp,
                formation.inscrits_mp,
                formation.nombre_candidats,
                formation.nombre_entretiens,
                formation.get_places_disponibles(),
                f"{formation.get_taux_saturation():.1f}%"
            ])
            
        logger.info(f"Admin: {request.user} a exporté {queryset.count()} formations en CSV")
        return response
    export_selected_formations.short_description = "Exporter les formations sélectionnées"
    
    def dupliquer_formations(self, request, queryset):
        """Duplique les formations sélectionnées"""
        count = 0
        for formation in queryset:
            # Sauvegarde des relations many-to-many
            partenaires = list(formation.partenaires.all())
            
            # Duplication de la formation
            formation.pk = None
            formation.nom = f"Copie de {formation.nom}"
            formation.save()
            
            # Restauration des relations many-to-many
            formation.partenaires.add(*partenaires)
            
            count += 1
            
        logger.info(f"Admin: {request.user} a dupliqué {count} formations")
        self.message_user(request, f"{count} formations ont été dupliquées avec succès.")
    dupliquer_formations.short_description = "Dupliquer les formations sélectionnées"
    
    # Surcharge pour ajouter des annotations
    def get_queryset(self, request):
        """
        Optimise la requête avec des annotations pour les champs calculés.
        Ajoute des calculs pour les places disponibles, taux de saturation, etc.
        """
        queryset = super().get_queryset(request)
        
        # Ajout des calculs pour éviter les requêtes N+1
        queryset = queryset.annotate(
            # Places disponibles
            places_disponibles=F('prevus_crif') + F('prevus_mp') - F('inscrits_crif') - F('inscrits_mp'),
            
            # Taux de saturation
            taux_saturation=Case(
                When(Q(prevus_crif=0) & Q(prevus_mp=0), then=Value(0)),
                default=100 * (F('inscrits_crif') + F('inscrits_mp')) / 
                         (F('prevus_crif') + F('prevus_mp')),
                output_field=FloatField()
            ),
            
            # Nombre de prospections
            nb_prospections=Count('prospections', distinct=True),
        )
        
        return queryset

    # Statistiques personnalisées
    def changelist_view(self, request, extra_context=None):
        """
        Enrichit la vue de liste avec des statistiques globales.
        Ajoute des informations utiles pour avoir une vue d'ensemble.
        """
        response = super().changelist_view(request, extra_context)
        
        # Uniquement si nous ne faisons pas face à une erreur 404
        if hasattr(response, 'context_data'):
            queryset = self.get_queryset(request)
            today = timezone.now().date()
            
            # Calculer les statistiques globales
            stats = queryset.aggregate(
                total_formations=Count('id', distinct=True),
                total_places=Sum(F('prevus_crif') + F('prevus_mp')),
                total_inscrits=Sum(F('inscrits_crif') + F('inscrits_mp')),
                places_disponibles=Sum(F('prevus_crif') + F('prevus_mp') - F('inscrits_crif') - F('inscrits_mp')),
            )
            
            # Statistiques par période
            actives = queryset.filter(start_date__lte=today, end_date__gte=today).count()
            a_venir = queryset.filter(start_date__gt=today).count()
            terminees = queryset.filter(end_date__lt=today).count()
            
            # Créer le contexte enrichi
            if not extra_context:
                extra_context = {}
            
            # Vérifier que les valeurs ne sont pas None avant de calculer
            if stats['total_places'] and stats['total_inscrits']:
                taux_remplissage = (stats['total_inscrits'] / stats['total_places']) * 100
                extra_context['taux_remplissage_global'] = round(taux_remplissage, 1)
            else:
                extra_context['taux_remplissage_global'] = 0
                
            # Ajouter les statistiques supplémentaires
            extra_context.update(stats)
            extra_context.update({
                'formations_actives': actives,
                'formations_a_venir': a_venir,
                'formations_terminees': terminees,
            })
            
            # Mise à jour du contexte de la réponse
            response.context_data.update(extra_context)
            
        return response
    
    # Personnalisation de l'affichage
    
    class Media:
        """
        Ressources CSS et JS pour l'interface d'admin.
        Améliore l'expérience utilisateur avec des styles et fonctionnalités personnalisés.
        """
        css = {
            'all': ('css/admin/formation_admin.css',)
        }
        js = ('js/admin/formation_admin.js',)


================================================
FILE: rap_app/admin/partenaires_admin.py
================================================
import logging
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html, mark_safe
from django.db.models import Count
from django.contrib.admin import SimpleListFilter

from ..models.partenaires import Partenaire
from ..models import Formation


class PartenaireHasFormationsFilter(SimpleListFilter):
    """
    Filtre personnalisé pour filtrer les partenaires selon qu'ils ont ou non des formations associées.
    """
    title = 'Statut d\'activité'
    parameter_name = 'status'

    def lookups(self, request, model_admin):
        return (
            ('actif', 'Partenaires actifs (avec formations)'),
            ('inactif', 'Partenaires inactifs (sans formation)'),
        )

    def queryset(self, request, queryset):
        if self.value() == 'actif':
            return queryset.filter(formations__isnull=False).distinct()
        elif self.value() == 'inactif':
            return queryset.filter(formations__isnull=True)
        return queryset


class SecteurActiviteFilter(SimpleListFilter):
    """
    Filtre personnalisé pour les secteurs d'activité, qui regroupe les valeurs similaires.
    """
    title = 'Secteur d\'activité'
    parameter_name = 'secteur'

    def lookups(self, request, model_admin):
        # Récupération des secteurs d'activité avec regroupement intelligent
        secteurs = Partenaire.objects.exclude(
            secteur_activite__isnull=True
        ).exclude(
            secteur_activite=''
        ).values_list('secteur_activite', flat=True).distinct()
        
        # Création des choix avec comptage
        choices = []
        for secteur in sorted(secteurs):
            count = Partenaire.objects.filter(secteur_activite__icontains=secteur).count()
            choices.append((secteur, f"{secteur} ({count})"))
        
        return choices

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(secteur_activite__icontains=self.value())
        return queryset


@admin.register(Partenaire)
class PartenaireAdmin(admin.ModelAdmin):
    """
    Configuration de l'interface d'administration pour le modèle Partenaire.
    
    Cette classe définit l'affichage, le filtrage, la recherche et les formulaires
    pour la gestion des partenaires dans l'interface d'administration Django.
    """
    list_display = (
        'nom', 
        'secteur_activite_display',
        'contact_info_display',
        'formations_count_display',
        'last_update_display',
    )
    
    list_filter = (
        PartenaireHasFormationsFilter,
        SecteurActiviteFilter,
    )
    
    search_fields = (
        'nom', 
        'secteur_activite',
        'contact_nom',
        'contact_email',
        'description',
    )
    
    readonly_fields = (
        'created_at', 
        'updated_at',
        'formations_list_display',
        'slug',
    )
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('nom', 'slug', 'secteur_activite', 'description')
        }),
        ('Contact', {
            'fields': ('contact_nom', 'contact_poste', 'contact_telephone', 'contact_email'),
            'description': 'Informations sur la personne à contacter chez ce partenaire'
        }),
        ('Formations associées', {
            'fields': ('formations_list_display',),
            'classes': ('collapse',),
            'description': 'Liste des formations qui collaborent avec ce partenaire'
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    save_on_top = True
    list_per_page = 25
    
    def get_queryset(self, request):
        """
        Optimise les requêtes en annotant le nombre de formations.
        
        Returns:
            QuerySet: Partenaires annotés avec le nombre de formations
        """
        return super().get_queryset(request).annotate(
            formations_count=Count('formations', distinct=True)
        )
    
    def formations_count_display(self, obj):
        """
        Affiche le nombre de formations avec lien vers le filtre admin.
        
        Args:
            obj: Instance du partenaire
            
        Returns:
            SafeText: Formatage HTML du compteur avec lien
        """
        count = getattr(obj, 'formations_count', obj.formations.count())
        
        if count == 0:
            return format_html('<span style="color:#999;">Aucune formation</span>')
            
        url = reverse('admin:rap_app_formation_changelist') + f'?partenaires__id__exact={obj.id}'
        return format_html(
            '<a href="{}" class="badge" style="background-color:#007bff; color:white; '
            'padding:4px 8px; border-radius:10px; text-decoration:none;">{} formation{}</a>',
            url, count, 's' if count > 1 else ''
        )
    formations_count_display.short_description = 'Formations'
    formations_count_display.admin_order_field = 'formations_count'
    
    def secteur_activite_display(self, obj):
        """
        Affiche le secteur d'activité avec une présentation améliorée.
        
        Args:
            obj: Instance du partenaire
            
        Returns:
            SafeText: Formatage HTML du secteur d'activité
        """
        if not obj.secteur_activite:
            return format_html('<span style="color:#999;">Non défini</span>')
            
        return format_html(
            '<span class="badge" style="background-color:#6c757d; color:white; '
            'padding:3px 6px; border-radius:4px;">{}</span>',
            obj.secteur_activite
        )
    secteur_activite_display.short_description = "Secteur d'activité"
    secteur_activite_display.admin_order_field = 'secteur_activite'
    
    def contact_info_display(self, obj):
        """
        Affiche les informations de contact de façon condensée.
        
        Args:
            obj: Instance du partenaire
            
        Returns:
            SafeText: Formatage HTML des informations de contact
        """
        contact_parts = []
        
        if obj.contact_nom:
            contact_parts.append(f"<strong>{obj.contact_nom}</strong>")
        
        if obj.contact_poste:
            contact_parts.append(f"<em>{obj.contact_poste}</em>")
            
        if obj.contact_email:
            contact_parts.append(f'<a href="mailto:{obj.contact_email}">{obj.contact_email}</a>')
            
        if obj.contact_telephone:
            contact_parts.append(f'<span>{obj.contact_telephone}</span>')
            
        if not contact_parts:
            return format_html('<span style="color:#999;">Aucun contact défini</span>')
            
        return format_html(' | '.join(contact_parts))
    contact_info_display.short_description = "Contact"
    
    def last_update_display(self, obj):
        """
        Affiche la date de dernière mise à jour avec formatage.
        
        Args:
            obj: Instance du partenaire
            
        Returns:
            SafeText: Formatage HTML de la date de mise à jour
        """
        if not obj.updated_at:
            return "-"
            
        return format_html(
            '<span title="Créé le: {}">{}</span>',
            obj.created_at.strftime("%d/%m/%Y %H:%M"),
            obj.updated_at.strftime("%d/%m/%Y %H:%M")
        )
    last_update_display.short_description = "Dernière mise à jour"
    last_update_display.admin_order_field = 'updated_at'
    
    def formations_list_display(self, obj):
        """
        Affiche la liste détaillée des formations associées.
        
        Args:
            obj: Instance du partenaire
            
        Returns:
            SafeText: Formatage HTML de la liste des formations
        """
        formations = obj.formations.select_related('type_offre', 'statut', 'centre').all()
        
        if not formations:
            return format_html('<span style="color:#999;">Aucune formation associée</span>')
            
        formation_list = ['<div class="formations-list" style="margin-bottom:10px;">']
        
        for formation in formations:
            url = reverse('admin:rap_app_formation_change', args=[formation.id])
            status_color = "#28a745" if formation.statut and formation.statut.code == "active" else "#6c757d"
            
            formation_list.append(
                f'<div style="margin-bottom:5px;">'
                f'<a href="{url}" style="text-decoration:none;">'
                f'<span style="display:inline-block; width:12px; height:12px; '
                f'background-color:{status_color}; border-radius:50%; margin-right:5px;"></span>'
                f'{formation.nom}</a>'
                f'<span style="color:#777; font-size:0.9em;"> - {formation.centre.nom if formation.centre else "Centre non défini"}'
                f'</span></div>'
            )
            
        formation_list.append('</div>')
        return mark_safe(''.join(formation_list))
    formations_list_display.short_description = "Formations associées"
    
    # Actions personnalisées
    actions = ['mark_as_inactive', 'export_partenaires_csv']
    
    def mark_as_inactive(self, request, queryset):
        """
        Action personnalisée pour dissocier les partenaires des formations.
        
        Args:
            request: Requête HTTP
            queryset: QuerySet des partenaires sélectionnés
        """
        total_removed = 0
        
        for partenaire in queryset:
            formations_count = partenaire.formations.count()
            if formations_count > 0:
                # Enregistrement des formations avant dissociation pour le message
                formations = list(partenaire.formations.all())
                
                # Dissociation des formations
                partenaire.formations.clear()
                
                # Journalisation
                logger = logging.getLogger("application.admin")
                logger.info(
                    f"Admin: Utilisateur {request.user} a dissocié le partenaire '{partenaire.nom}' "
                    f"de {formations_count} formations"
                )
                
                total_removed += formations_count
        
        if total_removed > 0:
            self.message_user(
                request,
                f"{total_removed} associations entre partenaires et formations ont été supprimées."
            )
        else:
            self.message_user(
                request,
                "Aucune association n'a été supprimée. Les partenaires sélectionnés n'ont pas de formations associées.",
                level='WARNING'
            )
    mark_as_inactive.short_description = "Dissocier les partenaires sélectionnés des formations"
    
    def export_partenaires_csv(self, request, queryset):
        """
        Action personnalisée pour exporter les partenaires au format CSV.
        
        Args:
            request: Requête HTTP
            queryset: QuerySet des partenaires sélectionnés
            
        Returns:
            HttpResponse: Réponse HTTP avec le fichier CSV
        """
        import csv
        from django.http import HttpResponse
        from django.utils import timezone
        
        # Configuration de la réponse HTTP
        timestamp = timezone.now().strftime('%Y%m%d-%H%M%S')
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="partenaires-export-{timestamp}.csv"'
        
        # En-têtes CSV
        writer = csv.writer(response)
        writer.writerow([
            'ID', 'Nom', 'Secteur d\'activité', 'Contact Nom', 'Contact Poste',
            'Contact Téléphone', 'Contact Email', 'Nombre de formations', 'Date de création'
        ])
        
        # Données des partenaires
        for partenaire in queryset:
            writer.writerow([
                partenaire.id,
                partenaire.nom,
                partenaire.secteur_activite or '',
                partenaire.contact_nom or '',
                partenaire.contact_poste or '',
                partenaire.contact_telephone or '',
                partenaire.contact_email or '',
                partenaire.formations.count(),
                partenaire.created_at.strftime('%d/%m/%Y')
            ])
        
        # Journalisation de l'export
        logger = logging.getLogger("application.admin")
        logger.info(
            f"Admin: Utilisateur {request.user} a exporté {queryset.count()} partenaires au format CSV"
        )
        
        return response
    export_partenaires_csv.short_description = "Exporter les partenaires sélectionnés en CSV"
    
    def save_model(self, request, obj, form, change):
        """
        Personnalise la sauvegarde pour journaliser l'action d'administration.
        
        Args:
            request: Requête HTTP
            obj: Instance du partenaire
            form: Formulaire soumis
            change: Indique s'il s'agit d'une modification ou d'une création
        """
        # Journaliser l'action
        logger = logging.getLogger("application.admin")
        
        if change:
            logger.info(
                f"Admin: Utilisateur {request.user} a modifié le partenaire '{obj.nom}' (ID: {obj.pk})"
            )
        else:
            logger.info(
                f"Admin: Utilisateur {request.user} a créé un nouveau partenaire '{obj.nom}'"
            )
            
        super().save_model(request, obj, form, change)


================================================
FILE: rap_app/admin/prepa_admin.py
================================================
from django.contrib import admin
from ..models.prepacomp import Semaine, PrepaCompGlobal

@admin.register(Semaine)
class SemaineAdmin(admin.ModelAdmin):
    list_display = (
        'numero_semaine', 'annee', 'centre', 'mois',
        'date_debut_semaine', 'date_fin_semaine',
        'nombre_adhesions', 'nombre_presents_ic',
        'objectif_hebdo_prepa', 'pourcentage_objectif_display'
    )
    list_filter = ('annee', 'mois', 'centre')
    search_fields = ('centre__nom', 'numero_semaine', 'annee')
    ordering = ('-date_debut_semaine',)
    readonly_fields = ('taux_adhesion_display', 'pourcentage_objectif_display')

    def taux_adhesion_display(self, obj):
        return f"{obj.taux_adhesion():.1f} %"
    taux_adhesion_display.short_description = "Taux d’adhésion"

    def pourcentage_objectif_display(self, obj):
        return f"{obj.pourcentage_objectif():.1f} %"
    pourcentage_objectif_display.short_description = "Réalisation hebdo"

@admin.register(PrepaCompGlobal)
class PrepaCompGlobalAdmin(admin.ModelAdmin):
    list_display = (
        'annee', 'centre', 'adhesions',
        'total_presents', 'taux_transformation_display',
        'taux_objectif_annee_display'
    )
    list_filter = ('annee', 'centre')
    search_fields = ('centre__nom', 'annee')

    def taux_transformation_display(self, obj):
        return f"{obj.taux_transformation():.1f} %"
    taux_transformation_display.short_description = "Taux de transformation"

    def taux_objectif_annee_display(self, obj):
        return f"{obj.taux_objectif_annee():.1f} %"
    taux_objectif_annee_display.short_description = "Objectif annuel atteint"



================================================
FILE: rap_app/admin/prospection_admin.py
================================================
import logging
from django.contrib import admin
from django.utils.html import format_html
from ..models.prospection import Prospection, HistoriqueProspection

# Logger pour suivre les actions dans l'admin
logger = logging.getLogger("admin.prospection")


@admin.register(Prospection)
class ProspectionAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour la gestion des prospections commerciales.
    Permet un suivi visuel, des filtres pratiques et une journalisation des actions.
    """
    list_display = (
        'company', 'formation', 'statut_color', 'objectif', 'responsable', 'date_prospection',
    )
    list_filter = ('statut', 'objectif', 'date_prospection', 'responsable')
    search_fields = ('company__name', 'formation__nom', 'commentaire')
    readonly_fields = ('date_prospection', 'statut_color', 'historique_display')
    ordering = ['-date_prospection']
    date_hierarchy = 'date_prospection'

    fieldsets = (
        ("Informations générales", {
            'fields': ('company', 'formation', 'responsable', 'statut', 'statut_color', 'objectif', 'motif'),
        }),
        ("Commentaires et historique", {
            'fields': ('commentaire', 'historique_display')
        }),
        ("Date", {
            'fields': ('date_prospection',),
        }),
    )

    def statut_color(self, obj):
        """Affiche le statut avec une couleur de fond CSS."""
        classes = {
            'a_faire': 'primary',
            'en_cours': 'info',
            'a_relancer': 'warning',
            'acceptee': 'success',
            'refusee': 'danger',
            'annulee': 'secondary',
            'non_renseigne': 'light',
        }
        css_class = classes.get(obj.statut, 'light')
        return format_html('<span class="badge bg-{}">{}</span>', css_class, obj.get_statut_display())
    
    statut_color.short_description = "Statut"
    statut_color.admin_order_field = "statut"

    def historique_display(self, obj):
        """Affiche un résumé HTML des historiques de cette prospection."""
        historiques = obj.historiques.all().order_by('-date_modification')[:5]
        if not historiques:
            return "Aucun historique."
        rows = []
        for h in historiques:
            rows.append(f"<li><strong>{h.date_modification.strftime('%d/%m/%Y')}:</strong> {h.get_ancien_statut_display()} ➔ {h.get_nouveau_statut_display()}</li>")
        return format_html('<ul>{}</ul>', format_html(''.join(rows)))

    historique_display.short_description = "Historique récent"

    def save_model(self, request, obj, form, change):
        """Journalisation personnalisée à la sauvegarde."""
        if change:
            logger.info(f"Admin: modification de la prospection #{obj.pk} par {request.user.username}")
        else:
            logger.info(f"Admin: création de la prospection pour {obj.company.name} par {request.user.username}")
        super().save_model(request, obj, form, change)


@admin.register(HistoriqueProspection)
class HistoriqueProspectionAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour visualiser les historiques de prospection.
    """
    list_display = ('prospection', 'ancien_statut', 'nouveau_statut', 'date_modification', 'modifie_par')
    list_filter = ('nouveau_statut', 'modifie_par', 'date_modification')
    search_fields = ('prospection__company__name', 'commentaire', 'resultat')
    ordering = ['-date_modification']
    readonly_fields = [f.name for f in HistoriqueProspection._meta.fields]

    def has_add_permission(self, request):
        """On empêche l'ajout manuel d'historique depuis l'admin."""
        return False



================================================
FILE: rap_app/admin/statuts_admin.py
================================================
# admin/statut.py
import logging
from django.contrib import admin
from django.utils.html import format_html

from ..models import Statut

# Configuration du logger pour les actions d'administration
logger = logging.getLogger('admin.statut')


@admin.register(Statut)
class StatutAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour le modèle Statut.
    Permet un affichage visuel de la couleur, des filtres par nom,
    et un aperçu rapide des statuts enregistrés.
    """
    list_display = ('get_nom_display', 'couleur_display', 'description_autre', 'created_at')
    list_filter = ('nom',)
    search_fields = ('nom', 'description_autre')
    readonly_fields = ('created_at', 'updated_at', 'couleur_display')

    fieldsets = (
        ('Informations générales', {
            'fields': ('nom', 'couleur', 'couleur_display', 'description_autre'),
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )

    def get_nom_display(self, obj):
        """
        Affiche le nom du statut avec gestion du cas 'Autre'.
        """
        return obj.get_nom_display()

    get_nom_display.short_description = 'Statut'
    get_nom_display.admin_order_field = 'nom'

    def couleur_display(self, obj):
        """
        Affiche un bloc coloré représentant visuellement la couleur du statut.
        """
        if obj.couleur:
            return format_html(
                '<div style="display:inline-block; width:100px; height:25px; background-color:{}; '
                'border:1px solid #ddd; border-radius:3px;"></div>', 
                obj.couleur
            )
        return "-"
    
    couleur_display.short_description = 'Aperçu couleur'

    # ➕ Logging lors des actions en admin
    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        action = "Créé" if not change else "Modifié"
        logger.info(f"{action} statut : {obj} (par {request.user})")

    def delete_model(self, request, obj):
        logger.warning(f"Suppression du statut : {obj} (par {request.user})")
        super().delete_model(request, obj)



================================================
FILE: rap_app/admin/types_offre_admin.py
================================================
import logging
from django.contrib import admin
from django.utils.html import format_html, mark_safe
from django.db.models import Count
from django.urls import reverse
from django.contrib import messages

from ..models.types_offre import TypeOffre

# Configuration du logger
logger = logging.getLogger("application.typeoffre.admin")


class FormationInline(admin.TabularInline):
    """
    Inline pour afficher les formations associées à un type d'offre.
    """
    model = 'Formation'  # Remplacer par le chemin complet du modèle si nécessaire
    verbose_name = "Formation associée"
    verbose_name_plural = "Formations associées"
    extra = 0
    fields = ('nom', 'centre', 'start_date', 'end_date', 'places_disponibles')
    readonly_fields = fields
    can_delete = False
    max_num = 10
    
    def has_add_permission(self, request, obj=None):
        """Désactive l'ajout manuel de formations via l'inline"""
        return False


@admin.register(TypeOffre)
class TypeOffreAdmin(admin.ModelAdmin):
    """
    Administration du modèle TypeOffre avec fonctionnalités avancées:
    - Affichage des couleurs avec prévisualisation
    - Statistiques sur l'utilisation des types d'offre
    - Validation avancée des codes couleur
    - Interface intuitive pour la gestion des types d'offre
    """
    # Champs affichés dans la liste des types d'offre
    list_display = (
        'nom_display',
        'color_preview',
        'autre_display',
        'formations_count',
        'is_personnalise_display',
        'created_at',
        'updated_at',
    )
    
    # Filtres dans la barre latérale
    list_filter = (
        'nom',
        'created_at',
    )
    
    # Champs de recherche
    search_fields = (
        'nom',
        'autre',
    )
    
    # Regroupement des champs dans le formulaire d'édition
    fieldsets = (
        ('Informations générales', {
            'fields': (
                'nom',
                'autre',
            ),
            'description': "Définition du type d'offre, avec option pour un type personnalisé"
        }),
        ('Apparence', {
            'fields': (
                'couleur',
                'color_preview_large',
                'badge_preview',
            ),
            'description': "Configuration visuelle pour l'affichage du type d'offre"
        }),
        ('Métadonnées', {
            'fields': (
                'created_at',
                'updated_at',
            ),
            'classes': ('collapse',),
            'description': "Informations de suivi et d'audit"
        }),
    )
    
    # Champs en lecture seule (calculés automatiquement)
    readonly_fields = (
        'color_preview_large',
        'badge_preview',
        'created_at',
        'updated_at',
    )
    
    # Actions personnalisées
    actions = [
        'reset_default_colors',
        'export_selected_types',
    ]
    
    # Méthodes pour les champs calculés et l'affichage personnalisé
    
    def nom_display(self, obj):
        """
        Affiche le nom du type d'offre formaté avec distinction pour les personnalisés.
        """
        if obj.is_personnalise():
            return format_html(
                '{} <small style="color:#6c757d;">({})</small>',
                obj.autre,
                obj.get_nom_display()
            )
        return obj.get_nom_display()
    nom_display.short_description = "Type d'offre"
    nom_display.admin_order_field = 'nom'
    
    def autre_display(self, obj):
        """
        Affiche le champ 'autre' avec formatage conditionnel.
        """
        if obj.is_personnalise() and obj.autre:
            return obj.autre
        return format_html(
            '<span style="color:#999;">-</span>'
        )
    autre_display.short_description = "Personnalisé"
    autre_display.admin_order_field = 'autre'
    
    def color_preview(self, obj):
        """
        Affiche un aperçu de la couleur sous forme d'un carré coloré.
        """
        text_color = obj.text_color()
        return format_html(
            '<div style="background-color:{}; width:20px; height:20px; border-radius:3px; display:inline-block;" title="{}"></div>',
            obj.couleur,
            obj.couleur
        )
    color_preview.short_description = "Couleur"
    
    def color_preview_large(self, obj):
        """
        Affiche un grand aperçu de la couleur avec code hexadécimal.
        """
        text_color = obj.text_color()
        return format_html(
            '<div style="background-color:{}; color:{}; padding:15px; border-radius:5px; text-align:center; margin:10px 0;">'
            '<strong style="font-size:16px;">{}</strong>'
            '</div>',
            obj.couleur,
            text_color,
            obj.couleur
        )
    color_preview_large.short_description = "Aperçu de la couleur"
    
    def badge_preview(self, obj):
        """
        Affiche un aperçu du badge tel qu'il apparaîtra dans l'interface.
        """
        return format_html(
            '<div style="margin:10px 0;">{}</div>',
            mark_safe(obj.get_badge_html())
        )
    badge_preview.short_description = "Aperçu du badge"
    
    def formations_count(self, obj):
        """
        Affiche le nombre de formations associées à ce type d'offre.
        """
        count = getattr(obj, 'formations_count', None)
        if count is None:
            count = obj.get_formations_count()
            
        if count > 0:
            url = reverse('admin:rap_app_formation_changelist') + f'?type_offre__id__exact={obj.id}'
            return format_html(
                '<a href="{}" title="Voir les formations associées" style="font-weight:bold;">{}</a>',
                url,
                count
            )
        return "0"
    formations_count.short_description = "Formations"
    formations_count.admin_order_field = 'formations_count'
    
    def is_personnalise_display(self, obj):
        """
        Affiche si le type d'offre est personnalisé.
        """
        if obj.is_personnalise():
            return format_html(
                '<span style="color:green;">✓</span>'
            )
        return format_html(
            '<span style="color:#999;">-</span>'
        )
    is_personnalise_display.short_description = "Personnalisé"
    is_personnalise_display.boolean = True
    
    # Actions personnalisées
    
    def reset_default_colors(self, request, queryset):
        """
        Réinitialise les couleurs par défaut pour les types d'offre sélectionnés.
        """
        updated = 0
        for type_offre in queryset:
            original_color = type_offre.couleur
            
            # Réinitialisation de la couleur pour forcer l'assignation par défaut
            type_offre.couleur = '#6c757d'
            type_offre.assign_default_color()
            
            # Sauvegarder uniquement si la couleur a changé
            if original_color != type_offre.couleur:
                type_offre.save()
                updated += 1
                logger.info(
                    f"Admin: Couleur réinitialisée pour le type d'offre #{type_offre.pk} "
                    f"de {original_color} à {type_offre.couleur}"
                )
        
        if updated:
            self.message_user(
                request, 
                f"Couleurs réinitialisées pour {updated} types d'offre.",
                messages.SUCCESS
            )
        else:
            self.message_user(
                request,
                "Aucune couleur n'a été modifiée. Les types d'offre avaient déjà leurs couleurs par défaut.",
                messages.INFO
            )
    reset_default_colors.short_description = "Réinitialiser les couleurs par défaut"
    
    def export_selected_types(self, request, queryset):
        """
        Exporte les types d'offre sélectionnés au format CSV.
        """
        import csv
        from django.http import HttpResponse
        from django.utils import timezone
        
        # Configuration de la réponse HTTP
        timestamp = timezone.now().strftime('%Y%m%d-%H%M%S')
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="types_offre_export_{timestamp}.csv"'
        
        # En-têtes CSV
        writer = csv.writer(response)
        writer.writerow([
            'ID', 'Nom', 'Personnalisé', 'Couleur', 'Nombre de formations', 
            'Date de création', 'Dernière modification'
        ])
        
        # Données des types d'offre
        for type_offre in queryset:
            writer.writerow([
                type_offre.pk,
                str(type_offre),
                'Oui' if type_offre.is_personnalise() else 'Non',
                type_offre.couleur,
                type_offre.get_formations_count(),
                type_offre.created_at.strftime('%d/%m/%Y %H:%M'),
                type_offre.updated_at.strftime('%d/%m/%Y %H:%M'),
            ])
        
        # Journalisation
        logger.info(f"Admin: Export CSV de {queryset.count()} types d'offre par {request.user}")
        
        return response
    export_selected_types.short_description = "Exporter les types d'offre sélectionnés"
    
    def get_queryset(self, request):
        """
        Optimise la requête avec des annotations pour les champs calculés.
        """
        queryset = super().get_queryset(request)
        
        # Annoter avec le nombre de formations pour optimiser les performances
        queryset = queryset.annotate(
            formations_count=Count('formations', distinct=True)
        )
        
        return queryset
    
    def save_model(self, request, obj, form, change):
        """
        Personnalisation de la sauvegarde avec journalisation.
        """
        is_new = not change
        
        # Sauvegarde du modèle
        super().save_model(request, obj, form, change)
        
        # Journalisation de l'action administrative
        if is_new:
            logger.info(
                f"Admin: Type d'offre '{obj}' créé par {request.user}"
            )
            messages.success(
                request, 
                f"Type d'offre '{obj}' créé avec succès."
            )
        else:
            logger.info(
                f"Admin: Type d'offre '{obj}' modifié par {request.user}"
            )
            messages.success(
                request, 
                f"Type d'offre '{obj}' mis à jour avec succès."
            )
    
    class Media:
        """
        Ressources CSS et JS pour l'interface d'admin.
        """
        css = {
            'all': ('css/admin/type_offre_admin.css',)
        }
        js = ('js/admin/type_offre_admin.js',)


================================================
FILE: rap_app/admin/utilisateurs_admin.py
================================================
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from ..models import Utilisateur


@admin.register(Utilisateur)
class UtilisateurAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'is_staff')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Informations personnelles', {'fields': ('first_name', 'last_name', 'email', 'role')}),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        ('Dates importantes', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'role'),
        }),
    )
    search_fields = ('username', 'email', 'first_name', 'last_name', 'role')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    ordering = ('username',)



================================================
FILE: rap_app/forms/__init__.py
================================================
from rap_app.forms import ProspectionForm



================================================
FILE: rap_app/forms/company_form.py
================================================
from django import forms
from ..models.company import Company

class CompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = [
            'name', 'street_name', 'zip_code', 'city', 'country',
            'contact_name', 'contact_email', 'contact_phone_number', 'contact_job',
            'sector_name', 'actions', 'action_description',
            'website', 'social_network_url'
        ]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_name': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_email': forms.EmailInput(attrs={'class': 'form-control'}),
            'contact_phone_number': forms.TextInput(attrs={'class': 'form-control'}),
            'city': forms.TextInput(attrs={'class': 'form-control'}),
            'sector_name': forms.TextInput(attrs={'class': 'form-control'}),
        }



================================================
FILE: rap_app/forms/ProspectionForm.py
================================================
from django import forms
from ..models.prospection import Prospection

class ProspectionForm(forms.ModelForm):
    class Meta:
        model = Prospection
        fields = ['company', 'formation', 'statut', 'objectif', 'commentaire', 'responsable']
        widgets = {
            'commentaire': forms.Textarea(attrs={'rows': 3}),
        }



================================================
FILE: rap_app/forms/rapports_forms.py
================================================
from django import forms
from django.utils import timezone
from datetime import timedelta

from ..models.rapports import Rapport
from ..models import Centre, TypeOffre, Statut

class RapportCreationForm(forms.Form):
    """Formulaire pour créer un nouveau rapport."""
    
    type_rapport = forms.ChoiceField(
        choices=Rapport.TYPE_CHOICES,
        label="Type de rapport",
        widget=forms.Select(attrs={'class': 'form-select'}),
        help_text="Sélectionnez le type de rapport à générer."
    )
    
    periode = forms.ChoiceField(
        choices=[("", "Aucune période sélectionnée")] + Rapport.PERIODE_CHOICES,
        label="Périodicité (optionnelle)",
        required=False,
        widget=forms.Select(attrs={'class': 'form-select'}),
        initial=Rapport.PERIODE_MENSUEL,
        help_text="Choisissez la période du rapport (optionnel)."
    )
    
    date_debut = forms.DateField(
        label="Date de début",
        widget=forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
        help_text="La date de début de la période du rapport."
    )
    
    date_fin = forms.DateField(
        label="Date de fin",
        widget=forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
        help_text="La date de fin de la période du rapport."
    )
    
    centre = forms.ModelChoiceField(
        queryset=Centre.objects.none(),
        label="Centre (optionnel)",
        required=False,
        widget=forms.Select(attrs={'class': 'form-select'}),
        help_text="Filtrer par centre (optionnel)."
    )

    type_offre = forms.ModelChoiceField(
        queryset=TypeOffre.objects.none(),
        label="Type d'offre (optionnel)",
        required=False,
        widget=forms.Select(attrs={'class': 'form-select'}),
        help_text="Filtrer par type d'offre (optionnel)."
    )
    
    statut = forms.ModelChoiceField(
        queryset=Statut.objects.none(),
        label="Statut (optionnel)",
        required=False,
        widget=forms.Select(attrs={'class': 'form-select'}),
        help_text="Filtrer par statut (optionnel)."
    )
    
    format = forms.ChoiceField(
        choices=Rapport.FORMAT_CHOICES,
        label="Format d'export",
        initial=Rapport.FORMAT_HTML,
        widget=forms.Select(attrs={'class': 'form-select'}),
        help_text="Choisissez le format d'export du rapport."
    )

    description = forms.CharField(
        label="Description (optionnelle)",
        widget=forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        required=False,
        help_text="Ajoutez une description pour ce rapport (optionnel)."
    )

    def __init__(self, *args, **kwargs):
        """Initialisation dynamique des choix de centres, types d'offres et statuts."""
        super().__init__(*args, **kwargs)

        # Récupérer les données dynamiquement
        self.fields['centre'].queryset = Centre.objects.all().order_by('nom')
        self.fields['type_offre'].queryset = TypeOffre.objects.all().order_by('nom')
        self.fields['statut'].queryset = Statut.objects.all().order_by('nom')

        # Initialisation des dates
        self.fields['date_debut'].initial = timezone.now().date() - timedelta(days=30)
        self.fields['date_fin'].initial = timezone.now().date()

    def clean(self):
        """Validation des dates et autres champs."""
        cleaned_data = super().clean()
        date_debut = cleaned_data.get('date_debut')
        date_fin = cleaned_data.get('date_fin')

        # Vérifier que la date de début est bien avant la date de fin
        if date_debut and date_fin:
            if date_debut > date_fin:
                self.add_error('date_debut', "⚠ La date de début doit être antérieure à la date de fin.")
                self.add_error('date_fin', "⚠ La date de fin doit être postérieure à la date de début.")

            if date_fin > timezone.now().date():
                self.add_error('date_fin', "⚠ La date de fin ne peut pas être dans le futur.")

        return cleaned_data



================================================
FILE: rap_app/forms/vae_jury_form.py
================================================
# forms.py
from django import forms
from django.utils import timezone

from ..models.centres import Centre
from ..models.vae_jury import SuiviJury, VAE, HistoriqueStatutVAE

class SuiviJuryForm(forms.ModelForm):
    class Meta:
        model = SuiviJury
        fields = ['centre', 'annee', 'mois', 'objectif_jury', 'jurys_realises']
        widgets = {
            'annee': forms.NumberInput(attrs={'min': 2000, 'max': 2100}),
        }

class VAEForm(forms.ModelForm):
    class Meta:
        model = VAE
        fields = ['centre', 'reference', 'date_creation', 'statut', 'commentaire']
        widgets = {
            'date_creation': forms.DateInput(attrs={'type': 'date'}),
            'commentaire': forms.Textarea(attrs={'rows': 4}),
        }

class HistoriqueStatutVAEForm(forms.ModelForm):
    class Meta:
        model = HistoriqueStatutVAE
        fields = ['vae', 'statut', 'date_changement_effectif', 'commentaire']
        widgets = {
            'date_changement_effectif': forms.DateInput(attrs={'type': 'date'}),
            'commentaire': forms.Textarea(attrs={'rows': 4}),
        }
class ObjectifCentreForm(forms.ModelForm):
    class Meta:
        model = Centre
        fields = ['objectif_annuel_jury', 'objectif_mensuel_jury']        



================================================
FILE: rap_app/migrations/0001_initial.py
================================================
# Generated by Django 4.2.7 on 2025-03-27 18:47

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Centre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(help_text='Nom complet du centre de formation (doit être unique)', max_length=255, unique=True, verbose_name='Nom du centre')),
                ('code_postal', models.CharField(blank=True, help_text='Code postal à 5 chiffres du centre', max_length=5, null=True, validators=[django.core.validators.RegexValidator(message='Le code postal doit contenir exactement 5 chiffres', regex='^\\d{5}$')], verbose_name='Code postal')),
                ('objectif_annuel_prepa', models.PositiveIntegerField(blank=True, null=True)),
                ('objectif_hebdomadaire_prepa', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Centre',
                'verbose_name_plural': 'Centres',
                'ordering': ['nom'],
            },
        ),
        migrations.CreateModel(
            name='Commentaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('contenu', models.TextField(verbose_name='Contenu du commentaire')),
                ('saturation', models.PositiveIntegerField(blank=True, null=True, verbose_name='Niveau de saturation (%)')),
            ],
            options={
                'verbose_name': 'Commentaire',
                'verbose_name_plural': 'Commentaires',
                'ordering': ['formation', '-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, help_text="Nom de l'entreprise", max_length=100, null=True, verbose_name='Nom')),
                ('street_name', models.CharField(blank=True, help_text='Exemple: 123 rue de la République', max_length=200, null=True, verbose_name='Numéro et nom de la rue')),
                ('zip_code', models.CharField(blank=True, help_text='Code postal à 5 chiffres', max_length=5, null=True, validators=[django.core.validators.RegexValidator(message='Le code postal doit être composé de 5 chiffres.', regex='^[0-9]{5}$')], verbose_name='Code postal')),
                ('city', models.CharField(blank=True, help_text='Ville du siège social', max_length=100, null=True, verbose_name='Ville')),
                ('country', models.CharField(blank=True, default='France', max_length=100, null=True, verbose_name='Pays')),
                ('contact_name', models.CharField(blank=True, help_text='Nom et prénom du contact principal', max_length=255, null=True, verbose_name='Nom du contact')),
                ('contact_email', models.EmailField(blank=True, help_text='Email professionnel du contact', max_length=254, null=True, verbose_name='Adresse email du contact')),
                ('contact_phone_number', models.CharField(blank=True, help_text='Format: 06XXXXXXXX ou +33XXXXXXXXX', max_length=20, null=True, validators=[django.core.validators.RegexValidator(message='Entrez un numéro de téléphone français valide commençant par 01, 02, ..., 06 ou 07.', regex='^(0[1-9]\\d{8})$|^(?:\\+33|0033)[1-9]\\d{8}$')], verbose_name='Numéro de téléphone du contact')),
                ('contact_job', models.CharField(blank=True, help_text='Fonction ou poste du contact', max_length=255, null=True, verbose_name='Métier du contact')),
                ('sector_name', models.CharField(blank=True, help_text="Domaine d'activité principal de l'entreprise", max_length=200, null=True, verbose_name="Secteur d'activité")),
                ('actions', models.CharField(blank=True, choices=[('recrutement_emploi', 'Recrutement - Emploi'), ('recrutement_stage', 'Recrutement - Stage'), ('recrutement_apprentissage', 'Recrutement - Apprentissage'), ('presentation_metier_entreprise', 'Présentation de métier(s)/entreprise'), ('visite_entreprise', "Visite de l'entreprise"), ('coaching', 'Coaching'), ('autre', 'Autre'), ('partenariat', 'Partenariat'), ('non_definie', 'Non définie')], help_text="Type d'interaction possible avec cette entreprise", max_length=50, null=True, verbose_name='Actions')),
                ('action_description', models.CharField(blank=True, help_text="Détails sur l'action ou l'opportunité", max_length=5000, null=True, verbose_name="Description de l'action")),
                ('website', models.URLField(blank=True, help_text="Site web de l'entreprise (avec http:// ou https://)", null=True, validators=[django.core.validators.RegexValidator(message="L'URL doit commencer par http:// ou https://", regex='^(http|https)://')])),
                ('social_network_url', models.CharField(blank=True, help_text="Lien vers le profil de l'entreprise sur un réseau social", max_length=200, null=True, verbose_name='URL du réseau social')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Contact créé le')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='Date de MAJ')),
            ],
            options={
                'verbose_name': 'entreprise',
                'verbose_name_plural': 'entreprises',
                'db_table': 'companies',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom_fichier', models.CharField(db_index=True, help_text="Nom du fichier tel qu'il apparaîtra dans l'interface", max_length=255, verbose_name='Nom du fichier')),
                ('fichier', models.FileField(help_text='Fichier à télécharger (types acceptés selon la catégorie)', upload_to='formations/documents/', verbose_name='Fichier')),
                ('source', models.TextField(blank=True, help_text='Source ou origine du document (optionnel)', null=True, verbose_name='Source du document')),
                ('type_document', models.CharField(choices=[('pdf', 'PDF'), ('image', 'Image'), ('contrat', 'Contrat signé'), ('autre', 'Autre')], default='autre', help_text='Catégorie du document déterminant les types de fichiers acceptés', max_length=20, verbose_name='Type de document')),
                ('taille_fichier', models.PositiveIntegerField(blank=True, help_text='Taille du fichier en Ko (calculée automatiquement)', null=True, verbose_name='Taille du fichier (Ko)')),
                ('mime_type', models.CharField(blank=True, help_text='Type MIME détecté automatiquement', max_length=100, null=True, verbose_name='Type MIME')),
            ],
            options={
                'verbose_name': 'Document',
                'verbose_name_plural': 'Documents',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Evenement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('type_evenement', models.CharField(choices=[('info_collective_presentiel', 'Information collective présentiel'), ('info_collective_distanciel', 'Information collective distanciel'), ('job_dating', 'Job dating'), ('evenement_emploi', 'Événement emploi'), ('forum', 'Forum'), ('jpo', 'Journée Portes Ouvertes (JPO)'), ('autre', 'Autre')], db_index=True, help_text="Catégorie de l'événement", max_length=100, verbose_name="Type d'événement")),
                ('details', models.TextField(blank=True, help_text="Informations complémentaires sur l'événement", null=True, verbose_name="Détails de l'événement")),
                ('event_date', models.DateField(blank=True, help_text="Date prévue pour l'événement", null=True, verbose_name="Date de l'événement")),
                ('description_autre', models.CharField(blank=True, help_text="Précision obligatoire si le type d'événement est 'Autre'", max_length=255, null=True, verbose_name="Description pour 'Autre' événement")),
                ('lieu', models.CharField(blank=True, help_text="Emplacement où se déroule l'événement", max_length=255, null=True, verbose_name='Lieu')),
                ('participants_prevus', models.PositiveIntegerField(blank=True, help_text='Nombre de participants attendus', null=True, verbose_name='Participants prévus')),
                ('participants_reels', models.PositiveIntegerField(blank=True, help_text="Nombre de participants réels (à remplir après l'événement)", null=True, verbose_name='Participants réels')),
            ],
            options={
                'verbose_name': 'Événement',
                'verbose_name_plural': 'Événements',
                'ordering': ['-event_date'],
            },
        ),
        migrations.CreateModel(
            name='Formation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(max_length=255, verbose_name='Nom de la formation')),
                ('start_date', models.DateField(blank=True, null=True, verbose_name='Date de début')),
                ('end_date', models.DateField(blank=True, null=True, verbose_name='Date de fin')),
                ('num_kairos', models.CharField(blank=True, max_length=50, null=True, verbose_name='Numéro Kairos')),
                ('num_offre', models.CharField(blank=True, max_length=50, null=True, verbose_name="Numéro de l'offre")),
                ('num_produit', models.CharField(blank=True, max_length=50, null=True, verbose_name='Numéro du produit')),
                ('prevus_crif', models.PositiveIntegerField(default=0, verbose_name='Places prévues CRIF')),
                ('prevus_mp', models.PositiveIntegerField(default=0, verbose_name='Places prévues MP')),
                ('inscrits_crif', models.PositiveIntegerField(default=0, verbose_name='Inscrits CRIF')),
                ('inscrits_mp', models.PositiveIntegerField(default=0, verbose_name='Inscrits MP')),
                ('assistante', models.CharField(blank=True, max_length=255, null=True, verbose_name='Assistante')),
                ('cap', models.PositiveIntegerField(blank=True, null=True, verbose_name='Capacité maximale')),
                ('convocation_envoie', models.BooleanField(default=False, verbose_name='Convocation envoyée')),
                ('entresformation', models.PositiveIntegerField(default=0, verbose_name='Entrées en formation')),
                ('nombre_candidats', models.PositiveIntegerField(default=0, verbose_name='Nombre de candidats')),
                ('nombre_entretiens', models.PositiveIntegerField(default=0, verbose_name="Nombre d'entretiens")),
                ('nombre_evenements', models.PositiveIntegerField(default=0, verbose_name="Nombre d'événements")),
                ('dernier_commentaire', models.TextField(blank=True, null=True, verbose_name='Dernier commentaire')),
            ],
            options={
                'verbose_name': 'Formation',
                'verbose_name_plural': 'Formations',
                'ordering': ['-start_date', 'nom'],
            },
        ),
        migrations.CreateModel(
            name='HistoriqueFormation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(default='modification', max_length=100)),
                ('details', models.JSONField(blank=True, default=dict)),
                ('date_modification', models.DateTimeField(default=django.utils.timezone.now)),
                ('champ_modifie', models.CharField(default='non_specifié', max_length=100, verbose_name='Champ modifié')),
                ('ancienne_valeur', models.TextField(blank=True, null=True)),
                ('nouvelle_valeur', models.TextField(blank=True, null=True)),
                ('commentaire', models.TextField(blank=True, null=True, verbose_name='Commentaire lié à la modification')),
            ],
            options={
                'verbose_name': 'Historique de modification de formation',
                'ordering': ['-date_modification'],
            },
        ),
        migrations.CreateModel(
            name='HistoriqueProspection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_modification', models.DateTimeField(auto_now_add=True, help_text='Date à laquelle cette modification a été enregistrée', verbose_name='Date de modification')),
                ('ancien_statut', models.CharField(choices=[('a_faire', 'À faire'), ('en_cours', 'En cours'), ('a_relancer', 'À relancer'), ('acceptee', 'Acceptée'), ('refusee', 'Refusée'), ('annulee', 'Annulée'), ('non_renseigne', 'Non renseigné')], help_text='Statut avant la modification', max_length=20, verbose_name='Ancien statut')),
                ('nouveau_statut', models.CharField(choices=[('a_faire', 'À faire'), ('en_cours', 'En cours'), ('a_relancer', 'À relancer'), ('acceptee', 'Acceptée'), ('refusee', 'Refusée'), ('annulee', 'Annulée'), ('non_renseigne', 'Non renseigné')], help_text='Nouveau statut après la modification', max_length=20, verbose_name='Nouveau statut')),
                ('commentaire', models.TextField(blank=True, help_text='Commentaire associé à cette modification', null=True, verbose_name='Commentaire')),
                ('prochain_contact', models.DateField(blank=True, help_text='Date à laquelle un suivi devrait être effectué', null=True, verbose_name='Date de relance')),
                ('resultat', models.TextField(blank=True, help_text='Information sur le résultat de cette étape de prospection', null=True, verbose_name='Résultat ou retour de la prospection')),
                ('moyen_contact', models.CharField(blank=True, choices=[('email', 'Email'), ('telephone', 'Téléphone'), ('visite', 'Visite'), ('reseaux', 'Réseaux sociaux')], help_text='Moyen utilisé pour ce contact', max_length=50, null=True, verbose_name='Moyen de contact')),
            ],
            options={
                'verbose_name': 'Historique de prospection',
                'verbose_name_plural': 'Historiques de prospection',
                'ordering': ['-date_modification'],
            },
        ),
        migrations.CreateModel(
            name='Partenaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(help_text="Nom officiel de l'entreprise ou de l'organisation partenaire", max_length=255, unique=True, verbose_name='Nom du partenaire')),
                ('secteur_activite', models.CharField(blank=True, help_text="Domaine d'activité principal du partenaire (ex: Santé, IT, Formation...)", max_length=255, null=True, verbose_name="Secteur d'activité")),
                ('contact_nom', models.CharField(blank=True, help_text='Nom de la personne à contacter chez le partenaire', max_length=255, null=True, verbose_name='Nom du contact')),
                ('contact_poste', models.CharField(blank=True, help_text="Fonction occupée par le contact au sein de l'organisation", max_length=255, null=True, verbose_name='Poste du contact')),
                ('contact_telephone', models.CharField(blank=True, help_text='Numéro de téléphone direct du contact', max_length=20, null=True, verbose_name='Téléphone du contact')),
                ('contact_email', models.EmailField(blank=True, help_text='Adresse email professionnelle du contact', max_length=254, null=True, verbose_name='Email du contact')),
                ('description', models.TextField(blank=True, help_text="Informations sur le partenariat et l'historique de la relation", null=True, verbose_name='Description de la relation')),
                ('slug', models.SlugField(blank=True, help_text='Identifiant unique pour les URLs (généré automatiquement)', max_length=255, null=True, unique=True, verbose_name='Slug')),
            ],
            options={
                'verbose_name': 'Partenaire',
                'verbose_name_plural': 'Partenaires',
                'ordering': ['nom'],
            },
        ),
        migrations.CreateModel(
            name='PrepaCompGlobal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('annee', models.PositiveIntegerField()),
                ('total_candidats', models.PositiveIntegerField(default=0)),
                ('total_prescriptions', models.PositiveIntegerField(default=0)),
                ('total_presents', models.PositiveIntegerField(default=0)),
                ('total_places_ouvertes', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Prépa Comp Global',
                'verbose_name_plural': 'Prépas Comp Global',
            },
        ),
        migrations.CreateModel(
            name='Prospection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_prospection', models.DateTimeField(default=django.utils.timezone.now, help_text='Date à laquelle la prospection a été initiée', verbose_name='Date de la prospection')),
                ('motif', models.CharField(choices=[('POEI', 'POEI'), ('apprentissage', 'Apprentissage'), ('VAE', 'VAE'), ('partenariat', 'Établir un partenariat'), ('autre', 'Autre')], default='prise_contact', help_text='Raison principale de cette prospection', max_length=30, verbose_name='Motif de la prospection')),
                ('statut', models.CharField(choices=[('a_faire', 'À faire'), ('en_cours', 'En cours'), ('a_relancer', 'À relancer'), ('acceptee', 'Acceptée'), ('refusee', 'Refusée'), ('annulee', 'Annulée'), ('non_renseigne', 'Non renseigné')], default='a_faire', help_text='État actuel de la prospection', max_length=20, verbose_name='Statut de la prospection')),
                ('objectif', models.CharField(choices=[('prise_contact', 'Prise de contact'), ('rendez_vous', 'Obtenir un rendez-vous'), ('presentation_offre', 'Présentation d’une offre'), ('contrat', 'Signer un contrat'), ('partenariat', 'Établir un partenariat'), ('autre', 'Autre')], default='prise_contact', help_text='But visé par cette prospection', max_length=30, verbose_name='Objectif de la prospection')),
                ('commentaire', models.TextField(blank=True, help_text='Notes et observations sur la prospection', null=True, verbose_name='Commentaires de la prospection')),
            ],
            options={
                'verbose_name': 'Suivi de la prospection',
                'verbose_name_plural': 'Suivis des prospections',
                'ordering': ['-date_prospection'],
            },
        ),
        migrations.CreateModel(
            name='Rapport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(max_length=255, verbose_name='Nom du rapport')),
                ('type_rapport', models.CharField(choices=[('occupation', "Rapport d'occupation des formations"), ('centre', 'Rapport de performance par centre'), ('statut', 'Rapport de suivi des statuts'), ('evenement', "Rapport d'efficacité des événements"), ('recrutement', 'Rapport de suivi du recrutement'), ('partenaire', "Rapport d'activité des partenaires"), ('repartition', 'Rapport de répartition des partenaires'), ('periodique', 'Rapport périodique'), ('annuel', 'Rapport annuel consolidé'), ('utilisateur', "Rapport d'activité utilisateurs")], max_length=50, verbose_name='Type de rapport')),
                ('periode', models.CharField(choices=[('quotidien', 'Quotidien'), ('hebdomadaire', 'Hebdomadaire'), ('mensuel', 'Mensuel'), ('trimestriel', 'Trimestriel'), ('annuel', 'Annuel'), ('personnalise', 'Période personnalisée')], max_length=50, verbose_name='Périodicité')),
                ('date_debut', models.DateField(verbose_name='Date de début')),
                ('date_fin', models.DateField(verbose_name='Date de fin')),
                ('format', models.CharField(choices=[('pdf', 'PDF'), ('excel', 'Excel'), ('csv', 'CSV'), ('html', 'HTML')], default='html', max_length=10, verbose_name='Format')),
                ('donnees', models.JSONField(default=dict, verbose_name='Données du rapport')),
                ('date_generation', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date de génération')),
                ('temps_generation', models.FloatField(blank=True, null=True, verbose_name='Temps de génération (s)')),
            ],
            options={
                'verbose_name': 'Rapport',
                'verbose_name_plural': 'Rapports',
                'ordering': ['-date_generation'],
            },
        ),
        migrations.CreateModel(
            name='Semaine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_debut', models.DateField()),
                ('date_fin', models.DateField()),
                ('numero_semaine', models.PositiveIntegerField()),
                ('mois', models.PositiveIntegerField()),
                ('annee', models.PositiveIntegerField()),
                ('objectif_hebdo_prepa', models.PositiveIntegerField(default=0)),
                ('nombre_candidats', models.PositiveIntegerField(default=0)),
                ('nombre_prescriptions', models.PositiveIntegerField(default=0)),
                ('nombre_adhesions', models.PositiveIntegerField(default=0)),
                ('nombre_presents', models.PositiveIntegerField(default=0)),
                ('nombre_places_ouvertes', models.PositiveIntegerField(default=0)),
                ('departements', models.JSONField(blank=True, default=dict, null=True)),
            ],
            options={
                'verbose_name': 'Semaine',
                'verbose_name_plural': 'Semaines',
                'ordering': ['-date_debut'],
            },
        ),
        migrations.CreateModel(
            name='Statut',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(choices=[('non_defini', 'Non défini'), ('recrutement_en_cours', 'Recrutement en cours'), ('formation_en_cours', 'Formation en cours'), ('formation_a_annuler', 'Formation à annuler'), ('formation_a_repousser', 'Formation à repousser'), ('formation_annulee', 'Formation annulée'), ('pleine', 'Pleine'), ('quasi_pleine', 'Quasi-pleine'), ('autre', 'Autre')], max_length=100, verbose_name='Nom du statut')),
                ('couleur', models.CharField(blank=True, help_text='Couleur hexadécimale (#RRGGBB).', max_length=7, verbose_name='Couleur')),
                ('description_autre', models.CharField(blank=True, max_length=255, null=True, verbose_name='Description personnalisée')),
            ],
            options={
                'verbose_name': 'Statut',
                'verbose_name_plural': 'Statuts',
                'ordering': ['nom'],
            },
        ),
        migrations.CreateModel(
            name='TypeOffre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, help_text="Date et heure de création de l'enregistrement", verbose_name='Date de création')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Date et heure de la dernière modification', verbose_name='Dernière mise à jour')),
                ('nom', models.CharField(choices=[('crif', 'CRIF'), ('alternance', 'Alternance'), ('poec', 'POEC'), ('poei', 'POEI'), ('tosa', 'TOSA'), ('autre', 'Autre'), ('non_defini', 'Non défini')], default='non_defini', help_text="Sélectionnez le type d'offre de formation parmi les choix prédéfinis", max_length=100, verbose_name="Type d'offre")),
                ('autre', models.CharField(blank=True, help_text="Si vous avez choisi 'Autre', précisez le type d'offre personnalisé", max_length=255, verbose_name='Autre (personnalisé)')),
                ('couleur', models.CharField(default='#6c757d', help_text="Code couleur hexadécimal (ex: #FF5733) pour l'affichage visuel", max_length=7, verbose_name='Couleur associée (hexadécimal)')),
            ],
            options={
                'verbose_name': "Type d'offre",
                'verbose_name_plural': "Types d'offres",
                'ordering': ['nom'],
                'indexes': [models.Index(fields=['nom'], name='rap_app_typ_nom_d4cbe0_idx'), models.Index(fields=['autre'], name='rap_app_typ_autre_76e40c_idx')],
            },
        ),
        migrations.AddConstraint(
            model_name='typeoffre',
            constraint=models.UniqueConstraint(condition=models.Q(('autre__isnull', False), ('nom', 'autre')), fields=('autre',), name='unique_autre_non_null'),
        ),
        migrations.AddField(
            model_name='semaine',
            name='centre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rap_app.centre'),
        ),
        migrations.AddField(
            model_name='rapport',
            name='centre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='rap_app.centre', verbose_name='Centre'),
        ),
        migrations.AddField(
            model_name='rapport',
            name='formation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='rapports', to='rap_app.formation'),
        ),
        migrations.AddField(
            model_name='rapport',
            name='statut',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='rap_app.statut', verbose_name='Statut'),
        ),
        migrations.AddField(
            model_name='rapport',
            name='type_offre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='rap_app.typeoffre', verbose_name="Type d'offre"),
        ),
        migrations.AddField(
            model_name='rapport',
            name='utilisateur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Généré par'),
        ),
        migrations.AddField(
            model_name='prospection',
            name='company',
            field=models.ForeignKey(help_text='Entreprise ciblée par cette prospection', on_delete=django.db.models.deletion.CASCADE, related_name='prospections', to='rap_app.company', verbose_name='Entreprise'),
        ),
        migrations.AddField(
            model_name='prospection',
            name='formation',
            field=models.ForeignKey(blank=True, help_text='Formation associée à cette prospection (facultatif)', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='prospections', to='rap_app.formation', verbose_name='Formation en lien'),
        ),
        migrations.AddField(
            model_name='prospection',
            name='responsable',
            field=models.ForeignKey(blank=True, help_text='Personne en charge de cette prospection', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Responsable de la prospection'),
        ),
        migrations.AddField(
            model_name='prepacompglobal',
            name='centre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rap_app.centre'),
        ),
        migrations.AddIndex(
            model_name='partenaire',
            index=models.Index(fields=['nom'], name='rap_app_par_nom_983061_idx'),
        ),
        migrations.AddIndex(
            model_name='partenaire',
            index=models.Index(fields=['secteur_activite'], name='rap_app_par_secteur_455cf4_idx'),
        ),
        migrations.AddIndex(
            model_name='partenaire',
            index=models.Index(fields=['slug'], name='rap_app_par_slug_09691e_idx'),
        ),
        migrations.AddField(
            model_name='historiqueprospection',
            name='modifie_par',
            field=models.ForeignKey(help_text='Utilisateur ayant effectué cette modification', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Modifié par'),
        ),
        migrations.AddField(
            model_name='historiqueprospection',
            name='prospection',
            field=models.ForeignKey(help_text='Prospection concernée par cet historique', on_delete=django.db.models.deletion.CASCADE, related_name='historiques', to='rap_app.prospection', verbose_name='Prospection'),
        ),
        migrations.AddField(
            model_name='historiqueformation',
            name='formation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='historiques', to='rap_app.formation'),
        ),
        migrations.AddField(
            model_name='historiqueformation',
            name='modifie_par',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='formation',
            name='centre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formations', to='rap_app.centre', verbose_name='Centre de formation'),
        ),
        migrations.AddField(
            model_name='formation',
            name='partenaires',
            field=models.ManyToManyField(blank=True, related_name='formations', to='rap_app.partenaire', verbose_name='Partenaires'),
        ),
        migrations.AddField(
            model_name='formation',
            name='statut',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formations', to='rap_app.statut', verbose_name='Statut de la formation'),
        ),
        migrations.AddField(
            model_name='formation',
            name='type_offre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formations', to='rap_app.typeoffre', verbose_name="Type d'offre"),
        ),
        migrations.AddField(
            model_name='formation',
            name='utilisateur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='formations_creees', to=settings.AUTH_USER_MODEL, verbose_name='Créé par'),
        ),
        migrations.AddField(
            model_name='evenement',
            name='formation',
            field=models.ForeignKey(blank=True, help_text='Formation à laquelle cet événement est rattaché', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='evenements', to='rap_app.formation', verbose_name='Formation associée'),
        ),
        migrations.AddField(
            model_name='document',
            name='formation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documents', to='rap_app.formation', verbose_name='Formation associée'),
        ),
        migrations.AddField(
            model_name='document',
            name='utilisateur',
            field=models.ForeignKey(help_text='Utilisateur ayant téléchargé le document', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Téléchargé par'),
        ),
        migrations.AddField(
            model_name='company',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='companies_created', to=settings.AUTH_USER_MODEL, verbose_name='Créé par'),
        ),
        migrations.AddField(
            model_name='commentaire',
            name='formation',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commentaires', to='rap_app.formation', verbose_name='Formation'),
        ),
        migrations.AddField(
            model_name='commentaire',
            name='utilisateur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='commentaires', to=settings.AUTH_USER_MODEL, verbose_name='Utilisateur associé'),
        ),
        migrations.AddIndex(
            model_name='centre',
            index=models.Index(fields=['nom'], name='rap_app_cen_nom_671da5_idx'),
        ),
        migrations.AddIndex(
            model_name='centre',
            index=models.Index(fields=['code_postal'], name='rap_app_cen_code_po_c9960c_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='semaine',
            unique_together={('numero_semaine', 'annee', 'centre')},
        ),
        migrations.AddIndex(
            model_name='prospection',
            index=models.Index(fields=['statut'], name='rap_app_pro_statut_84d25a_idx'),
        ),
        migrations.AddIndex(
            model_name='prospection',
            index=models.Index(fields=['date_prospection'], name='rap_app_pro_date_pr_5d71cf_idx'),
        ),
        migrations.AddIndex(
            model_name='prospection',
            index=models.Index(fields=['company'], name='rap_app_pro_company_bb2e93_idx'),
        ),
        migrations.AddIndex(
            model_name='prospection',
            index=models.Index(fields=['formation'], name='rap_app_pro_formati_986a4a_idx'),
        ),
        migrations.AddIndex(
            model_name='prospection',
            index=models.Index(fields=['responsable'], name='rap_app_pro_respons_fb7ec5_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='prepacompglobal',
            unique_together={('annee', 'centre')},
        ),
        migrations.AddIndex(
            model_name='historiqueprospection',
            index=models.Index(fields=['prospection'], name='rap_app_his_prospec_f00db9_idx'),
        ),
        migrations.AddIndex(
            model_name='historiqueprospection',
            index=models.Index(fields=['date_modification'], name='rap_app_his_date_mo_5b61b9_idx'),
        ),
        migrations.AddIndex(
            model_name='historiqueprospection',
            index=models.Index(fields=['prochain_contact'], name='rap_app_his_prochai_5f80db_idx'),
        ),
        migrations.AddIndex(
            model_name='formation',
            index=models.Index(fields=['start_date'], name='rap_app_for_start_d_4c1834_idx'),
        ),
        migrations.AddIndex(
            model_name='formation',
            index=models.Index(fields=['end_date'], name='rap_app_for_end_dat_e7d2c9_idx'),
        ),
        migrations.AddIndex(
            model_name='formation',
            index=models.Index(fields=['nom'], name='rap_app_for_nom_27c494_idx'),
        ),
        migrations.AddIndex(
            model_name='evenement',
            index=models.Index(fields=['event_date'], name='rap_app_eve_event_d_758395_idx'),
        ),
        migrations.AddIndex(
            model_name='evenement',
            index=models.Index(fields=['type_evenement'], name='rap_app_eve_type_ev_11d24c_idx'),
        ),
        migrations.AddIndex(
            model_name='evenement',
            index=models.Index(fields=['formation'], name='rap_app_eve_formati_3e51e7_idx'),
        ),
        migrations.AddIndex(
            model_name='document',
            index=models.Index(fields=['nom_fichier'], name='rap_app_doc_nom_fic_b4d61d_idx'),
        ),
        migrations.AddIndex(
            model_name='document',
            index=models.Index(fields=['formation'], name='rap_app_doc_formati_399b58_idx'),
        ),
        migrations.AddIndex(
            model_name='document',
            index=models.Index(fields=['type_document'], name='rap_app_doc_type_do_ef9a30_idx'),
        ),
        migrations.AddIndex(
            model_name='company',
            index=models.Index(fields=['name'], name='company_name_idx'),
        ),
        migrations.AddIndex(
            model_name='company',
            index=models.Index(fields=['city'], name='company_city_idx'),
        ),
        migrations.AddIndex(
            model_name='company',
            index=models.Index(fields=['sector_name'], name='company_sector_idx'),
        ),
        migrations.AddIndex(
            model_name='company',
            index=models.Index(fields=['zip_code'], name='company_zipcode_idx'),
        ),
        migrations.AddIndex(
            model_name='commentaire',
            index=models.Index(fields=['created_at'], name='rap_app_com_created_aad49b_idx'),
        ),
        migrations.AddIndex(
            model_name='commentaire',
            index=models.Index(fields=['formation'], name='rap_app_com_formati_0c3422_idx'),
        ),
    ]



================================================
FILE: rap_app/migrations/0002_prepacompglobal_total.py
================================================
# Generated by Django 4.2.7 on 2025-03-27 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='prepacompglobal',
            name='total',
            field=models.PositiveIntegerField(default=0),
        ),
    ]



================================================
FILE: rap_app/migrations/0003_remove_prepacompglobal_total.py
================================================
# Generated by Django 4.2.7 on 2025-03-27 19:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0002_prepacompglobal_total'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prepacompglobal',
            name='total',
        ),
    ]



================================================
FILE: rap_app/migrations/0004_prepacompglobal_adhesions.py
================================================
# Generated by Django 4.2.7 on 2025-03-27 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0003_remove_prepacompglobal_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='prepacompglobal',
            name='adhesions',
            field=models.PositiveIntegerField(default=0),
        ),
    ]



================================================
FILE: rap_app/migrations/0005_alter_prepacompglobal_options_alter_semaine_options_and_more.py
================================================
# Generated by Django 4.2.7 on 2025-03-28 17:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0004_prepacompglobal_adhesions'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='prepacompglobal',
            options={'verbose_name': 'Bilan global PrépaComp', 'verbose_name_plural': 'Bilans globaux PrépaComp'},
        ),
        migrations.AlterModelOptions(
            name='semaine',
            options={'ordering': ['-date_debut_semaine'], 'verbose_name': 'Semaine', 'verbose_name_plural': 'Semaines'},
        ),
        migrations.RenameField(
            model_name='semaine',
            old_name='date_debut',
            new_name='date_debut_semaine',
        ),
        migrations.RenameField(
            model_name='semaine',
            old_name='date_fin',
            new_name='date_fin_semaine',
        ),
        migrations.RenameField(
            model_name='semaine',
            old_name='nombre_candidats',
            new_name='nombre_presents_ic',
        ),
        migrations.RenameField(
            model_name='semaine',
            old_name='nombre_presents',
            new_name='objectif_annuel_prepa',
        ),
        migrations.AlterUniqueTogether(
            name='prepacompglobal',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='centre',
            name='objectif_hebdomadaire_prepa',
        ),
        migrations.AddField(
            model_name='semaine',
            name='nombre_par_atelier',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AddField(
            model_name='semaine',
            name='objectif_mensuel_prepa',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='prepacompglobal',
            name='centre',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='rap_app.centre'),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='prepacompglobal',
            unique_together={('centre', 'annee')},
        ),
    ]



================================================
FILE: rap_app/migrations/0006_alter_prepacompglobal_centre.py
================================================
# Generated by Django 4.2.7 on 2025-03-28 17:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0005_alter_prepacompglobal_options_alter_semaine_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prepacompglobal',
            name='centre',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rap_app.centre'),
        ),
    ]



================================================
FILE: rap_app/migrations/0007_centre_objectif_hebdomadaire_prepa.py
================================================
# Generated by Django 4.2.7 on 2025-03-28 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0006_alter_prepacompglobal_centre'),
    ]

    operations = [
        migrations.AddField(
            model_name='centre',
            name='objectif_hebdomadaire_prepa',
            field=models.PositiveIntegerField(blank=True, default=0, null=True),
        ),
    ]



================================================
FILE: rap_app/migrations/0008_vae_suivijury_historiquestatutvae_and_more.py
================================================
# Generated by Django 4.2.7 on 2025-03-29 20:16

from decimal import Decimal
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0007_centre_objectif_hebdomadaire_prepa'),
    ]

    operations = [
        migrations.CreateModel(
            name='VAE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reference', models.CharField(blank=True, max_length=50, verbose_name='Référence')),
                ('date_creation', models.DateField(help_text="Date à laquelle la VAE a été créée, pas nécessairement aujourd'hui", verbose_name='Date de création')),
                ('date_saisie', models.DateTimeField(auto_now_add=True, verbose_name='Date de saisie dans le système')),
                ('statut', models.CharField(choices=[('info', "Demande d'informations"), ('dossier', 'Dossier en cours'), ('attente_financement', 'En attente de financement'), ('accompagnement', 'Accompagnement en cours'), ('jury', 'En attente de jury'), ('terminee', 'VAE terminée'), ('abandonnee', 'VAE abandonnée')], default='info', max_length=20, verbose_name='Statut')),
                ('date_modification', models.DateTimeField(auto_now=True, verbose_name='Date de dernière modification')),
                ('commentaire', models.TextField(blank=True, verbose_name='Commentaire')),
                ('centre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vaes', to='rap_app.centre', verbose_name='Centre')),
            ],
            options={
                'verbose_name': 'VAE',
                'verbose_name_plural': 'VAEs',
                'ordering': ['-date_creation', 'centre'],
            },
        ),
        migrations.CreateModel(
            name='SuiviJury',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('annee', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(2000)], verbose_name='Année')),
                ('mois', models.PositiveSmallIntegerField(choices=[(1, 'Janvier'), (2, 'Février'), (3, 'Mars'), (4, 'Avril'), (5, 'Mai'), (6, 'Juin'), (7, 'Juillet'), (8, 'Août'), (9, 'Septembre'), (10, 'Octobre'), (11, 'Novembre'), (12, 'Décembre')], verbose_name='Mois')),
                ('objectif_jury', models.PositiveIntegerField(default=0, verbose_name='Objectif jury')),
                ('jurys_realises', models.PositiveIntegerField(default=0, verbose_name='Jurys réalisés')),
                ('pourcentage_mensuel', models.DecimalField(decimal_places=2, default=Decimal('0.00'), editable=False, max_digits=6, verbose_name='Pourcentage mensuel')),
                ('centre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rap_app.centre', verbose_name='Centre')),
            ],
            options={
                'verbose_name': 'Suivi des jurys',
                'verbose_name_plural': 'Suivis des jurys',
                'ordering': ['annee', 'mois', 'centre'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HistoriqueStatutVAE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statut', models.CharField(choices=[('info', "Demande d'informations"), ('dossier', 'Dossier en cours'), ('attente_financement', 'En attente de financement'), ('accompagnement', 'Accompagnement en cours'), ('jury', 'En attente de jury'), ('terminee', 'VAE terminée'), ('abandonnee', 'VAE abandonnée')], max_length=20, verbose_name='Statut')),
                ('date_changement_effectif', models.DateField(help_text="Date à laquelle le changement de statut a eu lieu (pas nécessairement aujourd'hui)", verbose_name='Date effective du changement')),
                ('date_saisie', models.DateTimeField(auto_now_add=True, verbose_name='Date de saisie dans le système')),
                ('commentaire', models.TextField(blank=True, verbose_name='Commentaire')),
                ('vae', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='historique_statuts', to='rap_app.vae', verbose_name='VAE')),
            ],
            options={
                'verbose_name': 'Historique de statut VAE',
                'verbose_name_plural': 'Historiques de statuts VAE',
                'ordering': ['-date_changement_effectif', '-date_saisie'],
            },
        ),
        migrations.AddIndex(
            model_name='vae',
            index=models.Index(fields=['centre', 'statut'], name='rap_app_vae_centre__309bad_idx'),
        ),
        migrations.AddIndex(
            model_name='vae',
            index=models.Index(fields=['date_creation'], name='rap_app_vae_date_cr_61a6f5_idx'),
        ),
        migrations.AddIndex(
            model_name='suivijury',
            index=models.Index(fields=['centre', 'annee', 'mois'], name='rap_app_sui_centre__1773ec_idx'),
        ),
        migrations.AlterUniqueTogether(
            name='suivijury',
            unique_together={('centre', 'annee', 'mois')},
        ),
    ]



================================================
FILE: rap_app/migrations/0009_centre_objectif_annuel_jury_and_more.py
================================================
# Generated by Django 4.2.7 on 2025-03-30 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rap_app', '0008_vae_suivijury_historiquestatutvae_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='centre',
            name='objectif_annuel_jury',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='centre',
            name='objectif_mensuel_jury',
            field=models.PositiveIntegerField(default=0),
        ),
    ]



================================================
FILE: rap_app/migrations/__init__.py
================================================




================================================
FILE: rap_app/models/__init__.py
================================================
from .base import BaseModel
from .centres import Centre
from .statut import Statut
from .types_offre import TypeOffre
from .formations import Formation, FormationManager, HistoriqueFormation
from .commentaires import Commentaire
from .evenements import Evenement
from .documents import Document
from .partenaires import Partenaire
from .rapports import Rapport  
from .company import Company
from .prospection import Prospection

# ✅ Import des nouveaux modèles pour la prépa comp
from .prepacomp import  Semaine

__all__ = [
    'BaseModel',
    'Centre',
    'Statut',
    'TypeOffre',
    'Formation',
    'FormationManager',
    'HistoriqueFormation',
    'Commentaire',
    'Partenaire',
    'Evenement',
    'Document',
    'Rapport',
    'Prospection',
    'Company',
    'Semaine',
]



================================================
FILE: rap_app/models/base.py
================================================
import logging
from django.db import models
from django.utils.timezone import now  # Utilise Django timezone pour éviter les problèmes UTC

# Configuration du logger pour ce module
logger = logging.getLogger(__name__)

class BaseModel(models.Model):
    """
    Modèle de base abstrait pour tous les modèles de l'application.
    
    Ce modèle fournit deux champs de date/heure automatiques :
    - created_at : Enregistre la date et l'heure de création de l'objet
    - updated_at : Mise à jour automatique à chaque modification de l'objet
    
    L'utilisation de ce modèle comme classe parente permet de :
    1. Standardiser le suivi temporel des données
    2. Éviter la duplication de code dans chaque modèle
    3. Faciliter les requêtes basées sur les dates (filtrage, tri)
    
    Exemple d'usage :
        class MonModele(BaseModel):
            nom = models.CharField(max_length=100)
            # ... autres champs ...
    """

    created_at = models.DateTimeField(
        default=now, 
        editable=False, 
        verbose_name="Date de création",
        help_text="Date et heure de création de l'enregistrement"
    )
    
    updated_at = models.DateTimeField(
        auto_now=True, 
        verbose_name="Dernière mise à jour",
        help_text="Date et heure de la dernière modification"
    )

    def save(self, *args, **kwargs):
        """
        Surcharge de la méthode save pour ajouter des logs
        et des validations supplémentaires si nécessaire.
        """
        # Déterminer s'il s'agit d'une création ou d'une mise à jour
        is_new = self.pk is None
        
        # Log l'opération
        if is_new:
            logger.debug(f"Création d'un nouvel objet {self.__class__.__name__}")
        else:
            logger.debug(f"Mise à jour de l'objet {self.__class__.__name__} #{self.pk}")
            
        # Appel à la méthode save parente
        super().save(*args, **kwargs)
        
        # Log après sauvegarde
        logger.debug(f"Objet {self.__class__.__name__} #{self.pk} sauvegardé avec succès")

    class Meta:
        abstract = True  # Empêche Django de créer une table pour ce modèle


================================================
FILE: rap_app/models/centres.py
================================================
import logging
from django.db import models
from django.core.validators import RegexValidator
from django.urls import reverse
from .base import BaseModel

# Configuration du logger pour ce module
logger = logging.getLogger(__name__)

class Centre(BaseModel):
    """
    Modèle représentant un centre de formation.

    Hérite de `BaseModel` qui ajoute les champs :
    - `created_at` : Date et heure de création de l'enregistrement.
    - `updated_at` : Date et heure de la dernière modification.

    Champs spécifiques :
    - `nom` : Nom du centre de formation (obligatoire et unique).
    - `code_postal` : Code postal du centre (optionnel).
      * Doit contenir exactement 5 chiffres (validation par regex).
    
    Méthodes :
    - `__str__` : Retourne le nom du centre.
    - `get_absolute_url` : Retourne l'URL du détail du centre.
    - `full_address` : Retourne l'adresse complète (utile pour affichage futur).

    Options du modèle :
    - `verbose_name` : Nom affiché au singulier dans l'interface d'administration.
    - `verbose_name_plural` : Nom affiché au pluriel dans l'interface d'administration.
    - `ordering` : Trie les centres par nom par défaut.
    - `indexes` : Ajoute des index sur `nom` et `code_postal` pour optimiser les recherches.
    """

    nom = models.CharField(
        max_length=255,
        unique=True,
        verbose_name="Nom du centre",
        help_text="Nom complet du centre de formation (doit être unique)"
    )

    code_postal = models.CharField(
        max_length=5,
        null=True,
        blank=True,
        verbose_name="Code postal",
        help_text="Code postal à 5 chiffres du centre",
        validators=[
            RegexValidator(
                regex=r'^\d{5}$',
                message="Le code postal doit contenir exactement 5 chiffres"
            )
        ]
    )

    """Champs pour le model prepa et vae_jury"""
    objectif_annuel_prepa = models.PositiveIntegerField(null=True, blank=True)
    objectif_hebdomadaire_prepa = models.PositiveIntegerField(default=0, blank=True, null=True)
    objectif_annuel_jury = models.PositiveIntegerField(default=0)
    objectif_mensuel_jury = models.PositiveIntegerField(default=0)
    def __str__(self):
        """Retourne le nom du centre pour une meilleure lisibilité."""
        return self.nom

    def get_absolute_url(self):
        """
        Retourne l'URL du détail du centre.
        Utile pour les vues génériques et les redirections après une création/modification.
        """
        return reverse('centre-detail', kwargs={'pk': self.pk})

    def full_address(self):
        """
        Retourne une version complète de l'adresse (utile si d'autres champs d'adresse sont ajoutés).
        """
        address = self.nom
        if self.code_postal:
            address += f" ({self.code_postal})"
        return address
        
    def save(self, *args, **kwargs):
        """
        Surcharge de la méthode save pour inclure des validations supplémentaires
        et journaliser les opérations sur les centres.
        """
        is_new = self.pk is None
        
        # Création
        if is_new:
            logger.info(f"Création d'un nouveau centre: {self.nom}")
        # Modification
        else:
            old_centre = Centre.objects.get(pk=self.pk)
            modifications = []
            
            if old_centre.nom != self.nom:
                modifications.append(f"nom: '{old_centre.nom}' → '{self.nom}'")
            
            if old_centre.code_postal != self.code_postal:
                modifications.append(f"code_postal: '{old_centre.code_postal}' → '{self.code_postal}'")
                
            if modifications:
                logger.info(f"Modification du centre #{self.pk}: {', '.join(modifications)}")
        
            # Calculer automatiquement l'objectif hebdomadaire si non défini
            if self.objectif_annuel_prepa and not self.objectif_hebdomadaire_prepa:
                self.objectif_hebdomadaire_prepa = self.objectif_annuel_prepa // 52

        # Appel à la méthode parente
        super().save(*args, **kwargs)
        
        # Log après sauvegarde
        if is_new:
            logger.info(f"Centre #{self.pk} '{self.nom}' créé avec succès")

    class Meta:
        verbose_name = "Centre"
        verbose_name_plural = "Centres"
        ordering = ['nom']
        indexes = [
            models.Index(fields=['nom']),
            models.Index(fields=['code_postal']),
        ]


================================================
FILE: rap_app/models/commentaires.py
================================================
import logging
from django.db import models
from django.db.models import Q
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.utils.html import strip_tags
from .base import BaseModel
from .formations import Formation
from django.contrib.auth import get_user_model

# Configuration du logger
logger = logging.getLogger(__name__)

User = get_user_model()


class Commentaire(BaseModel):
    """
    Modèle représentant un commentaire associé à une formation.
    
    Ce modèle permet de stocker les commentaires des utilisateurs sur les formations,
    avec éventuellement une indication du niveau de saturation si le commentaire
    concerne le remplissage de la formation.
    
    Relations:
    - Lié à une formation (ForeignKey vers Formation)
    - Lié à un utilisateur qui a créé le commentaire (ForeignKey vers User)
    
    Champs spécifiques:
    - contenu: Texte du commentaire
    - saturation: Valeur en pourcentage (optionnelle)
    """

    formation = models.ForeignKey(
        Formation, 
        on_delete=models.CASCADE, 
        related_name="commentaires", 
        verbose_name="Formation"
    )
    
    utilisateur = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        blank=True, 
        null=True, 
        related_name="commentaires", 
        verbose_name="Utilisateur associé"
    )
    
    contenu = models.TextField(
        verbose_name="Contenu du commentaire"
    )
    
    saturation = models.PositiveIntegerField(
        null=True, 
        blank=True,
        verbose_name="Niveau de saturation (%)"
    )

    def __str__(self):
        """
        Retourne une représentation lisible du commentaire.
        """
        username = self.utilisateur.username if self.utilisateur else "Anonyme"
        return f"Commentaire de {username} sur {self.formation.nom} ({self.created_at.strftime('%d/%m/%Y')})"

    def save(self, *args, **kwargs):
        """
        Surcharge de la méthode save pour ajouter des logs et validations.
        """
        is_new = self.pk is None
        
        # Validation du niveau de saturation
        if self.saturation is not None and (self.saturation < 0 or self.saturation > 100):
            logger.warning(f"Tentative de définir une saturation invalide ({self.saturation}%) pour le commentaire.")
            self.saturation = max(0, min(100, self.saturation))  # Limiter entre 0 et 100
        
        # Nettoyer le contenu des balises HTML potentiellement dangereuses
        cleaned_content = strip_tags(self.contenu)
        if cleaned_content != self.contenu:
            logger.info(f"Nettoyage des balises HTML du commentaire")
            self.contenu = cleaned_content
        
        # Journalisation
        if is_new:
            user_str = self.utilisateur.username if self.utilisateur else "Anonyme"
            formation_str = self.formation.nom if self.formation else "N/A"
            logger.info(
                f"Création d'un commentaire par {user_str} sur formation '{formation_str}'. "
                f"Saturation: {self.saturation}%"
            )
        else:
            logger.info(f"Mise à jour du commentaire #{self.pk}")
        
        super().save(*args, **kwargs)

    def get_content_preview(self, length=50):
        """
        Retourne un aperçu du contenu du commentaire limité à une certaine longueur.
        """
        if len(self.contenu) <= length:
            return self.contenu
        return f"{self.contenu[:length]}..."

    def is_recent(self, days=7):
        """
        Vérifie si le commentaire a été créé récemment (dans les X derniers jours).
        """
        from django.utils import timezone
        from datetime import timedelta
        return self.created_at >= (timezone.now() - timedelta(days=days))

    class Meta:
        verbose_name = "Commentaire"
        verbose_name_plural = "Commentaires"
        ordering = ['formation', '-created_at']
        indexes = [
            models.Index(fields=['created_at']),
            models.Index(fields=['formation']),
        ]


    @classmethod
    def get_all_commentaires(cls, formation_id=None, utilisateur_id=None, search_query=None, order_by="-created_at"):
        """
        Récupère tous les commentaires avec options de filtres.
        
        Paramètres:
        - formation_id: Filtrer par formation spécifique
        - utilisateur_id: Filtrer par utilisateur spécifique
        - search_query: Recherche textuelle dans le contenu
        - order_by: Champ de tri (défaut: commentaires les plus récents en premier)
        """
        logger.debug(
            f"Recherche de commentaires avec filtres: "
            f"formation_id={formation_id}, utilisateur_id={utilisateur_id}, "
            f"search_query='{search_query}', tri par {order_by}"
        )
        
        queryset = cls.objects.select_related('formation', 'utilisateur').order_by(order_by)

        filters = Q()
        if formation_id:
            filters &= Q(formation_id=formation_id)
        if utilisateur_id:
            filters &= Q(utilisateur_id=utilisateur_id)
        if search_query:
            filters &= Q(contenu__icontains=search_query)

        queryset = queryset.filter(filters)
        count = queryset.count()
        
        logger.debug(f"Recherche de commentaires: {count} résultats trouvés")
        
        return queryset if queryset.exists() else cls.objects.none()  # Évite l'erreur avec un queryset vide


@receiver(post_save, sender=Commentaire)
def update_formation_saturation(sender, instance, **kwargs):
    """
    Met à jour la saturation et le dernier commentaire après un ajout.
    
    Ce signal est déclenché après chaque sauvegarde d'un commentaire et
    met à jour les informations associées dans la formation concernée.
    """
    if instance.formation:
        updates = {}

        if instance.saturation is not None:
            updates['saturation'] = instance.saturation
            logger.info(
                f"Mise à jour de la saturation de la formation #{instance.formation.id} "
                f"'{instance.formation.nom}' à {instance.saturation}%"
            )

        dernier_commentaire = Commentaire.objects.filter(formation=instance.formation).order_by('-created_at').first()
        updates['dernier_commentaire'] = dernier_commentaire.contenu if dernier_commentaire else ""

        if updates:
            Formation.objects.filter(id=instance.formation.id).update(**updates)
            logger.debug(f"Formation #{instance.formation.id} mise à jour suite à un commentaire")


@receiver(post_delete, sender=Commentaire)
def handle_commentaire_delete(sender, instance, **kwargs):
    """
    Met à jour la formation après la suppression d'un commentaire.
    
    Ce signal est déclenché après la suppression d'un commentaire et
    met à jour le dernier commentaire affiché dans la formation.
    """
    if instance.formation:
        logger.info(f"Commentaire #{instance.pk} supprimé, mise à jour de la formation #{instance.formation.id}")
        
        dernier_commentaire = Commentaire.objects.filter(formation=instance.formation).order_by('-created_at').first()
        Formation.objects.filter(id=instance.formation.id).update(
            dernier_commentaire=dernier_commentaire.contenu if dernier_commentaire else ""
        )
        
        logger.debug(
            f"Dernier commentaire de la formation #{instance.formation.id} mis à jour "
            f"après suppression d'un commentaire"
        )




================================================
FILE: rap_app/models/company.py
================================================
from django.db import models
from django.core.validators import RegexValidator
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth import get_user_model
import logging

# Configuration du logger pour enregistrer les actions (création, modification)
logger = logging.getLogger(__name__)

# Regex pour valider un numéro de téléphone français
phone_regex = RegexValidator(
    regex=r'^(0[1-9]\d{8})$|^(?:\+33|0033)[1-9]\d{8}$',
    message="Entrez un numéro de téléphone français valide commençant par 01, 02, ..., 06 ou 07."
)

# Regex pour valider un code postal à 5 chiffres
zip_code_regex = RegexValidator(
    regex=r'^[0-9]{5}$',
    message="Le code postal doit être composé de 5 chiffres."
)

# Regex pour s'assurer que l'URL commence par http:// ou https://
url_regex = RegexValidator(
    regex=r'^(http|https)://',
    message="L'URL doit commencer par http:// ou https://"
)

# Liste des types d'action qu'une entreprise peut proposer
CHOICES_TYPE_OF_ACTION = [
    ('recrutement_emploi', 'Recrutement - Emploi'),
    ('recrutement_stage', 'Recrutement - Stage'),
    ('recrutement_apprentissage', 'Recrutement - Apprentissage'),
    ('presentation_metier_entreprise', 'Présentation de métier(s)/entreprise'),
    ('visite_entreprise', "Visite de l'entreprise"),
    ('coaching', 'Coaching'),
    ('autre', 'Autre'),
    ('partenariat', 'Partenariat'),
    ('non_definie', 'Non définie')
]

# Réseaux sociaux possibles pour une entreprise
CHOICES_SOCIAL_NETWORK = [
    ("facebook", "Facebook"),
    ("twitter", "Twitter"),
    ("instagram", "Instagram"),
    ("linkedin", "LinkedIn"),
    ("tiktok", "TikTok"),
]

# Récupère le modèle utilisateur personnalisé si défini
User = get_user_model()

class Company(models.Model):
    """
    Modèle représentant une entreprise avec ses coordonnées, contacts, site web, secteur, etc.
    """
    # Pour les requêtes : Company.objects.all() utilisera ce manager par défaut
    objects = models.Manager()

    # --- Informations générales ---
    name = models.CharField(
        max_length=100,
        null=True, blank=True,
        verbose_name="Nom",
        help_text="Nom de l'entreprise"
    )

    street_name = models.CharField(
        max_length=200,
        null=True, blank=True,
        verbose_name="Numéro et nom de la rue",
        help_text="Exemple: 123 rue de la République"
    )

    zip_code = models.CharField(
        max_length=5,
        validators=[zip_code_regex],  # Validation du format
        verbose_name="Code postal",
        blank=True, null=True,
        help_text="Code postal à 5 chiffres"
    )

    city = models.CharField(
        max_length=100,
        verbose_name="Ville",
        blank=True, null=True,
        help_text="Ville du siège social"
    )

    country = models.CharField(
        max_length=100,
        default="France",
        verbose_name="Pays",
        blank=True, null=True
    )

    # --- Contact principal ---
    contact_name = models.CharField(
        max_length=255,
        null=True, blank=True,
        verbose_name="Nom du contact",
        help_text="Nom et prénom du contact principal"
    )

    contact_email = models.EmailField(
        null=True, blank=True,
        verbose_name="Adresse email du contact",
        help_text="Email professionnel du contact"
    )

    contact_phone_number = models.CharField(
        max_length=20,
        validators=[phone_regex],  # Validation du numéro
        verbose_name="Numéro de téléphone du contact",
        blank=True, null=True,
        help_text="Format: 06XXXXXXXX ou +33XXXXXXXXX"
    )

    contact_job = models.CharField(
        max_length=255,
        null=True, blank=True,
        verbose_name="Métier du contact",
        help_text="Fonction ou poste du contact"
    )

    # --- Détails supplémentaires ---
    sector_name = models.CharField(
        max_length=200,
        null=True, blank=True,
        verbose_name="Secteur d'activité",
        help_text="Domaine d'activité principal de l'entreprise"
    )

    actions = models.CharField(
        max_length=50,
        null=True, blank=True,
        choices=CHOICES_TYPE_OF_ACTION,
        verbose_name="Actions",
        help_text="Type d'interaction possible avec cette entreprise"
    )

    action_description = models.CharField(
        max_length=5000,
        null=True, blank=True,
        verbose_name="Description de l'action",
        help_text="Détails sur l'action ou l'opportunité"
    )

    website = models.URLField(
        null=True, blank=True,
        validators=[url_regex],
        help_text="Site web de l'entreprise (avec http:// ou https://)"
    )

    social_network_url = models.CharField(
        max_length=200,
        verbose_name="URL du réseau social",
        null=True, blank=True,
        help_text="Lien vers le profil de l'entreprise sur un réseau social"
    )

    # --- Métadonnées ---
    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        verbose_name="Créé par",
        related_name="companies_created"
    )

    created_at = models.DateTimeField(
        default=timezone.now,
        editable=False,
        verbose_name="Contact créé le"
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        null=True, blank=True,
        verbose_name="Date de MAJ"
    )

    class Meta:
        verbose_name = 'entreprise'
        verbose_name_plural = 'entreprises'
        db_table = 'companies'  # Nom de la table dans la base de données
        ordering = ['-created_at']  # Tri par date de création descendante
        indexes = [  # Index pour optimiser les requêtes
            models.Index(fields=['name'], name='company_name_idx'),
            models.Index(fields=['city'], name='company_city_idx'),
            models.Index(fields=['sector_name'], name='company_sector_idx'),
            models.Index(fields=['zip_code'], name='company_zipcode_idx'),
        ]

    def __str__(self):
        # Représentation textuelle de l'entreprise dans l'admin
        return f"{self.name or 'Entreprise sans nom'} ({self.city or 'Ville non spécifiée'}) - {self.sector_name or 'Secteur inconnu'}"

    def get_absolute_url(self):
        # Pour les liens dans les templates : {{ object.get_absolute_url }}
        return reverse('company-detail', kwargs={'pk': self.pk})

    def get_full_address(self):
        """Retourne l'adresse complète formatée pour affichage."""
        parts = []
        if self.street_name:
            parts.append(self.street_name)
        if self.zip_code and self.city:
            parts.append(f"{self.zip_code} {self.city}")
        elif self.city:
            parts.append(self.city)
        if self.country and self.country != "France":
            parts.append(self.country)
        return ", ".join(parts) if parts else "Adresse non spécifiée"

    def get_contact_info(self):
        """Retourne les infos de contact formatées pour affichage."""
        parts = []
        if self.contact_name:
            parts.append(self.contact_name)
        if self.contact_job:
            parts.append(f"({self.contact_job})")
        if self.contact_email:
            parts.append(self.contact_email)
        if self.contact_phone_number:
            parts.append(self.contact_phone_number)
        return " - ".join(parts) if parts else "Aucun contact spécifié"

    def get_prospections_count(self):
        """Retourne le nombre de prospections associées à l'entreprise."""
        return self.prospections.count()

    def save(self, *args, **kwargs):
        """
        Surcharge de la méthode save() pour :
        - Nettoyer/normaliser les champs (email, nom)
        - Préfixer automatiquement les URLs si besoin
        - Logger les modifications dans les logs système
        """
        is_new = self.pk is None  # Vérifie si c'est une création

        # Nettoyage de base
        if self.name:
            self.name = self.name.strip()

        if self.contact_email:
            self.contact_email = self.contact_email.lower().strip()

        # Ajoute le préfixe https:// si l'utilisateur l'a oublié
        if self.website and not self.website.startswith(('http://', 'https://')):
            self.website = f"https://{self.website}"

        # Journalisation des modifications
        if is_new:
            logger.info(f"Création d'une nouvelle entreprise: {self.name or 'Sans nom'}")
        else:
            try:
                original = Company.objects.get(pk=self.pk)
                changes = []
                for field in ('name', 'city', 'contact_name', 'contact_email', 'sector_name'):
                    old_value = getattr(original, field)
                    new_value = getattr(self, field)
                    if old_value != new_value:
                        changes.append(f"{field}: '{old_value or 'Non spécifié'}' → '{new_value or 'Non spécifié'}'")
                if changes:
                    logger.info(f"Mise à jour de l'entreprise #{self.pk}: {', '.join(changes)}")
            except Company.DoesNotExist:
                logger.warning(f"Entreprise introuvable lors de la tentative de modification (ID: {self.pk})")

        super().save(*args, **kwargs)  # Appelle la méthode save() originale de Django



================================================
FILE: rap_app/models/documents.py
================================================
import logging
import os
import magic  # Nécessite l'installation de python-magic
from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings
from django.core.exceptions import ValidationError
from django.utils.html import escape
from .base import BaseModel
from .formations import Formation, User

# Configuration du logger
logger = logging.getLogger(__name__)

class Document(BaseModel):
    """
    Modèle représentant un document associé à une formation.
    
    Ce modèle permet de stocker et gérer différents types de documents
    (PDF, images, contrats...) avec validation de type et gestion automatique
    des fichiers physiques.
    
    Fonctionnalités:
    - Validation automatique du type de fichier par extension et contenu MIME
    - Calcul automatique de la taille du fichier
    - Suppression automatique des anciens fichiers lors d'un remplacement
    - Suppression automatique du fichier physique lors de la suppression de l'objet
    """

    # Définition des types de documents acceptés
    PDF = 'pdf'
    IMAGE = 'image'
    CONTRAT = 'contrat'
    AUTRE = 'autre'

    TYPE_DOCUMENT_CHOICES = [
        (PDF, 'PDF'),
        (IMAGE, 'Image'),
        (CONTRAT, 'Contrat signé'),
        (AUTRE, 'Autre'),
    ]

    # Champs du modèle
    formation = models.ForeignKey(
        Formation,
        on_delete=models.CASCADE,
        related_name="documents",
        verbose_name="Formation associée"
    )
    
    nom_fichier = models.CharField(
        max_length=255,
        verbose_name="Nom du fichier",
        db_index=True,
        help_text="Nom du fichier tel qu'il apparaîtra dans l'interface"
    )
    
    fichier = models.FileField(
        upload_to='formations/documents/',
        verbose_name="Fichier",
        help_text="Fichier à télécharger (types acceptés selon la catégorie)"
    )
    
    source = models.TextField(
        null=True, blank=True,
        verbose_name="Source du document",
        help_text="Source ou origine du document (optionnel)"
    )
    
    type_document = models.CharField(
        max_length=20,
        choices=TYPE_DOCUMENT_CHOICES,
        default=AUTRE,
        verbose_name="Type de document",
        help_text="Catégorie du document déterminant les types de fichiers acceptés"
    )
    
    taille_fichier = models.PositiveIntegerField(
        null=True, blank=True,
        verbose_name="Taille du fichier (Ko)",
        help_text="Taille du fichier en Ko (calculée automatiquement)"
    )
    
    utilisateur = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Téléchargé par",
        help_text="Utilisateur ayant téléchargé le document"
    )
    
    # Métadonnées détectées
    mime_type = models.CharField(
        max_length=100,
        blank=True, null=True,
        verbose_name="Type MIME",
        help_text="Type MIME détecté automatiquement"
    )

    def __str__(self):
        """
        Représentation lisible du document dans l'admin ou les logs.
        Affiche un nom tronqué s'il est trop long, suivi du type de document.
        """
        nom_tronque = self.nom_fichier[:50] + ('...' if len(self.nom_fichier) > 50 else '')
        return f"{nom_tronque} ({self.get_type_document_display()})"

    def clean(self):
        """
        Validation personnalisée à l'enregistrement:
        - Vérifie la correspondance entre type et extension
        - Valide le contenu MIME si possible
        - Nettoie le nom du fichier pour éviter les injections
        """
        super().clean()
        
        # Validation du fichier si présent
        if self.fichier and self.type_document:
            # Validation de l'extension
            validate_file_extension(self.fichier, self.type_document)
            
            # Validation du contenu MIME
            try:
                mime_type = magic.from_buffer(self.fichier.read(2048), mime=True)
                self.fichier.seek(0)  # Réinitialiser le pointeur
                self.mime_type = mime_type
                
                # Vérifier la cohérence du type MIME avec le type de document
                valid_mime_types = {
                    'pdf': ['application/pdf'],
                    'image': ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
                    'contrat': ['application/pdf', 'application/msword', 
                               'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
                    'autre': []  # Pas de restriction pour "Autre"
                }
                
                if (self.type_document != Document.AUTRE and 
                    valid_mime_types.get(self.type_document) and 
                    mime_type not in valid_mime_types.get(self.type_document)):
                    logger.warning(
                        f"Type MIME incohérent: '{mime_type}' pour un document de type '{self.type_document}'"
                    )
            except Exception as e:
                logger.warning(f"Impossible de valider le type MIME: {str(e)}")
                
        # Nettoyage du nom du fichier
        if self.nom_fichier:
            # Échapper les caractères spéciaux pour éviter les injections
            self.nom_fichier = escape(self.nom_fichier)
        
        # Taille maximale
        if self.fichier and hasattr(self.fichier, 'size'):
            taille_ko = self.fichier.size // 1024
        if taille_ko > 10 * 1024:  # 10 Mo
            raise ValidationError("Le fichier est trop volumineux (max. 10 Mo).")

    def save(self, *args, **kwargs):
        """
        Surcharge de la méthode save() pour:
        - Exécuter les validations personnalisées
        - Calculer automatiquement la taille du fichier
        - Journaliser les opérations
        """
        is_new = self.pk is None
        
        # Exécuter la validation
        self.full_clean()
        
        # Calcul de la taille du fichier
        if self.fichier and hasattr(self.fichier, 'size'):
            self.taille_fichier = max(1, self.fichier.size // 1024)  # Au moins 1 Ko
        
        # Journalisation
        if is_new:
            logger.info(
                f"Création d'un nouveau document '{self.nom_fichier}' "
                f"({self.get_type_document_display()}) "
                f"pour la formation #{self.formation_id if self.formation else 'N/A'}"
            )
        else:
            logger.info(f"Mise à jour du document #{self.pk}: '{self.nom_fichier}'")
        
        super().save(*args, **kwargs)
        
    def get_file_extension(self):
        """Retourne l'extension du fichier."""
        if self.fichier:
            _, ext = os.path.splitext(self.fichier.name)
            return ext.lower()
        return ""
    
    def get_icon_class(self):
        """
        Retourne une classe d'icône selon le type de document,
        utile pour l'affichage dans l'interface.
        """
        icons = {
            self.PDF: "fa-file-pdf",
            self.IMAGE: "fa-file-image",
            self.CONTRAT: "fa-file-contract",
            self.AUTRE: "fa-file",
        }
        return icons.get(self.type_document, "fa-file")
    
    def get_download_url(self):
        """Retourne l'URL de téléchargement du document."""
        if self.fichier:
            return self.fichier.url
        return None
    
    @property
    def extension(self):
        return self.get_file_extension().replace('.', '')
    

    class Meta:
        verbose_name = "Document"
        verbose_name_plural = "Documents"
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['nom_fichier']),
            models.Index(fields=['formation']),
            models.Index(fields=['type_document']),
        ]


# -------------------- VALIDATION --------------------
def validate_file_extension(value, type_doc=None):
    """
    Fonction utilitaire pour valider l'extension du fichier en fonction du type_document.
    
    Arguments:
        value: Le fichier à valider
        type_doc: Le type de document attendu (pdf, image, contrat, autre)
    
    Lève une ValidationError si l'extension ne correspond pas au type attendu.
    """
    ext = os.path.splitext(value.name)[1].lower()
    valid_extensions = {
        'pdf': ['.pdf'],
        'image': ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
        'contrat': ['.pdf', '.doc', '.docx'],
        'autre': []  # Autorise tout pour "Autre"
    }
    
    # Si aucun type n'est fourni ou si c'est "autre", on accepte le fichier
    if not type_doc or type_doc == Document.AUTRE:
        return
    
    # Vérifie si l'extension correspond au type fourni
    if ext not in valid_extensions.get(type_doc, []):
        error_msg = (f"Le fichier {value.name} ne correspond pas au type "
                    f"{dict(Document.TYPE_DOCUMENT_CHOICES).get(type_doc, type_doc)}. "
                    f"Extensions acceptées: {', '.join(valid_extensions.get(type_doc, []))}")
        logger.warning(f"Validation d'extension échouée: {error_msg}")
        raise ValidationError(error_msg)
    
    logger.debug(f"Extension validée pour le fichier {value.name}: {ext} (type: {type_doc})")


# -------------------- SIGNALS --------------------
@receiver(pre_save, sender=Document)
def supprimer_fichier_ancien(sender, instance, **kwargs):
    """
    Avant la sauvegarde: supprime l'ancien fichier si un nouveau est fourni.
    Permet d'éviter l'accumulation inutile de fichiers obsolètes.
    """
    if instance.pk:
        try:
            ancien_document = Document.objects.get(pk=instance.pk)
            if ancien_document.fichier and ancien_document.fichier != instance.fichier:
                ancien_fichier_path = os.path.join(settings.MEDIA_ROOT, ancien_document.fichier.name)
                if os.path.exists(ancien_fichier_path):
                    os.remove(ancien_fichier_path)
                    logger.info(f"Ancien fichier supprimé: {ancien_document.fichier.name}")
        except Document.DoesNotExist:
            logger.warning(f"Impossible de trouver l'ancien document #{instance.pk} pour supprimer le fichier")
        except Exception as e:
            logger.error(f"Erreur lors de la suppression de l'ancien fichier: {str(e)}")
    


@receiver(post_delete, sender=Document)
def supprimer_fichier_apres_suppression(sender, instance, **kwargs):
    """
    Après suppression d'un Document: supprime le fichier du disque dur (media).
    """
    if instance.fichier:
        fichier_path = os.path.join(settings.MEDIA_ROOT, instance.fichier.name)
        try:
            if os.path.exists(fichier_path):
                os.remove(fichier_path)
                logger.info(f"Fichier supprimé après suppression du document: {instance.fichier.name}")
        except Exception as e:
            logger.error(f"Erreur lors de la suppression du fichier {fichier_path}: {str(e)}")


================================================
FILE: rap_app/models/evenements.py
================================================
import logging
from django.db import models, transaction
from django.core.exceptions import ValidationError
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.utils import timezone
from .base import BaseModel
from .formations import Formation

# Configuration du logger avec un nom plus spécifique
logger = logging.getLogger("application.evenements")

class Evenement(BaseModel):
    """
    Modèle représentant un événement lié à une formation.
    
    Ce modèle permet de suivre différents types d'événements organisés dans le cadre
    des formations, comme les réunions d'information, job dating, forums, etc.
    
    Attributes:
        formation: Référence à la formation associée à cet événement
        type_evenement: Catégorie de l'événement (présentiel, distanciel, etc.)
        details: Informations complémentaires sur l'événement
        event_date: Date prévue pour l'événement
        description_autre: Précision obligatoire si le type d'événement est 'Autre'
        lieu: Emplacement où se déroule l'événement
        participants_prevus: Nombre de participants attendus
        participants_reels: Nombre de participants réels après l'événement
    """

    # Constantes pour les types d'événements - utilisation d'une énumération pour plus de clarté
    class TypeEvenement(models.TextChoices):
        INFO_PRESENTIEL = 'info_collective_presentiel', 'Information collective présentiel'
        INFO_DISTANCIEL = 'info_collective_distanciel', 'Information collective distanciel'
        JOB_DATING = 'job_dating', 'Job dating'
        EVENEMENT_EMPLOI = 'evenement_emploi', 'Événement emploi'
        FORUM = 'forum', 'Forum'
        JPO = 'jpo', 'Journée Portes Ouvertes (JPO)'
        AUTRE = 'autre', 'Autre'
    
    # Pour garantir la rétrocompatibilité avec le code existant
    INFO_PRESENTIEL = TypeEvenement.INFO_PRESENTIEL.value
    INFO_DISTANCIEL = TypeEvenement.INFO_DISTANCIEL.value
    JOB_DATING = TypeEvenement.JOB_DATING.value
    EVENEMENT_EMPLOI = TypeEvenement.EVENEMENT_EMPLOI.value
    FORUM = TypeEvenement.FORUM.value
    JPO = TypeEvenement.JPO.value
    AUTRE = TypeEvenement.AUTRE.value
    
    # Conservation de la liste des choix pour rétrocompatibilité
    TYPE_EVENEMENT_CHOICES = TypeEvenement.choices

    formation = models.ForeignKey(
        Formation, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,  
        related_name="evenements",
        verbose_name="Formation associée",
        help_text="Formation à laquelle cet événement est rattaché"
    )
    
    type_evenement = models.CharField(
        max_length=100, 
        choices=TypeEvenement.choices, 
        verbose_name="Type d'événement",
        db_index=True,
        help_text="Catégorie de l'événement"
    )
    
    details = models.TextField(
        null=True,  
        blank=True, 
        verbose_name="Détails de l'événement",
        help_text="Informations complémentaires sur l'événement"
    )
    
    event_date = models.DateField(
        null=True, 
        blank=True, 
        verbose_name="Date de l'événement",
        help_text="Date prévue pour l'événement"
    )
    
    description_autre = models.CharField(
        max_length=255,  
        null=True,  
        blank=True,  
        verbose_name="Description pour 'Autre' événement",
        help_text="Précision obligatoire si le type d'événement est 'Autre'"
    )
    
    lieu = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="Lieu",
        help_text="Emplacement où se déroule l'événement"
    )
    
    participants_prevus = models.PositiveIntegerField(
        null=True,
        blank=True,
        verbose_name="Participants prévus",
        help_text="Nombre de participants attendus"
    )
    
    participants_reels = models.PositiveIntegerField(
        null=True,
        blank=True,
        verbose_name="Participants réels",
        help_text="Nombre de participants réels (à remplir après l'événement)"
    )

    def clean(self):
        """
        Validation personnalisée :
        - Si l'événement est de type "Autre", la description doit être remplie.
        - Vérification que la date n'est pas trop ancienne.
        - Validation des participants réels par rapport aux participants prévus.
        """
        today = timezone.now().date()
        
        # Validation du type "Autre"
        if self.type_evenement == self.AUTRE and not self.description_autre:
            raise ValidationError({
                'description_autre': "Veuillez fournir une description pour l'événement de type 'Autre'."
            })
            
        # Avertissement pour les dates trop anciennes (plus d'un an)
        if self.event_date and self.event_date < today - timezone.timedelta(days=365):
            logger.warning(
                f"Événement ID={self.pk}: Date très ancienne détectée ({self.event_date}, plus d'un an)"
            )
        
        # Validation des participants réels vs prévus (si les deux sont renseignés)
        if self.participants_prevus and self.participants_reels and self.participants_reels > self.participants_prevus * 1.5:
            logger.warning(
                f"Événement ID={self.pk}: Nombre de participants réels ({self.participants_reels}) "
                f"très supérieur aux prévisions ({self.participants_prevus})"
            )

    def save(self, *args, **kwargs):
        """
        Personnalisation de la sauvegarde :
        - Vérifie les règles de validation
        - Journalise les opérations avec plus de détails
        - Utilise une transaction pour garantir l'intégrité
        """
        is_new = not self.pk
        
        # Utilisation de transaction.atomic pour garantir l'intégrité
        with transaction.atomic():
            # Validation (full_clean applique les validateurs du modèle)
            self.full_clean()
            
            # Récupération de l'objet original pour comparaison (si non-nouveau)
            original = None
            if not is_new:
                try:
                    original = Evenement.objects.get(pk=self.pk)
                except Evenement.DoesNotExist:
                    pass
            
            # Journalisation détaillée
            if is_new:
                logger.info(
                    f"Création d'un nouvel événement de type '{self.get_type_evenement_display()}' "
                    f"pour le {self.event_date.strftime('%d/%m/%Y') if self.event_date else 'date non spécifiée'} "
                    f"(formation: {self.formation.nom if self.formation else 'N/A'})"
                )
            elif original:
                self._log_changes(original)
            
            # Sauvegarde du modèle
            super().save(*args, **kwargs)
    
    def _log_changes(self, original):
        """
        Méthode auxiliaire pour journaliser les changements de façon structurée.
        
        Args:
            original: Instance originale de l'objet avant modification
        """
        changes = []
        
        # Détection des changements pour les champs principaux
        fields_to_check = {
            'type_evenement': {
                'display': lambda obj: obj.get_type_evenement_display(), 
                'label': 'type'
            },
            'event_date': {
                'display': lambda obj: obj.event_date.strftime('%d/%m/%Y') if obj.event_date else 'non spécifiée',
                'label': 'date'
            },
            'formation': {
                'display': lambda obj: obj.formation.nom if obj.formation else 'N/A',
                'label': 'formation'
            },
            'lieu': {
                'display': lambda obj: obj.lieu if obj.lieu else 'non spécifié',
                'label': 'lieu'
            },
            'participants_prevus': {
                'display': lambda obj: str(obj.participants_prevus) if obj.participants_prevus is not None else 'non spécifié',
                'label': 'participants prévus'
            },
            'participants_reels': {
                'display': lambda obj: str(obj.participants_reels) if obj.participants_reels is not None else 'non spécifié',
                'label': 'participants réels'
            }
        }
        
        # Vérification de chaque champ
        for field, config in fields_to_check.items():
            old_value = getattr(original, field)
            new_value = getattr(self, field)
            
            if old_value != new_value:
                old_display = config['display'](original)
                new_display = config['display'](self)
                changes.append(f"{config['label']}: '{old_display}' → '{new_display}'")
        
        # Journalisation des changements si nécessaire
        if changes:
            logger.info(f"Modification de l'événement #{self.pk}: {', '.join(changes)}")
    
    def is_past(self):
        """
        Indique si l'événement est passé.
        
        Returns:
            bool: True si l'événement est passé, False sinon
        """
        if not self.event_date:
            return False
        return self.event_date < timezone.now().date()
    
    def is_today(self):
        """
        Indique si l'événement a lieu aujourd'hui.
        
        Returns:
            bool: True si l'événement est aujourd'hui, False sinon
        """
        if not self.event_date:
            return False
        return self.event_date == timezone.now().date()
    
    def is_coming_soon(self, days=7):
        """
        Indique si l'événement est imminent (dans les X prochains jours).
        
        Args:
            days (int): Nombre de jours à considérer comme "imminent"
            
        Returns:
            bool: True si l'événement est imminent, False sinon
        """
        if not self.event_date:
            return False
        today = timezone.now().date()
        return today < self.event_date <= today + timezone.timedelta(days=days)
    
    def get_status_display(self):
        """
        Retourne l'état actuel de l'événement (passé, aujourd'hui, à venir).
        
        Returns:
            str: Status textuel de l'événement
        """
        if self.is_past():
            return "Passé"
        elif self.is_today():
            return "Aujourd'hui"
        else:
            return "À venir"
    
    def get_participation_rate(self):
        """
        Calcule le taux de participation si les données sont disponibles.
        
        Returns:
            float: Pourcentage de participation ou None si données insuffisantes
        """
        if not self.participants_prevus or not self.participants_reels or self.participants_prevus <= 0:
            return None
        return round((self.participants_reels / self.participants_prevus) * 100, 1)
    
    @property
    def status_color(self):
        """
        Retourne une classe CSS en fonction du statut de l'événement.
        Utile pour les templates.
        
        Returns:
            str: Classe CSS correspondant au statut
        """
        if self.is_past():
            return "text-secondary"
        elif self.is_today():
            return "text-danger"
        elif self.is_coming_soon():
            return "text-warning"
        else:
            return "text-primary"

    class Meta:
        verbose_name = "Événement"
        verbose_name_plural = "Événements"
        ordering = ['-event_date']
        indexes = [
            models.Index(fields=['event_date']),
            models.Index(fields=['type_evenement']),
            models.Index(fields=['formation']),
        ]

    def __str__(self):
        """
        Retourne une représentation lisible de l'événement.
        Exemple : "Job dating - 22/03/2025"
        
        Returns:
            str: Représentation textuelle de l'événement
        """
        type_event = self.get_type_evenement_display() if self.type_evenement else "Type inconnu"
        
        if self.type_evenement == self.AUTRE and self.description_autre:
            type_event = self.description_autre
            
        date_str = self.event_date.strftime('%d/%m/%Y') if self.event_date else "Date inconnue"
        return f"{type_event} - {date_str}"


# Optimisation des signaux pour les mises à jour des compteurs
@receiver(post_save, sender=Evenement)
def update_nombre_evenements(sender, instance, **kwargs):
    """
    Met à jour le nombre d'événements dans la formation associée après sauvegarde.
    
    Cette fonction est déclenché par un signal post_save pour maintenir
    automatiquement à jour le compteur dans le modèle Formation.
    
    Args:
        sender: Classe du modèle qui a déclenché le signal
        instance: Instance de l'objet qui a été sauvé
        kwargs: Arguments supplémentaires fournis par le signal
    """
    _update_formation_counter(instance)

@receiver(post_delete, sender=Evenement)
def update_nombre_evenements_after_delete(sender, instance, **kwargs):
    """
    Met à jour le nombre d'événements après suppression.
    
    Cette fonction est déclenchée par un signal post_delete pour maintenir
    automatiquement à jour le compteur dans le modèle Formation.
    
    Args:
        sender: Classe du modèle qui a déclenché le signal
        instance: Instance de l'objet qui a été supprimé
        kwargs: Arguments supplémentaires fournis par le signal
    """
    _update_formation_counter(instance)

def _update_formation_counter(instance):
    """
    Fonction d'aide pour mettre à jour le compteur d'événements.
    
    Cette fonction factorise le code commun aux signaux post_save et post_delete.
    Elle utilise une transaction pour garantir l'intégrité des données.
    
    Args:
        instance: Instance de l'événement qui a déclenché la mise à jour
    """
    if hasattr(instance, 'formation') and instance.formation:
        formation_id = instance.formation.id
        
        try:
            with transaction.atomic():
                # Recalcule le nombre d'événements de façon optimisée avec annotate
                count = Evenement.objects.filter(formation_id=formation_id).count()
                
                # Mise à jour avec update pour éviter les problèmes de concurrence
                Formation.objects.filter(id=formation_id).update(nombre_evenements=count)
                
                logger.debug(
                    f"Mise à jour du compteur d'événements pour la formation #{formation_id}: {count} événements"
                )
                
        except Exception as e:
            logger.error(
                f"Erreur lors de la mise à jour du compteur d'événements pour formation #{formation_id}: {str(e)}",
                exc_info=True
            )


================================================
FILE: rap_app/models/formations.py
================================================
import datetime
from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.utils import timezone
from jsonschema import ValidationError

from .partenaires import Partenaire

from .centres import Centre
from .types_offre import TypeOffre
from .base import BaseModel
from .statut import Statut, get_default_color

User = get_user_model()  # Récupère le modèle User


class FormationManager(models.Manager):
    """
    Manager personnalisé pour optimiser les requêtes sur les formations.
    Ajoute des méthodes pour filtrer les formations selon leur état.
    """
        
    def formations_actives(self):
        """
        Retourne uniquement les formations actives :
        - La date de début est passée (<= aujourd’hui)
        - La date de fin est future ou aujourd’hui (>= aujourd’hui)
        """
        today = timezone.now().date()
        return self.filter(start_date__lte=today, end_date__gte=today)

    def formations_a_venir(self):
        """Retourne uniquement les formations qui commencent dans le futur."""
        return self.filter(start_date__gt=timezone.now().date())

    def formations_terminees(self):
        """Retourne uniquement les formations terminées (date de fin dépassée)."""
        return self.filter(end_date__lt=timezone.now().date())

    def formations_a_recruter(self):
        """Retourne les formations qui ont encore des places disponibles."""
        return self.annotate(
            total_places=models.F('prevus_crif') + models.F('prevus_mp'),
            total_inscrits=models.F('inscrits_crif') + models.F('inscrits_mp')
        ).filter(total_places__gt=models.F('total_inscrits'))

    def formations_toutes(self):
        """Retourne **toutes** les formations, sans filtre."""
        return self.all()

    def trier_par(self, champ_tri):
        """Trie les formations selon un champ donné, si autorisé."""
        champs_autorises = [
            "centre", "-centre",
            "statut", "-statut",
            "type_offre", "-type_offre",
            "start_date", "-start_date",
            "end_date", "-end_date"
        ]
        return self.get_queryset().order_by(champ_tri) if champ_tri in champs_autorises else self.get_queryset()


class Formation(BaseModel):
    """
    Modèle représentant une formation.
    """

    # Informations générales
    nom = models.CharField(max_length=255, verbose_name="Nom de la formation")
    centre = models.ForeignKey(Centre, on_delete=models.CASCADE, related_name='formations', verbose_name="Centre de formation")
    type_offre = models.ForeignKey(TypeOffre, on_delete=models.CASCADE, related_name="formations", verbose_name="Type d'offre")
    statut = models.ForeignKey(Statut, on_delete=models.CASCADE, related_name="formations", verbose_name="Statut de la formation")

    # Dates et identifiants
    start_date = models.DateField(null=True, blank=True, verbose_name="Date de début")
    end_date = models.DateField(null=True, blank=True, verbose_name="Date de fin")
    num_kairos = models.CharField(max_length=50, null=True, blank=True, verbose_name="Numéro Kairos")
    num_offre = models.CharField(max_length=50, null=True, blank=True, verbose_name="Numéro de l'offre")
    num_produit = models.CharField(max_length=50, null=True, blank=True, verbose_name="Numéro du produit")

    # Gestion des places et inscriptions
    prevus_crif = models.PositiveIntegerField(default=0, verbose_name="Places prévues CRIF")
    prevus_mp = models.PositiveIntegerField(default=0, verbose_name="Places prévues MP")
    inscrits_crif = models.PositiveIntegerField(default=0, verbose_name="Inscrits CRIF")
    inscrits_mp = models.PositiveIntegerField(default=0, verbose_name="Inscrits MP")

    # Informations supplémentaires
    assistante = models.CharField(max_length=255, null=True, blank=True, verbose_name="Assistante")
    cap = models.PositiveIntegerField(null=True, blank=True, verbose_name="Capacité maximale")
    convocation_envoie = models.BooleanField(default=False, verbose_name="Convocation envoyée")
    entresformation = models.PositiveIntegerField(default=0, verbose_name="Entrées en formation")

    # Statistiques de recrutement
    nombre_candidats = models.PositiveIntegerField(default=0, verbose_name="Nombre de candidats")
    nombre_entretiens = models.PositiveIntegerField(default=0, verbose_name="Nombre d'entretiens")

    # Nombre d'événements liés
    nombre_evenements = models.PositiveIntegerField(default=0, verbose_name="Nombre d'événements")

    # Commentaires et logs
    dernier_commentaire = models.TextField(null=True, blank=True, verbose_name="Dernier commentaire")

    # Relation avec les partenaires
    partenaires = models.ManyToManyField(Partenaire, related_name="formations", verbose_name="Partenaires", blank=True)

    # Créateur de la formation
    utilisateur = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,related_name="formations_creees",verbose_name="Créé par" )

    # Manager personnalisé
    objects = FormationManager()

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        old_instance = None

        if not is_new:
            try:
                old_instance = Formation.objects.get(pk=self.pk)
            except Formation.DoesNotExist:
                pass

        super().save(*args, **kwargs)  # Sauvegarde classique

        if old_instance:
            fields_to_track = [
                'nom', 'centre', 'type_offre', 'statut',
                'start_date', 'end_date', 'num_kairos',
                'num_offre', 'num_produit', 'prevus_crif',
                'prevus_mp', 'inscrits_crif', 'inscrits_mp',
                'assistante', 'cap', 'convocation_envoie',
                'entresformation', 'nombre_candidats', 'nombre_entretiens',
                'dernier_commentaire'
            ]

            for field in fields_to_track:
                old_value = getattr(old_instance, field)
                new_value = getattr(self, field)

                if old_value != new_value:
                    HistoriqueFormation.objects.create(
                        formation=self,
                        champ_modifie=field,
                        ancienne_valeur=str(old_value),
                        nouvelle_valeur=str(new_value),
                        modifie_par=self.utilisateur  # ou `kwargs.get('user')` selon ton besoin
                    )

    ### ✅ Méthode pour sérialiser les données avant enregistrement dans JSONField
    def to_serializable_dict(self):
        """
        Retourne un dictionnaire JSON-sérialisable des valeurs de la formation,
        en convertissant les dates en chaînes de caractères.
        """
        def convert_value(value):
            if isinstance(value, (datetime.date, datetime.datetime)):
                return value.strftime('%Y-%m-%d')  # ✅ Convertit les dates en format JSON
            elif isinstance(value, models.Model):
                return str(value)  # ✅ Convertit les objets Django en string
            return value 

        return {key: convert_value(getattr(self, key)) for key in [
            "nom", "centre", "type_offre", "statut", "start_date", "end_date", "num_kairos", "num_offre", "num_produit",
            "prevus_crif", "prevus_mp", "inscrits_crif", "inscrits_mp", "assistante", "cap", "convocation_envoie",
            "entresformation", "nombre_candidats", "nombre_entretiens", "nombre_evenements", "dernier_commentaire"
        ]}

    ### ✅ Méthodes calculées (remplaçant `@property`)
    def get_total_places(self):
        """Retourne le nombre total de places prévues (CRIF + MP)."""
        return self.prevus_crif + self.prevus_mp

    def get_total_inscrits(self):
        """Retourne le nombre total d'inscrits (CRIF + MP)."""
        return self.inscrits_crif + self.inscrits_mp

    def get_taux_transformation(self):
        total_candidats = self.nombre_candidats or 0
        total_inscrits = (self.inscrits_crif or 0) + (self.inscrits_mp or 0)

        if total_candidats == 0:
            return 0.0
        return round(100.0 * total_inscrits / total_candidats, 2)

    def get_taux_saturation(self):
        total_prevus = (self.prevus_crif or 0) + (self.prevus_mp or 0)
        total_inscrits = (self.inscrits_crif or 0) + (self.inscrits_mp or 0)

        if total_prevus == 0:
            return 0.0
        return round(100.0 * total_inscrits / total_prevus, 2)

    def get_places_restantes_crif(self):
        return max((self.prevus_crif or 0) - (self.inscrits_crif or 0), 0)

    def get_places_restantes_mp(self):
        return max((self.prevus_mp or 0) - (self.inscrits_mp or 0), 0)

    def get_places_disponibles(self):
        """Retourne le nombre de places encore disponibles pour la formation."""
        return max(0, self.get_total_places() - self.get_total_inscrits())

    def get_a_recruter(self):
        """Retourne le nombre de places encore disponibles pour le recrutement."""
        return self.get_places_disponibles()

    def is_a_recruter(self):
        """Renvoie `True` si la formation a encore des places disponibles, sinon `False`."""
        return self.get_a_recruter() > 0
        

### ✅ Méthodes d'ajout d'éléments associés

# ✅ Ajout d'un commentaire en utilisant la relation inverse
    def add_commentaire(self, utilisateur, contenu):
        """
        Ajoute un commentaire à la formation via la relation inverse.
        """
        commentaire = self.commentaires.create(
            utilisateur=utilisateur,
            contenu=contenu
        )
        self.dernier_commentaire = contenu  # Mettre à jour le dernier commentaire affiché
        self.save()
        return commentaire

    # ✅ Ajout d'un événement en utilisant la relation inverse
    def add_evenement(self, type_evenement, event_date, details=None, description_autre=None):
        """
        Ajoute un événement à la formation via la relation inverse.
        """
        from .evenements import Evenement  # ✅ Import local pour éviter la relation circulaire

        if type_evenement == Evenement.AUTRE and not description_autre:
            raise ValidationError("Veuillez fournir une description pour un événement de type 'Autre'.")

        evenement = Evenement.objects.create(
            formation=self,
            type_evenement=type_evenement,
            event_date=event_date,
            details=details,
            description_autre=description_autre if type_evenement == Evenement.AUTRE else None
        )

        self.nombre_evenements += 1  # ✅ Mise à jour du compteur d'événements
        self.save()
        return evenement



    ### ✅ Autres méthodes utiles

    def get_status_color(self):
        """
        Retourne la couleur associée au statut de la formation.
        Si le statut n’a pas de couleur définie, il prend une couleur par défaut.
        """
        return self.statut.couleur if self.statut.couleur else get_default_color(self.statut.nom)
    
    def get_absolute_url(self):
        """Retourne l'URL de détail de la formation."""
        return reverse('formation-detail', kwargs={'pk': self.pk})
    
    def get_commentaires(self):
        """Retourne tous les commentaires associés à cette formation, en incluant les utilisateurs."""
        return self.commentaires.select_related("utilisateur").all()  # ✅ Optimisation SQL


    def get_saturation_moyenne_commentaires(self):
        """
        Calcule la moyenne de saturation des commentaires (si présente).
        """
        saturations = self.commentaires.exclude(saturation__isnull=True).values_list('saturation', flat=True)
        if saturations:
            return round(sum(saturations) / len(saturations), 2)
        return None

    def get_evenements(self):
        """Retourne tous les événements associés à cette formation."""
        return self.evenements.all()

    def get_documents(self):
        """Retourne tous les documents associés à cette formation."""
        return self.documents.all()

    def get_partenaires(self):
        """Retourne les partenaires associés (optimisé avec prefetch)."""
        return self.partenaires.all().prefetch_related()

    def __str__(self):
        """Affiche une représentation textuelle de la formation."""
        return f"{self.nom} ({self.centre.nom if self.centre else 'Centre inconnu'})"

    class Meta:
        verbose_name = "Formation"
        verbose_name_plural = "Formations"
        ordering = ['-start_date', 'nom']
        indexes = [
            models.Index(fields=['start_date']),
            models.Index(fields=['end_date']),
            models.Index(fields=['nom']),
        ]

class HistoriqueFormation(models.Model):
    formation = models.ForeignKey('Formation', on_delete=models.CASCADE, related_name="historiques")
    action = models.CharField(max_length=100, default='modification')
    details = models.JSONField(default=dict, blank=True)
    date_modification = models.DateTimeField(default=timezone.now)
    champ_modifie = models.CharField(max_length=100, default="non_specifié" , verbose_name="Champ modifié")
    ancienne_valeur = models.TextField(null=True, blank=True)
    nouvelle_valeur = models.TextField(null=True, blank=True)
    modifie_par = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    commentaire = models.TextField(null=True, blank=True, verbose_name="Commentaire lié à la modification")

    class Meta:
        ordering = ['-date_modification']
        verbose_name = "Historique de modification de formation"


================================================
FILE: rap_app/models/logs.py
================================================
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class LogUtilisateur(models.Model):
    """Log générique pour tracer les actions des utilisateurs dans l'app."""

    utilisateur = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Utilisateur"
    )
    modele = models.CharField(
        max_length=100,
        verbose_name="Modèle concerné"
    )
    object_id = models.PositiveIntegerField(
        verbose_name="ID de l'objet"
    )
    action = models.CharField(
        max_length=255,
        verbose_name="Action"
    )
    details = models.TextField(
        blank=True,
        null=True,
        verbose_name="Détails complémentaires"
    )
    date = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Date de l'action"
    )

    class Meta:
        verbose_name = "Log utilisateur"
        verbose_name_plural = "Logs utilisateurs"
        ordering = ['-date']

    def __str__(self):
        return f"{self.utilisateur} - {self.action} - {self.modele}({self.object_id})"



================================================
FILE: rap_app/models/models.md
================================================
Directory structure:
└── d-abd-rapp_app_dj.git/
    ├── README.md
    ├── __init__.py
    ├── db.sqlite3
    ├── fichier
    ├── formation.js
    ├── manage.py
    ├── requirements.txt
    ├── un
    ├── vide
    ├── .!63787!db.sqlite3
    ├── .!63801!db.sqlite3
    ├── formations/
    │   └── documents/
    ├── rap_app/
    │   ├── __init__.py
    │   ├── apps.py
    │   ├── queries.py
    │   ├── urls.py
    │   ├── .DS_Store
    │   ├── __pycache__/
    │   ├── admin/
    │   │   ├── __init__.py
    │   │   ├── centres_admin.py
    │   │   ├── commentaires_admin.py
    │   │   ├── company_admin.py
    │   │   ├── documents_admin.py
    │   │   ├── evenements_admin.py
    │   │   ├── formations_admin.py
    │   │   ├── partenaires_admin.py
    │   │   ├── prospection_admin.py
    │   │   ├── statuts_admin.py
    │   │   ├── types_offre_admin.py
    │   │   ├── utilisateurs_admin.py
    │   │   └── __pycache__/
    │   ├── forms/
    │   │   ├── __init__.py
    │   │   ├── company_form.py
    │   │   ├── prepa_comp_form.py
    │   │   ├── ProspectionForm.py
    │   │   ├── rapports_forms.py
    │   │   └── __pycache__/
    │   ├── migrations/
    │   │   ├── 0001_initial.py
    │   │   ├── 0002_alter_partenaire_nom.py
    │   │   ├── 0003_alter_rapport_options_remove_rapport_created_at_and_more.py
    │   │   ├── 0004_alter_rapport_options_and_more.py
    │   │   ├── 0005_alter_rapport_options_remove_rapport_centre_and_more.py
    │   │   ├── 0006_delete_rapport.py
    │   │   ├── 0007_rapport_delete_parametre.py
    │   │   ├── 0008_company_prospection.py
    │   │   ├── 0009_remove_company_email_remove_company_phone_number_and_more.py
    │   │   ├── 0010_historiqueprospection_and_more.py
    │   │   ├── 0011_historiqueformation_action_and_more.py
    │   │   ├── 0012_typeoffre_couleur.py
    │   │   ├── 0013_alter_company_options_and_more.py
    │   │   ├── 0014_delete_recherche.py
    │   │   ├── 0015_alter_historiqueformation_options_and_more.py
    │   │   ├── 0016_candidat_departement_objectifannuel_semaine_entree_and_more.py
    │   │   ├── __init__.py
    │   │   └── __pycache__/
    │   ├── models/
    │   │   ├── __init__.py
    │   │   ├── base.py
    │   │   ├── centres.py
    │   │   ├── commentaires.py
    │   │   ├── company.py
    │   │   ├── documents.py
    │   │   ├── evenements.py
    │   │   ├── formations.py
    │   │   ├── logs.py
    │   │   ├── models.md
    │   │   ├── partenaires.py
    │   │   ├── prepa_comp.py
    │   │   ├── prospection.py
    │   │   ├── rapports.py
    │   │   ├── statut.py
    │   │   ├── types_offre.py
    │   │   └── __pycache__/
    │   ├── services/
    │   │   ├── generateur_rapports.py
    │   │   └── __pycache__/
    │   ├── static/
    │   │   ├── __init__.py
    │   │   ├── css/
    │   │   │   └── formation.css
    │   │   ├── images/
    │   │   └── js/
    │   │       └── formation.js
    │   ├── templates/
    │   │   ├── base.html
    │   │   ├── dashboard copy.html
    │   │   ├── dashboard.html
    │   │   ├── home copy.html
    │   │   ├── home.html
    │   │   ├── .DS_Store
    │   │   ├── centres/
    │   │   │   ├── centre_confirm_delete.html
    │   │   │   ├── centre_detail.html
    │   │   │   ├── centre_form.html
    │   │   │   └── centre_list.html
    │   │   ├── commentaires/
    │   │   │   ├── commentaire_confirm.html
    │   │   │   ├── commentaire_detail.html
    │   │   │   ├── commentaire_form.html
    │   │   │   └── commentaire_list.html
    │   │   ├── company/
    │   │   │   ├── company_confirm_delete.html
    │   │   │   ├── company_detail.html
    │   │   │   ├── company_form.html
    │   │   │   └── company_list.html
    │   │   ├── composants/
    │   │   │   ├── bouton_retour.html
    │   │   │   ├── commentaires_bouton.html
    │   │   │   ├── footer.html
    │   │   │   ├── navbar.html
    │   │   │   ├── pagination.html
    │   │   │   └── sidebar.html
    │   │   ├── dashboard_composants/
    │   │   │   ├── comments_list.html
    │   │   │   ├── entreprises_par_prospections.html
    │   │   │   ├── events_by_type_and_center.html
    │   │   │   ├── evolution_chart.html
    │   │   │   ├── formations_by_type_and_statut.html
    │   │   │   ├── performance_table.html
    │   │   │   ├── propections_par_statuts.html
    │   │   │   ├── prospections.html
    │   │   │   └── stats_cards.html
    │   │   ├── documents/
    │   │   │   ├── document_confirm_delete.html
    │   │   │   ├── document_detail.html
    │   │   │   ├── document_form.html
    │   │   │   └── document_list.html
    │   │   ├── evenements/
    │   │   │   ├── evenement_confirm_delete.html
    │   │   │   ├── evenement_detail.html
    │   │   │   ├── evenement_form.html
    │   │   │   └── evenement_list.html
    │   │   ├── formations/
    │   │   │   ├── commentaires_tous.html
    │   │   │   ├── formation_add_comment.html
    │   │   │   ├── formation_confirm_delete.html
    │   │   │   ├── formation_detail copy.html
    │   │   │   ├── formation_detail.html
    │   │   │   ├── formation_form.html
    │   │   │   ├── formation_list.html
    │   │   │   ├── formation_update_partenaire.html
    │   │   │   └── includes/
    │   │   │       ├── commentaires_formation.html
    │   │   │       ├── create_new_formations.html
    │   │   │       ├── documents_formation.html
    │   │   │       ├── entreprises_formation.html
    │   │   │       ├── evenements_formation.html
    │   │   │       ├── filters_and_search_formations copy.html
    │   │   │       ├── filters_and_search_formations.html
    │   │   │       ├── formations_table.html
    │   │   │       ├── pagination.html
    │   │   │       ├── partenaires_formation.html
    │   │   │       ├── prospections_formation.html
    │   │   │       ├── saturation_formation.html
    │   │   │       └── stats_formations.html
    │   │   ├── historiqueformation/
    │   │   │   ├── historiqueformation_detail.html
    │   │   │   └── historiqueformation_list.html
    │   │   ├── parametres/
    │   │   │   └── parametres.html
    │   │   ├── partenaires/
    │   │   │   ├── partenaire_confirm_delete.html
    │   │   │   ├── partenaire_detail.html
    │   │   │   ├── partenaire_form.html
    │   │   │   ├── partenaire_formation_form.html
    │   │   │   └── partenaire_list.html
    │   │   ├── prepa_comp/
    │   │   │   ├── candidats.html
    │   │   │   └── prepa_comp_board.html
    │   │   ├── prospection/
    │   │   │   ├── historiqueprospection_detail.html
    │   │   │   ├── historiqueprospection_list.html
    │   │   │   ├── prospection_detail.html
    │   │   │   ├── prospection_form.html
    │   │   │   ├── prospection_home.html
    │   │   │   └── prospection_list.html
    │   │   ├── rapports/
    │   │   │   ├── rapport_confirm_delete.html
    │   │   │   ├── rapport_detail.html
    │   │   │   ├── rapport_form.html
    │   │   │   ├── rapport_list.html
    │   │   │   └── includes/
    │   │   │       ├── rapport_centre.html
    │   │   │       ├── rapport_evenement.html
    │   │   │       ├── rapport_occupation.html
    │   │   │       ├── rapport_partenaire.html
    │   │   │       ├── rapport_recrutement.html
    │   │   │       └── rapport_statut.html
    │   │   ├── statuts/
    │   │   │   ├── statut_confirm_delete.html
    │   │   │   ├── statut_detail.html
    │   │   │   ├── statut_form.html
    │   │   │   └── statut_list.html
    │   │   ├── types_offres/
    │   │   │   ├── typeoffre_confirm_delete.html
    │   │   │   ├── typeoffre_detail.html
    │   │   │   ├── typeoffre_form.html
    │   │   │   └── typeoffre_list.html
    │   │   └── users/
    │   │       ├── login.html
    │   │       ├── password_reset.html
    │   │       ├── password_reset_complete.html
    │   │       ├── password_reset_confirm.html
    │   │       ├── password_reset_done.html
    │   │       ├── profile.html
    │   │       ├── register.html
    │   │       └── user_list.html
    │   ├── templatetags/
    │   │   ├── __init__.py
    │   │   ├── custom_filters.py
    │   │   ├── form_filters.py
    │   │   ├── prospection_extras.py
    │   │   └── __pycache__/
    │   ├── tests/
    │   │   ├── __init__.py
    │   │   ├── test_models.py
    │   │   ├── test_views.py
    │   │   └── tv.md
    │   └── views/
    │       ├── __init__.py
    │       ├── base_views.py
    │       ├── centres_views.py
    │       ├── commentaires_views.py
    │       ├── company_views.py
    │       ├── dashboard_views.py
    │       ├── documents_views.py
    │       ├── evenements_views.py
    │       ├── formations_views.py
    │       ├── historique_formation_views.py
    │       ├── home_views.py
    │       ├── log_views.py
    │       ├── parametres_views.py
    │       ├── partenaires_views.py
    │       ├── prepa_comp_views.py
    │       ├── prospection_views.py
    │       ├── rapport_views.py
    │       ├── statuts_views.py
    │       ├── types_offre_views.py
    │       ├── users_views.py
    │       ├── views.md
    │       └── __pycache__/
    ├── rap_app_project/
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   ├── wsgi.py
    │   └── __pycache__/
    └── staticfiles/
        ├── __init__.py
        ├── admin/
        │   ├── css/
        │   │   ├── autocomplete.css
        │   │   ├── base.css
        │   │   ├── changelists.css
        │   │   ├── dark_mode.css
        │   │   ├── dashboard.css
        │   │   ├── forms.css
        │   │   ├── login.css
        │   │   ├── nav_sidebar.css
        │   │   ├── responsive.css
        │   │   ├── responsive_rtl.css
        │   │   ├── rtl.css
        │   │   ├── widgets.css
        │   │   └── vendor/
        │   │       └── select2/
        │   │           ├── LICENSE-SELECT2.md
        │   │           └── select2.css
        │   ├── img/
        │   │   ├── LICENSE
        │   │   ├── README.txt
        │   │   └── gis/
        │   └── js/
        │       ├── actions.js
        │       ├── autocomplete.js
        │       ├── calendar.js
        │       ├── cancel.js
        │       ├── change_form.js
        │       ├── collapse.js
        │       ├── core.js
        │       ├── filters.js
        │       ├── inlines.js
        │       ├── jquery.init.js
        │       ├── nav_sidebar.js
        │       ├── popup_response.js
        │       ├── prepopulate.js
        │       ├── prepopulate_init.js
        │       ├── SelectBox.js
        │       ├── SelectFilter2.js
        │       ├── theme.js
        │       ├── urlify.js
        │       ├── admin/
        │       │   ├── DateTimeShortcuts.js
        │       │   └── RelatedObjectLookups.js
        │       └── vendor/
        │           ├── jquery/
        │           │   ├── jquery.js
        │           │   └── LICENSE.txt
        │           ├── select2/
        │           │   ├── LICENSE.md
        │           │   ├── select2.full.js
        │           │   └── i18n/
        │           │       ├── af.js
        │           │       ├── ar.js
        │           │       ├── az.js
        │           │       ├── bg.js
        │           │       ├── bn.js
        │           │       ├── bs.js
        │           │       ├── ca.js
        │           │       ├── cs.js
        │           │       ├── da.js
        │           │       ├── de.js
        │           │       ├── dsb.js
        │           │       ├── el.js
        │           │       ├── en.js
        │           │       ├── es.js
        │           │       ├── et.js
        │           │       ├── eu.js
        │           │       ├── fa.js
        │           │       ├── fi.js
        │           │       ├── fr.js
        │           │       ├── gl.js
        │           │       ├── he.js
        │           │       ├── hi.js
        │           │       ├── hr.js
        │           │       ├── hsb.js
        │           │       ├── hu.js
        │           │       ├── hy.js
        │           │       ├── id.js
        │           │       ├── is.js
        │           │       ├── it.js
        │           │       ├── ja.js
        │           │       ├── ka.js
        │           │       ├── km.js
        │           │       ├── ko.js
        │           │       ├── lt.js
        │           │       ├── lv.js
        │           │       ├── mk.js
        │           │       ├── ms.js
        │           │       ├── nb.js
        │           │       ├── ne.js
        │           │       ├── nl.js
        │           │       ├── pl.js
        │           │       ├── ps.js
        │           │       ├── pt-BR.js
        │           │       ├── pt.js
        │           │       ├── ro.js
        │           │       ├── ru.js
        │           │       ├── sk.js
        │           │       ├── sl.js
        │           │       ├── sq.js
        │           │       ├── sr-Cyrl.js
        │           │       ├── sr.js
        │           │       ├── sv.js
        │           │       ├── th.js
        │           │       ├── tk.js
        │           │       ├── tr.js
        │           │       ├── uk.js
        │           │       ├── vi.js
        │           │       ├── zh-CN.js
        │           │       └── zh-TW.js
        │           └── xregexp/
        │               ├── LICENSE.txt
        │               └── xregexp.js
        └── js/
            ├── formation.js
            └── formations.js


Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================
File: README.md
================================================
# Rapp_App_Dj


================================================
File: __init__.py
================================================



================================================
File: db.sqlite3
================================================
[Non-text file]


================================================
File: fichier
================================================



================================================
File: formation.js
================================================



================================================
File: manage.py
================================================
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rap_app_project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()



================================================
File: requirements.txt
================================================
asgiref==3.8.1
attrs==25.1.0
chardet==5.2.0
Django==4.2.7
django-cors-headers==4.7.0
django-filter==25.1
django-guardian==2.4.0
djangorestframework==3.14.0
drf-spectacular==0.28.0
et_xmlfile==2.0.0
inflection==0.5.1
jsonschema==4.23.0
jsonschema-specifications==2024.10.1
lxml==5.3.1
numpy==2.2.3
openpyxl==3.1.5
pandas==2.2.3
pillow==11.1.0
psycopg2-binary==2.9.10
python-dateutil==2.9.0.post0
python-docx==1.1.2
python-dotenv==1.0.1
pytz==2025.1
PyYAML==6.0.2
referencing==0.36.2
reportlab==4.3.1
rpds-py==0.23.1
six==1.17.0
sqlparse==0.5.3
typing_extensions==4.12.2
tzdata==2025.1
uritemplate==4.1.1



================================================
File: un
================================================



================================================
File: vide
================================================



================================================
File: .!63787!db.sqlite3
================================================



================================================
File: .!63801!db.sqlite3
================================================




================================================
File: rap_app/__init__.py
================================================



================================================
File: rap_app/apps.py
================================================
from django.apps import AppConfig


class RapAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rap_app'



================================================
File: rap_app/queries.py
================================================
# Exemple de code pour obtenir les statistiques

from django.db.models import Count, F, Sum, FloatField, ExpressionWrapper
from django.utils import timezone
from datetime import datetime

from .models.prepa_comp import Candidat, Departement, Entree, Mois, ObjectifAnnuel, Semaine


def get_stats_semaine_courante():
    """Récupère les statistiques pour la semaine courante"""
    semaine = Semaine.creer_semaine_courante()
    
    # Nombre d'entrées et de candidats pour la semaine
    nombre_entrees = semaine.nombre_entrees
    nombre_candidats = semaine.nombre_candidats
    
    # Taux de transformation
    taux = semaine.taux_transformation
    
    # Pourcentage d'atteinte de l'objectif hebdomadaire
    pourcentage_objectif = semaine.pourcentage_objectif_hebdomadaire
    
    # Objectif hebdomadaire
    objectif_hebdo = semaine.objectif_annuel.objectif_hebdomadaire()
    
    # Statistiques par département
    stats_departements = semaine.stats_par_departement()
    
    return {
        'semaine': semaine,
        'nombre_entrees': nombre_entrees,
        'nombre_candidats': nombre_candidats,
        'taux_transformation': taux,
        'pourcentage_objectif': pourcentage_objectif,
        'objectif_hebdo': objectif_hebdo,
        'stats_departements': stats_departements
    }


def get_stats_mois_courant():
    """Récupère les statistiques pour le mois courant"""
    mois = Mois.creer_mois_courant()
    
    # Nombre d'entrées et de candidats pour le mois
    nombre_entrees = mois.nombre_entrees
    nombre_candidats = mois.nombre_candidats
    
    # Taux de transformation
    taux = mois.taux_transformation
    
    # Pourcentage d'atteinte de l'objectif mensuel
    pourcentage_objectif = mois.pourcentage_objectif_mensuel
    
    # Objectif mensuel
    objectif_mensuel = mois.objectif_annuel.objectif_mensuel()
    
    # Statistiques par département
    stats_departements = mois.stats_par_departement()
    
    # Liste des semaines du mois
    semaines = mois.get_semaines()
    
    return {
        'mois': mois,
        'nombre_entrees': nombre_entrees,
        'nombre_candidats': nombre_candidats,
        'taux_transformation': taux,
        'pourcentage_objectif': pourcentage_objectif,
        'objectif_mensuel': objectif_mensuel,
        'stats_departements': stats_departements,
        'semaines': semaines
    }


def get_stats_annee_courante():
    """Récupère les statistiques pour l'année courante"""
    annee_courante = timezone.now().year
    objectif_annuel = ObjectifAnnuel.get_current_year_objectif()
    
    # Nombre total d'entrées et de candidats pour l'année
    nombre_entrees = Entree.objects.filter(semaine__annee=annee_courante).count()
    nombre_candidats = Candidat.objects.filter(semaine__annee=annee_courante).count()
    
    # Taux de transformation
    taux = (nombre_entrees / nombre_candidats * 100) if nombre_candidats > 0 else 0
    
    # Pourcentage d'atteinte de l'objectif annuel
    pourcentage_objectif = (nombre_entrees / objectif_annuel.objectif * 100) if objectif_annuel.objectif > 0 else 0
    
    # Statistiques par département
    stats_departements = Entree.objects.filter(
        semaine__annee=annee_courante
    ).values(
        'departement__code', 'departement__nom'
    ).annotate(
        total=Count('id')
    ).order_by('departement__code')
    
    # Statistiques par mois
    stats_mois = []
    for mois_num in range(1, 13):
        try:
            mois_obj = Mois.objects.get(mois=mois_num, annee=annee_courante)
            entrees_mois = mois_obj.nombre_entrees
        except Mois.DoesNotExist:
            entrees_mois = 0
            
        stats_mois.append({
            'mois': mois_num,
            'nom_mois': Mois.get_nom_mois(mois_num),
            'entrees': entrees_mois,
            'objectif': objectif_annuel.objectif_mensuel()
        })
    
    return {
        'annee': annee_courante,
        'objectif_annuel': objectif_annuel,
        'nombre_entrees': nombre_entrees,
        'nombre_candidats': nombre_candidats,
        'taux_transformation': taux,
        'pourcentage_objectif': pourcentage_objectif,
        'stats_departements': stats_departements,
        'stats_mois': stats_mois
    }


def get_stats_historiques_semaines(nb_semaines=10):
    """Récupère les statistiques sur les n dernières semaines"""
    semaines = Semaine.objects.all().order_by('-date_debut')[:nb_semaines]
    
    resultats = []
    for semaine in semaines:
        resultats.append({
            'semaine': f"S{semaine.numero_semaine}",
            'periode': f"{semaine.date_debut} au {semaine.date_fin}",
            'entrees': semaine.nombre_entrees,
            'candidats': semaine.nombre_candidats,
            'taux_transformation': semaine.taux_transformation,
            'pourcentage_objectif': semaine.pourcentage_objectif_hebdomadaire,
            'objectif': semaine.objectif_annuel.objectif_hebdomadaire(),
            'departements': {
                stat['departement__code']: stat['total'] 
                for stat in semaine.stats_par_departement()
            }
        })
    
    return resultats


def get_stats_historiques_mois(nb_mois=12):
    """Récupère les statistiques sur les n derniers mois"""
    mois = Mois.objects.all().order_by('-annee', '-mois')[:nb_mois]
    
    resultats = []
    for m in mois:
        resultats.append({
            'mois': m.nom_mois,
            'annee': m.annee,
            'entrees': m.nombre_entrees,
            'candidats': m.nombre_candidats,
            'taux_transformation': m.taux_transformation,
            'pourcentage_objectif': m.pourcentage_objectif_mensuel,
            'objectif': m.objectif_annuel.objectif_mensuel(),
            'departements': {
                stat['departement__code']: stat['total'] 
                for stat in m.stats_par_departement()
            }
        })
    
    return resultats


def get_stats_historiques_annees(nb_annees=5):
    """Récupère les statistiques sur les n dernières années"""
    annee_courante = timezone.now().year
    annees = list(range(annee_courante, annee_courante - nb_annees, -1))
    
    resultats = []
    for annee in annees:
        try:
            objectif = ObjectifAnnuel.objects.get(annee=annee)
        except ObjectifAnnuel.DoesNotExist:
            # Si pas d'objectif défini pour cette année, passer à la suivante
            continue
            
        nombre_entrees = Entree.objects.filter(semaine__annee=annee).count()
        nombre_candidats = Candidat.objects.filter(semaine__annee=annee).count()
        
        taux = (nombre_entrees / nombre_candidats * 100) if nombre_candidats > 0 else 0
        pourcentage_objectif = (nombre_entrees / objectif.objectif * 100) if objectif.objectif > 0 else 0
        
        stats_departements = Entree.objects.filter(
            semaine__annee=annee
        ).values(
            'departement__code', 'departement__nom'
        ).annotate(
            total=Count('id')
        ).order_by('departement__code')
        
        resultats.append({
            'annee': annee,
            'entrees': nombre_entrees,
            'candidats': nombre_candidats,
            'taux_transformation': taux,
            'pourcentage_objectif': pourcentage_objectif,
            'objectif': objectif.objectif,
            'departements': {
                stat['departement__code']: stat['total'] 
                for stat in stats_departements
            }
        })
    
    return resultats


def initialiser_departements():
    """Initialise les départements de la région parisienne"""
    departements = [
        {'code': '75', 'nom': 'Paris'},
        {'code': '77', 'nom': 'Seine-et-Marne'},
        {'code': '78', 'nom': 'Yvelines'},
        {'code': '91', 'nom': 'Essonne'},
        {'code': '92', 'nom': 'Hauts-de-Seine'},
        {'code': '93', 'nom': 'Seine-Saint-Denis'},
        {'code': '94', 'nom': 'Val-de-Marne'},
        {'code': '95', 'nom': "Val-d'Oise"}
    ]
    
    for dept in departements:
        Departement.objects.get_or_create(
            code=dept['code'],
            defaults={'nom': dept['nom']}
        )


================================================
File: rap_app/urls.py
================================================
from django.urls import path

from .views.prepa_comp_views import AnneeDetailView, CandidatCreateView, CandidatDeleteView, CandidatListView, DepartementStatsView, EntreeCreateView, EntreeListView, MoisDetailView, ObjectifAnnuelUpdateView, SemaineDetailView, TableauDeBordView
from . import views

from .views.historique_formation_views import HistoriqueFormationDeleteView, HistoriqueFormationDetailView, HistoriqueFormationListView

from .views.prospection_views import HistoriqueProspectionDetailView, HistoriqueProspectionListView, ProspectionCreateView, ProspectionDeleteView, ProspectionDetailView, ProspectionHomeView, ProspectionListView, ProspectionUpdateView, export_prospections_csv

from .views.company_views import CompanyCreateView, CompanyDeleteView, CompanyDetailView, CompanyListView, CompanyUpdateView, export_companies_csv

from .views.rapport_views import RapportCreationView, RapportDeleteView, RapportDetailView, RapportExportView, RapportListView


from .views.parametres_views import parametres
from .views.formations_views import UpdateFormationFieldView

from .views.users_views import (UserDeleteView, UserDetailView, UserListView, UserUpdateView, 
user_login, register, user_logout, user_profile, change_password,reset_password, 
)

from .views import (
    home_views, DashboardView, centres_views, statuts_views, types_offre_views,
    commentaires_views, documents_views, partenaires_views, evenements_views, formations_views
)  # Import des vues

urlpatterns = [
    # Page d'accueil
    path('', home_views.home, name='home'),

    # Rapports
    # Liste des rapports
    path('rapports/', RapportListView.as_view(), name='rapport-list'),
    path('rapports/creer/', RapportCreationView.as_view(), name='rapport-create'),
    path('rapports/<int:pk>/', RapportDetailView.as_view(), name='rapport-detail'),
    path('rapports/<int:pk>/supprimer/', RapportDeleteView.as_view(), name='rapport-delete'),
    path('rapports/<int:pk>/export/', RapportExportView.as_view(), name='rapport-export'),

    # USERS
    path("register/", register, name="register"),
    path("login/", user_login, name="login"),
    path("logout/", user_logout, name="logout"),
    path("profile/", user_profile, name="user-profile"),
    path("password_change/", change_password, name="password_change"),
    path("password_reset/", reset_password, name="password_reset"),
    
    path("users/", UserListView.as_view(), name="user-list"),
    path("users/<int:pk>/", UserDetailView.as_view(), name="user-detail"),
    path("users/<int:pk>/update/", UserUpdateView.as_view(), name="user-update"),
    path("users/<int:pk>/delete/", UserDeleteView.as_view(), name="user-delete"),


    # Dashboard
    path('dashboard/', DashboardView.as_view(), name='dashboard'),


    # Centres de formation
    path('centres/', centres_views.CentreListView.as_view(), name='centre-list'),
    path('centres/<int:pk>/', centres_views.CentreDetailView.as_view(), name='centre-detail'),
    path('centres/ajouter/', centres_views.CentreCreateView.as_view(), name='centre-create'),
    path('centres/<int:pk>/modifier/', centres_views.CentreUpdateView.as_view(), name='centre-update'),
    path('centres/<int:pk>/supprimer/', centres_views.CentreDeleteView.as_view(), name='centre-delete'),

    # Statuts des formations
    path('statuts/', statuts_views.StatutListView.as_view(), name='statut-list'),
    path('statuts/<int:pk>/', statuts_views.StatutDetailView.as_view(), name='statut-detail'),
    path('statuts/ajouter/', statuts_views.StatutCreateView.as_view(), name='statut-create'),
    path('statuts/<int:pk>/modifier/', statuts_views.StatutUpdateView.as_view(), name='statut-update'),
    path('statuts/<int:pk>/supprimer/', statuts_views.StatutDeleteView.as_view(), name='statut-delete'),

    # Types d'offres
    path('types-offres/', types_offre_views.TypeOffreListView.as_view(), name='type-offre-list'),
    path('types-offres/<int:pk>/', types_offre_views.TypeOffreDetailView.as_view(), name='type-offre-detail'),
    path('types-offres/ajouter/', types_offre_views.TypeOffreCreateView.as_view(), name='type-offre-create'),
    path('types-offres/<int:pk>/modifier/', types_offre_views.TypeOffreUpdateView.as_view(), name='type-offre-update'),
    path('types-offres/<int:pk>/supprimer/', types_offre_views.TypeOffreDeleteView.as_view(), name='type-offre-delete'),

    # Commentaires
    path('commentaires/', commentaires_views.CommentaireListView.as_view(), name='commentaire-list'),
    path('commentaires/<int:pk>/', commentaires_views.CommentaireDetailView.as_view(), name='commentaire-detail'),
    path('commentaires/ajouter/', commentaires_views.CommentaireCreateView.as_view(), name='commentaire-create'),
    path('commentaires/<int:pk>/modifier/', commentaires_views.CommentaireUpdateView.as_view(), name='commentaire-update'),
    path('commentaires/<int:pk>/supprimer/', commentaires_views.CommentaireDeleteView.as_view(), name='commentaire-delete'),
    path('commentaires_all/', commentaires_views.AllCommentairesView.as_view(), name='all-commentaires'),
    path('export-commentaires/', commentaires_views.ExportCommentairesView.as_view(), name='export-commentaires'),

    # Documents
    path('documents/', documents_views.DocumentListView.as_view(), name='document-list'),
    path('documents/<int:pk>/', documents_views.DocumentDetailView.as_view(), name='document-detail'),
    path('documents/ajouter/', documents_views.DocumentCreateView.as_view(), name='document-create'),
    path('documents/ajouter/<int:formation_id>/', documents_views.DocumentCreateView.as_view(), name='document-create-formation'),
    path('documents/<int:pk>/modifier/', documents_views.DocumentUpdateView.as_view(), name='document-update'),
    path('documents/<int:pk>/supprimer/', documents_views.DocumentDeleteView.as_view(), name='document-delete'),
    
    # Partenaires
    path('partenaires/', partenaires_views.PartenaireListView.as_view(), name='partenaire-list'),
    path('partenaires/<int:pk>/', partenaires_views.PartenaireDetailView.as_view(), name='partenaire-detail'),
    path('partenaires/ajouter/', partenaires_views.PartenaireCreateView.as_view(), name='partenaire-create'),
    path('partenaires/<int:pk>/modifier/', partenaires_views.PartenaireUpdateView.as_view(), name='partenaire-update'),
    path('partenaires/<int:pk>/supprimer/', partenaires_views.PartenaireDeleteView.as_view(), name='partenaire-delete'),
    path('partenaires/ajouter/formation/<int:formation_id>/', partenaires_views.PartenaireCreateViewFormation.as_view(), name='partenaire-add-formation'),
    path('partenaires/export-csv/', partenaires_views.ExportPartenairesCSVView.as_view(), name='export-partenaires-csv'),

    # Événements
    path('evenements/', evenements_views.EvenementListView.as_view(), name='evenement-list'),
    path('evenements/<int:pk>/', evenements_views.EvenementDetailView.as_view(), name='evenement-detail'),
    path('evenements/ajouter/', evenements_views.EvenementCreateView.as_view(), name='evenement-create'),
    path('evenements/<int:pk>/modifier/', evenements_views.EvenementUpdateView.as_view(), name='evenement-update'),
    path('evenements/<int:pk>/supprimer/', evenements_views.EvenementDeleteView.as_view(), name='evenement-delete'),
    
    # Formations
    path('formations/', formations_views.FormationListView.as_view(), name='formation-list'),
    path('formations/<int:pk>/', formations_views.FormationDetailView.as_view(), name='formation-detail'),
    path('formations/ajouter/', formations_views.FormationCreateView.as_view(), name='formation-create'),
    path('formations/<int:pk>/modifier/', formations_views.FormationUpdateView.as_view(), name='formation-update'),
    path('formations/<int:pk>/supprimer/', formations_views.FormationDeleteView.as_view(), name='formation-delete'),
    path('formations/<int:pk>/commentaire/', formations_views.FormationAddCommentView.as_view(), name='formation-add-comment'),
    path("formations/export-excel/", formations_views.ExportFormationsExcelView.as_view(), name="export-formations-excel"),
    path("formations/update-champ/<int:id>/", UpdateFormationFieldView.as_view(), name="update_formation_field"),

        # Historique des Formations
    path('historique-formations/', HistoriqueFormationListView.as_view(), name='historique-formation-list'),
    path('historique-formations/<int:pk>/', HistoriqueFormationDetailView.as_view(), name='historique-formation-detail'),
    path("historique-formations/<int:pk>/delete/", HistoriqueFormationDeleteView.as_view(), name="historique-formation-delete"),

    # Company
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/add/', CompanyCreateView.as_view(), name='company-create'),
    path('companies/<int:pk>/edit/', CompanyUpdateView.as_view(), name='company-update'),
    path('companies/<int:pk>/delete/', CompanyDeleteView.as_view(), name='company-delete'),
    path('companies/export/', export_companies_csv, name='company-export'),

    # Paramètres
    path('parametres/', parametres, name='parametres'),

    # Prospections
    path('prospection_home', ProspectionHomeView, name='prospection-home'),
    path('prospections/', ProspectionListView.as_view(), name='prospection-list'),
    path('prospections/<int:pk>/', ProspectionDetailView.as_view(), name='prospection-detail'),
    path('prospections/add/', ProspectionCreateView.as_view(), name='prospection-add'),
    path('prospections/<int:pk>/edit/', ProspectionUpdateView.as_view(), name='prospection-update'),
    path('prospections/<int:pk>/delete/', ProspectionDeleteView.as_view(), name='prospection-delete'),
    path('historique-prospections/', HistoriqueProspectionListView.as_view(), name='historique-prospection-list'),
    path('historique-prospections/<int:pk>/', HistoriqueProspectionDetailView.as_view(), name='historique-prospection-detail'),
    path("prospections/export/", export_prospections_csv, name="prospection-export"),

 # Prepa_Comp

    path('prepa_comp',TableauDeBordView.as_view(), name='tableau_de_bord'),

# Détail des périodes
    path('semaine/<int:pk>/', SemaineDetailView.as_view(), name='semaine_detail'),
    path('mois/<int:pk>/', MoisDetailView.as_view(), name='mois_detail'),
    path('annee/<int:annee>/', AnneeDetailView.as_view(), name='annee_detail'),
    
    # Gestion des candidats
    path('candidats/', CandidatListView.as_view(), name='candidat_list'),
    path('candidat/ajouter/', CandidatCreateView.as_view(), name='candidat_create'),
    path('candidat/<int:pk>/supprimer/', CandidatDeleteView.as_view(), name='candidat_delete'),
    
    # Gestion des entrées
    path('entrees/', EntreeListView.as_view(), name='entree_list'),
    path('entree/ajouter/', EntreeCreateView.as_view(), name='entree_create'),
    
    # Statistiques par département
    path('departement/<int:pk>/stats/', DepartementStatsView.as_view(), name='departement_stats'),
    
    # Gestion des objectifs
    path('objectif/<int:annee>/modifier/', ObjectifAnnuelUpdateView.as_view(), name='objectif_update'),
    ]


================================================
File: rap_app/.DS_Store
================================================
[Non-text file]



================================================
File: rap_app/admin/__init__.py
================================================
"""
Importe les classes admin pour l'interface d'administration Django.
L'importation des classes admin enregistre automatiquement les modèles avec admin.site.
"""

from .centres_admin import CentreAdmin
from .statuts_admin import StatutAdmin
from .types_offre_admin import TypeOffreAdmin
from .formations_admin import FormationAdmin
from .commentaires_admin import CommentaireAdmin
from .partenaires_admin import PartenaireAdmin  # Nouveau
from .evenements_admin import EvenementAdmin    # Nouveau
from .documents_admin import DocumentAdmin      # Nouveau
from .prospection_admin import ProspectionAdmin, HistoriqueProspection



================================================
File: rap_app/admin/centres_admin.py
================================================
import logging
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from ..models import Centre, Formation
from rap_app import models

# Configuration du logger
logger = logging.getLogger(__name__)

@admin.register(Centre)
class CentreAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour les centres de formation.
    
    Fonctionnalités:
    - Liste affichant nom, code postal et dates de création/modification
    - Filtrage par code postal
    - Recherche par nom ou code postal
    - Tri par nom par défaut
    - Affichage et organisation des champs en sections
    """
    
    # Colonnes affichées dans la liste des centres
    list_display = ('nom', 'code_postal', 'nombre_formations', 'created_at', 'updated_at')
    
    # Filtres disponibles dans le panneau latéral
    list_filter = ('code_postal',)
    
    # Champs pour la recherche
    search_fields = ('nom', 'code_postal')
    
    # Tri par défaut
    ordering = ('nom',)
    
    # Champs en lecture seule (non modifiables)
    readonly_fields = ('created_at', 'updated_at', 'nombre_formations', 'formations_list')
    
    # Organisation des champs en sections
    fieldsets = (
        ('Informations', {
            'fields': ('nom', 'code_postal'),
            'description': 'Informations principales du centre de formation'
        }),
        ('Formations associées', {
            'fields': ('nombre_formations', 'formations_list'),
            'classes': ('collapse',),
            'description': 'Liste des formations rattachées à ce centre'
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
            'description': 'Informations temporelles automatiques'
        }),
    )
    
    def nombre_formations(self, obj):
        """Affiche le nombre de formations associées au centre."""
        count = obj.formations.count()
        return format_html(
            '<span style="color:{}">{}</span>',
            'green' if count > 0 else 'grey',
            count
        )
    nombre_formations.short_description = "Nombre de formations"
    nombre_formations.admin_order_field = 'formations__count'
    
    def formations_list(self, obj):
        """Affiche une liste des formations associées avec liens."""
        formations = obj.formations.all()[:10]  # Limite à 10 formations pour éviter une liste trop longue
        
        if not formations:
            return "Aucune formation associée"
            
        formations_links = []
        for formation in formations:
            url = reverse('admin:rap_app_formation_change', args=[formation.pk])
            formations_links.append(
                f'<a href="{url}">{formation.nom}</a>'
            )
            
        html = '<ul>' + ''.join([f'<li>{link}</li>' for link in formations_links]) + '</ul>'
        
        if obj.formations.count() > 10:
            html += f'<a href="?formation__centre__id__exact={obj.pk}">Voir toutes les formations ({obj.formations.count()})</a>'
            
        return format_html(html)
    formations_list.short_description = "Formations associées"
    
    def get_queryset(self, request):
        """Surcharge pour optimiser les requêtes."""
        queryset = super().get_queryset(request)
        queryset = queryset.annotate(
            formations__count=models.Count('formations')
        )
        return queryset
    
    def save_model(self, request, obj, form, change):
        """Journalise les modifications des centres via l'admin."""
        if change:  # Modification d'un centre existant
            original = Centre.objects.get(pk=obj.pk)
            changes = []
            
            if original.nom != obj.nom:
                changes.append(f"nom: '{original.nom}' → '{obj.nom}'")
                
            if original.code_postal != obj.code_postal:
                changes.append(f"code_postal: '{original.code_postal}' → '{obj.code_postal}'")
                
            if changes:
                logger.info(
                    f"Admin - Modification du centre #{obj.pk} par {request.user}: "
                    f"{', '.join(changes)}"
                )
        else:  # Création d'un nouveau centre
            logger.info(
                f"Admin - Création d'un nouveau centre par {request.user}: "
                f"nom='{obj.nom}', code_postal='{obj.code_postal}'"
            )
            
        super().save_model(request, obj, form, change)
    
    def delete_model(self, request, obj):
        """Journalise la suppression d'un centre via l'admin."""
        formations_count = obj.formations.count()
        
        logger.warning(
            f"Admin - Suppression du centre #{obj.pk} '{obj.nom}' par {request.user}. "
            f"{formations_count} formations associées."
        )
        
        super().delete_model(request, obj)
    
    class Media:
        """Ajout de CSS pour l'interface d'administration."""
        css = {
            'all': ('css/admin/centre_admin.css',)
        }


================================================
File: rap_app/admin/commentaires_admin.py
================================================
import logging
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from ..models.commentaires import Commentaire
from ..models.formations import Formation

# Configuration du logger
logger = logging.getLogger(__name__)

Utilisateur = get_user_model()

@admin.register(Commentaire)
class CommentaireAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour la gestion des commentaires liés aux formations.
    
    Caractéristiques:
    - Liste avec formation, utilisateur, contenu, saturation et date
    - Filtres par formation, utilisateur, saturation et date
    - Recherche par formation, utilisateur et contenu
    - Vue détaillée organisée en sections
    - Attribution automatique de l'utilisateur lors de la création
    """

    # Affichage des principales informations
    list_display = ("formation_link", "utilisateur_link", "contenu_preview", "saturation_display", "created_at")

    # Ajout de filtres pour faciliter la recherche
    list_filter = (
        "formation__centre", 
        "utilisateur", 
        "saturation", 
        "created_at",
        ("saturation", admin.EmptyFieldListFilter),  # Filtrer les commentaires sans saturation
    )

    # Recherche rapide sur certains champs
    search_fields = ("formation__nom", "utilisateur__username", "utilisateur__email", "contenu")

    # Rendre certains champs en lecture seule
    readonly_fields = ("utilisateur", "created_at", "updated_at", "formation_details")

    # Organisation des champs
    fieldsets = (
        ("Informations générales", {
            "fields": ("formation", "formation_details", "utilisateur"),
            "description": "Information sur la formation et l'utilisateur concernés",
        }),
        ("Contenu du commentaire", {
            "fields": ("contenu",),
            "description": "Texte du commentaire",
        }),
        ("Données complémentaires", {
            "fields": ("saturation",),
            "description": "Données additionnelles liées au commentaire",
        }),
        ("Métadonnées", {
            "fields": ("created_at", "updated_at"),
            "classes": ("collapse",),
            "description": "Informations temporelles automatiques",
        }),
    )

    ordering = ("-created_at",)
    list_per_page = 20
    date_hierarchy = "created_at"  # Navigation par date
    
    def get_queryset(self, request):
        """Optimise les requêtes avec des jointures."""
        queryset = super().get_queryset(request)
        return queryset.select_related('formation', 'formation__centre', 'utilisateur')

    def formation_link(self, obj):
        """Affiche un lien vers la formation associée."""
        if obj.formation:
            url = reverse('admin:rap_app_formation_change', args=[obj.formation.id])
            return format_html('<a href="{}">{}</a>', url, obj.formation.nom)
        return "—"
    formation_link.short_description = "Formation"
    formation_link.admin_order_field = "formation__nom"

    def utilisateur_link(self, obj):
        """Affiche un lien vers l'utilisateur associé."""
        if obj.utilisateur:
            url = reverse('admin:auth_user_change', args=[obj.utilisateur.id])
            return format_html('<a href="{}">{}</a>', url, obj.utilisateur.username)
        return "Anonyme"
    utilisateur_link.short_description = "Utilisateur"
    utilisateur_link.admin_order_field = "utilisateur__username"

    def contenu_preview(self, obj):
        """Affiche un aperçu tronqué du contenu du commentaire."""
        max_length = 50
        if len(obj.contenu) <= max_length:
            return obj.contenu
        return format_html(
            '{}... <span class="viewlink">(<a href="{}">Voir tout</a>)</span>', 
            obj.contenu[:max_length], 
            reverse('admin:rap_app_commentaire_change', args=[obj.id])
        )
    contenu_preview.short_description = "Contenu"

    def saturation_display(self, obj):
        """Affiche le niveau de saturation avec code couleur."""
        if obj.saturation is None:
            return "—"
            
        # Détermination de la couleur selon le pourcentage
        if obj.saturation < 50:
            color = "green"
        elif obj.saturation < 80:
            color = "orange"
        else:
            color = "red"
            
        return format_html(
            '<div style="width:100%%; background-color: #f8f9fa; border-radius: 3px;">'
            '<div style="width:{}%%; background-color: {}; height: 10px; border-radius: 3px;"></div>'
            '</div>'
            '<span>{} %</span>', 
            min(obj.saturation, 100), color, obj.saturation
        )
    saturation_display.short_description = "Saturation"
    saturation_display.admin_order_field = "saturation"
    
    def formation_details(self, obj):
        """Affiche les détails de la formation associée."""
        if not obj.formation:
            return "Aucune formation associée"
            
        formation = obj.formation
        return format_html(
            '<table class="formation-details">'
            '<tr><th>Nom:</th><td>{}</td></tr>'
            '<tr><th>Centre:</th><td>{}</td></tr>'
            '<tr><th>Statut:</th><td>{}</td></tr>'
            '<tr><th>Dates:</th><td>{} → {}</td></tr>'
            '<tr><th>Commentaires:</th><td>{}</td></tr>'
            '</table>',
            formation.nom,
            formation.centre.nom if formation.centre else "—",
            formation.statut.nom if formation.statut else "—",
            formation.start_date.strftime('%d/%m/%Y') if formation.start_date else "—",
            formation.end_date.strftime('%d/%m/%Y') if formation.end_date else "—",
            formation.commentaires.count()
        )
    formation_details.short_description = "Détails de la formation"

    def save_model(self, request, obj, form, change):
        """
        Assigne l'utilisateur connecté à l'ajout d'un commentaire et
        journalise l'opération.
        """
        if not change:  # Création d'un nouveau commentaire
            if not obj.utilisateur:
                # Vérifie que request.user est bien du bon type
                if isinstance(request.user, Utilisateur):
                    obj.utilisateur = request.user
                else:
                    obj.utilisateur = Utilisateur.objects.get(pk=request.user.pk)
                    
            logger.info(
                f"Admin - Création d'un commentaire par {request.user.username} "
                f"pour la formation '{obj.formation.nom if obj.formation else 'N/A'}'"
            )
        else:  # Modification d'un commentaire existant
            original = Commentaire.objects.get(pk=obj.pk)
            changes = []
            
            if original.contenu != obj.contenu:
                changes.append("contenu modifié")
                
            if original.saturation != obj.saturation:
                changes.append(f"saturation: {original.saturation}% → {obj.saturation}%")
                
            if original.formation != obj.formation:
                changes.append(
                    f"formation: '{original.formation.nom if original.formation else 'N/A'}' → "
                    f"'{obj.formation.nom if obj.formation else 'N/A'}'"
                )
                
            if changes:
                logger.info(
                    f"Admin - Modification du commentaire #{obj.pk} par {request.user.username}: "
                    f"{', '.join(changes)}"
                )
                
        obj.save()

    def delete_model(self, request, obj):
        """Journalise la suppression d'un commentaire depuis l'admin."""
        logger.warning(
            f"Admin - Suppression du commentaire #{obj.pk} "
            f"(créé le {obj.created_at.strftime('%d/%m/%Y')} "
            f"par {obj.utilisateur.username if obj.utilisateur else 'Anonyme'}) "
            f"pour la formation '{obj.formation.nom if obj.formation else 'N/A'}' "
            f"par {request.user.username}"
        )
        super().delete_model(request, obj)
        
    class Media:
        """Ressources CSS et JS pour l'interface d'admin."""
        css = {
            'all': ('css/admin/commentaire_admin.css',)
        }


================================================
File: rap_app/admin/company_admin.py
================================================
import logging
from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.db.models import Count
from django.contrib.admin.filters import SimpleListFilter
from django.utils.safestring import mark_safe

from ..models.company import Company
from ..models.prospection import Prospection

# Configuration du logger
logger = logging.getLogger(__name__)

# Filtre personnalisé pour les entreprises avec/sans prospections
class HasProspectionsFilter(SimpleListFilter):
    title = 'a des prospections'
    parameter_name = 'has_prospections'
    
    def lookups(self, request, model_admin):
        return (
            ('yes', 'Avec prospections'),
            ('no', 'Sans prospection')
        )
    
    def queryset(self, request, queryset):
        if self.value() == 'yes':
            return queryset.annotate(prospections_count=Count('prospections')).filter(prospections_count__gt=0)
        if self.value() == 'no':
            return queryset.annotate(prospections_count=Count('prospections')).filter(prospections_count=0)
        return queryset

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    """
    Interface d'administration personnalisée pour le modèle Company.
    """
    list_display = (
        'name',                 # Nom de l'entreprise
        'city_with_code',       # Ville avec code postal
        'contact_info',         # Informations de contact
        'sector_name',          # Secteur d'activité
        'actions_display',      # Type d'action
        'prospections_count',   # Nombre de prospections
        'website_link',         # Lien vers le site web
        'created_at',           # Date de création
        'created_by',           # Utilisateur qui a créé l'entrée
    )

    list_display_links = ('name',)

    list_filter = (
        'city',                # Filtre par ville
        'sector_name',         # Filtre par secteur d'activité
        'actions',             # Filtre par type d'action
        HasProspectionsFilter, # Filtre personnalisé
        'created_at',          # Filtre par date
    )

    search_fields = (
        'name',               # Recherche par nom d'entreprise
        'contact_name',       # Recherche par nom du contact
        'contact_email',      # Recherche par email du contact
        'contact_job',        # Recherche par poste du contact
        'sector_name',        # Recherche par secteur
        'city',               # Recherche par ville
        'zip_code',           # Recherche par code postal
    )

    fieldsets = (
        ("Informations générales", {
            'fields': (('name', 'sector_name'), ('street_name', 'zip_code', 'city', 'country')),
            'description': 'Informations principales de l\'entreprise'
        }),
        ("Contact", {
            'fields': (('contact_name', 'contact_job'), ('contact_email', 'contact_phone_number')),
            'description': 'Coordonnées du contact principal'
        }),
        ("Opportunités", {
            'fields': ('actions', 'action_description'),
            'description': 'Actions possibles avec cette entreprise'
        }),
        ("Présence en ligne", {
            'fields': ('website', 'social_network_url'),
            'description': 'Sites web et profils sur les réseaux sociaux'
        }),
        ("Métadonnées", {
            'fields': ('created_by', 'created_at', 'updated_at'),
            'classes': ('collapse',),
            'description': 'Informations sur la création et les modifications'
        }),
    )

    readonly_fields = ('created_at', 'updated_at', 'prospections_list')
    list_per_page = 20
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    
    def get_queryset(self, request):
        """
        Optimise les requêtes en préchargeant les relations
        et en calculant le nombre de prospections.
        """
        queryset = super().get_queryset(request)
        queryset = queryset.select_related('created_by').annotate(
            num_prospections=Count('prospections', distinct=True)
        )
        return queryset
    
    def city_with_code(self, obj):
        """Affiche la ville avec le code postal."""
        if obj.city and obj.zip_code:
            return f"{obj.city} ({obj.zip_code})"
        elif obj.city:
            return obj.city
        elif obj.zip_code:
            return f"CP: {obj.zip_code}"
        return "—"
    city_with_code.short_description = "Localisation"
    city_with_code.admin_order_field = 'city'
    
    def contact_info(self, obj):
        """Affiche les informations de contact de manière compacte."""
        if obj.contact_name:
            contact_parts = [obj.contact_name]
            if obj.contact_job:
                contact_parts.append(f"<em>{obj.contact_job}</em>")
            if obj.contact_email:
                contact_parts.append(f'<a href="mailto:{obj.contact_email}">{obj.contact_email}</a>')
            return format_html(' - '.join(contact_parts))
        return "—"
    contact_info.short_description = "Contact"
    contact_info.admin_order_field = 'contact_name'
    
    def actions_display(self, obj):
        """Affiche le type d'action avec une étiquette colorée."""
        if not obj.actions:
            return "—"
            
        action_labels = {
            'accueil_stagiaires': ('bg-info', 'Stagiaires'),
            'recrutement_cdi': ('bg-success', 'CDI'),
            'recrutement_cdd': ('bg-success', 'CDD'),
            'recrutement_stage': ('bg-info', 'Stage'),
            'recrutement_formation': ('bg-primary', 'Formation'),
            'recrutement_apprentissage': ('bg-warning', 'Apprentissage'),
            'partenariat': ('bg-primary', 'Partenariat'),
            'taxe_apprentissage': ('bg-warning', 'Taxe'),
        }
        
        # Valeur par défaut pour les actions non spécifiées
        bg_class, label = action_labels.get(obj.actions, ('bg-secondary', dict(obj.CHOICES_TYPE_OF_ACTION).get(obj.actions, 'Autre')))
        
        return format_html(
            '<span class="badge {}">{}</span>',
            bg_class, label
        )
    actions_display.short_description = "Action"
    actions_display.admin_order_field = 'actions'
    
    def website_link(self, obj):
        """Affiche un lien vers le site web s'il existe."""
        if obj.website:
            return format_html('<a href="{}" target="_blank">Visiter</a>', obj.website)
        return "—"
    website_link.short_description = "Site Web"
    
    def prospections_count(self, obj):
        """Affiche le nombre de prospections avec un lien vers le filtre."""
        count = getattr(obj, 'num_prospections', 0)
        if count > 0:
            url = reverse('admin:rap_app_prospection_changelist') + f'?company__id__exact={obj.pk}'
            return format_html('<a href="{}">{} prospection(s)</a>', url, count)
        return "Aucune"
    prospections_count.short_description = "Prospections"
    prospections_count.admin_order_field = 'num_prospections'
    
    def prospections_list(self, obj):
        """Affiche la liste des prospections associées dans le détail."""
        prospections = Prospection.objects.filter(company=obj).select_related('formation', 'responsable')
        if not prospections.exists():
            return "Aucune prospection associée à cette entreprise."
            
        html = ['<table class="table"><thead><tr>',
                '<th>Date</th><th>Formation</th><th>Statut</th><th>Objectif</th><th>Responsable</th>',
                '</tr></thead><tbody>']
        
        for p in prospections:
            formation_name = p.formation.nom if p.formation else "—"
            responsable_name = p.responsable.username if p.responsable else "—"
            
            html.append(f'<tr>')
            html.append(f'<td>{p.date_prospection.strftime("%d/%m/%Y")}</td>')
            html.append(f'<td>{formation_name}</td>')
            html.append(f'<td>{p.get_statut_display()}</td>')
            html.append(f'<td>{p.get_objectif_display()}</td>')
            html.append(f'<td>{responsable_name}</td>')
            html.append('</tr>')
            
        html.append('</tbody></table>')
        
        return mark_safe(''.join(html))
    prospections_list.short_description = "Activités de prospection"

    def save_model(self, request, obj, form, change):
        """
        Assigne l'utilisateur actuel comme créateur si nécessaire
        et journalise l'action.
        """
        is_new = not obj.pk
        
        if not obj.created_by:
            obj.created_by = request.user
        
        if is_new:
            logger.info(f"Admin - Création d'une nouvelle entreprise '{obj.name}' par {request.user.username}")
        else:
            if form.changed_data:
                logger.info(
                    f"Admin - Modification de l'entreprise #{obj.pk} '{obj.name}' par {request.user.username}. "
                    f"Champs modifiés: {', '.join(form.changed_data)}"
                )
                
        super().save_model(request, obj, form, change)

    def delete_model(self, request, obj):
        """Journalise la suppression d'une entreprise."""
        logger.warning(
            f"Admin - Suppression de l'entreprise #{obj.pk} '{obj.name}' "
            f"par {request.user.username}"
        )
        super().delete_model(request, obj)

    def has_delete_permission(self, request, obj=None):
        """
        Empêche la suppression si l'entreprise a des prospections associées.
        """
        if obj is None:
            return True
            
        prospections_count = Prospection.objects.filter(company=obj).count()
        
        if prospections_count > 0:
            return False
            
        return True
    
    class Media:
        """Ressources CSS et JS pour l'interface d'admin."""
        css = {
            'all': ('css/admin/company_admin.css',)
        }


================================================
File: rap_app/admin/documents_admin.py
================================================
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from ..models import Document, Formation


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    """
    Interface d'administration pour la gestion des documents associés aux formations.
    """
    
    # Affichage des principales informations
    list_display = ('nom_fichier', 'formation_link', 'type_document', 'taille_fichier', 'file_link', 'created_at')
    
    # Ajout de filtres pour faciliter la navigation
    list_filter = ('type_document', 'formation__centre', 'created_at')
    
    # Recherche rapide sur certains champs
    search_fields = ('nom_fichier', 'formation