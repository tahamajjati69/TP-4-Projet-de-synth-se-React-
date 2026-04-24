# React – Application To-Do List Interactive

## 📖 Description
Ce projet est une **application To-Do List interactive** développée avec React.  
Elle permet d’ajouter, modifier, supprimer et filtrer des tâches, tout en sauvegardant automatiquement les données dans le **localStorage** pour une persistance entre les sessions.

---

## 📂 Structure du projet
```
TodoApp/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
└── public/
└── index.html
```

---

## ⚙️ Fonctionnalités

### 📝 Gestion des tâches
- **Ajout** de nouvelles tâches via `TodoForm`.  
- **Modification** du texte d’une tâche existante.  
- **Suppression** d’une tâche.  
- **Marquage** d’une tâche comme terminée ou active.  

### 🔄 Persistance des données
- Les tâches sont sauvegardées dans le **localStorage**.  
- À chaque modification, la liste est mise à jour et stockée automatiquement.  

### 🎛️ Filtrage
- Trois filtres disponibles :  
  - **All** : toutes les tâches.  
  - **Active** : uniquement les tâches non terminées.  
  - **Done** : uniquement les tâches terminées.  

### 🎨 Interface utilisateur
- Design moderne avec `App.css`.  
- Boutons stylisés.
- Liste de tâches avec indication visuelle des tâches terminées (texte barré).  

---

## 🖥️ Exemple d’exécution



https://github.com/user-attachments/assets/3d771a4d-6249-4317-88ce-9afab88160cd




---

## 💡 Concepts pratiqués
- Utilisation de **useState** pour gérer l’état des tâches.  
- Utilisation de **useEffect** pour synchroniser avec le localStorage.  
- Passage de fonctions en **props** pour gérer les interactions entre composants.  
- Filtrage dynamique des données.  
- Stylisation avec **CSS**.  

---

## 🧑‍💻 Auteur
👤 **Majjati mohamed Taha**  
⚛️ Développement React  
🎓 Instructor : **Mr. LACHGAR**  
📅 24 Avril 2026

