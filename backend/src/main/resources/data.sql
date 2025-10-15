-- USERS TABLE
INSERT INTO users (name, email, password, role, profile_title, profile_desc, profile_image) VALUES
                                                                                                ('Sophia', 'sophia@example.com', 'hashed_password1', 'freelancer', 'Web Developer', 'Expert in front-end development', '/assets/avtar1.png'),
                                                                                                ('Ethan', 'ethan@example.com', 'hashed_password2', 'freelancer', 'Graphic Designer', 'Creative and innovative designs', '/assets/avtar2.png'),
                                                                                                ('Olivia', 'olivia@example.com', 'hashed_password3', 'freelancer', 'Content Writer', 'Engaging and SEO-friendly content', '/assets/avtar3.png'),
                                                                                                ('Liam Carter', 'liam@example.com', 'hashed_password4', 'client', NULL, NULL, NULL),
                                                                                                ('Ava Harper', 'ava@example.com', 'hashed_password5', 'client', NULL, NULL, NULL);

-- JOBS TABLE
INSERT INTO jobs (client_id, title, description, category, budget, duration, location, job_type, status, image_url) VALUES
                                                                                                                        (4, 'Web Development Project', 'Build a responsive website', 'Web Development', 5000.00, '2 weeks', 'Remote', 'fixed', 'open', '/assets/web.png'),
                                                                                                                        (5, 'Graphic Design Project', 'Design a logo and brand identity', 'Graphic Design', 3000.00, '1 week', 'Remote', 'fixed', 'open', '/assets/writing.jpeg'),
                                                                                                                        (4, 'Content Writing Project', 'Write blog posts and articles', 'Content Writing', 2000.00, '3 days', 'Remote', 'fixed', 'open', '/assets/design.jpeg');
INSERT INTO jobs (client_id, title, description, category, budget, duration, location, enddate, job_type, status, image_url)
VALUES
    (1, 'Build a React Frontend', 'Need a responsive React + Tailwind frontend for a freelancing platform.', 'Web Development', 500.00, '2 weeks', 'Remote', '2025-09-15', 'fixed', 'open', 'https://example.com/job1.png'),

    (2, 'Logo Design for Startup', 'Creative logo design required for a new fintech startup.', 'Graphic Design', 150.00, '1 week', 'Remote', '2025-09-10', 'fixed', 'open', 'https://example.com/job2.png'),

    (3, 'API Development in Spring Boot', 'Build secure REST APIs with JWT authentication for freelancing platform.', 'Backend Development', 1200.00, '1 month', 'Remote', '2025-10-01', 'fixed', 'in_progress', 'https://example.com/job3.png'),

    (4, 'Content Writing - Blog Articles', 'Write 10 SEO-friendly blog posts on technology trends.', 'Content Writing', 300.00, '3 weeks', 'Remote', '2025-09-20', 'hourly', 'open', 'https://example.com/job4.png'),

    (5, 'Mobile App UI Design', 'Figma design for an Android & iOS freelancing app.', 'UI/UX Design', 800.00, '3 weeks', 'Remote', '2025-09-25', 'fixed', 'open', 'https://example.com/job5.png'),

    (6, 'Data Analysis Project', 'Analyze sales data and create dashboards in PowerBI.', 'Data Science', 1000.00, '1 month', 'Remote', '2025-10-05', 'hourly', 'closed', 'https://example.com/job6.png');

-- APPLICATIONS TABLE
INSERT INTO applications (job_id, freelancer_id, proposal, expected_budget, status) VALUES
                                                                                        (1, 1, 'I can build your site with modern tools and responsive UI.', 4800.00, 'pending'),
                                                                                        (2, 2, 'Experienced logo designer here. Will deliver within deadline.', 2900.00, 'pending'),
                                                                                        (3, 3, 'Professional content writer ready to deliver SEO blogs.', 2100.00, 'pending');

-- PROJECT AGREEMENTS TABLE
INSERT INTO project_agreements (job_id, client_id, freelancer_id, terms, start_date, end_date, status) VALUES
                                                                                                           (1, 4, 1, 'Complete frontend and backend using React and Spring Boot.', '2025-08-01', '2025-08-15', 'active'),
                                                                                                           (2, 5, 2, 'Logo, color palette, and brand assets.', '2025-08-03', '2025-08-10', 'active');

