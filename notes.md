# Notes for Svelte with TDD udemy course

course url: https://www.udemy.com/course/svelte-with-test-driven-development/


stack

- jest - javascript testing framework
- testing-library - render
  - user-event
  - jest-dom: more meaningful matchers


p i -D \
  jest@26.6.3 \
  babel-jest@26.6.3 \
  @babel/preset-env \
  @testing-library/svelte \
  @testing-library/user-event \
  @testing-library/jest-dom \ 
  svelte-jester

p i -D jest@26.6.3 babel-jest@26.6.3 @babel/preset-env @testing-library/svelte @testing-library/user-event @testing-library/jest-dom svelte-jester


Test Dependency Compatibility Warning

In the next part, we will install test packages to our project. We are using jest as test runner, and currently it has new major version, (v 27). And to use svelte files in tests, we will install svelte-jester. But this library is not stable with the latest version of jest. So please install specific versions as follows.

npm install --save-dev jest@26.6.3

This will be installing jest version 26.6.3. And other than jest, we need to install the older version for babel-jest too.

npm install --save-dev babel-jest@26.6.3


---


$ git clone git@github.com:basarbk/tdd-svelte.git

$ cd tdd-svelte

# 0103-test-setup
$ git checkout 47de6154d7150aa627b11751b479424bd42cbdfd

$ npm i

$ npm run test

No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.
---

