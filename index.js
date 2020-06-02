const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

var dictCourses = {};

const client = new Discord.Client();
//
client.once('ready', () => {
    console.log('Ready');
})

client.on('message', message =>{
    //Add a new course to dictionary
    if (message.content.startsWith(prefix +'newcourse')) 
    {     
        var potential = message.content.substring(10);  
        //Make sure duplicate courses not added as well
        if (dictCourses.hasOwnProperty(potential))
        {
            message.channel.send('Error! Please enter a new course');           
        }
        else{           
            dictCourses[potential] = [0, 0];
            message.channel.send('Your course has been added');
        }
    }
    //Display all the courses for this student with current marks
    if (message.content.startsWith(prefix+'courses'))
    {
        if (Object.keys(dictCourses).length == 0)
        {
            message.channel.send('You have no courses at the moment');
        }
        else{
            for (var key in dictCourses)
            {
                message.channel.send(key + ': \t' + dictCourses[key][0].toString());
            }
        }      
    }
    if (message.content.startsWith(prefix +'addmark'))
    {
        var actualMessage = message.content.substring(8);
        message.channel.send(actualMessage);
        var values = message.content.split(/[\s,]+/);
        message.channel.send(values[0])
        message.channel.send(values[1])
        message.channel.send(values[2])
        if (dictCourses.hasOwnProperty(values[0]))        
        {
            
            
        }
        else{
            message.channel.send('Please enter an existing course!');
        }
      
    }
})
client.login(token);