-- REVIEWS / TESTIMONIALS TABLE
INSERT INTO reviews (reviewer_id, reviewee_id, job_id, rating, review, review_date) VALUES
                                                                                        (4, 1, 1, 5, 'Exceptional work within the deadline. Highly recommend!', '2023-08-15'),
                                                                                        (5, 2, 2, 4, 'Great selection of talented freelancers. Very satisfied.', '2023-07-20');

-- CATEGORIES TABLE
INSERT INTO categories (name) VALUES
                                  ('Web Development'),
                                  ('Graphic Design'),
                                  ('Content Writing'),
                                  ('Digital Marketing'),
                                  ('Mobile App Development'),
                                  ('Video Editing');

-- PLATFORM FEATURES TABLE
INSERT INTO platform_features (title, description) VALUES
                                                       ('Secure Payments', 'Timely payments for all projects.'),
                                                       ('Vetted Talent', 'We verify freelancers for quality.'),
                                                       ('Flexible Hours', 'Work your own schedule remotely.');

INSERT INTO client (name, email, password, company_name, contact_number, profile_desc, rating, payment_status)
VALUES
    ('Rohit Sharma', 'rohit@example.com', 'hashed_password1', 'Tech Solutions', '9876543210', 'Long-term client hiring developers for SaaS projects', 4.5, 'COMPLETED'),

    ('Priya Mehta', 'priya@example.com', 'hashed_password2', 'Mehta Designs', '9123456780', 'Looking for creative freelancers for branding & design', 4.2, 'PENDING'),

    ('Ankit Verma', 'ankitv@example.com', 'hashed_password3', NULL, '9871203456', 'Startup founder seeking backend developers', 3.8, 'COMPLETED'),

    ('Sarah Khan', 'sarahk@example.com', 'hashed_password4', 'Khan Enterprises', '9812345678', 'Regular client, prefers long-term contracts', 4.9, 'COMPLETED'),

    ('James Patel', 'jamesp@example.com', 'hashed_password5', 'Global Ventures', '7001234567', 'Occasional project postings for mobile apps', 4.0, 'FAILED');


INSERT INTO freelancer (name, email, password, profile_title, profile_desc, rating)
VALUES
    ('Arjun Mehta', 'arjun@example.com', 'hashed_password1', 'Full Stack Developer', 'Experienced in React, Node.js, and Spring Boot. Delivered 20+ web applications.', 4.7),

    ('Kavya Singh', 'kavya@example.com', 'hashed_password2', 'UI/UX Designer', 'Creative designer specializing in Figma, Adobe XD, and responsive designs.', 4.5),

    ('Ravi Sharma', 'ravi@example.com', 'hashed_password3', 'Backend Developer', 'Expert in Java, Spring Boot, and REST APIs with 3+ years experience.', 4.3),

    ('Sanya Verma', 'sanya@example.com', 'hashed_password4', 'Mobile App Developer', 'Specialized in Flutter and React Native, built apps with 50K+ downloads.', 4.8),

    ('Mohammed Ali', 'ali@example.com', 'hashed_password5', 'Data Scientist', 'Machine learning enthusiast skilled in Python, TensorFlow, and NLP.', 4.6);


INSERT INTO Role (name)
VALUES ('Backend Developer'),
       ('Full Stack Developer'),
       ('Data Scientist');

insert into freelancer_roles (freelancer_id, role_id)
select distinct f.id, r.id
from freelancer f
join Role r
where f.profile_title = r.name;

INSERT INTO ToDo (title, status, created_at, updated_at)
VALUES
    ('Milk For KanhaJi', false, NOW(), NOW()),
    ('Wash Clothes For KanhaJi', false, NOW(), NOW()),
    ('Make Food For KanhaJi', false, NOW(), NOW()),
    ('Request For KanhaJi SafeGuard', false, NOW(), NOW()),
    ('Praise KanhaJi', true, NOW(), NOW()),
    ('Clean Temple Room', false, NOW(), NOW()),
    ('Offer Flowers To KanhaJi', true, NOW(), NOW());
