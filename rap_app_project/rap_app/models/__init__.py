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
from .vae_jury import VAE, SuiviJury, HistoriqueStatutVAE

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
    'HistoriqueProspection',
    'Company',
    'Semaine',
    'PrepaCompGlobal',
    'VAE',
    'SuiviJury',
    'HistoriqueStatutVAE',
]
