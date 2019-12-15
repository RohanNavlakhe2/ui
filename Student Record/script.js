let feeSelectBox=document.querySelector('#feeSelectBox');
let feeDisplayBox=document.querySelector('#feeDisplayBox');
let name=document.querySelector('#name');
let date=document.querySelector('#date');
let tbody=document.querySelector('#tbody');
let register=document.querySelector('#register');
let fee=[800,1500,2700,3000,2000,8000,2500,1000];
let courses=['C','C++','Java','Python','Php','Aws','UI Tech','Design pattern'];
let studentsData=[];

let registerStudent=()=>{
    let newStudent = [];
        newStudent.push(name.value,
            courses[Number.parseInt(feeSelectBox.value)]
            , feeDisplayBox.value, new Date(date.value).toLocaleDateString('it-IT'));
    if(validateForm(newStudent,date.value)===true) {
        studentsData.push(newStudent);
    }
    else
        alert('Fill the form carefully');

};

let emptyForm=()=>{
    name.value='';
    date.value='';
    feeSelectBox.value='';
    feeDisplayBox.value='';
};

let displayStudent=()=>{
    let row='';
    //studentsData=sortedStudentData();
    studentsData.forEach(student=>{
        row+=`<tr>
                     <td>${student[0]}</td>
                     <td>${student[1]}</td>
                     <td>${student[2]}</td>
                     <td>${student[3]}</td>
                     <td>
                         <i class="fa fa-window-close text-danger fa-2x"
                         id=${studentsData.indexOf(student)}
                          onClick="deleteRecord(this)"></i>
                     </td>
                  </tr>`
    });
    tbody.innerHTML=row;
};

let validateForm=(newStudent,dateString)=>{
    return newStudent[0]!==''&& newStudent[1]!==undefined&&
      new Date(dateString).getTime()<=new Date().getTime() ;
};

let deleteRecord=element=>{
  studentsData.splice(Number.parseInt(element.id),1);
  displayStudent();
};
/*let sortedStudentData=()=>{
    let sortedStudentData=studentsData.sort((student1,student2)=>{
     return student2[3]-student1[3];
  });
  return sortedStudentData.reverse();
};*/

feeSelectBox.addEventListener('change',()=>{
   feeDisplayBox.value=fee[Number.parseInt(feeSelectBox.value)];
});

register.addEventListener('click',()=>{
    registerStudent();
    emptyForm();
    displayStudent();
});

date.addEventListener('click',()=>{
    let d=new Date();
    let todayDate;
    if(d.getMonth()<=8)
       todayDate=d.getFullYear()+'-'+'0'+(d.getMonth()+1)+'-'+d.getDate();
    else
        todayDate=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    date.setAttribute('max', todayDate);
});

date.addEventListener('keyup',()=>{
   alert('Select Date from the calender');
    date.value='';
});