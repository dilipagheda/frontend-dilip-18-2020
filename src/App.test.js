import lessThan1000 from './utils/task1'
import divisible from './utils/task2'
import isOdd from './utils/task3'
import triangleArea from './utils/task4'
import getDistance from  './utils/task5'
import identicalFilter from './utils/task6'

import { expect } from "chai";

describe('unit testing of utility functions', function() {
  //Task 1
  describe("task1_less than a 1000", function(){
    it("total less than 1000", function(){
      const result = lessThan1000(10,10,10)
      expect(result.total).to.equal(30)
      expect(result.lessThan100).to.equal(true)
    })
    it("total less than 1000", function(){
      const result = lessThan1000(1,1,1000)
      expect(result.total).to.equal(1002)
      expect(result.lessThan100).to.equal(false)
    })
    it("total is 1000", function(){
      const result = lessThan1000(1,1,998)
      expect(result.total).to.equal(1000)
      expect(result.lessThan100).to.equal(false)
    })
  })

  //Task 2
  describe("task2_multiple of 10", function(){
    it("not divisible by 10", function(){
      let result = divisible(1)
      expect(result).to.equal(false)
    })
    it("not divisible by 10", function(){
      let result = divisible(155)
      expect(result).to.equal(false)
    })
    it("divisible by 10", function(){
      let result = divisible(100)
      expect(result).to.equal(true)
    })
  })

  //Task 3
  describe("task3_Odd number", function(){
    it("is odd number", function(){
      const result = isOdd(123)
      expect(result).to.equal(true)
    })
    it("is not odd number", function(){
      const result = isOdd(10)
      expect(result).to.equal(false)
    })
  })

  //Task 4
  describe("task4_triangle area", function(){
    it("calculate area", function(){
      const result = triangleArea(10,10,16)
      expect(result).to.equal(48)
    })
  })

  //Task 5
  describe("task5_distance between two points", function(){
    it("test 1", function(){
      const v1 = {x: -2, y:1}
      const v2 = {x: 4, y:3}
      const result = getDistance(v1,v2)
      expect(result).to.equal(6.325)
    })
    it("test 2", function(){
      const v1 = {x: 0, y:0}
      const v2 = {x: 1, y:1}
      const result = getDistance(v1,v2)
      expect(result).to.equal(1.414)
    })
    it("test 3", function(){
      const v1 = {x: 10, y:-5}
      const v2 = {x: 8, y:16}
      const result = getDistance(v1,v2)
      expect(result).to.equal(21.095)
    })
  })

  //Task 6
  describe("task6_filter repeating character strings", function(){
    it("test 1", function(){
      const input = ["aaaaaa", "bc", "d", "eeee", "xyz"]
      const result = identicalFilter(input)
      expect(result.length).to.equal(3)
      expect(result[0]).to.equal("aaaaaa")
      expect(result[1]).to.equal("d")
      expect(result[2]).to.equal("eeee")
    })
    it("test 2", function(){
      const input = ["88", "999", "22", "545", "133"]
      const result = identicalFilter(input)
      expect(result.length).to.equal(3)
      expect(result[0]).to.equal("88")
      expect(result[1]).to.equal("999")
      expect(result[2]).to.equal("22")
    })
    it("test 3", function(){
      const input = ["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]
      const result = identicalFilter(input)
      expect(result.length).to.equal(0)
    })
  })
})