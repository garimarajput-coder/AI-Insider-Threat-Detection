require("dotenv").config();

const mongoose = require("mongoose");
const Activity = require("./models/Activity");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  const users = [
    {
      username: "Sarah",
      ipAddress: "192.168.1.45",
      device: "Windows Laptop",
      action: "Multiple failed login attempts",
      riskPoints: 85
    },
    {
      username: "John",
      ipAddress: "10.0.0.23",
      device: "Android Phone",
      action: "Large transaction from new device",
      riskPoints: 60
    },
    {
      username: "Emily",
      ipAddress: "192.168.1.67",
      device: "MacBook",
      action: "Normal login activity",
      riskPoints: 10
    },
    {
      username: "Michael",
      ipAddress: "172.16.0.15",
      device: "Office Desktop",
      action: "Accessed confidential files",
      riskPoints: 90
    },
    {
      username: "David",
      ipAddress: "203.0.113.25",
      device: "Unknown Device",
      action: "Login from unusual location",
      riskPoints: 70
    },
    {
      username: "Sophia",
      ipAddress: "192.168.2.10",
      device: "Windows Laptop",
      action: "Downloaded large amount of data",
      riskPoints: 95
    },
    {
      username: "Daniel",
      ipAddress: "192.168.1.88",
      device: "Company Laptop",
      action: "Routine system access",
      riskPoints: 15
    },
    {
      username: "Olivia",
      ipAddress: "10.10.1.45",
      device: "Tablet",
      action: "Multiple password reset requests",
      riskPoints: 55
    },
    {
      username: "James",
      ipAddress: "198.51.100.12",
      device: "Personal Laptop",
      action: "Opened suspicious attachment",
      riskPoints: 80
    },
    
  ];

  await Activity.deleteMany({});
await Activity.insertMany(users);

  console.log("15 users added successfully");

  mongoose.connection.close();

})
.catch((error) => {
  console.log(error);
});