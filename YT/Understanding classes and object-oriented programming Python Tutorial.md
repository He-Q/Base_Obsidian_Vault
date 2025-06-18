---
title: Understanding classes and object-oriented programming [Python Tutorial]
url: https://youtu.be/_vr5faCXFo8
aliases:
  - Understanding classes and object-oriented programming [Python Tutorial]
channel: Clear Code
published: 2022-04-30T01:47:19-07:00
thumbnail: https://img.youtube.com/vi/_vr5faCXFo8/maxresdefault.jpg
keywords:
  - video
  - sharing
  - camera phone
  - video phone
  - free
  - upload
duration: 126m 46s
watched_completely: true
notes_taken: true
watching_In_progress: false
---
********


# Understanding classes and object-oriented programming [Python Tutorial]



![thumbnail | 250](https://img.youtube.com/vi/_vr5faCXFo8/maxresdefault.jpg)



```
A tutorial about classes and object-oriented programming. I will cover everything you need to create classes, use dunder methods, simple and complex inheritance and how to work with classes and connect objects. 

If you want to support me: https://www.patreon.com/clearcode 
(You also get lots of perks)

Social stuff:
Twitter - https://twitter.com/clear_coder
Discord - https://discord.com/invite/a5C6pYw2w5 

Timestamps:
0:00:00 - Intro
0:16:23 - Class Intro
0:29:00 - Dunder methods
0:45:16 - Class Deep dive
0:58:44 - Classes and scope
1:13:22 - Simple inheritance
1:35:54 - Complex inheritance
1:55:53 - Extra parts

Github:
https://github.com/clear-code-projects/Classes

Pastebin:
intro - https://pastebin.com/uwRrP25a
dunder - https://pastebin.com/WahhZzcw
deep dive - https://pastebin.com/PAU47WdC
scope - https://pastebin.com/k240AUHB
simple inheritance - https://pastebin.com/HmJx37vj
complex inheritance - https://pastebin.com/4HHpmUke
extra - https://pastebin.com/jxiUFZ5K
```




https://youtu.be/_vr5faCXFo8



```timestamp-url 
 https://youtu.be/_vr5faCXFo8
 ```


```timestamp 
 01:48
 ```

What is an Object ??
and 
what is function vs method ??

![[Pasted image 20231201003629.png]]


```timestamp 
 09:22
 ```

what is class ???

![[Pasted image 20231201003752.png]]

Important Note:

From a function's perspective:

A parameter is the variable listed inside the parentheses in the function definition.

An argument is the value that are sent to the function when it is called.


![[Pasted image 20231130201133.png]]

### Class Started:

```timestamp 
 16:23
 ```

By CONVENSION:
	- class name given by CamelCase
	- Variable name is given by snakecase


but name as you want small case monster is also fine as class name


```timestamp 
 19:52
 ```

```python
class Monster:
	health = 90
	energy = 40

monster = Monster()
print(monster.health)
```


![[Pasted image 20240217185623.png]]
```timestamp 
 19:60
 ```

```python
class Monster:
	# attributes
	health = 90
	energy = 40
		
monster = Monster()
print(monster.health) 
print(monster.energy)

```

```timestamp 
 21:34
 ```

```python
class Monster:
	# attributes
	health = 90
	energy = 40

	def attack():
		print("Monster has attacked!")
		
monster = Monster()
monster.attack()

```

*Got Error here*

```timestamp 
 21:38
 ```

```python
class Monster:
	# attributes
	health = 90
	energy = 40

	def attack():
		print("Monster has attacked!")
		
monster = Monster()
monster.attack()
```

```timestamp 
 22:10
 ```

![[Pasted image 20240217191018.png]]

^^^
python automatically passes a reference to the class as the first argument into this method
and this first argument we always have to capture with some kind of parameter
	meaning a method always needs at very least one parameter

```python
class Monster:
	# attributes
	health = 90
	energy = 40

	def attack(monster):
		print("Monster has attacked!")
		print(monster)
		
monster = Monster()
monster.attack()
```





```timestamp 
 22:37
 ```

![[Pasted image 20231130230507.png]]

```timestamp 
 23:44
 ```

![[Pasted image 20231130230857.png]]

```timestamp 
 23:49
 ```
Any kind of the method you always need a reference to the actual class as first parameter  




```timestamp 
 27:12
 ```
![[Pasted image 20231130231823.png]]

```timestamp 
 29:04
 ```
### __Dunder__ methods

![[Pasted image 20231130232154.png]]


How to change values of health and energy or to give dynamic value to them, we need "__init__" method 


![[Pasted image 20231130232801.png]]

![[Pasted image 20231130233150.png]]
 

```timestamp 
 33:45
 ```
since the self in the __init__ method reference to the class itself we create custom attribute in here,
we can now remove the static health and energy attribute

![[Pasted image 20231130234222.png]]

```timestamp 
 36:010
 ```
![[Pasted image 20231130234903.png]]

# Experiment

with __repr__ and str dunder menthod

![[Pasted image 20231201000751.png]]
```timestamp 
 37:23
 ```

![[Pasted image 20231201001022.png]]

dir() returns all dunter method

```timestamp 
 38:58
 ```

![[Pasted image 20231201001227.png]]

__dict__ return dictionary  
and similarly vars function and o/p is same

![[Pasted image 20231201001455.png]]



```timestamp 
 40:57
 ```

![[Pasted image 20231201002028.png]]

```timestamp 
 41:53
 ```
__add__ dunder method added

![[Pasted image 20231201002707.png]]


```timestamp 
 44:58
 ```

### Python and Classes

![[Pasted image 20231201004022.png]]

```timestamp 
 46:19
 ```
![[Pasted image 20231201004912.png]]

![[Pasted image 20231201005046.png]]


```timestamp 
 50:40
 ```

Passing function or methods into other objects

```timestamp 
 51:49
 ```

don't add brackets because we don't want to call this function, we want to get the function itself
	- object of the function not what being return


![[Pasted image 20231201011159.png]]

add function which is outside of the class and object of that add function, we can pass that object to class test object 

![[Pasted image 20231201011604.png]]

![[Pasted image 20231201011355.png]]

```timestamp 
 53:09
 ```
### Exercise (I)

![[Pasted image 20231202023646.png]]

![[Pasted image 20231202023659.png]]

monster = Monster(function=Attack.bite) is returning a class not a object 

so, to have object, we need to call attack() with 
"()" and then we have object of class Attack()

and result as follows

![[Pasted image 20231202203022.png]]



```python
class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy


monster = Monster(10, 20)
print(monster.energy)
```

```timestamp 
 01:03:010
 ```

```python

def updated_energy(amount):
	monster.health += amount
	


class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy


monster = Monster(10, 20)
print(monster.health)
updated_energy(20)
print(monster.health)
```


					 ||
					 ||
					 \/

```timestamp 
 01:04:54
 ```

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		
	def updated_energy(self, amount):
		self.energy += amount



monster = Monster(30, 20)
print(monster.energy)
monster.updated_energy(40)
print(monster.energy)
```

```timestamp 
 01:05:39
 ```

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = self.set_energy(energy)
		
	def updated_energy(self, amount):
		self.energy += amount

	def set_energy(self, energy):
		new_energy = energy * 3
		return new_energy
		
	
monster = Monster(30, 20)
print(monster.energy)

```

![[Pasted image 20240215213152.png]]
a better way to do it

					 ||
					 ||
					 \/



```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.set_energy(energy)
		
	def updated_energy(self, amount):
		self.energy += amount

	def set_energy(self, energy):
		new_energy = energy * 4
		self.energy = new_energy
		
	
monster = Monster(30, 20)
print(monster.energy)

```


```timestamp 
 01:07:52
 ```

### Exercise (I)

![[Pasted image 20240215224501.png]]


```timestamp 
 01:09:24
 ```

```timestamp 
 01:11:03
 ```

![[Pasted image 20240217184329.png]]

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy

	def get_damage(self,amount):
		self.health -= amount

class Hero:
	def __init__(self, damage, monster):
		self.damage = damage
		self.monster = monster

	def attack(self):
		self.monster.get_damage(self.damage)


monster = Monster(50, 30)
hero = Hero(damage = 20, monster = monster)
print(monster.health)
hero.attack()
print(monster.health)	

```

# Inheritance
```timestamp 
 01:13:19
 ```

![[Pasted image 20240217191804.png]]


```timestamp 
 01:15:14
 ```
![[Pasted image 20240217204158.png]]

```timestamp 
 01:16:50
 ```

![[Pasted image 20240217204411.png]]

```timestamp 
 01:17:41
 ```
![[Pasted image 20240217204519.png]]

```timestamp 
 01:18:22
 ```

< class class_name(parent_class_name): >
for ex.:
		class Shark(Monster):

without __init__ method Inheritance 


```python

class Monster:
	health = 80
	energy = 100
	
	# def __init__(self, health, energy):
	# 	self.health = health
	#	self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster): #important step
	def __init__(self, speed):
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	

shark = Shark(speed = 100)
print(shark.health)
print(shark.energy)

shark.bite()
shark.move(20)

shark.attack(amount = 20)
```


```timestamp 
 01:22:37
 ```

Overwrite example

```python

class Monster:
	health = 80
	energy = 100
	
	# def __init__(self, health, energy):
	# 	self.health = health
	#	self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster):
	def __init__(self, speed):
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	def move(self):
		print("the shark has moved")
		print(f"the speed of the shark is {self.speed}")

shark = Shark(speed = 100)
print(shark.health)
print(shark.energy)

shark.bite()
# shark.move(20)
shark.move()
shark.attack(amount = 20)
```

explanation 

![[Pasted image 20240217220834.png]]

```timestamp 
 01:22:44
 ```
Let's talk about attribute 
now with __init__ method 

```python
class Monster:
	# health = 80
	# energy = 100
	
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster):
	def __init__(self, speed):
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	def move(self):
		print("the shark has moved")
		print(f"the speed of the shark is {self.speed}")

