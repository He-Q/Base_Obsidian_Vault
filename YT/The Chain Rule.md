---
url: https://youtu.be/wl1myxrtQHQ
aliases:
  - The Chain Rule
channel: StatQuest with Josh Starmer
published: 2020-07-12T21:00:18-07:00
thumbnail: https://img.youtube.com/vi/wl1myxrtQHQ/maxresdefault.jpg
keywords:
  - Josh Starmer
  - StatQuest
  - Machine Learning
  - Statistics
  - Data Science
  - The Chain Rule
  - Calculus
duration: 18m 24s
notes_taken: true
watched_completely: true
watching_In_progress: false
---

# The Chain Rule

![thumbnail|250](https://img.youtube.com/vi/wl1myxrtQHQ/maxresdefault.jpg)

```The Chain Rule is a method for finding complex derivatives and is used all the time in Statistics and Machine Learning. This video breaks it down into its two simple pieces and shows you how they easily come together. We then use the Chain Rule to solve a common Machine Learning problem - optimizing the Residual Squared Loss Function.

For a complete index of all the StatQuest videos, check out:
https://statquest.org/video-index/

If you'd like to support StatQuest, please consider...

Buying my book, The StatQuest Illustrated Guide to Machine Learning:
PDF - https://statquest.gumroad.com/l/wvtmc
Paperback - https://www.amazon.com/dp/B09ZCKR4H6
Kindle eBook - https://www.amazon.com/dp/B09ZG79HXC

Patreon: https://www.patreon.com/statquest
...or...
YouTube Membership: https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw/join

...a cool StatQuest t-shirt or sweatshirt: 
https://shop.spreadshirt.com/statquest-with-josh-starmer/

...buying one or two of my songs (or go large and get a whole album!)
https://joshuastarmer.bandcamp.com/

...or just donating to StatQuest!
https://www.paypal.me/statquest

Lastly, if you want to keep up with me as I research and create new StatQuests, follow me on twitter:
https://twitter.com/joshuastarmer

0:00 Awesome song and introduction
2:02 A super simple example
6:32 A slightly more complicated example
9:16 The Chain Rule when the relationship is not obvious
11:47 The Chain Rule for the Residual Sum of Squares

Corrections:
13:05 When the residual is negative, the pink circle should be on the left side of the y-axis. And when the residual is positive, the pink circle should be on the right side.

#StatQuest #TheChainRule
```

https://youtu.be/wl1myxrtQHQ



```timestamp-url 
 https://youtu.be/wl1myxrtQHQ
 ```




----------Starting Review of derivative---------
```timestamp 
 01:07
 ```
![[Pasted image 20231019162002.png]]

```timestamp 
 01:11
 ```
![[Pasted image 20231019162028.png]]

```timestamp 
 01:21
 ```
![[Pasted image 20231019162202.png]]

```timestamp 
 01:29
 ```
![[Pasted image 20231019162236.png]]

```timestamp 
 01:34
 ```
![[Pasted image 20231019162326.png]]

```timestamp 
 01:47
 ```
![[Pasted image 20231019162400.png]]

```timestamp 
 01:53
 ```
![[Pasted image 20231019162427.png]]

----------Ending Review of derivative---------

----------Starting The Chain Rule---------
```timestamp 
 01:53
 ```
![[Pasted image 20231019181621.png]]
In between timestamp:- weight changes then height changes and accordingly shoe size changes.
```timestamp 
 02:47
 ```

```timestamp 
 12:37
 ```
![[Pasted image 20231019232319.png]]

```timestamp 
 12:50
 ```
![[Pasted image 20231019232352.png]]

```timestamp 
 12:55
 ```
![[Pasted image 20231019232414.png]]

```timestamp 
 13:00
 ```
![[Pasted image 20231019232443.png]]

```timestamp 
 13:06
 ```
![[Pasted image 20231019232504.png]]

```timestamp 
 13:13
 ```
![[Pasted image 20231019232530.png]]

```timestamp 
 13:14
 ```
![[Pasted image 20231019232726.png]]







# Transcript


[00:00](https://youtu.be/wl1myxrtQHQ&t=0) the chain rule is cool stat quest yeah 
[00:07](https://youtu.be/wl1myxrtQHQ&t=7) [Music] hello i'm josh starmer and welcome to 
[00:11](https://youtu.be/wl1myxrtQHQ&t=11) statquest today we're going to talk about the 
[00:14](https://youtu.be/wl1myxrtQHQ&t=14) chain rule and it's going to be clearly explained 
[00:21](https://youtu.be/wl1myxrtQHQ&t=21) note this stat quest assumes that you are already familiar with the basic 
[00:26](https://youtu.be/wl1myxrtQHQ&t=26) idea of a derivative and just want a deeper understanding of 
[00:30](https://youtu.be/wl1myxrtQHQ&t=30) the chain rule that said let's do a super quick review 
[00:38](https://youtu.be/wl1myxrtQHQ&t=38) imagine we collected these measurements from a bunch of people 
[00:43](https://youtu.be/wl1myxrtQHQ&t=43) on the x-axis we measured how much they liked statquest 
[00:47](https://youtu.be/wl1myxrtQHQ&t=47) and on the y-axis we measured awesomeness 
[00:51](https://youtu.be/wl1myxrtQHQ&t=51) we can then fit this orange parabola to the data 
[00:55](https://youtu.be/wl1myxrtQHQ&t=55) the equation for the parabola is awesomeness 
[00:59](https://youtu.be/wl1myxrtQHQ&t=59) equals likes statquest squared the derivative of this equation tells us 
[01:06](https://youtu.be/wl1myxrtQHQ&t=66) the slope of the tangent line at any point along the curve 
[01:10](https://youtu.be/wl1myxrtQHQ&t=70) the slope of the tangent line tells us how quickly 
[01:14](https://youtu.be/wl1myxrtQHQ&t=74) awesomeness is changing with respect to like's stat quest 
[01:18](https://youtu.be/wl1myxrtQHQ&t=78) we can calculate the derivative of awesomeness with respect to like's 
[01:23](https://youtu.be/wl1myxrtQHQ&t=83) stat quest by using the power rule the power rule tells us to multiply 
[01:29](https://youtu.be/wl1myxrtQHQ&t=89) like's stat quest by the power which is 2 and raise stat 
[01:34](https://youtu.be/wl1myxrtQHQ&t=94) quest by the power 2 -1 and since 
[01:39](https://youtu.be/wl1myxrtQHQ&t=99) minus one equals one and raising something by one 
[01:43](https://youtu.be/wl1myxrtQHQ&t=103) is the same as omitting the power we end up with 
[01:46](https://youtu.be/wl1myxrtQHQ&t=106) two times like's statquest okay bam that's the review 
[01:53](https://youtu.be/wl1myxrtQHQ&t=113) now let's dive into the chain rule 
[01:59](https://youtu.be/wl1myxrtQHQ&t=119) with a super simple example imagine we collected weight and height 
[02:05](https://youtu.be/wl1myxrtQHQ&t=125) measurements from three people and then we fit a line to the data 
[02:11](https://youtu.be/wl1myxrtQHQ&t=131) now if someone tells us they weigh this much 
[02:15](https://youtu.be/wl1myxrtQHQ&t=135) we can use the green line to predict that they are this 
[02:18](https://youtu.be/wl1myxrtQHQ&t=138) tall bam now imagine we collected height and shoe size measurements and we fit a 
[02:26](https://youtu.be/wl1myxrtQHQ&t=146) line to the data now if someone tells us that they are 
[02:30](https://youtu.be/wl1myxrtQHQ&t=150) this tall we can use the orange line to predict 
[02:34](https://youtu.be/wl1myxrtQHQ&t=154) that this is their shoe size bam 
[02:39](https://youtu.be/wl1myxrtQHQ&t=159) now if someone tells us that they weigh this much 
[02:43](https://youtu.be/wl1myxrtQHQ&t=163) then we can predict their height and we can use the predicted height 
[02:49](https://youtu.be/wl1myxrtQHQ&t=169) to predict shoe size and if we change the value for weight 
[02:54](https://youtu.be/wl1myxrtQHQ&t=174) we see a change in shoe size bam 
[03:01](https://youtu.be/wl1myxrtQHQ&t=181) now let's focus on this green line that represents the relationship between 
[03:06](https://youtu.be/wl1myxrtQHQ&t=186) weight and height we see that for every one 
[03:10](https://youtu.be/wl1myxrtQHQ&t=190) unit increase in weight there's a two unit increase in height 
[03:15](https://youtu.be/wl1myxrtQHQ&t=195) in other words the slope of the line is 2 divided by 1 which equals 2 
[03:23](https://youtu.be/wl1myxrtQHQ&t=203) and since the slope is 2 the derivative the change in height with respect to a 
[03:29](https://youtu.be/wl1myxrtQHQ&t=209) change in weight is two now since the slope of the green 
[03:35](https://youtu.be/wl1myxrtQHQ&t=215) line is the same as its derivative two 
[03:39](https://youtu.be/wl1myxrtQHQ&t=219) the equation for height is height equals the derivative of height with 
[03:44](https://youtu.be/wl1myxrtQHQ&t=224) respect to weight times weight which equals two 
[03:49](https://youtu.be/wl1myxrtQHQ&t=229) times weight note the equation for height has no intercept 
[03:55](https://youtu.be/wl1myxrtQHQ&t=235) because the green line goes through the origin 
[03:59](https://youtu.be/wl1myxrtQHQ&t=239) now let's focus on the orange line that represents the relationship between 
[04:03](https://youtu.be/wl1myxrtQHQ&t=243) height and shoe size in this case we see that for every one unit increase 
[04:09](https://youtu.be/wl1myxrtQHQ&t=249) in height there is a one-quarter unit increase in 
[04:13](https://youtu.be/wl1myxrtQHQ&t=253) shoe size and i admit that it's hard to see the 
[04:17](https://youtu.be/wl1myxrtQHQ&t=257) one-quarter unit increase in shoe size so just trust me anyway 
[04:23](https://youtu.be/wl1myxrtQHQ&t=263) because we go up one quarter unit for every one unit we go 
[04:27](https://youtu.be/wl1myxrtQHQ&t=267) over the slope is one quarter divided by one which equals one quarter 
[04:34](https://youtu.be/wl1myxrtQHQ&t=274) and since the slope is one quarter the derivative 
[04:38](https://youtu.be/wl1myxrtQHQ&t=278) or the change in shoe size with respect to a change in 
[04:42](https://youtu.be/wl1myxrtQHQ&t=282) height is one quarter now since the slope of the orange line 
[04:48](https://youtu.be/wl1myxrtQHQ&t=288) is the same as its derivative the equation for shoe size is 
[04:54](https://youtu.be/wl1myxrtQHQ&t=294) shoe size equals the derivative of shoe size with respect to height 
[04:58](https://youtu.be/wl1myxrtQHQ&t=298) times height which equals one-quarter times height and again 
[05:05](https://youtu.be/wl1myxrtQHQ&t=305) because the orange line goes through the origin the equation for shoe size has no 
[05:10](https://youtu.be/wl1myxrtQHQ&t=310) intercept now because weight can predict height 
[05:16](https://youtu.be/wl1myxrtQHQ&t=316) and height can predict shoe size we can plug the equation for height into 
[05:22](https://youtu.be/wl1myxrtQHQ&t=322) the equation for shoe size now if we want to determine exactly how 
[05:29](https://youtu.be/wl1myxrtQHQ&t=329) shoe size changes with respect to changes in 
[05:32](https://youtu.be/wl1myxrtQHQ&t=332) weight we can take the derivative of shoe size 
[05:36](https://youtu.be/wl1myxrtQHQ&t=336) with respect to weight and the derivative 
[05:40](https://youtu.be/wl1myxrtQHQ&t=340) of the equation for shoe size with respect to weight 
[05:45](https://youtu.be/wl1myxrtQHQ&t=345) is just the product of the two derivatives 
[05:49](https://youtu.be/wl1myxrtQHQ&t=349) in other words because height connects weight 
[05:52](https://youtu.be/wl1myxrtQHQ&t=352) to shoe size the derivative of shoe size with respect to weight 
[05:58](https://youtu.be/wl1myxrtQHQ&t=358) is the derivative of shoe size with respect to height 
[06:02](https://youtu.be/wl1myxrtQHQ&t=362) times the derivative of height with respect to weight 
[06:06](https://youtu.be/wl1myxrtQHQ&t=366) this relationship is the essence of the chain rule 
[06:11](https://youtu.be/wl1myxrtQHQ&t=371) plugging in numbers gives us one half and that means for every one unit 
[06:17](https://youtu.be/wl1myxrtQHQ&t=377) increase in weight beep boop beep there is a one-half 
[06:22](https://youtu.be/wl1myxrtQHQ&t=382) unit increase in shoe size bam now let's look at a slightly more 
[06:30](https://youtu.be/wl1myxrtQHQ&t=390) complicated example imagine we measured how hungry a bunch 
[06:35](https://youtu.be/wl1myxrtQHQ&t=395) of people were and how long it had been since they last 
[06:38](https://youtu.be/wl1myxrtQHQ&t=398) had a snack as time since the last snack increases 
[06:43](https://youtu.be/wl1myxrtQHQ&t=403) on the x-axis people got hungrier and hungrier at a 
[06:47](https://youtu.be/wl1myxrtQHQ&t=407) faster rate so we fit an exponential line with 
[06:52](https://youtu.be/wl1myxrtQHQ&t=412) intercept one-half to the measurements to reflect the 
[06:55](https://youtu.be/wl1myxrtQHQ&t=415) increasing rate of hunger then we measured how much people craved 
[07:00](https://youtu.be/wl1myxrtQHQ&t=420) ice cream and how hungry they were the hungrier someone was 
[07:05](https://youtu.be/wl1myxrtQHQ&t=425) the more they craved ice cream but after a certain amount of hunger the 
[07:11](https://youtu.be/wl1myxrtQHQ&t=431) craving did not continue to increase very much 
[07:15](https://youtu.be/wl1myxrtQHQ&t=435) so we fit a square root function to the data to reflect how the increase in 
[07:20](https://youtu.be/wl1myxrtQHQ&t=440) craving tapers off now if we want to see how the 
[07:24](https://youtu.be/wl1myxrtQHQ&t=444) rate of craving ice cream changes with respect 
[07:28](https://youtu.be/wl1myxrtQHQ&t=448) to the time since the last snack plugging the 
[07:32](https://youtu.be/wl1myxrtQHQ&t=452) equation for hunger into the equation for craves ice cream 
[07:36](https://youtu.be/wl1myxrtQHQ&t=456) gives us an equation without an obvious derivative 
[07:41](https://youtu.be/wl1myxrtQHQ&t=461) to convince yourself that taking the derivative of this 
[07:44](https://youtu.be/wl1myxrtQHQ&t=464) is no fun at all pause the video and give it a try 
[07:49](https://youtu.be/wl1myxrtQHQ&t=469) however because hunger links time since last snack 
[07:53](https://youtu.be/wl1myxrtQHQ&t=473) to craves ice cream we can use the chain rule to solve for this 
[07:59](https://youtu.be/wl1myxrtQHQ&t=479) derivative first the power rule tells us that the 
[08:04](https://youtu.be/wl1myxrtQHQ&t=484) derivative of hunger with respect to the time since the last 
[08:07](https://youtu.be/wl1myxrtQHQ&t=487) snack is two times time 
[08:13](https://youtu.be/wl1myxrtQHQ&t=493) likewise the power rule tells us that the derivative of craves ice cream with 
[08:17](https://youtu.be/wl1myxrtQHQ&t=497) respect to hunger is one divided by two times the square root 
[08:23](https://youtu.be/wl1myxrtQHQ&t=503) of hunger so with these two derivatives 
[08:28](https://youtu.be/wl1myxrtQHQ&t=508) the chain rule tells us that the derivative of craves ice cream 
[08:32](https://youtu.be/wl1myxrtQHQ&t=512) with respect to time is the derivative of craves ice cream with 
[08:38](https://youtu.be/wl1myxrtQHQ&t=518) respect to hunger times the derivative of hunger with 
[08:42](https://youtu.be/wl1myxrtQHQ&t=522) respect to time since last snack so we plug in the derivatives 
[08:51](https://youtu.be/wl1myxrtQHQ&t=531) and plug in the equation for hunger and cancel out the twos 
[08:57](https://youtu.be/wl1myxrtQHQ&t=537) and we get the derivative of craves ice cream with respect to time 
[09:02](https://youtu.be/wl1myxrtQHQ&t=542) since last snack this derivative tells us how quickly or slowly our 
[09:08](https://youtu.be/wl1myxrtQHQ&t=548) craving for ice cream changes with respect to time 
[09:13](https://youtu.be/wl1myxrtQHQ&t=553) double bam in this last example it was obvious that 
[09:19](https://youtu.be/wl1myxrtQHQ&t=559) hunger was the link between time since last snack and craves ice cream 
[09:25](https://youtu.be/wl1myxrtQHQ&t=565) and we had an equation for hunger in terms of time 
[09:30](https://youtu.be/wl1myxrtQHQ&t=570) and an equation for craves ice cream in terms of hunger 
[09:35](https://youtu.be/wl1myxrtQHQ&t=575) however usually these relationships are not so obvious 
[09:40](https://youtu.be/wl1myxrtQHQ&t=580) instead of having two separate equations we usually get the first equation jammed 
[09:46](https://youtu.be/wl1myxrtQHQ&t=586) into the second and when all you have is this it's not 
[09:51](https://youtu.be/wl1myxrtQHQ&t=591) so obvious how the chain rule applies 
[09:55](https://youtu.be/wl1myxrtQHQ&t=595) so we can talk about how to apply the chain rule 
[09:58](https://youtu.be/wl1myxrtQHQ&t=598) in this situation let us scooch the equation to the left so we have room to 
[10:03](https://youtu.be/wl1myxrtQHQ&t=603) work now one thing we can do in this 
[10:07](https://youtu.be/wl1myxrtQHQ&t=607) situation is look for things in the equation that can be put 
[10:10](https://youtu.be/wl1myxrtQHQ&t=610) in parentheses for example the square root symbol can be replaced 
[10:16](https://youtu.be/wl1myxrtQHQ&t=616) with parentheses now we can say that the stuff inside the 
[10:21](https://youtu.be/wl1myxrtQHQ&t=621) parentheses is time squared plus 
[10:25](https://youtu.be/wl1myxrtQHQ&t=625) one half and craves ice cream can be rewritten as the square root of 
[10:31](https://youtu.be/wl1myxrtQHQ&t=631) the stuff inside now the chain rule tells us that the 
[10:36](https://youtu.be/wl1myxrtQHQ&t=636) derivative of craves ice cream with respect to time is 
[10:42](https://youtu.be/wl1myxrtQHQ&t=642) the derivative of craves ice cream with respect to the stuff 
[10:45](https://youtu.be/wl1myxrtQHQ&t=645) inside times the derivative of the stuff inside 
[10:50](https://youtu.be/wl1myxrtQHQ&t=650) with respect to time the power rule gives us the derivative of craves ice 
[10:56](https://youtu.be/wl1myxrtQHQ&t=656) cream with respect to the stuff inside and the power rule gives us the 
[11:01](https://youtu.be/wl1myxrtQHQ&t=661) derivative of the stuff inside with respect to time now we just plug 
[11:07](https://youtu.be/wl1myxrtQHQ&t=667) the derivatives into the chain rule and plug in the 
[11:11](https://youtu.be/wl1myxrtQHQ&t=671) equation for the stuff inside cancel out the twos and we get the 
[11:17](https://youtu.be/wl1myxrtQHQ&t=677) derivative of craves ice cream with respect to the time since last 
[11:21](https://youtu.be/wl1myxrtQHQ&t=681) snack and that's exactly what we got before 
[11:26](https://youtu.be/wl1myxrtQHQ&t=686) bam now let's look at how the chain rule 
[11:31](https://youtu.be/wl1myxrtQHQ&t=691) applies to the residual sum of squares a commonly used loss function in machine 
[11:37](https://youtu.be/wl1myxrtQHQ&t=697) learning note if this does not make any sense to 
[11:41](https://youtu.be/wl1myxrtQHQ&t=701) you just imagine i said now let's look at 
[11:45](https://youtu.be/wl1myxrtQHQ&t=705) one last example imagine we measured someone's weight and 
[11:50](https://youtu.be/wl1myxrtQHQ&t=710) height and we wanted to fit this green line to 
[11:54](https://youtu.be/wl1myxrtQHQ&t=714) the measurement now to keep things simple let's assume 
[11:59](https://youtu.be/wl1myxrtQHQ&t=719) we can only move the green line up and down the equation for the green 
[12:05](https://youtu.be/wl1myxrtQHQ&t=725) line is height equals the intercept 
[12:09](https://youtu.be/wl1myxrtQHQ&t=729) plus 1 times weight and we can change the intercept 
[12:15](https://youtu.be/wl1myxrtQHQ&t=735) but to keep things simple we can't change the slope 
[12:19](https://youtu.be/wl1myxrtQHQ&t=739) which is set to 1. if we set the intercept to 0 
[12:24](https://youtu.be/wl1myxrtQHQ&t=744) then this location on the green line is the predicted height 
[12:30](https://youtu.be/wl1myxrtQHQ&t=750) and we can calculate the residual the difference between the observed height 
[12:34](https://youtu.be/wl1myxrtQHQ&t=754) and the value predicted by the line and we can plot the residual on this 
[12:39](https://youtu.be/wl1myxrtQHQ&t=759) graph which has the intercept on the x-axis 
[12:44](https://youtu.be/wl1myxrtQHQ&t=764) and the residual on the y-axis if we change the intercept here 
[12:51](https://youtu.be/wl1myxrtQHQ&t=771) then we can see the change in the residual here 
[12:58](https://youtu.be/wl1myxrtQHQ&t=778) and because a common way to evaluate how good the green line fits the data 
[13:03](https://youtu.be/wl1myxrtQHQ&t=783) is the squared residual we can plot the squared residual 
[13:08](https://youtu.be/wl1myxrtQHQ&t=788) here where we have the residuals on the x-axis 
[13:13](https://youtu.be/wl1myxrtQHQ&t=793) and the squared residuals on the y-axis now if we change the intercept here 
[13:21](https://youtu.be/wl1myxrtQHQ&t=801) then we change the residual here and here 
[13:25](https://youtu.be/wl1myxrtQHQ&t=805) and changing the residual here changes the squared residual 
[13:30](https://youtu.be/wl1myxrtQHQ&t=810) here in order to find the value for the intercept that minimizes the squared 
[13:36](https://youtu.be/wl1myxrtQHQ&t=816) residual we are going to find the derivative of 
[13:40](https://youtu.be/wl1myxrtQHQ&t=820) the squared residual with respect to the intercept and then 
[13:44](https://youtu.be/wl1myxrtQHQ&t=824) we're going to find where the derivative equals zero because given the function 
[13:50](https://youtu.be/wl1myxrtQHQ&t=830) y equals the residual squared the derivative 
[13:53](https://youtu.be/wl1myxrtQHQ&t=833) is zero at the lowest point the chain rule says that because the 
[13:59](https://youtu.be/wl1myxrtQHQ&t=839) residual links the intercept to the squared residual 
[14:03](https://youtu.be/wl1myxrtQHQ&t=843) then the derivative of the squared residual with respect to the intercept 
[14:08](https://youtu.be/wl1myxrtQHQ&t=848) is the derivative of the squared residual with respect to the residual 
[14:13](https://youtu.be/wl1myxrtQHQ&t=853) times the derivative of the residual with respect to the intercept 
[14:18](https://youtu.be/wl1myxrtQHQ&t=858) the power rule tells us that the derivative of the residual squared 
[14:22](https://youtu.be/wl1myxrtQHQ&t=862) is just two times the residual so let's plug that in to solve for the 
[14:30](https://youtu.be/wl1myxrtQHQ&t=870) derivative of the residual with respect to the intercept we move 
[14:35](https://youtu.be/wl1myxrtQHQ&t=875) the equation for the residual over here so we have room to work 
[14:40](https://youtu.be/wl1myxrtQHQ&t=880) then we plug in the equation for the predicted height 
[14:44](https://youtu.be/wl1myxrtQHQ&t=884) then in order to remove these parentheses 
[14:47](https://youtu.be/wl1myxrtQHQ&t=887) we multiply everything inside by negative one 
[14:52](https://youtu.be/wl1myxrtQHQ&t=892) now the derivative of the residual with respect to the intercept 
[14:56](https://youtu.be/wl1myxrtQHQ&t=896) is zero because this term does not contain the intercept 
[15:02](https://youtu.be/wl1myxrtQHQ&t=902) plus negative one because the derivative of the negative 
[15:05](https://youtu.be/wl1myxrtQHQ&t=905) intercept equals negative one plus zero because the last term does not contain 
[15:11](https://youtu.be/wl1myxrtQHQ&t=911) the intercept now do the math and we are left with 
[15:16](https://youtu.be/wl1myxrtQHQ&t=916) negative one and that makes sense because the 
[15:20](https://youtu.be/wl1myxrtQHQ&t=920) derivative is just the slope of the orange line 
[15:23](https://youtu.be/wl1myxrtQHQ&t=923) and by i we can see that the slope of the orange line 
[15:27](https://youtu.be/wl1myxrtQHQ&t=927) is negative one so let's plug this derivative 
[15:31](https://youtu.be/wl1myxrtQHQ&t=931) in here and do a little math and plug in the equation for the 
[15:37](https://youtu.be/wl1myxrtQHQ&t=937) residual now we have the derivative for the 
[15:41](https://youtu.be/wl1myxrtQHQ&t=941) residual squared in terms of the intercept 
[15:44](https://youtu.be/wl1myxrtQHQ&t=944) note if instead of starting with separate equations for the residual 
[15:48](https://youtu.be/wl1myxrtQHQ&t=948) and the residual squared we started with just the equation for the residual 
[15:54](https://youtu.be/wl1myxrtQHQ&t=954) squared with the equation for the predicted height 
[15:57](https://youtu.be/wl1myxrtQHQ&t=957) jammed into it then just like before we can use parentheses to help us out 
[16:05](https://youtu.be/wl1myxrtQHQ&t=965) in this case we'll call everything between the outermost parentheses 
[16:09](https://youtu.be/wl1myxrtQHQ&t=969) the stuff inside which equals the observed 
[16:12](https://youtu.be/wl1myxrtQHQ&t=972) minus the intercept minus one times weight 
[16:16](https://youtu.be/wl1myxrtQHQ&t=976) and that means the residual squared can be rewritten 
[16:20](https://youtu.be/wl1myxrtQHQ&t=980) as the square of the stuff inside now we can use the chain rule to 
[16:27](https://youtu.be/wl1myxrtQHQ&t=987) determine the derivative of the residual squared 
[16:30](https://youtu.be/wl1myxrtQHQ&t=990) with respect to the intercept it's the derivative of the residual squared with 
[16:35](https://youtu.be/wl1myxrtQHQ&t=995) respect to the stuff inside times the derivative of the stuff inside 
[16:40](https://youtu.be/wl1myxrtQHQ&t=1000) with respect to the intercept just like before the derivative of the 
[16:46](https://youtu.be/wl1myxrtQHQ&t=1006) residual with respect to the stuff inside is two 
[16:49](https://youtu.be/wl1myxrtQHQ&t=1009) times the stuff inside so we plug that into the chain rule 
[16:56](https://youtu.be/wl1myxrtQHQ&t=1016) and the derivative of the stuff inside with respect to the intercept 
[17:00](https://youtu.be/wl1myxrtQHQ&t=1020) is negative one so we plug that into the chain rule now we just plug in the stuff 
[17:07](https://youtu.be/wl1myxrtQHQ&t=1027) inside multiply two with negative one 
[17:12](https://youtu.be/wl1myxrtQHQ&t=1032) and we end up with the exact same derivative as before 
[17:17](https://youtu.be/wl1myxrtQHQ&t=1037) bam now we want to find the value for the intercept 
[17:21](https://youtu.be/wl1myxrtQHQ&t=1041) such that the derivative of the residual squared equals zero 
[17:27](https://youtu.be/wl1myxrtQHQ&t=1047) so we plug in the observed height and the observed weight 
[17:32](https://youtu.be/wl1myxrtQHQ&t=1052) set the derivative equal to 0 and solve for the intercept 
[17:43](https://youtu.be/wl1myxrtQHQ&t=1063) and at long last we see that when the intercept 
[17:46](https://youtu.be/wl1myxrtQHQ&t=1066) equals one we minimize the squared residual 
[17:50](https://youtu.be/wl1myxrtQHQ&t=1070) and we have the best fitting line triple bam hooray 
[17:58](https://youtu.be/wl1myxrtQHQ&t=1078) we've made it to the end of another exciting stack quest 
[18:01](https://youtu.be/wl1myxrtQHQ&t=1081) if you like this stat quest and want to see more please subscribe 
[18:05](https://youtu.be/wl1myxrtQHQ&t=1085) and if you want to support statquest consider contributing to my patreon 
[18:09](https://youtu.be/wl1myxrtQHQ&t=1089) campaign becoming a channel member buying one or 
[18:12](https://youtu.be/wl1myxrtQHQ&t=1092) two of the statquest study guides or a t-shirt or a hoodie or just 
[18:16](https://youtu.be/wl1myxrtQHQ&t=1096) donate the links are in the description below 
[18:19](https://youtu.be/wl1myxrtQHQ&t=1099) alright until next time quest on 