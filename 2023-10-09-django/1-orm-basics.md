---
slug: django-orm-basics
title: Demystifying Django ORM
authors: azhar
tags: [django, orm]
---

![Django ORM](./)

Django, a popular Python web framework, offers a powerful and intuitive Object-Relational Mapping (ORM) layer. With Django ORM, developers can interact with databases using Python code, eliminating the need for writing complex SQL queries. 

<!--truncate-->

In this article, we’ll explore the key features and functionalities of Django ORM, providing you with a comprehensive guide to leverage its capabilities effectively.

Before starting let’s assume we have a model with the following fields.
```python
from django.db import model

class Blog(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField()
  is_published = models.BooleanField(default=False)
  view_count = models.IntegerField()

  created_at = models.DateField(auto_now_add=True)
```

## Basic Database Operations

### Getting all the data
If you want to get all the data from the table `Blog` use this ORM query.
```python
queryset = Blog.objects.all()

# To get every blog object just loop over the queryset as it is Iterable.
# Example

for blog in queryset:
    # with dot you can access any property in this blog instance
    print(blog.title)
```
**Remember:** This will return queryset so we can chain other operations with it. We will discuss it later in this blog. So don’t worry about that.


### Getting Single Object
If you know the id you can exactly get only the data you need.
```python
blog = Blog.objects.get(id=1) # if id not found this will raise exception.
# to handle that scenario we are going to catch exception
try:
  blog = Blog.objects.get(id=1)
except Blog.DoesNotExist:
  # handle case if record not exist
except Blog.MultipleObjectsReturned:
  # handle if there are multiple objects return and you are expecting only one.
```

There is another way to get a single object if you don’t want to handle the exception.
```python
blog = Blog.objects.filter(id=1).first()
# this will return None if object not found.
# Note: if there are multiple object this will return first one. So we will cover 
more ways to handle those situations.
```

So if you just to verify the object with the given credentials exists
```python
is_blog_exists = Blog.objects.filter(pk=1).exists()

# this will return boolean value. Good thing is this will not raise exception if id  # not found.
```
**Summary:**
With the get method if the id is not found Django will raise an exception `DoesNotExist`.
If multiple objects return with the get method Django will raise `MultipleObjectsReturned`.
To avoid exceptions use the filter method.


## Filtering Data
Filtering data is a very common practice when building dynamic websites. So let’s discuss filtering in Django.

### Filtering on Boolean Fields
Let’s say you want to filter blogs that are published.
```python
queryset = Blog.objects.filter(is_published=True)
```

### Filter on Integer fields
Let’s say you want to get a blog with provided ID.
```python
# remember this will return queryset.
queryset = Blog.objects.filter(id=1) 
```
What if I want to see all the objects having view_count greater than `100`?
```python
queryset = Blog.objects.filter(view_count__gt=100)
```
So here we are using __gt this is called lookup. Django ORM provides quite a lot of useful look-ups for different use cases. here gt means greater than.

#### Let’s take a look at the range look-up
So if we want to see how many blogs have a view count between 20 and 30.
```python
queryset = Blog.objects.filter(view_count__range=(20, 30))

# this will return blogs which has view count between 20 and 30.
```
**Remember:** In __range look up the last value that will be included in our case it is 30.

### Filter on String fields
If you want to search blogs based on the title.
```python
queryset = Blog.objects.filter(title__contains="django")
```
**Remember:** As we have introduced the concept of look-ups contains another look for string values.
But this look-up will filter in a case-sensitive fashion. To search for case insensitive there is another look-up called icontains. 
Let’s see an example.
```python
queryset = Blog.objects.filter(title__icontains="django")

# this will search case insensitive 
```

### Filter on Dates
So if we want to get all the blogs written in the year 2023.
```python
queryset = Blog.objects.filter(created_date__year=2023)
```
If you want to filter all the blogs written after 2020.
```python
queryset = Blog.objects.filter(created_date__year__gte=2020)
# so here __gte means greater then or equal to
```

**Similarly, you can filter on `iso_year`, `month`, `day`, `week`, `week_day`, and `quarter`.**

This article gives you enough knowledge to start using django orm on your project.
Still curious, please refer to official django **[docs](https://docs.djangoproject.com/en/4.2/topics/db/queries/#field-lookups).**  
