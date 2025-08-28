// Classes

const PROGRAMMES = {
    "ADSE": [
      "Web Design: HTML, CSS and JS",
      "PPT",
      "OOP",
      "REACT",
      "SQL",
      "Mongo DB",
      "SQL Server",
      "C Programming",
      "UI/UX",
      "Bootstrap",
      "Python",
      "JAVA"
    ],
    "CPISM": [
      "Web Design: HTML, CSS and JS",
      "PPT",
      "OOP",
      "REACT",
      "SQL",
      "C Programming",
      "UI/UX",
      "Bootstrap",
      "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
      "Adobe Photoshop",
      "Adobe XD"
    ],
    "DISM": [
      "Web Design: HTML, CSS and JS",
      "PPT",
      "OOP",
      "REACT",
      "SQL",
      "UI/UX",
      "Bootstrap",
      "C Programming",
      "Programming in C#",
      "SQL Server"
    ],
    "WEB DEVELOPMENT": [
      "Web Design: HTML, CSS and JS",
      "REACT",
      "MYSQL",
      "UI/UX",
      "Bootstrap",
      "Python",
      "Django"
    ],
    "WEB DESIGN": [
      "Web Design: HTML, CSS and JS",
      "REACT",
      "UI/UX",
      "Bootstrap"
    ]
  };


  class Student{
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.courses = [];
        this.programme = null;
    }
    enroll(course){
        if(!this.courses.includes(course)){
            this.courses.push(course);
      }else{
        console.log(`${this.firstName} you have already been enrolled in ${course}`);
      }
    }
    enrollProgramme(programmeName){
    let convertedProgrammeName = programmeName.toUpperCase();
    if(PROGRAMMES.hasOwnProperty(convertedProgrammeName)){
        this.programme = convertedProgrammeName;
        this.courses = [];
        PROGRAMMES[convertedProgrammeName].forEach(programmeCourse => {
            this.enroll(programmeCourse);
        });
    console.log(`${this.firstName} successfully enrolled in the ${convertedProgrammeName} programme.`);
   
    }
    else{
    console.log(`Programme "${convertedProgrammeName}" not found.`);
    }

    }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  get programmeEnrolled(){
    return `${this.programme}`;
  }

    set currentProgramme(newProgramme){
        this.enrollProgramme(newProgramme);
    }

    static availableProgrammes(){
        let programmesList = PROGRAMMES;
        console.log(programmesList);
    }
}
   

  const student1 = new Student("Willam", "Larry");
//   console.log(student1.courses);
// console.log(student1.programmeEnrolled);

student1.enrollProgramme("adse");
//   console.log(student1.courses);

// console.log(student1.fullname);
// console.log(student1.programmeEnrolled);
student1.currentProgramme = "web design";
// console.log(student1.courses);
Student.availableProgrammes();


// Inheritance
class Faculty extends Student{
    constructor(firstName, lastName){
      super(firstName, lastName);
      this.coursesTaught = [];
    }

    teach(course){
      let convertedCourses = course.toUpperCase();
      if(!this.coursesTaught.includes(convertedCourses)){
        this.coursesTaught.push(convertedCourses);
    console.log(`${this.firstName} is now teaching ${convertedCourses}.`);
      } else {
    console.log(`${this.fullName} is already teaching ${convertedCourses}.`);
      }
    }
}

const faculty234 = new Faculty("Adam", "Yemi");
faculty234.teach("React");
faculty234.teach("Web Design");
console.log("Courses taught by ", faculty234.firstName);
console.log(faculty234.coursesTaught);