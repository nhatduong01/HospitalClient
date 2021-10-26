CREATE TABLE EMPLOYEE(
Code VARCHAR(9),
FirstName VARCHAR(40) NOT NULL,
LastName VARCHAR(40) NOT NULL,
DoB DATE,
Gender CHAR,
Address VARCHAR(40),
StartDate DATE,
Specialty VARCHAR(20),
YearOfDeg INT,
PRIMARY KEY (Code)
); 
CREATE TABLE Employee_Phone(
Code VARCHAR(9) NOT NULL,
Phone_Num VARCHAR(15),
PRIMARY KEY (Code, Phone_Num),
FOREIGN KEY (Code) REFERENCES Employee(Code)
);
CREATE TABLE Doctor(
Code VARCHAR(9),
PRIMARY KEY (Code),
FOREIGN KEY(Code) REFERENCES Employee (Code)
);
CREATE TABLE Nurse(
Code VARCHAR(9),
PRIMARY KEY (Code),
FOREIGN KEY(Code) REFERENCES Employee (Code)
);
CREATE TABLE Department(
Code VARCHAR(9),
Title VARCHAR(40) NOT NULL,
Dean VARCHAR(9) ,
PRIMARY KEY (Code),
FOREIGN KEY (Dean) REFERENCES Doctor(Code)
);

ALTER TABLE Employee ADD department VARCHAR(9) DEFAULT NULL;
ALTER TABLE Employee ADD FOREIGN KEY (department) REFERENCES Department(code);
CREATE TABLE Patient(
Code VARCHAR(11),
First_Name VARCHAR(40) NOT NULL,
Last_Name VARCHAR(40) NOT NULL,
DoB DATE,
Gender CHAR,
Address VARCHAR(40),
PRIMARY KEY (Code)
);
CREATE TABLE Out_Patient(
Code VARCHAR(11),
Exam_Doctor VARCHAR(9) DEFAULT NULL,
PRIMARY KEY (Code),
FOREIGN KEY (Exam_Doctor) REFERENCES Doctor(Code),
FOREIGN KEY (Code) REFERENCES Patient(Code)
);
CREATE TABLE In_Patient(
Code VARCHAR(11),
SickRoom VARCHAR(9),
Date_of_Admission DATE NOT NULL,
Date_of_Discharge DATE DEFAULT NULL,
Diagnosis VARCHAR(40) DEFAULT NULL,
Fee DECIMAL(10,2) DEFAULT NULL,
Nurse_Code VARCHAR(9)DEFAULT NULL, --- Default not null
PRIMARY KEY (Code),
FOREIGN KEY (Nurse_Code) REFERENCES Nurse(Code),
FOREIGN KEY (Code) REFERENCES Patient(Code)
);
CREATE TABLE Patient_Phone(
Code VARCHAR(11) NOT NULL,
Phone_Num VARCHAR(15),
PRIMARY KEY (Code, Phone_Num),
FOREIGN KEY (Code) REFERENCES Patient(Code)
);

CREATE TABLE Medication(
Code VARCHAR(9),
Name VARCHAR(20) NOT NULL,
Price DECIMAL(5,2) NOT NULL,
Effect VARCHAR(100) NOT NULL,
Expiration_Date DATE NOT NULL,
PRIMARY KEY (Code)
);
CREATE TABLE Import_Medication(
Code VARCHAR(9),
Quantity INT,
Import_Date DATE NOT NULL,
PRIMARY KEY(Code),
FOREIGN KEY (Code) REFERENCES Medication(Code)
);
CREATE TABLE PROVIDER (
Provider_Number INT ,
Provider_Name VARCHAR(40) NOT NULL,
Address VARCHAR(40),
Phone  VARCHAR(15) NOT NULL,
PRIMARY KEY (Provider_Number)
);
CREATE TABLE PROVIDE (
Provider INT NOT NULL,
Medication VARCHAR(9)NOT NULL,
PRIMARY KEY (Provider, Medication),
FOREIGN KEY (Provider) REFERENCES Provider(Provider_Number),
FOREIGN KEY (Medication) REFERENCES Medication(Code)
);
CREATE TABLE Examination(
Patient VARCHAR(11),
Doctor VARCHAR(9) ,
Medication VARCHAR(9),
DateExam Date,
NextExam Date DEFAULT NULL,
Fee DECIMAL(10,2),
Diagnosis VARCHAR(40),
PRIMARY KEY (Patient, Doctor, Medication, DateExam),
FOREIGN KEY (Medication) REFERENCES Medication(Code),
FOREIGN KEY (Doctor) REFERENCES Doctor(Code),
FOREIGN KEY (Patient) REFERENCES Out_Patient(Code)
);

CREATE TABLE Treatment (
Patient VARCHAR(11),
Doctor VARCHAR(9),
Medication VARCHAR(9),
StartDate Date,
EndDate Date,
Result VARCHAR(40),
Status VARCHAR(40),
PRIMARY KEY (Patient, Doctor, StartDate, EndDate, Medication),
FOREIGN KEY (Medication) REFERENCES Medication(Code),
FOREIGN KEY (Doctor) REFERENCES Doctor(Code),
FOREIGN KEY (Patient) REFERENCES In_Patient(Code)
);
-- Add constraint
ALTER TABLE patient ADD CONSTRAINT checkID CHECK (code LIKE 'OP%' OR code LIKE 'IP%');
ALTER TABLE in_patient ADD CONSTRAINT checkID_IP CHECK (code LIKE 'IP%');
ALTER TABLE out_patient ADD CONSTRAINT checkID_OP CHECK (code LIKE 'OP%');
ALTER TABLE DEPARTMENT ADD deanYear int;
ALTER TABLE DEPARTMENT ADD CONSTRAINT checkYEAR CHECK (deanyear > 5);
ALTER TABLE Treatment ADD Status VARCHAR (40);

