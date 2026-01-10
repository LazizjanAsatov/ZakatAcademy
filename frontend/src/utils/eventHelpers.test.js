/**
 * Test cases for isEventFinished helper function
 * 
 * To run these tests:
 * 1. Install a test framework (e.g., Vitest: npm install -D vitest)
 * 2. Or run manually by importing and calling test functions
 */

import { isEventFinished } from './eventHelpers'

/**
 * Test helper to create a date string in ISO format
 */
const createDate = (year, month, day, hours = 0, minutes = 0, seconds = 0) => {
  return new Date(year, month - 1, day, hours, minutes, seconds).toISOString()
}

/**
 * Test helper to create today's date at a specific time
 */
const createToday = (hours = 0, minutes = 0) => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes).toISOString()
}

/**
 * Test helper to create yesterday's date
 */
const createYesterday = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 0, 0).toISOString()
}

/**
 * Test helper to create tomorrow's date
 */
const createTomorrow = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0).toISOString()
}

/**
 * Test cases
 */
export const testCases = [
  {
    name: 'date-only yesterday => finished',
    event: { event_date: createYesterday() },
    now: new Date(),
    expected: true,
  },
  {
    name: 'date-only today => not finished',
    event: { event_date: createToday(0, 0) },
    now: new Date(),
    expected: false,
  },
  {
    name: 'date-time 1 minute ago => finished',
    event: { event_date: createToday(12, 0) },
    now: new Date(new Date(createToday(12, 0)).getTime() + 60000), // 1 minute later
    expected: true,
  },
  {
    name: 'date-time 1 minute later => not finished',
    event: { event_date: createToday(12, 1) },
    now: new Date(new Date(createToday(12, 0)).getTime()), // 1 minute earlier
    expected: false,
  },
  {
    name: 'endDate exists and is in past => finished even if startDate is earlier',
    event: { 
      event_date: createTomorrow(),
      endDate: createYesterday()
    },
    now: new Date(),
    expected: true,
  },
  {
    name: 'endDate exists and is in future => not finished',
    event: { 
      event_date: createYesterday(),
      endDate: createTomorrow()
    },
    now: new Date(),
    expected: false,
  },
  {
    name: 'endsAt exists and is in past => finished',
    event: { 
      event_date: createTomorrow(),
      endsAt: createYesterday()
    },
    now: new Date(),
    expected: true,
  },
  {
    name: 'date field (alternative name) => finished if in past',
    event: { 
      date: createYesterday()
    },
    now: new Date(),
    expected: true,
  },
  {
    name: 'startsAt field => finished if in past',
    event: { 
      startsAt: createYesterday()
    },
    now: new Date(),
    expected: true,
  },
  {
    name: 'date-only tomorrow => not finished',
    event: { event_date: createTomorrow() },
    now: new Date(),
    expected: false,
  },
  {
    name: 'null event => not finished',
    event: null,
    now: new Date(),
    expected: false,
  },
  {
    name: 'event with no date fields => not finished',
    event: { title: 'Test Event' },
    now: new Date(),
    expected: false,
  },
  {
    name: 'invalid date => not finished',
    event: { event_date: 'invalid-date' },
    now: new Date(),
    expected: false,
  },
]

/**
 * Run all test cases
 */
export const runTests = () => {
  console.log('Running isEventFinished tests...\n')
  
  let passed = 0
  let failed = 0
  
  testCases.forEach((testCase, index) => {
    try {
      const result = isEventFinished(testCase.event, testCase.now)
      const success = result === testCase.expected
      
      if (success) {
        console.log(`✓ Test ${index + 1}: ${testCase.name}`)
        passed++
      } else {
        console.error(`✗ Test ${index + 1}: ${testCase.name}`)
        console.error(`  Expected: ${testCase.expected}, Got: ${result}`)
        failed++
      }
    } catch (error) {
      console.error(`✗ Test ${index + 1}: ${testCase.name}`)
      console.error(`  Error: ${error.message}`)
      failed++
    }
  })
  
  console.log(`\nResults: ${passed} passed, ${failed} failed`)
  return { passed, failed, total: testCases.length }
}

// Export runTests for manual execution or test framework integration
// To run manually: import { runTests } from './eventHelpers.test.js' and call runTests()
