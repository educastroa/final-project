DROP TABLE IF EXISTS resume CASCADE;

CREATE TABLE resume (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  contact_information VARCHAR(255) NOT NULL,
  skills VARCHAR(255) NOT NULL,
  work_experience VARCHAR(255) NOT NULL,
  education VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
)
