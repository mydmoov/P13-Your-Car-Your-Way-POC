# 🚗 Your Car Your Way - Proof of Concept (POC)   ![Your Car Your Way Logo](/P13-chat-frontend/src/assets/images/p13_logo.PNG)



## ✨ Introduction :

Bienvenue dans le projet **Your Car Your Way** ! Ce POC a pour objectif de démontrer la faisabilité de l'application en mettant l'accent sur la fonctionnalité de **chat en ligne** entre les clients et les agents du service client.

L'application vise à centraliser les opérations de location de voiture tout en offrant une expérience utilisateur fluide et intuitive.

### **Ce POC inclut les fonctionnalités clés suivantes :**

- Chat en ligne en temps réel (via WebSocket).

---

## 🛠️ Prérequis

### **Backend (Spring Boot)**
- **Java** : Version 11 ou supérieure.
- **Maven** : Pour gérer les dépendances.
- **H2** : Pour le stockage des messages de chat.


### **Frontend (Angular)**
- **Node.js** : Version 18 ou supérieure.
- **npm** : Gestionnaire de paquets pour Angular.
- **Angular17**

---

## 📂 Configuration de la Base de Données

---

## 🔧 Configuration des Propriétés Backend

Ajoutez les paramètres suivants dans application.properties ou un fichier database.properties à inclure dans votre projet Spring Boot :


# Configuration MySQL

```

spring.datasource.username=<votre_nom_utilisateur>
spring.datasource.password=<votre_mot_de_passe>
spring.jpa.hibernate.ddl-auto=update
```
---

## Lancement :

### 🚀 Lancement de l'Application Spring Boot (Backend)

Lancez l'application Spring Boot à l'aide de Maven :
```
mvn spring-boot:run
```

### 🏃‍♂️ Lancement de l'Application Angular (Frontend)

Installez les dépendances nécessaires :
```
npm install
```
Lancez l'application Angular :
```
ng serve
```
Ouvrez l'application dans votre navigateur :
```
[npm install](http://localhost:4200/)
```

## 📂 Architecture

📋 Fonctionnalités POC

Chat en ligne avec un agent.
Réponses en temps réel via le chat.

## 📂 Documentation Supplémentaire


## 🎯 Objectif

Ce POC vise à démontrer la faisabilité de la fonctionnalité Chat de l'application. Si vous avez des retours ou des suggestions, n'hésitez pas à les partager ! 😊
