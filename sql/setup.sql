DROP TABLE IF EXISTS uploads;

CREATE TABLE uploads (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fileName VARCHAR(512) NOT NULL
);
