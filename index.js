// QUESTION ONE


function FeatureToggle(featureName,isEnabled,userGroupAccess){
this.featureName=featureName;
this.isEnabled=isEnabled;
this.userGroupAccess=userGroupAccess;
}

FeatureToggle.prototype.canAccess=function(userRole){
    return this.userGroupAccess.includes(userRole);
}
const feature = new FeatureToggle("twitter",false,["betaTesters"],["admin"])
console.log(feature.canAccess("betaTesters"));

// QUESTION 2

function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName=freelancerName;
    this.projectDetails=projectDetails;
    this.logs=logs;
}


TimeLog.prototype.totalEarnings=function(){
    let total=0;
    for(let log of this.logs){
        totalHours+=log.hoursWorked
    }
    return totalHours * this.projectDetails.hourlyRate;
};

TimeLog.prototype.filterLogByDate=function(startDate,endDate){
    return this.logs.filter(log=>{
        let date=newDate(log.date);
        return date>= newDate(startDate) && date <= newDate(endDate);

    

    });
}

TimeLog.prototype.exceedWorkingHours=function(){
    let totalHours=0;
    for(let log of this.logs){
        totalHours+=log.hoursWorked;
    }

    if(totalHours>40){
        return true;
    }else{
        return false;
    }
}



// QUESTION THREE
function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  
  Order.prototype.totalCost = function() {
    let total = 0;
    for (let item of this.items) {
      total += item.quantity * item.unitPrice;
    }
    return total;
  };
  
  Order.prototype.updateStatus = function(isPaid) {
    if (isPaid) {
      this.status = "Paid";
    } else {
      this.status = "Pending";
    }
  };
  
  Order.prototype.categorizeUrgency = function(level) {
    switch (level) {
      case 'high':
        return "Process immediately";
      case 'medium':
        return "Process within 24 hours";
      case 'low':
        return "Process within 3 days";
      default:
        return "Urgency level unknown";
    }
  };



const myOrder = new Order(
    "John Njiru",
    [{ quantity: 6, unitPrice: 8 }, { quantity: 4, unitPrice: 32 }],
    "Pending"
  );
  

  const total = myOrder.totalCost();
  console.log("Total cost:", total); 
  
  myOrder.updateStatus(true);
  console.log("Order status:", myOrder.status); 
  
  
  const urgency = myOrder.categorizeUrgency('high');
  console.log("Urgency:", urgency);
  




//   QUESTION FIVE

function Course(title, instructor, students) {
  this.title = title;
  this.instructor = instructor;
  this.students = students;
}

Course.prototype.completedStudents = function() {
  return this.students
    .filter(student => student.completionStatus === 'finished')
    .map(student => student.name);
};

Course.prototype.countByExpertise = function(expertiseArea) {
  if (this.instructor.expertise === expertiseArea) {
    return this.students.length;
  } else {
    return 0;
  }
};

Course.prototype.instructorMessage = function() {
  if (this.students.length >= 5) {
    return "Great job! You have a full class.";
  } else {
    return "You can enroll more students.";
  }
};

const program =new Course(
  "Fashion",
  {name:"Mary", completionStatus:"finished"},
  [{name:"Kate", completionStatus:'finished'}]
);

console.log(program)


console.log(program.completedStudents());


console.log(program.instructorMessage());


console.log(program.countByExpertise("Fashion"));


  

//   QUESTION FOUR

function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  
  Employee.prototype.averageScore = function() {
    let total = 0;
    let count = 0;
    for (let key in this.performanceMetrics) {
      total += this.performanceMetrics[key];
      count++;
    }
    return total / count;
  };
  
  Employee.prototype.performanceLevel = function() {
    let avg = this.averageScore();
    if (avg >= 8) {
      return "Excellent";
    } else if (avg >= 5) {
      return "Good";
    } else {
      return "Needs Improvement";
    }
  };
  
  Employee.prototype.addFeedback = function(message) {
    if (message && message.trim() !== "") {
      this.feedback.push(message);
    }
  };


  const worker = new Employee(
    1,
    "Mark",
    [{ communication: 9, efficiency:8, reliability:7}]
     
     
     
    
  );


  console.log(worker)

  console.log(worker.averageScore());

// worker.addFeedback("This is great");

// console.log(worker.feedback);

console.log(worker.performanceLevel())

console.log("Feedback:",worker.feedback)