map-to-object
===

[![Greenkeeper badge](https://badges.greenkeeper.io/SEAPUNK/map-to-object.svg)](https://greenkeeper.io/)

**Requires Node 4.x or newer**

`npm install map-to-object`

Converts Map to plain object.

**Warning**: Can lose data. Objects don't know the difference between `1` and `'1'`, among other problems.

```js
import mapToObject from 'map-to-object'

const A = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])

const B = mapToObject(A)

/*
    B is now 
    {
      '1': 'one',
      '2': 'two',
      '3': 'three'
    }
 */

```
