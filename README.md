# 1-code-challenge
studentGradeGenerator
    - This is a function
    - It returns a students grade based on their score
    - The score ranges between 0-100
    - Students grades are : A, B, C, D, and E

speedDetector
    - This is a function
    - It returns and prints a driver's demerit points 
    - The points range from 1 to 12
    - The driver recives 1 point for each 5 km/hr speed 
    - The expected speed limit is 70km/hr
    - The driver receives 1 point for each additional 5km/hr speed
    - The function cancels the driver's licence once they accumulate more than 12 points

NetSalaryCalculator
    - This is a function
    - It accepts basic salary and benefits and adds them to find gross salary
    - The function has nested functions: afterNhifDeductions, payeeDeductions, and nssfDeductions.
    - The afterNhifDeductions substracts the NHIF deductions
    - The payeeDeductions determines how much PAYEE one should pay based on their gross salary
    - The nssfDeductions determines how much NSSF should be deducted from one's gross salary
    - When the parent function (netSalary) is called, the nested functions are triggerd 
    - The trigger returns (afterNhifDeductions() - (payeeDeductions() + nssfDeductions())), which is the net income