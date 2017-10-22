# Me

Hi, ny name is Baru, and this is my TeamMood "project"

# My plan

The original plan was to make a mobile app that would replace your regular alarm on your phone. My problem was that on many mornings I would wake up, turn off my alarm then go back to sleep. My solution was to make an alarm app where you set the alarm on your phone, it sounds off on your phone, but in order to disable the alarm you had to access a second device that was logged in under the same account.

# What ended up happening

I never made a mobile app. I was planning on using React Native to build it, but most of the tutorials went over my head due to my inexperience with JS. I opted to make a website instead.

In weeks 2-6, I learned how call data from Firebase, which would serve as the database for my project. By the end, I was able to reliably read and write data to the database. 

In the last few weeks, I worked on the front end. I made fields to define the hour and minute for an alarm, along with a name. I was then able to see the data pop up in firebase live.

# Conclusion

No, the project barely works compared to what I had planned. But I am proud of what I accomplished still and I feel like I learned a ton.

# Running my project on your machine

If you are interested in running my account, you need a few things

1)Google Account with at least 1 firebase project
2)Node.js

1)Clone the project
2)Open a terminal in the project folder and type `npm install` to install required packages. The important ones are Firebase, Ejs, and Express.
3)Run firebase setup, login to your google account, and choose your firebase project. 
4)`npm start` should start the project.
5)Point to `localhost:3000` in your browser.
6)Open firebase in a separate tab, and watch how manipulating data on the frontend will change data within the database.
