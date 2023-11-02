---
slug: yield-in-python
title: 'Mastering the Yield Keyword in Python: An In-Depth Guide'
authors: azhar
tags: [python, iterator, generator, iterable, yield]
---

![Python Yield](../banners/python-yield.webp)

Python offers a wealth of utilities that greatly simplify developers' lives. One such tool is the 'yield' keyword, which serves as an alternative to the 'return' statement in regular Python functions. In this extensive guide, we'll delve into the 'yield' keyword's intricacies within the context of generator functions. Without delay, let's begin our exploration

<!--truncate-->


Before understanding `yield`. You must understand what `generators` are, and before that you must understand `iterbales`.

## Iterables
When you create a list, you can read its item one by one. Reading it's item one by one is called `iteration`.

For Example
```python
    numList = [1, 2, 3] 
```
Here, `numList` is an iterable.

These iterables are handy because you can read as you wish, but you store all these values in memory and that is not what you always want, when you have alot of values.

## Generators 
Generators are iterators, a kind of iterables. The difference is, you can only iterate over once.
Generators do not store all the values in memory, they generate values on the fly.

For Example
```python
    myGenerator = ( x*x for x in range(100_000))
```

It is almost same except `()` instead of `[]` brackets. But you cannot perform 
```python
    secondGen = (for i in myGenerator) # above created generator
```
Since generator can only be used once.

They calculate `0` then forget about it and calculate `1` and calculating all values one by one in the same fashion.

## Yield
yield is a python keyword like `return`, except function will return a generator.

For Example
```python
def create_generator():
    my_list = range(5) # iterable
    
    for i in my_list:
        yield i * i

# Here `my_generator` is a generator object.
my_generator =  create_generator() # create a generator
```

:::info
As you know, generator is iterable.
:::

To master `yield`, you must understand that, when you call the function, the code you have written in the function body does not run `it will only return generator object`.

### Complete execution flow

The first time `for` calls the generator object created from the function, it will run the code in your function from the begining until it hits `yield` than it will return first value of the loop.Then, each subsequent call will run another iteration of the loop you have written in the function and return the next value.

This will continue until generator is considered empty, which happens when the function runs without hitting yield.

:::info
python `open` function return generator object.
:::

### Summary
- yield indicates where a value is sent back to the caller, but unlike return, you don't exit the function afterward.
- If speed is an issue and memory isn't, then list comprehension is likely better tool for the job.
- Yield's primary job is to control the flow of a generator function in a way similar to return statement.

:::note
In generator function: State is remembered.
:::