-- department data
INSERT INTO DEPARTMENT(code, title) VALUES ('1', 'Medical');
INSERT INTO DEPARTMENT(code, title) VALUES ('2', 'Nursing');
INSERT INTO DEPARTMENT(code, title) VALUES ('3', 'Paramedical');
INSERT INTO DEPARTMENT(code, title) VALUES ('4', 'Neurology');
INSERT INTO DEPARTMENT(code, title) VALUES ('5', 'Cardiology');
-- employee data
INSERT INTO employee VALUES ('1','John', 'Smith',TO_DATE('1964-09-30','YYYY-MM-DD'),
'M', '731 Fondren, Houston, TX',TO_DATE('1994-07-24','YYYY-MM-DD'),'Dermatologists',27,'1');
INSERT INTO employee VALUES ('2','Marry', 'Johnson',TO_DATE('1981-02-05','YYYY-MM-DD'),
'F', '638 Voss, Houston, TX',TO_DATE('2013-09-03','YYYY-MM-DD'),'Ophthalmologists',9,'1');
INSERT INTO employee VALUES ('3','Mason', 'Williams',TO_DATE('1972-06-15','YYYY-MM-DD'),
'M', '3321 Castle, Spring, TX',TO_DATE('2001-01-30','YYYY-MM-DD'),'Cardiologists',20,'5');
INSERT INTO employee VALUES ('4','Joe', 'Brown',TO_DATE('1973-09-07','YYYY-MM-DD'),
'M', '291 Berry, Bellaire, TX',TO_DATE('2003-08-27','YYYY-MM-DD'),'Psychiatrists',15,'3');
INSERT INTO employee VALUES ('5','Kevin', 'Jones',TO_DATE('1973-01-20','YYYY-MM-DD'),
'M', '975 Fire Oak, Humble, TX',TO_DATE('2000-02-29','YYYY-MM-DD'),'Oncologists',15,'2');
INSERT INTO employee VALUES ('6','Max', 'Gracia',TO_DATE('1985-04-15','YYYY-MM-DD'),
'M', '5631 Rice, Houston, TX',TO_DATE('2010-11-05','YYYY-MM-DD'),'Endocrinologists',5,'1');
INSERT INTO employee VALUES ('7','Clay', 'Miller',TO_DATE('1988-08-18','YYYY-MM-DD'),
'M', '980 Dallas, Houston, TX',TO_DATE('2010-05-13','YYYY-MM-DD'),'Oncologists',3,'2');
INSERT INTO employee VALUES ('8','Hanna', 'Davis',TO_DATE('1983-03-19','YYYY-MM-DD'),
'F', '450 Stone, Houston, TX',TO_DATE('2015-06-19','YYYY-MM-DD'),'Cardiologists',6,'5');
INSERT INTO employee VALUES ('9','Nguyen', 'Van A',TO_DATE('1985-08-26','YYYY-MM-DD'),
'M', '41 Alton Street Tulare, CA',TO_DATE('2020-10-23','YYYY-MM-DD'),'Gastroenterologists',5,'2');
INSERT INTO employee VALUES ('10','Li', 'Fei Fei',TO_DATE('1980-09-04','YYYY-MM-DD'),
'F', '7 E. State St.Los Angeles, CA',TO_DATE('2015-10-26','YYYY-MM-DD'),'Neurologists',10,'4');
INSERT INTO employee VALUES ('11','Kim', 'Jong Un',TO_DATE('1985-02-02','YYYY-MM-DD'),
'M', '80 Railroad Court Palmetto, FL',TO_DATE('2012-07-11','YYYY-MM-DD'),'Allergists',3,'3');
INSERT INTO employee VALUES ('12','Jenny', 'Moore',TO_DATE('1976-02-11','YYYY-MM-DD'),
'F', '918 Manchester Ave. Hialeah, FL',TO_DATE('1997-09-23','YYYY-MM-DD'),'Endocrinologists',24,'1');
-- Doctor data
INSERT INTO Doctor values ('12');
INSERT INTO Doctor values ('10');
INSERT INTO Doctor values ('1');
INSERT INTO Doctor values ('7');
INSERT INTO Doctor values ('8');
INSERT INTO Doctor values ('5');
INSERT INTO Doctor values ('4');
INSERT INTO Doctor values ('9');
-- Insert nurse data
INSERT INTO nurse values ('2');
INSERT INTO nurse values ('6');
INSERT INTO nurse values ('11');
INSERT INTO nurse values ('3');
-- Modify department table
UPDATE department SET dean = '1' ,deanyear = 27 where code = '1';
UPDATE department SET dean = '5' ,deanyear = 15 where code = '2';
UPDATE department SET dean = '4' ,deanyear = 15 where code = '3';
UPDATE department SET dean = '10' ,deanyear = 10 where code = '4';
UPDATE department SET dean = '8' ,deanyear = 6 where code = '5';
-- Employee phone
INSERT INTO employee_phone values ('1', '210-200-8136');
INSERT INTO employee_phone values ('2', '210-201-1414');
INSERT INTO employee_phone values ('3', '239-200-5542');
INSERT INTO employee_phone values ('4', '480-200-9620');
INSERT INTO employee_phone values ('4', '480-201-6455');
INSERT INTO employee_phone values ('5', '239-200-5542');
INSERT INTO employee_phone values ('6', '239-200-5542');
INSERT INTO employee_phone values ('7', '210-212-3291');
INSERT INTO employee_phone values ('8', '202-201-2427');
INSERT INTO employee_phone values ('9', '202-207-3655');
INSERT INTO employee_phone values ('10', '210-202-9172');
INSERT INTO employee_phone values ('10', '239-200-5542');
INSERT INTO employee_phone values ('11', '480-220-1857');
INSERT INTO employee_phone values ('12', '210-203-7035');
-- Patient data
INSERT INTO patient values ('OP000000001', 'Zahra', 'Cooper', TO_DATE('2012-02-20','YYYY-MM-DD'),
'F','690 Brewery Court New York, NY');
INSERT INTO patient values ('OP000000002', 'Shawn', 'Cobb', TO_DATE('1986-07-23','YYYY-MM-DD'),
'M','851 W. Vernon Ave. Arlington, TX');
INSERT INTO patient values ('IP000000003', 'Lucie', 'Zhang', TO_DATE('1978-04-17','YYYY-MM-DD'),
'F','25 Bartholomew St Christmas, FL');
INSERT INTO patient values ('OP000000004', 'Abraham', 'Ross', TO_DATE('1959-08-16','YYYY-MM-DD'),
'M','787 Andover St. Houston, TX');
INSERT INTO patient values ('IP000000005', 'Paula', 'Nguyen', TO_DATE('1951-02-18','YYYY-MM-DD'),
'F','690 Brewery Court New York, NY');
INSERT INTO patient values ('OP000000006', 'Mary', 'Wise', TO_DATE('1947-02-23','YYYY-MM-DD'),
'F','37 Gregory Lane Van Nuys, CA');
INSERT INTO patient values ('OP000000007', 'Alice', 'Perkins', TO_DATE('2004-05-03','YYYY-MM-DD'),
'F','14 Shadow Brook Street Friendswood, TX');
INSERT INTO patient values ('IP000000008', 'Rachael', 'Carter', TO_DATE('1971-06-10','YYYY-MM-DD'),
'F','85 Mayfair Dr. Salinas, CA');
INSERT INTO patient values ('IP000000009', 'Todd', 'Chambers', TO_DATE('1993-08-29','YYYY-MM-DD'),
'M','299 Charles Drive Los Angeles, CA');
INSERT INTO patient values ('OP000000010', 'Edwin', 'Ferguson', TO_DATE('1960-03-18','YYYY-MM-DD'),
'M','89 Trout St. Chino Hills, CA ');
INSERT INTO patient values ('IP000000011', 'Tomas', 'Delay', TO_DATE('1944-02-01','YYYY-MM-DD'),
'M','84 Illinois Avenue El Paso, TX');
INSERT INTO patient values ('IP000000012', 'Frank', 'Hamilton', TO_DATE('1969-02-05','YYYY-MM-DD'),
'M','331 Essex Ave. Riverside, CA');
INSERT INTO patient values ('IP000000013', 'Carlos', 'Moore', TO_DATE('1972-12-21','YYYY-MM-DD'),
'M','67 Church St. Oceanside, CA');
INSERT INTO patient values ('IP000000014', 'Lukas', 'Foden', TO_DATE('2008-01-28','YYYY-MM-DD'),
'M','3 Newbridge Ave. Bronx, NY');
-------
-- PatientPhone
INSERT INTO patient_phone VALUES ('IP000000005', '210-200-3675');
INSERT INTO patient_phone VALUES ('IP000000005', '210-201-0574');
INSERT INTO patient_phone VALUES ('IP000000014', '209-200-4254');
INSERT INTO patient_phone VALUES ('IP000000011', '209-202-7537');
INSERT INTO patient_phone VALUES ('IP000000009', '210-204-8792');
-- OutPatient
INSERT INTO out_patient VALUES ('OP000000001','9');
INSERT INTO out_patient VALUES ('OP000000002','5');
INSERT INTO out_patient VALUES ('OP000000004','12');
INSERT INTO out_patient VALUES ('OP000000006','10');
INSERT INTO out_patient VALUES ('OP000000007','7');
INSERT INTO out_patient VALUES ('OP000000010','1');
------
-- InPatient
INSERT INTO in_patient VALUES ('IP000000003', '201', TO_DATE('2021-08-26','YYYY-MM-DD'),NULL,
'Liver cancer', 1467.3, '6');
INSERT INTO in_patient VALUES ('IP000000005', '110', TO_DATE('2018-01-23','YYYY-MM-DD'),TO_DATE('2018-01-29','YYYY-MM-DD'),
'Tuberculosis', 246, '11');
INSERT INTO in_patient VALUES ('IP000000008', '220', TO_DATE('2020-12-26','YYYY-MM-DD'), TO_DATE('2021-01-23','YYYY-MM-DD'),
'Blool infection', 2436.4, '2');
INSERT INTO in_patient VALUES ('IP000000009', '210', TO_DATE('2017-04-05','YYYY-MM-DD'),TO_DATE('2017-05-02','YYYY-MM-DD') ,
'Appendix operation', 592, '3');
INSERT INTO in_patient VALUES ('IP000000011', '201', TO_DATE('2019-11-15','YYYY-MM-DD'),NULL,
'Brain cancer', 5689.2, '3');
INSERT INTO in_patient VALUES ('IP000000012', '309', TO_DATE('2021-05-23','YYYY-MM-DD'),TO_DATE('2021-06-07','YYYY-MM-DD'),
'Cataract', 1263.4, '11');
INSERT INTO in_patient VALUES ('IP000000013', '411', TO_DATE('2019-05-01','YYYY-MM-DD'),NULL,
'Blood cancer', 5689.2, '2');
INSERT INTO in_patient VALUES ('IP000000014', '113', TO_DATE('2021-10-11','YYYY-MM-DD'),NULL,
'Covid 19', 45, '6');
-------
-- Medication
INSERT INTO medication VALUES ('1','Losartan', 6, 'Treat high blood pressure, reduce the risk of stroke',
TO_DATE('2023-09-29','YYYY-MM-DD'));
INSERT INTO medication VALUES ('2','Metformin', 4, 'Control blood sugar levels in type 2 diabetes',
TO_DATE('2022-06-12','YYYY-MM-DD'));
INSERT INTO medication VALUES ('3','Omeprazole', 5.1, 'Reduce acid in the stomach',
TO_DATE('2021-12-15','YYYY-MM-DD'));
INSERT INTO medication VALUES ('4','Gabapentin', 7.69, 'Treat seizures in adults with epilepsy and nerve pain',
TO_DATE('2023-02-09','YYYY-MM-DD'));
INSERT INTO medication VALUES ('5','Amlodipine', 3.9, 'Treat high blood pressure and chest pain',
TO_DATE('2021-11-23','YYYY-MM-DD'));
INSERT INTO medication VALUES ('6','Synthroid', 3.3, 'Treat thyroid hormone deficiency',
TO_DATE('2022-02-14','YYYY-MM-DD'));
INSERT INTO medication VALUES ('7','Atorvastatin', 3.3, 'Treat high cholesterol',
TO_DATE('2024-05-07','YYYY-MM-DD'));
INSERT INTO medication VALUES ('8','Albuterol ', 19.05, 'Prevent bronchospasm',
TO_DATE('2023-10-09','YYYY-MM-DD'));
--------
-- Imported Medication
INSERT INTO import_medication VALUES ('3', 80, TO_DATE('2020-12-03','YYYY-MM-DD'));
INSERT INTO import_medication VALUES ('5', 101, TO_DATE('2021-06-12','YYYY-MM-DD'));
INSERT INTO import_medication VALUES ('6', 23, TO_DATE('2019-11-01','YYYY-MM-DD'));
INSERT INTO import_medication VALUES ('7', 267, TO_DATE('2021-06-28','YYYY-MM-DD'));
INSERT INTO import_medication VALUES ('8', 56, TO_DATE('2020-10-23','YYYY-MM-DD'));
----------
--- PROVIDER
INSERT INTO PROVIDER VALUES ('1','Biogen', '491 Calle Dia Carpinteria, CA', '(860) 742-1601');
INSERT INTO PROVIDER VALUES ('2','Par Pharmaceutical', 'Po Box 265 San Dimas, CA', '(866) 462-2448');
INSERT INTO PROVIDER VALUES ('3','Radius Health', '2102 Oakwood St Haltom City, TX', '(817) 834-4606');
INSERT INTO PROVIDER VALUES ('4','Sanofi', '2723 W Briarcliffe Ln Peoria,IL', '(309) 839-2462');
INSERT INTO PROVIDER VALUES ('5','Tagi Pharma', '440 W Windsor St Montpelier, IN', '(765) 728-3154');
--------
-- Provide
INSERT INTO PROVIDE VALUES ('1','2');
INSERT INTO PROVIDE VALUES ('3','3');
INSERT INTO PROVIDE VALUES ('5','4');
INSERT INTO PROVIDE VALUES ('1','5');
INSERT INTO PROVIDE VALUES ('2','6');
INSERT INTO PROVIDE VALUES ('2','7');
INSERT INTO PROVIDE VALUES ('3','8');
INSERT INTO PROVIDE VALUES ('4','1');
------
-- Treatment
INSERT INTO TREATMENT VALUES ('IP000000003', '9', '5',TO_DATE('2021-08-26','YYYY-MM-DD'),TO_DATE('2021-08-30','YYYY-MM-DD'),
'Radiotherapy', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000005', '12', '7',TO_DATE('2018-01-25','YYYY-MM-DD'),TO_DATE('2012-01-29','YYYY-MM-DD'),
'Success', 'Recovered');
INSERT INTO TREATMENT VALUES ('IP000000008', '10', '2',TO_DATE('2020-12-27','YYYY-MM-DD'),TO_DATE('2021-01-20','YYYY-MM-DD'),
'Changed blood', 'Recovered');
INSERT INTO TREATMENT VALUES ('IP000000009', '9', '4',TO_DATE('2017-04-06','YYYY-MM-DD'),TO_DATE('2017-05-01','YYYY-MM-DD'),
'Success', 'Recovered');
INSERT INTO TREATMENT VALUES ('IP000000011', '1', '8',TO_DATE('2019-11-16','YYYY-MM-DD'),TO_DATE('2019-11-20','YYYY-MM-DD'),
'Chemotherapy', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000012', '9', '6',TO_DATE('2021-05-24','YYYY-MM-DD'),TO_DATE('2021-06-05','YYYY-MM-DD'),
'Success', 'Recovered');
INSERT INTO TREATMENT VALUES ('IP000000013', '7', '2',TO_DATE('2019-05-02','YYYY-MM-DD'),TO_DATE('2019-05-10','YYYY-MM-DD'),
'Changed blood', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000014', '8', '1',TO_DATE('2021-10-13','YYYY-MM-DD'),TO_DATE('2021-10-20','YYYY-MM-DD'),
'Positive', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000003', '5', '3',TO_DATE('2021-08-10','YYYY-MM-DD'),TO_DATE('2021-08-15','YYYY-MM-DD'),
'Chemotherapy', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000003', '4', '4',TO_DATE('2021-08-10','YYYY-MM-DD'),TO_DATE('2021-08-15','YYYY-MM-DD'),
'Chemotherapy', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000013', '1', '5',TO_DATE('2019-05-20','YYYY-MM-DD'),TO_DATE('2019-05-29','YYYY-MM-DD'),
'Hospitalization', 'Not recovered');
INSERT INTO TREATMENT VALUES ('IP000000011', '12', '7',TO_DATE('2019-11-25','YYYY-MM-DD'),TO_DATE('2019-12-01','YYYY-MM-DD'),
'Operation', 'Not recovered');
--------
-- Examination
INSERT INTO examination VALUES ('OP000000001', '9', '8',TO_DATE('2016-05-13','YYYY-MM-DD'), NULL,85.6, 'Common cold');
INSERT INTO examination VALUES ('OP000000002', '12', '5',TO_DATE('2019-01-24','YYYY-MM-DD'), NULL,43.2, 'Influenza');
INSERT INTO examination VALUES ('OP000000004', '10', '7',TO_DATE('2021-02-28','YYYY-MM-DD'), NULL,134.76, 'Pneumonia');
INSERT INTO examination VALUES ('OP000000006', '1', '2',TO_DATE('2020-12-03','YYYY-MM-DD'), TO_DATE('2021-06-02','YYYY-MM-DD'),243.6, 'Hepatitis');
INSERT INTO examination VALUES ('OP000000007', '7', '4',TO_DATE('2019-03-05','YYYY-MM-DD'), NULL,25.6, 'Diarrhea');
INSERT INTO examination VALUES ('OP000000010', '8', '1',TO_DATE('2020-07-28','YYYY-MM-DD'), NULL,30.8, 'Constipation');
INSERT INTO examination VALUES ('OP000000006', '5', '6',TO_DATE('2021-06-02','YYYY-MM-DD'), NULL,154.8 ,'Hepatitis');
INSERT INTO examination VALUES ('OP000000004', '10', '3',TO_DATE('2021-02-28','YYYY-MM-DD'), NULL,134.76, 'pneumonia');
