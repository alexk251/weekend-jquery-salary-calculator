$(document).ready(readyNow);

let monthlySalaryPay = 0;

function readyNow(){
    console.log('Jquery is working!');

    $('#submitBtn').on('click',addEmployee);
    $('#employeeTable').on('click','.deleteBtn', handleDelete);
}

function handleDelete() {
    let deletedSalary = $(this).closest('.salary').text();
    console.log('clicked');
    console.log(deletedSalary);
    $(this).closest('.dataRow').remove();

    
}

function addEmployee() {

    //get values from inputs and make an object
    let addedEmployee = {
        firstName : $('#firstNameInput').val(),
        lastName : $('#lastNameInput').val(),
        employeeID : $('#employeeID').val(),
        employeeTitle : $('#employeeTitle').val(),
        annualSalary : $('#annualSalary').val()
    };
    //console.log(addedEmployee);

    monthlySalaryPay += parseFloat(addedEmployee.annualSalary / 12);

   

    //console.log(monthlySalaryPay);

    $('#monthlyTotal').text(`Total Monthly:$${monthlySalaryPay}`);

    if (monthlySalaryPay > 20000) {
        $('#monthlyTotal').addClass('red');
    }

    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');

    $('#employeeTable').append(`<tr class= "dataRow">
    <td>${addedEmployee.firstName}</td>
    <td>${addedEmployee.lastName}</td>
    <td>${addedEmployee.employeeID}</td>
    <td>${addedEmployee.employeeTitle}</td>
    <td class = "salary">${addedEmployee.annualSalary}</td>
    <td><buttton class="deleteBtn" type="button">Delete</button></td>
    </tr>`);

}