# Test Tagging strategy

## Test Type Tags
- @smoke -> critical happy path, runs on every push
- @regression -> Full suite , runs nightly 
- @e2e -> end to end tests

## Priority Tags
- @critical    → Must never fail, blocks release
- @high        → Important but not release blocker
- @low         → Nice to have coverage

## Domain Tags
- @login       → Login and authentication
- @quote       → Quote calculation flow
- @policy      → Policy management
- @claims      → Claims submission
- @payment     → Payment processing

## Traceability Tags
- @defect      → Written because of a bug found
- @prod-incident → Written because of production incident
- @requirement → Linked to a business requirement

## How to use multiple tags
test('login with valid credentials @smoke @critical @login', ...)
test('premium rounding bug @defect @JIRA-1234 @regression', ...)
test('session timeout @prod-incident @INC-567 @critical', ...)