shark = Shark(speed = 100)
print(shark.health)
print(shark.energy)

shark.bite()
# shark.move(20)
shark.move()
shark.attack(amount = 20)
```


```timestamp 
 01:23:21
 ```

![[Pasted image 20240217222405.png]]
```timestamp 
 01:23:38
 ```

the old way

```python
class Monster:
	# health = 80
	# energy = 100
	
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster):
	def __init__(self, speed, health, energy):
		Monster.__init__(self, health, energy)
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	def move(self):
		print("the shark has moved")
		print(f"the speed of the shark is {self.speed}")

shark = Shark(speed = 100, health= 80, energy = 60)

print(shark.speed)
print(shark.health)
print(shark.energy)

shark.move()
shark.bite()



```

explanation 

```timestamp 
 01:27:010
 ```

![[Pasted image 20240217231629.png]]

```timestamp 
 01:27:14
 ```
![[Pasted image 20240217231644.png]]

Now, new way doing inheritance

```python
class Monster:
	# health = 80
	# energy = 100
	
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster):
	def __init__(self, speed, health, energy):
		# Monster.__init__(self, health, energy)
		super().__init__(health, energy) # ADDED
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	def move(self):
		print("the shark has moved")
		print(f"the speed of the shark is {self.speed}")

shark = Shark(speed = 100, health= 80, energy = 60)

