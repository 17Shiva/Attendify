// For colouring the present , absent , leave;
const change1 = () => {
    document.getElementById('present').style.backgroundColor = 'green';
    document.getElementById('absent').style.backgroundColor = 'white';
    document.getElementById('leave').style.backgroundColor = 'white';
}

// Displaying Date on the Attendance Page;.....................................................................................

const element = document.getElementById('dateofpage3');

let today = new Date();

let months = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12 : "December"
};


let Datee = `Today ${today.getDate()}` + ' ' + `${months[today.getMonth() + 1]}` + ' ' + `${today.getFullYear()}`;

element.textContent = Datee;






// Onclick Event's Section;.............................................................................................

function showpage1() {
    const div1 = document.getElementById('page1');
    const div2 = document.getElementById('page2');
    const div3 = document.getElementById('page3');

    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
}

function showpage2() {
    const div1 = document.getElementById('page1');
    const div2 = document.getElementById('page2');
    const div3 = document.getElementById('page3');

    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
}
function showpage3() {
    const div1 = document.getElementById('page1');
    const div2 = document.getElementById('page2');
    const div3 = document.getElementById('page3');

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
}








// For Onboard Page .........................................................................................................

let proflepic = document.getElementById('profilepic');
let inputfile = document.getElementById('input-file');

inputfile.onchange = function () {
    proflepic.src = URL.createObjectURL(inputfile.files[0])
}








// For dynamically add the student's ......................................................................................

function addstudent() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let rollnum = document.getElementById('rollno').value;
    let year = document.getElementById('studingyear').value;
    let group = document.getElementById('group').value;

    let firstletter = firstname[0].toUpperCase();

    let alphabetsection = null;
    const alphabetSections = document.querySelectorAll('.alphabet');

    alphabetSections.forEach(section => {
        if (section.textContent == firstletter) {
            alphabetsection = section;
        }
    });

    const studentbox = document.createElement('div');
    studentbox.className = 'boxes';

    const image = document.createElement('img');
    studentbox.appendChild(image);

    const p = document.createElement('p');
    p.textContent = firstname + " " + lastname;
    studentbox.appendChild(p);

    const daysDiv = document.createElement('div');
    daysDiv.className = 'days';

    const presentdiv = document.createElement('div');
    presentdiv.className = 'present';
    presentdiv.textContent = 'P';
    daysDiv.appendChild(presentdiv);

    const absentdiv = document.createElement('div');
    absentdiv.className = 'absent';
    absentdiv.textContent = 'A';
    daysDiv.appendChild(absentdiv);

    const leavediv = document.createElement('div');
    leavediv.className = 'leave';
    leavediv.textContent = 'L';
    daysDiv.appendChild(leavediv);

    studentbox.appendChild(daysDiv);

    if (alphabetsection) {
        const nextElement = alphabetsection.nextElementSibling;
        if (nextElement) {
            nextElement.appendChild(studentbox);
        } else {
            alphabetsection.parentNode.appendChild(studentbox);
        }
    } else {
        const attandancebox = document.getElementById('attendanceboxes');

        const alphabet = document.createElement('div');
        alphabet.className = 'alphabet';
        alphabet.textContent = firstletter;

        const attendies = document.createElement('div');
        attendies.className = 'attendies';
        attendies.appendChild(studentbox);

        let inserted = false;
        const allAlphabetSections = document.querySelectorAll('.alphabet');

        for (let i = 0; i < allAlphabetSections.length; i++) {
            if (allAlphabetSections[i].textContent > firstletter) {
                attandancebox.insertBefore(alphabet, allAlphabetSections[i]);
                attandancebox.insertBefore(attendies, allAlphabetSections[i]);

                // console.log(allAlphabetSections[i]);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            attandancebox.appendChild(alphabet);
            attandancebox.appendChild(attendies);
        }
    }

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('rollno').value = '';
    document.getElementById('studingyear').value = '';
    document.getElementById('group').value = '';
}


