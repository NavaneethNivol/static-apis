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

// build multiple CRUD interfaces:
app.get('/task4', (req, res) => res.send(data));


// Expose Express API as a single Cloud Function:
exports.fc = functions.https.onRequest(app);


// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });