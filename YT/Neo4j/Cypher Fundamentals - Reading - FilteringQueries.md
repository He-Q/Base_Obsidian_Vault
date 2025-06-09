---
title: Cypher Fundamentals - Reading - FilteringQueries
date_now: 2024-03-11
url: https://youtu.be/ZBbH5p-5Gt8
aliases:
  - Cypher Fundamentals - Reading - FilteringQueries
channel: Neo4j
published: 2021-08-10T07:34:12-07:00
thumbnail: https://img.youtube.com/vi/ZBbH5p-5Gt8/maxresdefault.jpg
keywords:
  - neo4j
  - graph databases
  - graphs
  - nosql
duration: 3m 43s
watching_IN_progress: true
watched_completely: true
notes_taken: true
---


# Cypher Fundamentals - Reading - FilteringQueries



![thumbnail | 250](https://img.youtube.com/vi/ZBbH5p-5Gt8/maxresdefault.jpg)



```
Learn some of the ways you can filter the data that you retrieve from the graph.

NOTE: The code used in this video is here:

https://raw.githubusercontent.com/neo-technology/graphacademy-youtube/main/courses/cypher-fundamentals/1-06-code.txt
```




https://youtu.be/ZBbH5p-5Gt8



```timestamp-url 
 https://youtu.be/ZBbH5p-5Gt8
 ```

```timestamp 
 00:37
 ```

![[Pasted image 20240311171224.png]]

Here is example where we return the names of the actors
who acted in the movie, The Matrix
```timestamp 
 00:39
 ```

![[Pasted image 20240311171331.png]]

```timestamp 
 01:04
 ```

![[Pasted image 20240311171439.png]]

```timestamp 
 01:12
 ```

Another common test is whether a property exists, 
	- Nodes with the same labels do not have to have all the same properties

![[Pasted image 20240311171741.png]]


```timestamp 
 01:40
 ```

![[Pasted image 20240311171948.png]]

```timestamp 
 01:45
 ```

Query filtering by partial string matches
	- In Cypher, you can use the starts with, ends with or contains keywords to test partial strings for a property

![[Pasted image 20240311172252.png]]

result 

![[Pasted image 20240311172316.png]]

```timestamp 
 02:23
 ```

toLower Case

![[Pasted image 20240311172906.png]]

and result

![[Pasted image 20240311172936.png]]

```timestamp 
 02:45
 ```

![[Pasted image 20240311173021.png]]

and result
![[Pasted image 20240311173050.png]]


```timestamp 
 02:56
 ```

![[Pasted image 20240311173116.png]]

and result is 
![[Pasted image 20240311173136.png]]

```timestamp 
 03:11
 ```

![[Pasted image 20240311173311.png]]
result is 

![[Pasted image 20240311173346.png]]


