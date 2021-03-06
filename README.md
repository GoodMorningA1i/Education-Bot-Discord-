# Education_Bot <img src="images/pencil.png" alt="drawing" width="50"/>

A bot on discord to make online education more engaging, interactive, motivating and convenient for instructors and students. With numerous intuitive features, the Education Bot will make online learning a success.

Some of the challenges we addressed with our Education_Bot features include:
* Lack of Motivation
    * Goal Feature, Reminder Feature
* COVID-19 Panic
    * COVID-19 Info Feature, COVID-19 Emergency Benefit Resources
* Non-Academic Related Resources
    * More Resources Feature (Mental Health Resources, etc) 
* Lack of Interaction
    * Schedule Feature, Poll Feature, Breakout Room Feature
* Academic Issues
    * Dictionary Feature, Calculator Feature, Report Card Feature
* Frequent Distractions
    * Increasing motivation and interaction help to combat boredom and distractions


# Setup
All you need to do is follow the link and invite the Education Bot to your server and you're done! It's that easy and no other setup is required. You're all set to start using the Education Bot to its maximum capabilities!

The tools we used to build this discord bot are javascript, and node.js. You will also need to download discord.js, math.js, and discord.js-poll-embed through Git or the command line. (For example, to download math.js, you would need to type in 'npm install math.js' in the command line and a similar process exists for the other packages.

Link to add Education Bot to your server: https://discord.com/api/oauth2/authorize?client_id=717453579513757819&permissions=2048&scope=bot

# Commands
The Education Bot comes with many features that you can take advantage of. Below is the documentation for all of these commands, including prefix, formatting, examples and explanations. 

Here is the link to the Education Bot Tutorial Video that we made: https://www.youtube.com/watch?v=t5mWnDNHJxI

### Help Command ###
Description: If you ever need a list of all the commands available for the education bot, that is when the help command becomes helpful\
Command: !educationbot

### Report Card Feature ###
The Report Card Feature is a live grade calculator. Just enter your courses at the beginning of the semester and once you get your marks on assignments input them in. The Education Bot will do the rest for you!

#### Add a course ####
Description: Command adds a new course to your report card\
Command: !newcourse {Your_Course_Name}\
Example: !newcourse CSC148\
![](images/newcourse1.JPG)

#### Add a mark ####
Description: Command adds a new mark to your report card for a certain course (the weight is out of 100)\
Command: !addmark {Your_Course_Name}, {Your_Grade}, {Weight}\
Example: !newcourse CSC148, 90, 10\
![](images/addmark.JPG)

#### Delete a course ####
Description: Command deletes a course from memory\
Command: !delcourse {Your_Course_Name} \
Example: !delcourse Science\
![](images/delcourse.JPG)

#### Display Report Card ####
Description: Command will display your updated report card\
Command: !courses \
Example: !courses\
![](images/courses.JPG)

### Math Mode Feature ###
The Math Mode Feature is a calculator for simple math computations. Gone are the days where you have to reach for a calculator in lecture. Just use it right in Discord!

#### Calculate ####
Description: Calculate an expression. Can do addition (+), subtraction (-), division (/), multiplication (*)\
Command: !math {num_1} {operation} {num_2} \
Example: !math 22 * 17\
![](images/math.JPG)

### Dictionary Feature ###
Ever been in class and not understand what a word means? Well worry no more with the Education Bot! Rather than waste time looking for a dictionary just use the Dictionary Feature to get the definition of any word in a matter of seconds. 

#### Definition ####
Description: Return the defintion of a user entered word\
Command: !def {Your_word}\
Example: !def computer\
![](images/definition.JPG)

### Poll Feature ###
This feature helps make online learning more engaging and interacting for students and teachers. Want a quick and easy way to see if your students understood a concept? Use the Poll feature to get feedback from your students!

#### Create a poll ####
Description: Start a new poll with up to 10 options. React with a checkmark to confirm the poll\
Command: !poll {Your_question}\
Example: !def How old are you?\
![](images/poll.JPG)
End of poll message:
![](images/end.JPG)

### Reminder Feature ###

#### Add a reminder ####
Description: Command adds a new reminder for the user (the timing metrics that you can use: s (seconds), m (minutes), h (hours), d (days))\
Command: !addreminder {time} {message}\
Example: !addreminder 30s Hello! OR !addreminder 40m Make sure to brush your teeth\
![](images/addreminder.PNG)

#### View all reminders ####
Description: Command that allows the user to view all reminders\
Command: !reminders\
![](images/reminders.PNG)

#### Add a schedule of availability ####
Description: Command that adds a new schedule of availability for the user\
Command: !addschedule {day} {time}\
Example: !addschedule Monday 2-5pm\
![](images/addschedule.PNG)

### Schedule Feature ###

#### View schedule of availability ####
Description: Command that can show you the entire schedule of availability for a user\
Command: !viewschedule\
![](images/viewschedule.PNG)

### Goal Feature ###

#### Add a goal ####
Description: Command that adds a new goal\
Command: !addgoal {message}\
Example: !addgoal Become the best person I can possibly become\
![](images/addgoal.PNG)

#### View all goals ####
Description: Command that shows you all the goals\
Command: !goals\
![](images/viewgoals.PNG)

#### Delete a goal ####
Description: Command that deletes a goal\
Command: !delgoal {goal_number}\
Example: !delgoal 1\
![](images/delgoal.PNG)


### Covid-19 Resources Feature ###
#### Get Latest Covid-19 Info ####
Description: Command that displays some resouces about Covid-19\
Command: !covid\
Example: !covid\
![](images/Covid,JPG.JPG)

### More Resources Feature ###
Description: Command that displays a variety of resources for students that use in-person school for more than just a place of learning.\
-> Resources involved are: Student Nutrition Program, Ending Violence Support, COVID 19 Emergency Benefits, Mental Health Support, Disability Support Program, and Gov of Ontario Page (this page has a multitude of resources)\
Command: !moreresources\
![](images/moreresources.PNG)

### Random Number Generator for BreakOut Rooms ###
Description: Command that lets the user know how many students to put in each breakout room with the user inputting the number of students and the number of breakout rooms \
Command: !randomnum {number_of_students} {number_of_breakout_rooms)\
Example: !randomnum 10 5\
![](images/randomnum.PNG)
