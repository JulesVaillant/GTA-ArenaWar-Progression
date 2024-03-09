# GTA-ArenaWar-Progression
A NodeJS program that provides a web UI to show you how much you already did and how much you still have to grind to get rewards in the Arena War on GTA Online.

## :1234: Calculations
The calculations are based on the "[Arena Points](https://gta.fandom.com/wiki/Arena_Points#Rewards)" on the GTA Wiki page. <br/>
The accumulative amount of AP required to reach rank n can be expressed as:

<div align="center"><strong>5n<sup>2</sup>+45n</strong></div> <br/>
  
 For example, the total amount of AP required to reach level 200 is:
<div align="center"><strong>5×200<sup>2</sup>+45×200 = 209k AP</strong></div> <br/>

## :computer: Install and run
### NodeJS
:warning: This app was only tested with Node v16.14.0 and above, there is no guaranteed that it works with older versions :warning:


You can download the project and run it with NodeJS if you have it installed on your computer.\
First, you have to install express by typing:
```
npm install express
```
Next, simply run it by typing:
```
node GTA_ArenaWar_Progression.js
```

\
Enjoy!
