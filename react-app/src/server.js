const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const mongoURI = "mongodb+srv://Mayaaddisu33:q0ZQ2H5WYNsQolP9@triviadb.kqknhnh.mongodb.net/?retryWrites=true&w=majority";
const saltRounds = 12;

app.use(express.json());

let db;

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    const db = client.db('TriviaDB'); // Replace 'your_database_name' with your actual database name

    // Your Express routes and other server logic go here

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.log(err));


  app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Save the user data to the database
      const result = await db.collection('users').insertOne({ username, email, password: hashedPassword });
  
      // Respond with a success message or user ID
      res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  });
  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await db.collection('users').findOne({ username });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Passwords match, user is authenticated
    res.status(200).json({ message: 'Authentication successful', userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while authenticating the user' });
  }
});



// // Username and Password Encryption/Salting 
// const saltRounds = 10; // Number of salt rounds for hashing
// const plaintextPassword = 'password123'; // Replace with the actual user's password

// (async () => {
//   try {
//     const hash = await bcrypt.hash(plaintextPassword, saltRounds);
//     // Store the 'hash' value in the database for the user
//     console.log('Hashed password:', hash);

//     const storedHashedPassword = '...'; // Retrieve the stored hashed password from the database

//     const result = await bcrypt.compare(plaintextPassword, storedHashedPassword);
//     if (result) {
//       // Passwords match, user is authenticated
//       console.log('Authentication successful');
//     } else {
//       // Passwords don't match, authentication failed
//       console.log('Authentication failed');
//     }

//     // Assume 'user' object contains the user's username, email, and password
//     const user = {
//       username: 'john',
//       email: 'john@example.com',
//       password: 'password123'
//     };

//     const userHash = await bcrypt.hash(user.password, saltRounds);
//     // Update the 'user' object with the hashed password
//     user.password = userHash;

//     // Save the 'user' object in the database
//     // Your code for saving the user in MongoDB Atlas goes here
//   } catch (err) {
//     // Handle error
//     console.error(err);
//   }
// })()



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Mayaaddisu33:q0ZQ2H5WYNsQolP9@triviadb.kqknhnh.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://Mayaaddisu33:password@triviadb.kqknhnh.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas!");

//     // Add a trivia question with multiple-choice answers to the database
//     await insertTriviaQuestion();

//     // Retrieve the trivia question from the database when the user clicks a button
//     // Implement this in your server logic based on your application's requirements
//   } catch (error) {
//     console.error("Error connecting to MongoDB Atlas:", error);
//   } finally {
//     await client.close();
//     console.log("Connection to MongoDB Atlas closed.");
//   }
// }

// // Function to insert a trivia question with multiple-choice answers to the database
// async function insertTriviaQuestion() {
//   const db = client.db("your_database_name");
//   const triviaCollection = db.collection("trivia");

//   // Replace the following object with your actual trivia question and answers
//   const triviaQuestion = {
//     question: "What is the capital of France?",
//     answers: [
//       "Paris",
//       "London",
//       "Berlin",
//       "Madrid",
//     ],
//     correctAnswer: "Paris",
//   };

//   await triviaCollection.insertOne(triviaQuestion);
//   console.log("Trivia question added to the database.");
// }

// run().catch(console.dir);





// import bcrypt from 'bcrypt';

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Define routes and middleware
// app.get('/chat', async (req, res) => {
//   try {
//     const prompt = req.query.prompt; // Get the prompt from the query parameters

//     // Call a function to interact with ChatGPT and get the response
//     const response = await getChatGPTResponse(prompt);

//     // Send the response as the API response
//     res.json({ response });
//   } catch (error) {
//     console.error('Error getting ChatGPT response:', error);
//     res.status(500).json({ error: 'Failed to get ChatGPT response' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Other necessary code for connecting to MongoDB Atlas or other services
// // ...

// async function getChatGPTResponse(prompt) {
//   // Implement logic to interact with ChatGPT and get the response

//   // Make the necessary API call or interaction with ChatGPT
//   // ...

//   // For demonstration purposes, let's assume the response from ChatGPT is stored in a variable
//   const chatGPTResponse = 'ChatGPT response';

//   return chatGPTResponse;
// }

// const mongoose = require('mongoose');

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

// // Define and use your Mongoose models and schemas for interacting with the database
// // ...



