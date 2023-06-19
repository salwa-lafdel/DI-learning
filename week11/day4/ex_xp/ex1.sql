-- -------Subqueries------------
-- 1
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT salary
    FROM employees
    WHERE last_name = 'Bull'
    LIMIT 1
)
-- 2
SELECT first_name, last_name
FROM employees
WHERE manager_id = (
    SELECT employee_id
    FROM employees
    WHERE department_id = (
        SELECT department_id
        FROM departments
        WHERE country = 'United States'
        LIMIT 1
    )
    LIMIT 1
);
-- 3
SELECT first_name, last_name
FROM employees
WHERE employee_id IN (
    SELECT DISTINCT manager_id
    FROM employees
);
-- 4
SELECT first_name, last_name
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
-- 5
SELECT first_name, last_name
FROM employees
WHERE salary = (
    SELECT MIN(salary)
    FROM employees
    WHERE job_id = employees.job_id
);
-- 6
SELECT first_name, last_name
FROM employees
WHERE employee_id NOT IN (
    SELECT DISTINCT manager_id
    FROM employees
);
-- 7
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees AS emp
    WHERE emp.department_id = employees.department_id
);
-- 8
SELECT DISTINCT salary
FROM employees AS emp1
WHERE 5 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees AS emp2
    WHERE emp2.salary > emp1.salary
);
-- 9
SELECT DISTINCT salary
FROM employees AS emp1
WHERE 4 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees AS emp2
    WHERE emp2.salary < emp1.salary
);
SELECT department_name, department_id
FROM departments
WHERE department_id NOT IN (
    SELECT DISTINCT department_id
    FROM employees
);
-- ----------Joins--------------
-- 1
SELECT d.location_id, l.street_address, l.city, l.state_province, c.country_name
FROM departments AS d
JOIN locations AS l ON d.location_id = l.location_id
JOIN countries AS c ON l.country_id = c.country_id;
-- 2
SELECT e.first_name, e.last_name, e.department_id, d.department_name
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id;

-- 3
SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id
JOIN locations AS l ON d.location_id = l.location_id
WHERE l.city = 'London';
-- 4
SELECT e.employee_id, e.last_name AS Employee, e.manager_id, m.last_name AS Manager
FROM employees AS e
JOIN employees AS m ON e.manager_id = m.employee_id;
-- 5
SELECT e.employee_id, e.last_name, e.first_name, d.department_name, d.department_id
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id;
-- 6
SELECT e.employee_id, e.job_title, DATEDIFF(e.end_date, e.start_date) AS days_worked
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id
WHERE d.department_id = 90;
-- 7
SELECT d.department_name, CONCAT(m.first_name, ' ', m.last_name) AS manager_name, l.city
FROM departments AS d
JOIN employees AS m ON d.manager_id = m.employee_id
JOIN locations AS l ON d.location_id = l.location_id;
-- 8
SELECT j.job_title, AVG(e.salary) AS average_salary
FROM employees AS e
JOIN jobs AS j ON e.job_id = j.job_id
GROUP BY j.job_title;
-- 9
SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM employees AS e
JOIN departments AS d ON e.department_id = d.department_id
WHERE e.job_id = 'MANAGER' AND DATEDIFF(CURDATE(), e.hire_date) > 15 * 365;
-- --------String Function---------------------
-- 1
UPDATE employees
SET phone_number = '999'
WHERE phone_number LIKE '%124%';
-- 2
SELECT *
FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;
-- 3
SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), last_name, '@example.com') AS EMAIL
FROM employees;
-- 4
SELECT employee_id, SUBSTRING(email, 1, LENGTH(email) - 3) AS email
FROM employees;
-- 5
SELECT SUBSTRING_INDEX(job_title, ' ', 1) AS first_word
FROM employees
WHERE job_title LIKE '% %';
-- 6
SELECT first_name AS First_Name, LENGTH(first_name) AS Name_Length
FROM employees
WHERE first_name LIKE 'A%' OR first_name LIKE 'J%' OR first_name LIKE 'M%'
ORDER BY first_name;
-- 7