var reg_flags = 
{
    name_flag : false,
    email_flag : false,
    phone_flag : false,
    date_flag : false
};

var cur_ind = 0;

function change_head_img()
{
    const img_list = ["img/header-img.png", "img/cat.png"];
    cur_ind = (cur_ind + 1) % img_list.length;
    document.querySelector("#right_head_img").src = img_list[cur_ind];
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');      
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    
    return `${day}.${month}.${year}`;
}

function IsDateValid(date, todaydate)
{
    // date = new Date(date);
    // todaydate = new Date();
    todaydate.setHours(0, 0, 0, 0); // Обнуляем время
    return (date < todaydate && date.getTime() != todaydate.getTime() );
}


function Validate_Date(date = "None")
{
    reg_flags.date_flag = false;
    const today = new Date();
    var user_date = new Date(document.querySelector("input[name=birth_date]").value);
    if (!isNaN(user_date.getTime()) && IsDateValid(user_date, today))
    {
        reg_flags.date_flag = true;
        document.querySelector("#birth_check_label").innerHTML = "";
        return true;
    }
    else
    {
        document.querySelector("#birth_check_label").innerHTML = "Вводимая дата должна быть не больше текущей и не быть равной ей";
        return false;
    }
}

function Validate_mail(mail = "None")
{
    var mail = document.querySelector("input[name=user_mail]").value ;
    reg_flags.email_flag = false;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (mail!="None" && mail.trim().length!=0 && EMAIL_REGEXP.test(mail))
    {
        reg_flags.email_flag = true;
        document.getElementById("mail_check_label").innerHTML = "";
        return true;
    }
    document.getElementById("mail_check_label").innerHTML = "Введите email корректно";
    return false;
}

function Validate_Name(name = "None")
{
    var name = document.querySelector("input[name=user_name]").value;
    reg_flags.name_flag = false;
    if (name!="None" && name.trim().length!=0 && name.trim().length > 3 && (/[a-zA-Z]/).test(name))
    {
        document.getElementById("name_check_label").innerHTML = "";
        reg_flags.name_flag = true;
        return true;
    }
    document.getElementById("name_check_label").innerHTML = "Введите имя (оно должно быть длиннее 3 символов и на латинице)";
    return false;
}

function Validate_phone_num(number="None")
{
    reg_flags.phone_flag = false; 
    var number = document.querySelector("input[name=reg_phone]").value ;
    const regex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
    if (regex.test(number))
    {
        reg_flags.phone_flag= true;
        document.getElementById("phone_check_label").innerHTML = "";
        return true;
    }
    document.getElementById("phone_check_label").innerHTML = "Пожалуйста, введите номер телефона корректно" ;
    return false;
}

var reg_but = document.getElementById("reg_submit");

reg_but.addEventListener("click", function(event){
    event.preventDefault();
    var user_phone = document.querySelector("input[name=reg_phone]").value;
    var user_name = document.querySelector("input[name=user_name]").value;
    var user_email = document.querySelector("input[name=user_mail]").value;
    var user_birth = formatDate(new Date(document.querySelector("input[name=birth_date]").value));
    console.log(reg_flags);
    if (Object.values(reg_flags).every(value=>value === true))
    {
        document.querySelector("#print_user_info_lb").innerHTML = `<div>Заявка на регистрацию успешно сформирована! Ваши данные:</div>
        <div>Имя: ${user_name} </div>
        <div>Почта: ${user_email} </div>
        <div>Номер телефона: ${user_phone} </div>
        <div>Дата рождения: ${user_birth} </div>`
        
    }
    else
    {
        document.querySelector("#print_user_info_lb").innerHTML = "Заполните все поля!" ;
    }

});

document.querySelector("#hide_sect_but").addEventListener("click",function(){
    document.querySelector(".main-sect").classList.toggle("hide")
})