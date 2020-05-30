const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);


// build multiple CRUD interfaces:
app.get('/task4', (req, res) => {

    var data = [
        {
            title: "consectetur",
            description: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            color: "red"
        },
        {
            title: "adipiscing",
            description: "Diam maecenas sed enim ut sem viverra aliquet eget. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Ac turpis egestas maecenas pharetra convallis",
            color: "green"
        },
        {
            title: "eiusmod",
            description: "Et malesuada fames ac turpis egestas sed tempus urna. Ultricies mi eget mauris pharetra et ultrices neque ornare. In nibh mauris cursus mattis.",
            color: "blue"
        },
        {
            title: "tempor",
            description: "Placerat in egestas erat imperdiet sed. Sed felis eget velit aliquet sagittis id. Lectus urna duis convallis convallis tellus. Nulla at volutpat diam ut venenatis. Orci porta non pulvinar neque laoreet suspendisse interdum",
            color: "yellow"
        },
        {
            title: "incididunt",
            description: "Lacus laoreet non curabitur gravida arcu ac tortor. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Cursus turpis massa tincidunt dui ut ornare",
            color: "pink"
        },
        {
            title: "labore",
            description: "Netus et malesuada fames ac turpis egestas integer eget aliquet. A pellentesque sit amet porttitor eget dolor morbi. Tincidunt vitae semper quis lectus nulla at volutpat",
            color: "orange"
        },
        {
            title: "ullamco ",
            description: "In nibh mauris cursus mattis molestie a iaculis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Mollis nunc sed id semper. Id semper risus in hendrerit gravida rutrum quisque non. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est",
            color: "grey"
        },
    ];

    res.send(data)
});

// K.Charan
app.get('/team', (req, res) => {

    var team_data = [{"Code": "1","Name": "Aritra Mukherjee","Designation": "Programmer","Mobile": "9474159263","LinkedIn": "https://www.linkedin.com/in/sai-charan-kommana/","Gmail": "cherrycharan3899@gmail.com","Resume": "https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing","Project": "1"},{ 'Code': '2', 'Name': 'Khagendra Kumar', 'Designation': 'Programmer', 'Mobile': '9470865407', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '3', 'Name': 'Deepanjali Sarna', 'Designation': 'Graphic Designer', 'Mobile': '9740272426', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '4', 'Name': 'Charan Kommana', 'Designation': 'Programmer', 'Mobile': '8106402145', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '5', 'Name': 'Mihir Solanki', 'Designation': 'Programmer', 'Mobile': '7416923811', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '6', 'Name': 'Aksa Memon', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '7', 'Name': 'Pulkit Midha', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '8', 'Name': 'Shivam Chauhan', 'Designation': 'Programmer', 'Mobile': '8630840592', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '9', 'Name': 'Aman Yadav', 'Designation': 'Graphic Designer', 'Mobile': '9915542382', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '10', 'Name': 'Viswanath', 'Designation': 'Wireframes', 'Mobile': '7780272037', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '11', 'Name': 'Ashish Dubey', 'Designation': 'Wireframes', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '12', 'Name': 'Twinkle Gupta', 'Designation': 'Graphic Designer', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '13', 'Name': 'Harsh Koranne', 'Designation': 'Graphic Designer', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '14', 'Name': 'Vivek Raman', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '15', 'Name': 'Abhilash Majumdar', 'Designation': 'Programmer', 'Mobile': '8240150713', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '1' }, { 'Code': '1', 'Name': 'Aritra Mukherjee', 'Designation': 'Programmer', 'Mobile': '9474159263', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '3', 'Name': 'Deepanjali Sarna', 'Designation': 'Graphic Designer', 'Mobile': '9740272426', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '4', 'Name': 'Charan Kommana', 'Designation': 'Programmer', 'Mobile': '8106402145', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '6', 'Name': 'Aksa Memon', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '7', 'Name': 'Pulkit Midha', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '8', 'Name': 'Shivam Chauhan', 'Designation': 'Programmer', 'Mobile': '8630840592', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '9', 'Name': 'Aman Yadav', 'Designation': 'Graphic Designer', 'Mobile': '9915542382', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '15', 'Name': 'Abhilash Majumdar', 'Designation': 'Programmer', 'Mobile': '8240150713', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '16', 'Name': 'Potato', 'Designation': 'Wireframes', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '17', 'Name': 'Tomato', 'Designation': 'Tester', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '18', 'Name': 'Brinjal', 'Designation': 'Wireframes', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '19', 'Name': 'Carrot', 'Designation': 'Wireframes', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }, { 'Code': '20', 'Name': 'Beetroot', 'Designation': 'Programmer', 'Mobile': '9876543210', 'LinkedIn': 'https://www.linkedin.com/in/sai-charan-kommana/', 'Gmail': 'cherrycharan3899@gmail.com', 'Resume': 'https://drive.google.com/file/d/1cPLHRB63SiA-IPl901Qewya-wyrLGul-/view?usp=sharing', 'Project': '2' }];

    if (req.query.code) {
        temp = []
        for (member in team_data) {
            if (team_data[member].Code === req.query.code) {
                temp.push(team_data[member])
            }
        }

        team_data = temp;
    }

    if (req.query.project) {
        temp = []
        for (member in team_data) {
            if (team_data[member].Project === req.query.project) {
                temp.push(team_data[member])
            }
        }

        team_data = temp;
    }

    res.status(200).json({
        data: team_data
    });
    return;
});

// Expose Express API as a single Cloud Function:
exports.fc = functions.https.onRequest(app);
exports.static = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });