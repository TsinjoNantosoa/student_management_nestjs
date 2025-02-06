# 🎓 Student Management API

Une API REST complète pour la gestion des étudiants, développée avec **NestJS**, **TypeORM**, et **PostgreSQL**.  
Elle permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les étudiants, avec une base de données PostgreSQL.

## 🚀 Fonctionnalités

- Créer un étudiant
- Afficher tous les étudiants
- Afficher un étudiant par ID
- Mettre à jour un étudiant
- Supprimer un étudiant

---

## 🚀 Installation

### 1️⃣ Cloner le projet
Clonez ce projet dans votre répertoire local :
```bash
git clone https://github.com/TsinjoNantosoa/student-management.git
cd student-management

Installer les dépendances:
npm install


Modifiez les informations de la base de données dans le fichier src/app.module.ts :

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  entities: [Student],
  synchronize: true, // Mettre à false en production
})

Démarrez le serveur de développement :
npm run start:dev

Structure du projet:

student-management/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── student/
│   │   ├── dto/
│   │   │   ├── create-student.dto.ts
│   │   │   ├── update-student.dto.ts
│   │   ├── entities/
│   │   │   ├── student.entity.ts
│   │   ├── student.controller.ts
│   │   ├── student.module.ts
│   │   ├── student.service.ts
├── package.json
├── tsconfig.json
├── README.md

Technologies utilisées:
NestJS - Framework Node.js
TypeORM - ORM pour TypeScript
PostgreSQL - Base de données relationnelle
Node.js - Environnement d'exécution

📌 Auteur
👨‍💻 SANDANIAINA TSINJO NANTOSOA
📧 tsinjonantosoa@gmail.com
