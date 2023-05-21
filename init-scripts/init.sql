CREATE DATABASE al;
-- Sélection de la base de données "al"
\c al;

-- Création de la table "client"
CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255)
);
