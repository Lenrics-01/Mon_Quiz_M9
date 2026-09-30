# 1) Vérifier les remotes existants
git remote -v

# 2) Ajouter le repo de ton collègue / professeur
git remote add prof https://github.com/SON-UTILISATEUR/NOM-DU-DEPOT.git

# 3) Récupérer ses fichiers sans fusionner
git fetch prof

# 4) Copier le contenu de sa branche dans ton dossier local
git checkout prof/main -- .

# 5) Vérifier l’état
git status

# 6) Enregistrer les changements
git add .
git commit -m "Récupération du contenu de prof"