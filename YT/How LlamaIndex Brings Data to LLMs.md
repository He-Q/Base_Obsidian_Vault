---
title: How LlamaIndex Brings Data to LLMs
url: https://youtu.be/FQBou-YgxyE
aliases:
  - How LlamaIndex Brings Data to LLMs
channel: Arize AI
published: 2023-04-26T12:00:07-07:00
thumbnail: https://img.youtube.com/vi/FQBou-YgxyE/maxresdefault.jpg
keywords:
  - video
  - sharing
  - camera phone
  - video phone
  - free
  - upload
duration: 27m 9s
watched_completely: false
notes_taken: false
watching_In_progress: true
---


# How LlamaIndex Brings Data to LLMs



![thumbnail | 250](https://img.youtube.com/vi/FQBou-YgxyE/maxresdefault.jpg)



```
Jerry Liu is Co-Founder of LlamaIndex. 

This talk was originally delivered at Arize:Observe 2023, a conference on the intersection of large language models, generative AI, and machine learning observability in the era of LLMops. 

Get updates from Arize on future events: https://arize.com/community/
Get certified in ML observability: https://courses.arize.com
```




https://youtu.be/FQBou-YgxyE



```timestamp-url 
 https://youtu.be/FQBou-YgxyE
 ```






```timestamp 
 07:00
 ```
![[Pasted image 20231201174010.png]]



- How to define relationships between nodes and have a way of organizing this information such that regardless of the task that you want to solve for instance question answering, summarization, planning you are able to retrieve the information and so going hand in hand with data indexes is the query interface where given the fact that you have a set of data structures over your data, \
- How do you actually feed in some sort of input prompt and get back both the response that is knowledge augmented as well as the retrieve documents themselves 
- 

```timestamp 
 09:26
 ```

LlamaIndex don;t replace your existing data stores or your vector DBS or your structure DB's

we orchestrate the transfer of the information within 
your data source and structure and index it in a way such that it;s really really easy to use with you language models

```timestamp 
 12:06
 ```

![[Pasted image 20231201175839.png]]

```timestamp 
 13:10
 ```

Vector store Index

![[Pasted image 20231201175953.png]]


ingest data from data resources such as PPT, PDF's, images

we would split the data into chunks and then stores each chunk as a node 

and that each node would be associated with an embedding with that node

Embedding could be generated from OpenAI's API or

could be generated with another embedding model as well 


but overall idea is that generated a embedding that is associated with a node and store this in a vector database

```timestamp 
 14:24
 ```

And During Query time, what we would do is that 

![[Pasted image 20231201180738.png]]



You Would retrieve the most similar nodes representing your contacts from this vector store


so now you retrieved relevant nodes and then along with query you would feed it to a response synthesis module to you back the final answer





```timestamp 
 15:22
 ```

List INdex

![[Pasted image 20231201181155.png]]

after ingest of the data from data sources and during query time, instead of doing top K retrieval over your nodes by embedding similarity   

we would just put all the nodes and retrieve all the nodes in the list index and put in the response synthesis module 

```timestamp 
 16:06
 ```

""" where you want all context not the specific one, hence a bit more expensive  

this approach is good for the summarization the entire the document  

```timestamp 
 16:35
 ```

![[Pasted image 20231201182057.png]]


```timestamp 
 17:21
 ```

![[Pasted image 20231201182141.png]]


```timestamp 
 17:46
 ```

![[Pasted image 20231201182207.png]]



Defining the structure over our data include composing a graph of index structure 


- Idea here is that you can compose indexes on top of other indexes 
- 
- for instance let's say you have index corresponding to a document  or 100 document , you could compose higher order index on top of document themselves and each document themselves could have index corresponding to that document


```timestamp 
 18:44
 ```

Query Call

![[Pasted image 20231201182746.png]]

![[Pasted image 20231201182806.png]]

```timestamp 
 19:20
 ```


![[Pasted image 20231201182834.png]]


```timestamp 
 20:15
 ```

![[Pasted image 20231201182934.png]]


```timestamp 
 21:12
 ```

![[Pasted image 20231201183026.png]]


```timestamp 
 21:57
 ```

![[Pasted image 20231201183117.png]]


```timestamp 
 23:04
 ```

![[Pasted image 20231201183223.png]]


```timestamp 
 23:37
 ```

![[Pasted image 20231201183317.png]]


```timestamp 
 24:20
 ```

![[Pasted image 20231201183412.png]]

on data sources 


```timestamp 
 24:41
 ```

![[Pasted image 20231201183430.png]]



```timestamp 
 25:57
 ```

Demo

![[Pasted image 20231201183548.png]]


```timestamp 
 26:40
 ```


![[Pasted image 20231201183631.png]]