print(shark.speed)
print(shark.health)
print(shark.energy)

shark.move()
# shark.move(23)
shark.bite()


```

Now, in parent class you have same method name   as in child class 

following is code 
![[Pasted image 20240217232344.png]]

and after creating child class object and calling it

![[Pasted image 20240217232434.png]]

it worked as intended, but now you want to access the parent move method you can't 

![[Pasted image 20240217232611.png]]


it will throw an error but with super().move(10) you can access that method.
Code :

```python
class Monster:
	# health = 80
	# energy = 100
	
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
	
	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Shark(Monster):
	def __init__(self, speed, health, energy):
		# Monster.__init__(self, health, energy)
		super().__init__(health, energy) # ADDED
		super().move(10)
		self.speed = speed

	def bite(self):
		print("The shark has bitten")

	def move(self):
		print("the shark has moved")
		print(f"the speed of the shark is {self.speed}")

shark = Shark(speed = 100, health= 80, energy = 60)

print(shark.speed)
print(shark.health)
print(shark.energy)

shark.move()
shark.bite()

```

### Exercise (I):

![[Pasted image 20240217233016.png]]
Simple inheritance

```timestamp 
 01:36:02
 ```

image from ahead
![[Pasted image 20240218000225.png]]

```python


# First monster class

class Monster:
	def __init__(self, health, energy):
		self.health  =  health
		self.energy  =  energy


	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")


	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")


