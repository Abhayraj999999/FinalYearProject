-- JOBS TABLE
CREATE TABLE jobs (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      client_id INT,
                      title VARCHAR(255) NOT NULL,
                      description TEXT,
                      category VARCHAR(100),
                      budget DECIMAL(10, 2),
                      duration VARCHAR(50),
                      location VARCHAR(100),
                      enddate DATE,
                      job_type ENUM('hourly', 'fixed') DEFAULT 'fixed',
                      status ENUM('open', 'closed', 'in_progress', 'completed') DEFAULT 'open',
                      image_url VARCHAR(255),
                      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

alter table jobs
add enddate DATE;
drop table users;
show create table jobs;
show create table users;
alter table jobs drop foreign key jobs_ibfk_1;
update jobs set enddate = '2027-09-15';
drop table users;

show create table project_agreements;
alter table project_agreements drop foreign key project_agreements_ibfk_3;
-- PROJECT AGREEMENTS TABLE
CREATE TABLE project_agreements (
                                    id INT AUTO_INCREMENT PRIMARY KEY,
                                    job_id INT,
                                    client_id INT,
                                    freelancer_id INT,
                                    terms TEXT,
                                    start_date DATE,
                                    end_date DATE,
                                    status ENUM('active', 'completed', 'terminated') DEFAULT 'active',
                                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                    FOREIGN KEY (job_id) REFERENCES jobs(id)
);

-- PLATFORM FEATURES (static content)
CREATE TABLE platform_features (
                                   id INT AUTO_INCREMENT PRIMARY KEY,
                                   title VARCHAR(100),
                                   description TEXT
);

create table freelancer (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name varchar(100) not null,
                            email varchar(100) unique not null,
                            password varchar(255) not null,
                            profile_title varchar(100),
                            profile_desc text,
                            rating decimal(2,1) not null check(rating >= 1 and rating <= 5),
                            created_at timestamp default current_timestamp,
                            updated_at timestamp default current_timestamp on update current_timestamp
);

alter table freelancer
modify column profile_desc text,
modify column password varchar(255);

CREATE TABLE client (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        email VARCHAR(100) UNIQUE NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        company_name VARCHAR(100),
                        contact_number VARCHAR(20),
                        profile_desc VARCHAR(255),        -- Description about client/company
                        rating DECIMAL(2,1) DEFAULT 0.0, -- Average rating (0.0 to 5.0)
                        payment_status VARCHAR(50) DEFAULT 'PENDING', -- e.g., PENDING, COMPLETED, FAILED
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
alter table client modify password varchar(255) not null;

CREATE TABLE Role (
                      id INT PRIMARY KEY AUTO_INCREMENT,
                      name VARCHAR(225) NOT NULL UNIQUE
);

CREATE TABLE freelancer_roles (
                                  freelancer_id INT NOT NULL,
                                  role_id INT NOT NULL,
                                  PRIMARY KEY (freelancer_id, role_id),
                                  FOREIGN KEY (freelancer_id) REFERENCES freelancer(id) ON DELETE CASCADE,
                                  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);


CREATE TABLE ToDo (
    ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    title varchar(255),
    status boolean,
    created_at timestamp,
    updated_at timestamp
);


