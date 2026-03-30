CREATE TABLE crops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(100)
);

CREATE TABLE soil_conditions (
    id SERIAL PRIMARY KEY,
    moisture INTEGER,
    temperature INTEGER
);