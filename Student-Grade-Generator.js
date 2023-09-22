let studentGrade = 50;

function studentGradeGenerator () {
    if (studentGrade >= 0 && studentGrade < 40) {return E;}
    else if (studentGrade >= 40 && studentGrade <= 49) {return D;}
    else if (studentGrade >= 50 && studentGrade <= 59) {return C;}
    else if (studentGrade >= 60 && studentGrade <= 79) {return B;}
    else if (studentGrade > 79) {return A;}
}
studentGradeGenerator ();