class Scorpion(Monster):

	def __init__(self,poison_damage,scorpion_health, scorpion_energy):
		self.poison_damage = poison_damage
		super().__init__(health = scorpion_health , energy = scorpion_energy)
			

	def attack(self):
		print('The Scropion has attacked')
		print(f'It has dealt {self.poison_damage} poison damage')
		

scorpion = Scorpion(poison_damage = 30, scorpion_health = 40, scorpion_energy = 50) 
scorpion.attack()
scorpion.move(6)



print(scorpion.health)
print(scorpion.energy)


```


```timestamp 
 01:35:54
 ```

Complex Inheritance

![[Pasted image 20240218000204.png]]


1. 
![[Pasted image 20240218000252.png]]

2.
![[Pasted image 20240218000320.png]]


Let's talk about 1 image

1.
![[Pasted image 20240218000252.png]]


```timestamp 
 01:37:19
 ```

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales

	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")
		
```

```timestamp 
 01:37:53
 ```

creating a child class named as shark as image 1 says to access two parent classes

Code:

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales

	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength):
		self.bite_strength = bite_strength
		# super.__init__(???)  # <----  which parent class # will go here first that find out print (shark.mro)


print(Shark.mro())
		
```

Here mro: means method resolution order
and to find out the order call mro() method on class not on object of the child class

![[Pasted image 20240218004152.png]]

for ex:
``` python
	print(Shark.mro())
```

by the result of MRO, we have Monster and then Fish to go 

```timestamp 
 01:41:50
 ```


```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales

	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength, health, energy):
		self.bite_strength = bite_strength
		super().__init__(health, energy)  


# print(Shark.mro())
shark = Shark(bite_strength = 90, health = 80, energy = 60)		
```

```timestamp 
 01:43:43
 ```

![[Pasted image 20240218004610.png]]

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales

	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength, health, energy):
		self.bite_strength = bite_strength
		super().__init__(health, energy)  # Only for Monster class


# print(Shark.mro())
shark = Shark(bite_strength = 90, health = 80, energy = 60)	
print(shark.energy)
shark.attack(20)
```

Now how to call fish class
```timestamp 
 01:45:56
 ```

put super() in monster class to look for fish class
```timestamp 
 01:46:37
 ```

![[Pasted image 20240218005308.png]]


Now class fish from monster in code

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		super().__init__(speed = 50, has_scales = False)

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales

	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength, health, energy):
		self.bite_strength = bite_strength
		super().__init__(health, energy)  # Only for Monster class


# print(Shark.mro())
shark = Shark(bite_strength = 90, health = 80, energy = 60)	
print(shark.energy)
shark.attack(20)

print(shark.has_scales)

```

```timestamp 
 01:47:47
 ```

![[Pasted image 20240218005941.png]]

![[PXL_20240217_193833535.jpg]]

```timestamp 
 01:48:27
 ```


add init in fish class bcoz if it;s another item in the list of inheritance or in the mro, we would also call that one


code 

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		super().__init__(speed = 50, has_scales = False)

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales):
		self.speed = speed
		self.has_scales = has_scales
		super().__init__()
		
	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength, health, energy):
		self.bite_strength = bite_strength
		super().__init__(health, energy)  # Only for Monster class


# print(Shark.mro())
shark = Shark(bite_strength = 90, health = 80, energy = 60)	
print(shark.energy)
shark.attack(20)

print(shark.has_scales)
```

Now, how to dynamically update the fish's attribute when creating shark meaning at the time crating a object shark from Shark class

code

```timestamp 
 01:51:24
 ```


