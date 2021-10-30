-- a)
UPDATE in_patient
SET fee = fee*1.1
WHERE date_of_admission > TO_DATE('2020-09-01', 'YYYY-MM-DD') AND date_of_discharge IS NULL;
-- b)
SELECT* from patient;
WITH  ALL_Patient(patient_ID) AS
(
SELECT treatment.patient
FROM (EMPLOYEE INNER JOIN TREATMENT ON EMPLOYEE.CODE = treatment.doctor)
where employee.firstname = 'Nguyen' AND employee.lastname = 'Van A'
UNION
SELECT examination.patient
FROM (EMPLOYEE INNER JOIN examination ON EMPLOYEE.CODE = examination.doctor)
where employee.firstname = 'Nguyen' AND employee.lastname = 'Van A'
)
SELECT *
FROM (ALL_patient INNER JOIN patient ON ALL_patient.patient_ID = patient.code);
-----
-- c)
CREATE OR REPLACE TYPE row_record AS OBJECT
(
PatientID VARCHAR(11),
DoctorID VARCHAR(9),
MedicationID VARCHAR(9),
MedicationName VARCHAR(20),
Price DECIMAL(5,2),
Start_date Date,
End_date Date
);
CREATE OR REPLACE TYPE record_table AS TABLE OF row_record;
CREATE OR REPLACE FUNCTION total_medication 
(
PatientID IN patient.code%TYPE
)
RETURN record_table
IS 
FinalResult record_table:=record_table();
CURSOR c_examination IS SELECT Patient, doctor, medication,medication.name ,price, examination.dateexam
                        FROM examination JOIN medication ON examination.medication = medication.code
                        WHERE examination.patient = PatientID;
CURSOR c_treatment   IS SELECT Patient, doctor, medication, medication.name ,price, treatment.startdate, treatment.enddate
                        FROM Treatment JOIN medication ON treatment.medication = medication.code
                        WHERE treatment.patient = PatientID;                       
BEGIN
FOR r_examination  IN c_examination
    LOOP
        FinalResult.extend;
        FinalResult(FinalResult.COUNT):= row_record(r_examination.Patient, r_examination.doctor, 
        r_examination.medication,r_examination.name,r_examination.price,
        r_examination.dateexam, NULL);
    END LOOP;
FOR r_treatment  IN c_treatment
    LOOP
        FinalResult.extend;
        FinalResult(FinalResult.COUNT):= row_record(r_treatment.Patient, r_treatment.doctor, 
        r_treatment.medication,r_treatment.name,r_treatment.price,
        r_treatment.startdate, r_treatment.enddate);
    END LOOP;    
    RETURN finalresult;
END;
SELECT * FROM total_medication('OP000000004');
SELECT * FROM total_medication('IP000000013');

---- d)
CREATE OR REPLACE PROCEDURE Number_Patients
( Lower_bound IN treatment.startdate%TYPE,
upper_bound IN treatment.enddate%TYPE
)
IS
CURSOR total_work IS WITH Doctor_work
                     AS
                     (
                        SELECT DISTINCT DOCTOR, Patient
                        FROM examination
                        WHERE examination.dateexam >= Lower_bound  AND examination.dateexam  <upper_bound
                        UNION
                        SELECT DISTINCT DOCTOR, Patient
                        FROM Treatment
                        WHERE TREATMENT.STARTDATE >= Lower_bound AND treatment.ENDdate <upper_bound
                     )
                        SELECT FIRSTNAME, LASTNAME, COUNT(1) AS NUM_PATIENT
                        FROM Doctor_work JOIN employee ON Doctor_work.doctor = employee.code
                        GROUP BY FIRSTNAME, LASTNAME  
                        ORDER BY COUNT(1) ;
BEGIN
FOR r_total_work IN total_work
    LOOP
    DBMS_output.put_line(r_total_work.FIRSTNAME||' '||r_total_work.LASTNAME||' '||r_total_work.NUM_PATIENT);
    END LOOP;
END;
SET SERVEROUTPUT ON;
EXEC Number_Patients(TO_DATE('2016-01-01','YYYY-MM-DD'),TO_DATE('2016-12-31','YYYY-MM-DD'));

