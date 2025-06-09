---
url: https://youtu.be/bRMGoPqsn20
aliases:
  - Distributed TensorFlow training (Google I/O '18)
channel: TensorFlow
published: 2018-05-11T20:34:41-07:00
thumbnail: https://img.youtube.com/vi/bRMGoPqsn20/maxresdefault.jpg
keywords:
  - "type: Conference Talk (Full production);"
  - "pr_pr: Google I/O"
  - "purpose: Educate"
duration: 35m 26s
watched_completely: false
notes_taken: true
watching_In_progress: true
---

# Distributed TensorFlow training (Google I/O '18)

![thumbnail|250](https://img.youtube.com/vi/bRMGoPqsn20/maxresdefault.jpg)

```
To efficiently train machine learning models, you will often need to scale your training to multiple GPUs, or even multiple machines. TensorFlow now offers rich functionality to achieve this with just a few lines of code. Join this session to learn how to set this up.

Rate this session by signing-in on the I/O website here → https://goo.gl/sBZMEm

Distribution Strategy API:
https://goo.gl/F9vXqQ
https://goo.gl/Zq2xvJ

ResNet50 Model Garden example with MirroredStrategy API:
https://goo.gl/3UWhj8

Performance Guides:
https://goo.gl/doqGE7
https://goo.gl/NCnrCn

Commands to set up a GCE instance and run distributed training:
https://goo.gl/xzwN4C

Multi-machine distributed training with train_and_evaluate:
https://goo.gl/kyikAC

Watch more TensorFlow sessions from I/O '18 here → https://goo.gl/GaAnBR 
See all the sessions from Google I/O '18 here → https://goo.gl/q1Tr8x

Subscribe to the TensorFlow channel → https://goo.gl/ht3WGe

#io18 event: Google I/O 2018; re_ty: Publish; product: TensorFlow - General; fullname: Priya Gupta, Anjali Sridhar; event: Google I/O 2018;
```




https://youtu.be/bRMGoPqsn20



```timestamp-url 
 https://youtu.be/bRMGoPqsn20
 ```




Distributed Training Architecture:
	In data parallelism, there are two main approaches to this issue:
```timestamp 
 07:51
 ```
	Async Pararmeter Server
```timestamp 
 08:29
 ```
	Sync Allreduce Architecture 
	GPUs in this approach each worker has a copy of parameters on its own the no special parameter servers each worker confused the lost ingredients based on a subset of training samples once the gradients are computed the workers communicate among themselves to propagate the gradients and update their model parameters all the workers are synchronized which means that the next round of computation doesn't begin until each worker has received the updated gradients and updated the model.

```timestamp 
 09:51
 ```
ALL REDUCE:

```timestamp 
 10:29
 ```
Ring Allreduce Architecture

![[Pasted image 20231027164452.png]]
```timestamp 
 11:42
 ```

![[Pasted image 20231027164631.png]]

```timestamp 
 12:47
 ```

Model Parallelism
![[Pasted image 20231027164744.png]]

model parallelism that you may have heard of a simple way to 
[12:42](https://youtu.be/bRMGoPqsn20&t=762) think about model parallelism is when your model is so big that it doesn't fit 
[12:47](https://youtu.be/bRMGoPqsn20&t=767) in the memory of one device so you divide the model into smaller parts and 
[12:52](https://youtu.be/bRMGoPqsn20&t=772) you can do those computations on different workers with the same training 
[12:57](https://youtu.be/bRMGoPqsn20&t=777) samples for example you could put different layers of your model on 
[13:02](https://youtu.be/bRMGoPqsn20&t=782) different devices these days however most devices have big enough memory that 
[13:08](https://youtu.be/bRMGoPqsn20&t=788) most models can fit in their memory



```timestamp 
 15:44
 ```







[00:02](https://youtu.be/bRMGoPqsn20&t=2) [Music] my name is Priya and I'm Anjali 
[00:09](https://youtu.be/bRMGoPqsn20&t=9) we're both software engineers on the tensorflow team working on distributed 
[00:13](https://youtu.be/bRMGoPqsn20&t=13) tensorflow we're so excited to be here today to tell you about distributor 
[00:18](https://youtu.be/bRMGoPqsn20&t=18) tensorflow training let me grab the clicker okay hopefully 
[00:27](https://youtu.be/bRMGoPqsn20&t=27) most of you know what tensorflow is it's an open-source machine learning 
[00:31](https://youtu.be/bRMGoPqsn20&t=31) framework used extensively both inside and outside Google for example if you 
[00:38](https://youtu.be/bRMGoPqsn20&t=38) tried the smart compose feature that was launched a couple of days ago that 
[00:42](https://youtu.be/bRMGoPqsn20&t=42) feature uses tensorflow tensorflow allows you to build train and predict 
[00:50](https://youtu.be/bRMGoPqsn20&t=50) using neural networks such as this in training we learn the parameters of the 
[00:56](https://youtu.be/bRMGoPqsn20&t=56) network using data training complex neural networks with large amounts of 
[01:04](https://youtu.be/bRMGoPqsn20&t=64) data can often take a long time in the graph here you can see you can see the 
[01:10](https://youtu.be/bRMGoPqsn20&t=70) training time on the x-axis and the accuracy of predictions on the y-axis 
[01:15](https://youtu.be/bRMGoPqsn20&t=75) this is taken from training an image recognition model on a single GPU as you 
[01:22](https://youtu.be/bRMGoPqsn20&t=82) can see it took more than 80 hours to get to 75% accuracy if you have some 
[01:28](https://youtu.be/bRMGoPqsn20&t=88) experience running complex machine learning models this might sound rather 
[01:32](https://youtu.be/bRMGoPqsn20&t=92) familiar to you and it might make you feel something like this if your 
[01:39](https://youtu.be/bRMGoPqsn20&t=99) training takes only a few minutes to a few hours you'll be productive and happy 
[01:44](https://youtu.be/bRMGoPqsn20&t=104) and you can try out new ideas faster when it starts to take a few days maybe 
[01:51](https://youtu.be/bRMGoPqsn20&t=111) you could still manage and run a few things in parallel when it starts to 
[01:56](https://youtu.be/bRMGoPqsn20&t=116) take a few weeks your progress will slow down and it becomes expensive to try out 
[02:02](https://youtu.be/bRMGoPqsn20&t=122) every new idea and when it starts to take more than a month I think it's not 
[02:08](https://youtu.be/bRMGoPqsn20&t=128) even worth thinking about and this is not an exaggeration 
[02:13](https://youtu.be/bRMGoPqsn20&t=133) training complex models such as the resonate 50 that we'll talk about later 
[02:17](https://youtu.be/bRMGoPqsn20&t=137) in the talk can take up to a week on a single but powerful GPU like a Tesla P 
[02:23](https://youtu.be/bRMGoPqsn20&t=143) 100 so natural question to us is how can we make training fast there are a number 
[02:31](https://youtu.be/bRMGoPqsn20&t=151) of things you can try you can use a faster accelerator such as a TPU or 
[02:37](https://youtu.be/bRMGoPqsn20&t=157) tensor processing units I'm sure you've heard all about them in the last couple 
[02:41](https://youtu.be/bRMGoPqsn20&t=161) of days here your input pipeline might be the ball leg so you can work on that 
[02:46](https://youtu.be/bRMGoPqsn20&t=166) and make that faster there are a number of guidelines on the tensorflow website 
[02:52](https://youtu.be/bRMGoPqsn20&t=172) that you can try and improve the performance or your training in this 
[02:57](https://youtu.be/bRMGoPqsn20&t=177) talk will focus on distributed training that is running training in parallel on 
[03:03](https://youtu.be/bRMGoPqsn20&t=183) multiple devices such as CPUs GPUs or TP use in order to make your training 
[03:09](https://youtu.be/bRMGoPqsn20&t=189) faster with the techniques that we'll talk about in this talk you can bring 
[03:15](https://youtu.be/bRMGoPqsn20&t=195) down your training time from weeks two hours with just a few lines of code and 
[03:20](https://youtu.be/bRMGoPqsn20&t=200) a few powerful GPUs in the graph here you can see the images per second 
[03:26](https://youtu.be/bRMGoPqsn20&t=206) processed while training an image recognition model as you can see as we 
[03:32](https://youtu.be/bRMGoPqsn20&t=212) increase the number of GPUs from one to four to eight the images per second 
[03:37](https://youtu.be/bRMGoPqsn20&t=217) process it can almost double every time we'll come back to these performance 
[03:42](https://youtu.be/bRMGoPqsn20&t=222) numbers later with more details so before diving into the details of how 
[03:48](https://youtu.be/bRMGoPqsn20&t=228) you can get that kind of scaling and tensorflow 
[03:51](https://youtu.be/bRMGoPqsn20&t=231) first I want to cover a few high-level concepts and architectures in 
[03:55](https://youtu.be/bRMGoPqsn20&t=235) distributed training this will give us a strong foundation with which to 
[04:00](https://youtu.be/bRMGoPqsn20&t=240) understand the various solutions as your focus on training today let's take a 
[04:07](https://youtu.be/bRMGoPqsn20&t=247) look at what a typical training loop looks like let's say you have a simple 
[04:14](https://youtu.be/bRMGoPqsn20&t=254) model like this with a couple of hidden layers each layer has a bunch of weights 
[04:19](https://youtu.be/bRMGoPqsn20&t=259) and biases also called the model parameters or trainable variables 
[04:24](https://youtu.be/bRMGoPqsn20&t=264) a training step begins with some processing on the input data we then 
[04:31](https://youtu.be/bRMGoPqsn20&t=271) feed this input into the model and compute the predictions in the forward 
[04:36](https://youtu.be/bRMGoPqsn20&t=276) pass we then compare the predictions with the input label and compare to 
[04:42](https://youtu.be/bRMGoPqsn20&t=282) compute the loss then in the backward pass we compute the gradients and 
[04:47](https://youtu.be/bRMGoPqsn20&t=287) finally we update the model's parameters using these gradients this whole process 
[04:53](https://youtu.be/bRMGoPqsn20&t=293) is known as one training step and the training loop repeats this training step 
[04:59](https://youtu.be/bRMGoPqsn20&t=299) until you reach the desired accuracy let's say you begin your training with a 
[05:06](https://youtu.be/bRMGoPqsn20&t=306) simple machine under your desk with a multi-core CPU luckily tensorflow 
[05:12](https://youtu.be/bRMGoPqsn20&t=312) handles scaling onto a multi-core CPU for you automatically next you may speed 
[05:19](https://youtu.be/bRMGoPqsn20&t=319) up by a dagger accelerator to your machine such as a GPU or a TPU with 
[05:25](https://youtu.be/bRMGoPqsn20&t=325) distributed training you can go even further you can go from one machine with 
[05:30](https://youtu.be/bRMGoPqsn20&t=330) a single device to one machine with multiple devices and finally to multiple 
[05:36](https://youtu.be/bRMGoPqsn20&t=336) machines with possibly multiple devices each connected over the network with 
[05:43](https://youtu.be/bRMGoPqsn20&t=343) little with a number of techniques eventually it's possible to scale to 
[05:47](https://youtu.be/bRMGoPqsn20&t=347) hundreds of devices and that's indeed what we do in a lot of Google systems by 
[05:53](https://youtu.be/bRMGoPqsn20&t=353) the way in the rest of this talk we'll use the terms device worker or 
[05:57](https://youtu.be/bRMGoPqsn20&t=357) accelerator to refer to processing units such as GPUs or GPUs so how does 
[06:04](https://youtu.be/bRMGoPqsn20&t=364) distributor training work like everything else in software engineering 
[06:08](https://youtu.be/bRMGoPqsn20&t=368) there are a number of ways to go about when you think about distributing your 
[06:12](https://youtu.be/bRMGoPqsn20&t=372) training what approach you pick depends on the size of your model the amount of 
[06:19](https://youtu.be/bRMGoPqsn20&t=379) training data you have and the available devices 
[06:25](https://youtu.be/bRMGoPqsn20&t=385) the most common architecture in distributed training and what is what is 
[06:29](https://youtu.be/bRMGoPqsn20&t=389) known as data parallelism in data parallelism we run the same model and 
[06:35](https://youtu.be/bRMGoPqsn20&t=395) compute on each worker but with a different 
[06:38](https://youtu.be/bRMGoPqsn20&t=398) slice of the input data each device computes the loss and the gradients we 
[06:45](https://youtu.be/bRMGoPqsn20&t=405) use these gradients to update the models parameters and the updated model is then 
[06:50](https://youtu.be/bRMGoPqsn20&t=410) used in the next round of computation there are two common approaches when you 
[06:55](https://youtu.be/bRMGoPqsn20&t=415) think about how do you update the model using these gradients the first approach 
[07:02](https://youtu.be/bRMGoPqsn20&t=422) is what is known as a synchronous parameter server approach in this 
[07:07](https://youtu.be/bRMGoPqsn20&t=427) approach we designate some some devices as parameter servers as shown in blue 
[07:14](https://youtu.be/bRMGoPqsn20&t=434) here these servers hold the parameters of your model others are designated as 
[07:21](https://youtu.be/bRMGoPqsn20&t=441) workers as shown in green here workers do the bulk of the computation each 
[07:28](https://youtu.be/bRMGoPqsn20&t=448) worker fetches the parameters from the parameter server it then confused the 
[07:32](https://youtu.be/bRMGoPqsn20&t=452) last ingredients it sends the gradients back to the parameter server which then 
[07:38](https://youtu.be/bRMGoPqsn20&t=458) updates the models parameters using these gradients each worker does this 
[07:45](https://youtu.be/bRMGoPqsn20&t=465) independently so this allows us to scale this approach to a large number of 
[07:49](https://youtu.be/bRMGoPqsn20&t=469) workers this has worked well for many models in Google where training workers 
[07:55](https://youtu.be/bRMGoPqsn20&t=475) might be preempted by high priority production jobs or where this asymmetry 
[08:01](https://youtu.be/bRMGoPqsn20&t=481) between the different workers or where machines might go down for regular 
[08:05](https://youtu.be/bRMGoPqsn20&t=485) maintenance and all of this doesn't hurt the scaling because the workers are not 
[08:10](https://youtu.be/bRMGoPqsn20&t=490) beating on each other the downside of this approach however is that workers 
[08:16](https://youtu.be/bRMGoPqsn20&t=496) can get out of sync their computing their gradients on steel parameter 
[08:21](https://youtu.be/bRMGoPqsn20&t=501) values and this can delay convergence the second approach is what is known as 
[08:29](https://youtu.be/bRMGoPqsn20&t=509) synchronous all reduce this approach has become more common with the rise of fast 
[08:35](https://youtu.be/bRMGoPqsn20&t=515) accelerators such as keep use or GPUs in this approach each worker has a copy of 
[08:42](https://youtu.be/bRMGoPqsn20&t=522) parameters on its own the no special parameter servers each worker 
[08:48](https://youtu.be/bRMGoPqsn20&t=528) confused the lost ingredients based on a subset of training samples once the 
[08:54](https://youtu.be/bRMGoPqsn20&t=534) gradients are computed the workers communicate among themselves to 
[08:58](https://youtu.be/bRMGoPqsn20&t=538) propagate the gradients and update their model parameters all the workers are 
[09:05](https://youtu.be/bRMGoPqsn20&t=545) synchronized which means that the next round of computation doesn't begin until 
[09:09](https://youtu.be/bRMGoPqsn20&t=549) each worker has received the updated gradients and a barrier that's Mauro 
[09:15](https://youtu.be/bRMGoPqsn20&t=555) when you have fast devices in a controlled environment the variance of 
[09:21](https://youtu.be/bRMGoPqsn20&t=561) step time between the different workers can be small when combined with strong 
[09:26](https://youtu.be/bRMGoPqsn20&t=566) communication links between the different devices overall overhead of 
[09:31](https://youtu.be/bRMGoPqsn20&t=571) synchronization can be small so whenever practical this approach can lead to 
[09:37](https://youtu.be/bRMGoPqsn20&t=577) faster convergence a class of algorithms called all reduce can be used to 
[09:45](https://youtu.be/bRMGoPqsn20&t=585) efficiently combine the gradients across the different workers all reduce 
[09:50](https://youtu.be/bRMGoPqsn20&t=590) aggregates the values from different workers for example by adding them up 
[09:54](https://youtu.be/bRMGoPqsn20&t=594) and then copying them to the different workers it's a fuse algorithm that can 
[10:01](https://youtu.be/bRMGoPqsn20&t=601) be very efficient and it can reduce the overhead of synchronization of gradients 
[10:06](https://youtu.be/bRMGoPqsn20&t=606) by a lot there are many all reduce algorithms 
[10:10](https://youtu.be/bRMGoPqsn20&t=610) available depending on the type of communication available between the 
[10:15](https://youtu.be/bRMGoPqsn20&t=615) different workers one common algorithm is what is known as Ringold reduce in 
[10:21](https://youtu.be/bRMGoPqsn20&t=621) recoil reduce each worker sends his gradients to a successor on the ring and 
[10:27](https://youtu.be/bRMGoPqsn20&t=627) receives gradients from its predecessor there are a few more such rounds of 
[10:32](https://youtu.be/bRMGoPqsn20&t=632) gradient exchanges I won't be going into the details here but at the end of the 
[10:37](https://youtu.be/bRMGoPqsn20&t=637) algorithm each worker has received a copy of the combined gradients ring all 
[10:44](https://youtu.be/bRMGoPqsn20&t=644) reduce uses network bandwidth optimally because it uses both the upload and the 
[10:49](https://youtu.be/bRMGoPqsn20&t=649) download bandwidth at each worker it can also overlap the gradient computation at 
[10:56](https://youtu.be/bRMGoPqsn20&t=656) lower layers in the net with transmission of radiance at the 
[10:59](https://youtu.be/bRMGoPqsn20&t=659) higher layer which means it can further reduce the training time wrinkle reduce 
[11:06](https://youtu.be/bRMGoPqsn20&t=666) is just one approach and some hardware vendors supplies specialized 
[11:10](https://youtu.be/bRMGoPqsn20&t=670) implementations of all reduce for their hardware for example the NVIDIA nickel 
[11:15](https://youtu.be/bRMGoPqsn20&t=675) we have a team in Google working on fast implementations of all reduce for 
[11:20](https://youtu.be/bRMGoPqsn20&t=680) various device topologies the bottom line is that all reduce can be fast when 
[11:26](https://youtu.be/bRMGoPqsn20&t=686) working with multiple devices on a single machine or multiple image or a 
[11:31](https://youtu.be/bRMGoPqsn20&t=691) small number of machines so given these two broad architectures and data 
[11:37](https://youtu.be/bRMGoPqsn20&t=697) parallelism you may be wondering which approach should you pick there isn't one 
[11:42](https://youtu.be/bRMGoPqsn20&t=702) right answer parameter server approach is preferable if you have a large number 
[11:47](https://youtu.be/bRMGoPqsn20&t=707) of not so powerful or not so reliable machines for example if you have a large 
[11:53](https://youtu.be/bRMGoPqsn20&t=713) cluster of machines with just CPUs the synchronous already's approach on the 
[11:58](https://youtu.be/bRMGoPqsn20&t=718) other hand is preferable if you have fast devices with strong communication 
[12:03](https://youtu.be/bRMGoPqsn20&t=723) links such as TP use or multiple GPUs on a single machine parameter server 
[12:10](https://youtu.be/bRMGoPqsn20&t=730) approach has been around for a while and it has been supported well in tensorflow 
[12:14](https://youtu.be/bRMGoPqsn20&t=734) Tipu's on the other hand use already would all reduce approach out of the box 
[12:19](https://youtu.be/bRMGoPqsn20&t=739) in the next section of this talk we'll show you how you can scale your training 
[12:24](https://youtu.be/bRMGoPqsn20&t=744) using the all reduce approach on multiple GPUs with just a few lines of 
[12:29](https://youtu.be/bRMGoPqsn20&t=749) code before I get into that I just want to mention another type of distributed 
[12:37](https://youtu.be/bRMGoPqsn20&t=757) training known as model parallelism that you may have heard of a simple way to 
[12:42](https://youtu.be/bRMGoPqsn20&t=762) think about model parallelism is when your model is so big that it doesn't fit 
[12:47](https://youtu.be/bRMGoPqsn20&t=767) in the memory of one device so you divide the model into smaller parts and 
[12:52](https://youtu.be/bRMGoPqsn20&t=772) you can do those computations on different workers with the same training 
[12:57](https://youtu.be/bRMGoPqsn20&t=777) samples for example you could put different layers of your model on 
[13:02](https://youtu.be/bRMGoPqsn20&t=782) different devices these days however most devices have big enough memory that 
[13:08](https://youtu.be/bRMGoPqsn20&t=788) most models can fit in their memory so in the rest of this talk we'll 
[13:12](https://youtu.be/bRMGoPqsn20&t=792) continue to focus on data parallelism now that you're armed with fundamentals 
[13:20](https://youtu.be/bRMGoPqsn20&t=800) of distributed training architectures let's see how you can do this intensive 
[13:25](https://youtu.be/bRMGoPqsn20&t=805) flow as I already mentioned we're going to focus on scaling to multiple GPUs 
[13:29](https://youtu.be/bRMGoPqsn20&t=809) with the all reduce architecture in order to do so easily I'm pleased to 
[13:37](https://youtu.be/bRMGoPqsn20&t=817) introduce a new distribution strategy API this API allows you to distribute 
[13:43](https://youtu.be/bRMGoPqsn20&t=823) your training intensive flow with very little modification to your code with 
[13:49](https://youtu.be/bRMGoPqsn20&t=829) distribution strategy API you no longer need to place your ops or parameters on 
[13:55](https://youtu.be/bRMGoPqsn20&t=835) specific devices you don't need to worry about structuring your model in a way 
[14:00](https://youtu.be/bRMGoPqsn20&t=840) that the gradients or losses across devices are aggregated correctly 
[14:06](https://youtu.be/bRMGoPqsn20&t=846) distribution does so distributions Riley does that for you 
[14:10](https://youtu.be/bRMGoPqsn20&t=850) it is easy to use and fast to Train now let's look at some code to see how 
[14:16](https://youtu.be/bRMGoPqsn20&t=856) you can do this intense how we can use this API in our example we're going to 
[14:23](https://youtu.be/bRMGoPqsn20&t=863) be using tens of flows high-level API call estimator if you use this API 
[14:28](https://youtu.be/bRMGoPqsn20&t=868) before you might be familiar with the following snippet of code to create a 
[14:33](https://youtu.be/bRMGoPqsn20&t=873) custom estimator it requires three arguments the first one is a function 
[14:40](https://youtu.be/bRMGoPqsn20&t=880) that defines your model so it defines the parameters of your model how you 
[14:45](https://youtu.be/bRMGoPqsn20&t=885) compute the loss and the gradients and how you update the models parameters the 
[14:51](https://youtu.be/bRMGoPqsn20&t=891) second argument is the directory where you want to persist the state of your 
[14:55](https://youtu.be/bRMGoPqsn20&t=895) model and the third argument is a configuration called run config where 
[15:01](https://youtu.be/bRMGoPqsn20&t=901) you can specify things like how often you want to checkpoint how often 
[15:06](https://youtu.be/bRMGoPqsn20&t=906) summaries should be saved and so on in this case we've used the default run 
[15:10](https://youtu.be/bRMGoPqsn20&t=910) config once you create the estimator you can start your training by calling the 
[15:16](https://youtu.be/bRMGoPqsn20&t=916) train method with the input function that provides 
[15:19](https://youtu.be/bRMGoPqsn20&t=919) your training data so given this code to do the training on 
[15:25](https://youtu.be/bRMGoPqsn20&t=925) one device how can you change it to run on multiple GPUs you simply need to add 
[15:32](https://youtu.be/bRMGoPqsn20&t=932) one line of code instantiate something called mirrored strategy and pass it to 
[15:39](https://youtu.be/bRMGoPqsn20&t=939) the run config call that's it that's all the code changes you need to scale this 
[15:44](https://youtu.be/bRMGoPqsn20&t=944) code to multiple GPUs mirrored strategy is the type of distribution strategy api 
[15:50](https://youtu.be/bRMGoPqsn20&t=950) that i just mentioned with this api you don't need to make any changes to your 
[15:55](https://youtu.be/bRMGoPqsn20&t=955) model function or your input function or your training loop you don't even need 
[16:01](https://youtu.be/bRMGoPqsn20&t=961) to specify your devices if you want to run on all available devices it will 
[16:06](https://youtu.be/bRMGoPqsn20&t=966) automatically detect that and run your training on all available GPUs so that's 
[16:11](https://youtu.be/bRMGoPqsn20&t=971) it those are all the code changes you need this API is available in TF contrib 
[16:17](https://youtu.be/bRMGoPqsn20&t=977) and you can use it you can try it out today let me quickly talk about what 
[16:25](https://youtu.be/bRMGoPqsn20&t=985) mayor strategy does mirror strategy implements the synchronous all reduce 
[16:31](https://youtu.be/bRMGoPqsn20&t=991) architecture that we talked about out of the box for you in merge strategy the 
[16:38](https://youtu.be/bRMGoPqsn20&t=998) models parameters are mirrored across the various devices hence the name 
[16:42](https://youtu.be/bRMGoPqsn20&t=1002) mirrored strategy each device computes the loss and gradients based on a subset 
[16:48](https://youtu.be/bRMGoPqsn20&t=1008) of the input data the gradients are then aggregated across the workers using an 
[16:54](https://youtu.be/bRMGoPqsn20&t=1014) all reduce algorithm that is appropriate for your device topology as I already 
[17:02](https://youtu.be/bRMGoPqsn20&t=1022) mentioned with mirrored strategy you don't need to make any changes to your 
[17:06](https://youtu.be/bRMGoPqsn20&t=1026) model or your training loop this is because we've changed underlying 
[17:10](https://youtu.be/bRMGoPqsn20&t=1030) components of tensor flow to be distribution aware for example optimizer 
[17:15](https://youtu.be/bRMGoPqsn20&t=1035) batch norm summaries etcetera you don't need to make any changes to your input 
[17:21](https://youtu.be/bRMGoPqsn20&t=1041) function either as long as you're using the recommended tensor flow data set API 
[17:27](https://youtu.be/bRMGoPqsn20&t=1047) saving and checkpointing works seamlessly 
[17:30](https://youtu.be/bRMGoPqsn20&t=1050) so you can save with one or no distribution strategy and resume with 
[17:35](https://youtu.be/bRMGoPqsn20&t=1055) another and summaries work as expected as well so you can continue to visualize 
[17:41](https://youtu.be/bRMGoPqsn20&t=1061) your training intensive old mere strategy is just one type of 
[17:46](https://youtu.be/bRMGoPqsn20&t=1066) distribution strategy and we're working on a few others for a variety of use 
[17:51](https://youtu.be/bRMGoPqsn20&t=1071) cases I'll now hand it off to Anjali to show you some cool demos and performance 
[17:57](https://youtu.be/bRMGoPqsn20&t=1077) numbers thanks Priya for the great introduction 
[18:07](https://youtu.be/bRMGoPqsn20&t=1087) to Murad strategy before we run the demo let us get familiar with a few 
[18:14](https://youtu.be/bRMGoPqsn20&t=1094) configurations I'm going to be running the resonate 50 model from the tensor 
[18:20](https://youtu.be/bRMGoPqsn20&t=1100) flow model garden ResNet 50 is an emulsification model that has 50 layers 
[18:26](https://youtu.be/bRMGoPqsn20&t=1106) it uses skip connections for efficient gradient flow the tensor flow model 
[18:32](https://youtu.be/bRMGoPqsn20&t=1112) garden is a repo where there are collection of different models they're 
[18:36](https://youtu.be/bRMGoPqsn20&t=1116) written in tensor flow high level ap is so if you are new to tensor flow this is 
[18:41](https://youtu.be/bRMGoPqsn20&t=1121) a great resource to start with I'm going to be using the image net data set is 
[18:46](https://youtu.be/bRMGoPqsn20&t=1126) input to model training the image net data set is a collection of over a 
[18:52](https://youtu.be/bRMGoPqsn20&t=1132) million images that have been categorized into a thousand labels I'm 
[18:57](https://youtu.be/bRMGoPqsn20&t=1137) going to instantiate the n1 standard instance on GCE and attach eight nvidia 
[19:03](https://youtu.be/bRMGoPqsn20&t=1143) tesla v 100's or voltage GPUs let's run the demo now as I mentioned I'm creating 
[19:14](https://youtu.be/bRMGoPqsn20&t=1154) an N 1 standard instance attaching 8 Nvidia Tesla V 100 or voltage GPUs 
[19:22](https://youtu.be/bRMGoPqsn20&t=1162) I also attach SSD disk this contains the image net data set which is input to our 
[19:29](https://youtu.be/bRMGoPqsn20&t=1169) model training to run a tensor flow model we need to install a few drivers 
[19:37](https://youtu.be/bRMGoPqsn20&t=1177) and pet packages and here is a gist with all the commands required 
[19:42](https://youtu.be/bRMGoPqsn20&t=1182) I'm going to make this just public so you can set up an instance yourself and 
[19:47](https://youtu.be/bRMGoPqsn20&t=1187) try running the model let's open an SSH connection to the instance by clicking 
[19:53](https://youtu.be/bRMGoPqsn20&t=1193) on a button here this should bring up a terminal like this 
[19:59](https://youtu.be/bRMGoPqsn20&t=1199) so I've already cloned the garden model repo we're going to be running this 
[20:04](https://youtu.be/bRMGoPqsn20&t=1204) command inside the resonate directory we're going to run the image net main 
[20:12](https://youtu.be/bRMGoPqsn20&t=1212) file so we're using the image net data set a bad-sized of 1024 or 128 per GPU a 
[20:19](https://youtu.be/bRMGoPqsn20&t=1219) model directory is going to point to the GCS bucket that's going to hold our 
[20:24](https://youtu.be/bRMGoPqsn20&t=1224) check points and summaries that we want to save we point our data directory to 
[20:29](https://youtu.be/bRMGoPqsn20&t=1229) the SSD disk well charge the image net data set and the number of GPUs is 8 
[20:35](https://youtu.be/bRMGoPqsn20&t=1235) over which we want to distribute or trade our model so let's run this model 
[20:42](https://youtu.be/bRMGoPqsn20&t=1242) now and as the model is starting to train let's take a look at some of the 
[20:48](https://youtu.be/bRMGoPqsn20&t=1248) code changes that are involved in the interchange the resinate model function 
[20:53](https://youtu.be/bRMGoPqsn20&t=1253) so this is a resonate main function in the garden model repo first we 
[20:59](https://youtu.be/bRMGoPqsn20&t=1259) instantiate the mirrored strategy object then we pass it to the run config as 
[21:05](https://youtu.be/bRMGoPqsn20&t=1265) part of the Train distribute argument we create an estimator object with the run 
[21:12](https://youtu.be/bRMGoPqsn20&t=1272) config and then we call trained on this estimator object and that's it those are 
[21:18](https://youtu.be/bRMGoPqsn20&t=1278) all the code changes you need to distribute the ResNet model let's go 
[21:23](https://youtu.be/bRMGoPqsn20&t=1283) back and see how our training is going so we've run out for a few hundred steps 
[21:30](https://youtu.be/bRMGoPqsn20&t=1290) at the bottom of the screen you should see a few metrics the loss is descri 
[21:35](https://youtu.be/bRMGoPqsn20&t=1295) cing steps per second learning rate let's look at tensor board so this is 
[21:41](https://youtu.be/bRMGoPqsn20&t=1301) from a run where I've run the model for 90,000 steps a little over that so it's 
[21:46](https://youtu.be/bRMGoPqsn20&t=1306) not the run we just started so the orange and red lines are the training 
[21:51](https://youtu.be/bRMGoPqsn20&t=1311) and evaluation losses so as a number of steps increase 
[21:55](https://youtu.be/bRMGoPqsn20&t=1315) see the loss decreasing let's look at evaluation accuracy and this is when 
[22:03](https://youtu.be/bRMGoPqsn20&t=1323) we're training ResNet 50 or 8 GPUs so if we see that around 91 thousand steps we 
[22:10](https://youtu.be/bRMGoPqsn20&t=1330) were able to achieve a 75 percent accuracy let's see what it what this 
[22:17](https://youtu.be/bRMGoPqsn20&t=1337) looks like when we run it on a single GPU so let's toggle the tensor board 
[22:21](https://youtu.be/bRMGoPqsn20&t=1341) buttons on the left and look at the Train and evaluation loss curves when we 
[22:27](https://youtu.be/bRMGoPqsn20&t=1347) train our model on one GPU so the blue lines are one CPU and red are orange and 
[22:31](https://youtu.be/bRMGoPqsn20&t=1351) eight and you can see that the loss doesn't decrease as rapidly as it does 
[22:36](https://youtu.be/bRMGoPqsn20&t=1356) with eight GPUs here are the evaluation accuracy curves were able to achieve a 
[22:42](https://youtu.be/bRMGoPqsn20&t=1362) higher accuracy when we distribute our model across eight CPUs as opposed to 
[22:47](https://youtu.be/bRMGoPqsn20&t=1367) one let's compare using wall time so we've 
[22:51](https://youtu.be/bRMGoPqsn20&t=1371) run the same model for the same amount of time and when we run it over multiple 
[22:57](https://youtu.be/bRMGoPqsn20&t=1377) GPUs we were able to achieve higher accuracy faster or trained our model 
[23:02](https://youtu.be/bRMGoPqsn20&t=1382) faster let's look at a few performance benchmarks on the DG X 1 3 2 X 1 is a 
[23:14](https://youtu.be/bRMGoPqsn20&t=1394) machine on win which on which we run deep learning models 
[23:18](https://youtu.be/bRMGoPqsn20&t=1398) we're running miss mixed precision training with a per GPU batch size of 
[23:23](https://youtu.be/bRMGoPqsn20&t=1403) 256 it also has 8 volta or v 100 GPUs so the graph shows x-axis the number of 
[23:33](https://youtu.be/bRMGoPqsn20&t=1413) GPUs on the x-axis and images per second on the y-axis so as we go from one GPU 
[23:39](https://youtu.be/bRMGoPqsn20&t=1419) to a we are able to achieve a speed-up of 7x and this is performance right out 
[23:47](https://youtu.be/bRMGoPqsn20&t=1427) of the box with no tuning we're actively working on improving performance so that 
[23:53](https://youtu.be/bRMGoPqsn20&t=1433) you are able to achieve more speed up and get more images per second 
[23:57](https://youtu.be/bRMGoPqsn20&t=1437) when you distribute your model across multiple GPUs 
[24:04](https://youtu.be/bRMGoPqsn20&t=1444) so far we've been talking about the core part of model training and distributing 
[24:09](https://youtu.be/bRMGoPqsn20&t=1449) your model using Murat strategy okay so let's say now you have deployed your 
[24:15](https://youtu.be/bRMGoPqsn20&t=1455) model on multiple GPUs you're going to expect to see the same kind of boost in 
[24:21](https://youtu.be/bRMGoPqsn20&t=1461) images per second when you do that but that may you may not be able to view as 
[24:25](https://youtu.be/bRMGoPqsn20&t=1465) many images per second as compared to one CPU you may not see the boost and 
[24:30](https://youtu.be/bRMGoPqsn20&t=1470) performance and the reason for that is often the input pipeline when you run 
[24:39](https://youtu.be/bRMGoPqsn20&t=1479) your model on a single GPU the input pipeline is pre processing the data and 
[24:44](https://youtu.be/bRMGoPqsn20&t=1484) making the data available on the GPU for training but GPUs or TP use as you know 
[24:50](https://youtu.be/bRMGoPqsn20&t=1490) process and compute data much faster than a CPU this means that when you 
[24:56](https://youtu.be/bRMGoPqsn20&t=1496) distribute your model across multiple GPUs the input pipeline is also not able 
[25:02](https://youtu.be/bRMGoPqsn20&t=1502) to keep up with the training it quickly becomes a bottleneck for the rest of the 
[25:09](https://youtu.be/bRMGoPqsn20&t=1509) talk I'm going to show you how tensorflow makes it easy for you to use 
[25:14](https://youtu.be/bRMGoPqsn20&t=1514) TF the data API is to build efficient and performant input pipelines here's a 
[25:25](https://youtu.be/bRMGoPqsn20&t=1525) simple input pipeline for ResNet 50 we're going to use TF da-ta-da api's 
[25:32](https://youtu.be/bRMGoPqsn20&t=1532) because data sets are awesome they helped us build complex pipeline using 
[25:37](https://youtu.be/bRMGoPqsn20&t=1537) simple reusable pieces when you have lots of data and different data formats 
[25:43](https://youtu.be/bRMGoPqsn20&t=1543) and you want to perform complex transformations on this data you want to 
[25:47](https://youtu.be/bRMGoPqsn20&t=1547) be using T of data API is to build your input pipeline first we are going to use 
[25:54](https://youtu.be/bRMGoPqsn20&t=1554) the list files API to get the list of input files that contain your image and 
[26:00](https://youtu.be/bRMGoPqsn20&t=1560) labels then we are going to read these files using the TF record data set 
[26:05](https://youtu.be/bRMGoPqsn20&t=1565) reader we're going to shuffle the records repeat them a few times 
[26:12](https://youtu.be/bRMGoPqsn20&t=1572) depending on if you want to run your model for a couple of epochs and finally 
[26:17](https://youtu.be/bRMGoPqsn20&t=1577) apply your map permission so this processes each record 
[26:22](https://youtu.be/bRMGoPqsn20&t=1582) and applies a transformation such as cropping flipping image decoding and 
[26:27](https://youtu.be/bRMGoPqsn20&t=1587) finally batch the input and finally batch the input into a batch size that 
[26:34](https://youtu.be/bRMGoPqsn20&t=1594) you desire the input pipeline can be thought of as an ETL process which is 
[26:44](https://youtu.be/bRMGoPqsn20&t=1604) extract transform and load process in the extract phase we are reading from 
[26:52](https://youtu.be/bRMGoPqsn20&t=1612) persistent storage which can be local or remote in the transform phase we are 
[26:59](https://youtu.be/bRMGoPqsn20&t=1619) applying the different transformations like shuffled repeat map and batch and 
[27:05](https://youtu.be/bRMGoPqsn20&t=1625) finally in the load phase we are providing this processed data to the 
[27:10](https://youtu.be/bRMGoPqsn20&t=1630) accelerator for training so how does this apply to the example that we just 
[27:15](https://youtu.be/bRMGoPqsn20&t=1635) saw in the extract phase we list the files and read it using the TF record 
[27:25](https://youtu.be/bRMGoPqsn20&t=1645) data set reader in the transform phase we apply the shuffle repeat map and 
[27:32](https://youtu.be/bRMGoPqsn20&t=1652) batch transformations and finally in the load phase we tell sensor flow how to 
[27:37](https://youtu.be/bRMGoPqsn20&t=1657) grab the data from the data set this is what our input pipeline looks like we 
[27:47](https://youtu.be/bRMGoPqsn20&t=1667) have the extract transform and load phases happening sequentially followed 
[27:52](https://youtu.be/bRMGoPqsn20&t=1672) by the training on the accelerator this means whether when the CPU is busy 
[27:57](https://youtu.be/bRMGoPqsn20&t=1677) pre-processing the data the accelerator is idle and where the accelerator is 
[28:03](https://youtu.be/bRMGoPqsn20&t=1683) training your model the CPU is idle but the different phases of the ETL process 
[28:10](https://youtu.be/bRMGoPqsn20&t=1690) use different hardware resources for example the extract step uses the 
[28:16](https://youtu.be/bRMGoPqsn20&t=1696) persistent storage the transform step uses a different course of the CPU and 
[28:21](https://youtu.be/bRMGoPqsn20&t=1701) finally the training happens on the accelerator so if we can paralyze these 
[28:28](https://youtu.be/bRMGoPqsn20&t=1708) different phases then we can overlap the pre 
[28:31](https://youtu.be/bRMGoPqsn20&t=1711) processing of data on the CPU with training of the model on the GPU this is 
[28:38](https://youtu.be/bRMGoPqsn20&t=1718) called pipelining so we can use pipelining and some parallelization 
[28:44](https://youtu.be/bRMGoPqsn20&t=1724) techniques to build more efficient import pipelines let us look at few of 
[28:50](https://youtu.be/bRMGoPqsn20&t=1730) these techniques first you can parallelize file reading 
[28:57](https://youtu.be/bRMGoPqsn20&t=1737) let's say you have a lot of data that sharded a car across a cloud storage 
[29:02](https://youtu.be/bRMGoPqsn20&t=1742) service you want read multiple files and parallel and you can do this using the 
[29:09](https://youtu.be/bRMGoPqsn20&t=1749) non parallel reads call as when you instantiate the Tierra when you call a 
[29:14](https://youtu.be/bRMGoPqsn20&t=1754) TF record data set API this allows you to increase your effective throughput we 
[29:24](https://youtu.be/bRMGoPqsn20&t=1764) can also paralyze map function for transformations you can data paralyze 
[29:30](https://youtu.be/bRMGoPqsn20&t=1770) the different transformation for of the map function by using the numpad L calls 
[29:37](https://youtu.be/bRMGoPqsn20&t=1777) argument typically the num the argument we provide is a number of cores of the 
[29:45](https://youtu.be/bRMGoPqsn20&t=1785) CPU and finally you want to call prefetch at the end of your input 
[29:55](https://youtu.be/bRMGoPqsn20&t=1795) pipeline prefetch decouples the time the data is produced from the time it is 
[30:01](https://youtu.be/bRMGoPqsn20&t=1801) consumed this means that you can buffer data for the next training step while 
[30:06](https://youtu.be/bRMGoPqsn20&t=1806) the accelerator is still training the current step this is what we had before 
[30:16](https://youtu.be/bRMGoPqsn20&t=1816) and this is what we can get an improvement on here the different phases 
[30:23](https://youtu.be/bRMGoPqsn20&t=1823) of the input pipeline are happening in parallel were training we are able to 
[30:29](https://youtu.be/bRMGoPqsn20&t=1829) see that the CPU is pre processing data for the training step 2 
[30:33](https://youtu.be/bRMGoPqsn20&t=1833) while the accelerator is still training step 1 neither the CPU now the 
[30:39](https://youtu.be/bRMGoPqsn20&t=1839) accelerator is idle for long periods of time the training time is now a maximum 
[30:45](https://youtu.be/bRMGoPqsn20&t=1845) of pre processing and training on the accelerator as you can see the 
[30:52](https://youtu.be/bRMGoPqsn20&t=1852) accelerator is still or not 100% utilized there are few advanced 
[30:57](https://youtu.be/bRMGoPqsn20&t=1857) techniques that we can add to our input pipeline to improve this we can use fuse 
[31:07](https://youtu.be/bRMGoPqsn20&t=1867) transformation ops of some of these API calls shuffle and 
[31:13](https://youtu.be/bRMGoPqsn20&t=1873) repeat for example can be replaced by its equivalent fused up 
[31:19](https://youtu.be/bRMGoPqsn20&t=1879) so this paralyzes buffering elements for epoch n plus 1 while producing elements 
[31:26](https://youtu.be/bRMGoPqsn20&t=1886) for epoch n we can also replace map and batch with its equivalent fused up this 
[31:37](https://youtu.be/bRMGoPqsn20&t=1897) paralyzes paralyzes the map transformation with adding the input 
[31:43](https://youtu.be/bRMGoPqsn20&t=1903) tensors to batch with these techniques we are able to process data much faster 
[31:52](https://youtu.be/bRMGoPqsn20&t=1912) and make it available to the accelerator for training and improve the training 
[31:58](https://youtu.be/bRMGoPqsn20&t=1918) speed I hope this gives you a good idea of how 
[32:07](https://youtu.be/bRMGoPqsn20&t=1927) you can use TF data API is to build efficient and performant input pipelines 
[32:13](https://youtu.be/bRMGoPqsn20&t=1933) when you train your model so far we've been talking about training on a single 
[32:22](https://youtu.be/bRMGoPqsn20&t=1942) machine and multiple devices but what if you wanted to train on multiple machines 
[32:26](https://youtu.be/bRMGoPqsn20&t=1946) you can use as the estimators train and evaluate API train and evaluate API uses 
[32:34](https://youtu.be/bRMGoPqsn20&t=1954) the acing parameter server approach this API is used widely within Google and it 
[32:43](https://youtu.be/bRMGoPqsn20&t=1963) scales well to a large number of machines here's a link to the API where 
[32:50](https://youtu.be/bRMGoPqsn20&t=1970) you can learn more on how to use it we're also excited to be working on a 
[33:01](https://youtu.be/bRMGoPqsn20&t=1981) number of new distribution strategies we're working on a multi machine Mirage 
[33:07](https://youtu.be/bRMGoPqsn20&t=1987) strategy which allows you to distribute your module across many machines with 
[33:11](https://youtu.be/bRMGoPqsn20&t=1991) many devices we're also working on adding distribution strategy support to 
[33:18](https://youtu.be/bRMGoPqsn20&t=1998) TP use and directly in TF dot chaos in this talk we've talked a lot about the 
[33:27](https://youtu.be/bRMGoPqsn20&t=2007) different concepts related to distributor training architectures in 
[33:30](https://youtu.be/bRMGoPqsn20&t=2010) API but when you go home today here are three things for you to keep in mind 
[33:36](https://youtu.be/bRMGoPqsn20&t=2016) when you train your model distribute your training to make it faster to do 
[33:46](https://youtu.be/bRMGoPqsn20&t=2026) this you want to use distribution strategy api's they're easy to use and 
[33:53](https://youtu.be/bRMGoPqsn20&t=2033) they're fast input pipeline performance is important 
[34:00](https://youtu.be/bRMGoPqsn20&t=2040) use TF data api is to build efficient input pipelines here are a few tenths of 
[34:10](https://youtu.be/bRMGoPqsn20&t=2050) flow resources first we have the distribution strategy API you can try 
[34:18](https://youtu.be/bRMGoPqsn20&t=2058) using mirrored strategy to train your model across multiple GPUs here's a link 
[34:27](https://youtu.be/bRMGoPqsn20&t=2067) to the resonate 50 model garden example so you can try running this example it 
[34:32](https://youtu.be/bRMGoPqsn20&t=2072) has mirrored strategy API support enabled here's a link also to the input 
[34:39](https://youtu.be/bRMGoPqsn20&t=2079) pipeline performance guide which has more techniques that you can use to 
[34:44](https://youtu.be/bRMGoPqsn20&t=2084) build efficient input pipelines and here's the link to the gist that I 
[34:52](https://youtu.be/bRMGoPqsn20&t=2092) mentioned in the demo you can try setting up your own instance on running 
[34:57](https://youtu.be/bRMGoPqsn20&t=2097) the resonate 50 model garden example thank you for attending our talk and we 
[35:02](https://youtu.be/bRMGoPqsn20&t=2102) hope you had a great IO [Music] 