```python

class Monster:
	def __init__(self, health, energy, **kwargs):
		self.health = health
		self.energy = energy
		super().__init__(**kwargs)
		print(kwargs)

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"It has a speed of {speed}")

class Fish:
	def __init__(self, speed, has_scales, **kwargs):
		self.speed = speed
		self.has_scales = has_scales
		super().__init__(**kwargs)
		
	def swin(self):
		print(f"The fish is swimming at a speed of {self.speed}")

class Shark(Monster, Fish):
	def __init__(self, bite_strength, health, energy,speed, has_scales):
		self.bite_strength = bite_strength
		super().__init__(health = health, energy = energy ,speed = speed , has_scales = has_scales)  # Only for Monster class


# print(Shark.mro())
shark = Shark(bite_strength = 90, 
			  health = 80, 
			  energy = 60,
			  speed = 230,
			  has_scales = False)	
			  
print(shark.energy)
shark.attack(20)

print(shark.speed)

```


this step is important 
![[Pasted image 20240218014041.png]]

and **kwargs


```timestamp 
 01:56:01
 ```

classes extra parts

![[Pasted image 20240218014311.png]]

Private attributes

```timestamp 
 01:58:28
 ```


```python 
class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		
		# private  attribute
		self._id = 5 # here _ by underscore indicates that this variable shouldn't change it or alter it's value same also goes for methods

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"it has a speed of {speed}" )

monster = Monster(23, 45)

# print(monster._id)
```


```timestamp 
 01:58:54
 ```

for hasattar

```python
class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		
		# private  attribute
		self._id = 5 # here _ by underscore indicates that this variable shouldn't change it or alter it's value same also goes for methods

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"it has a speed of {speed}" )

monster = Monster(23, 45)

# hasattr(object, 'attribute')
print(hasattr(monster, 'energy'))
# use case of hasattr 
if hasattr(monster, 'energy'):
	print(f"monster energy is {monster.energy}")

# print(monster._id)
```

- private  attribute
		self._id = 5 # here _ by underscore indicates that this variable shouldn't change it or alter it's value same also goes for methods


- hasattr and setattr
	-  hasattr : hasattr(object, 'attribute')
	- for ex
		```python
		print(hasattr(monster, 'energy'))
		# use case of hasattr 
		if hasattr(monster, 'energy'):
			print(f"monster energy is {monster.energy}")
		```


for setattr

```python

class Monster:
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		
		# private  attribute
		self._id = 5 # here _ by underscore indicates that this variable shouldn't change it or alter it's value same also goes for methods

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"it has a speed of {speed}" )

monster = Monster(23, 45)

# hasattr(object, 'attribute')
# print(hasattr(monster, 'energy'))

# setattr(object, 'attribute', value) 
setattr(monster, 'weapon', 'Sword') 
print(monster.weapon)

# setattr(monster, 'weapon', 'Sword')  is similar to  monster.weapon = 'Sword'



#use case for setattr

new_attributes = (['weapon', 'Axe'],['armor', 'Shield'],['potion', 'mana'])

for attr,value in new_attributes:
	setattr(monster, attr,value)
print(vars(monster))

# print(monster._id)
```



setattr:

![[Pasted image 20240218020315.png]]

![[Pasted image 20240218020741.png]]

![[Pasted image 20240218021102.png]]


```timestamp 
 02:03:56
 ```


__doc__


```python
class Monster:
	""" Monster has some attributes """
	def __init__(self, health, energy):
		self.health = health
		self.energy = energy
		
		# private  attribute
		self._id = 5 # here _ by underscore indicates that this variable shouldn't change it or alter it's value same also goes for methods

	def attack(self, amount):
		print("The Monster has attacked")
		print(f'{amount} damage was dealt')
		self.energy -= amount
		print(f"Energy left {self.energy}")

	def move(self, speed):
		print("The monster has moved")
		print(f"it has a speed of {speed}" )

monster = Monster(23, 45)

# hasattr(object, 'attribute')
# print(hasattr(monster, 'energy'))

# setattr(object, 'attribute', value) 
setattr(monster, 'weapon', 'Sword') 
print(monster.weapon)


print(monster.__doc__)


# print(monster._id)
```



