# Notes for Svelte with TDD udemy course

course url: https://www.udemy.com/course/svelte-with-test-driven-development/

github repo with source code: git clone git@github.com:basarbk/tdd-svelte.git

dev.to article: https://dev.to/basarbk/test-driven-development-with-svelte-setup-32mg

stack used

- jest - javascript testing framework
- testing-library - render
  - user-event
  - jest-dom: more meaningful matchers

## Test Dependency Compatibility Warning

In the next part, we will install test packages to our project. We are using jest as test runner, and currently it has new major version, (v 27). And to use svelte files in tests, we will install svelte-jester. But this library is not stable with the latest version of jest. So please install specific versions as follows.

npm install --save-dev jest@26.6.3
npm install --save-dev babel-jest@26.6.3
npm install --save-dev svelte-jester@1.3.2

---

## Step by Step configuration

npx degit sveltejs/template tdd-svelte-test

cd tdd-svelte-test

pnpm i -D jest@26.6.3 babel-jest@26.6.3 @babel/preset-env svelte-jester@1.3.2
pnpm i -D @testing-library/svelte @testing-library/user-event @testing-library/jest-dom
  
cat > babel.config.js << END
module.exports = {
  presets: [
    [
      "@babel/preset-env", 
      { 
        targets: { 
          node: "current" 
        } 
      }
    ]
  ],
};
END

mkdir src/pages

cat > src/pages/SignUpPage.spec.js << END
import SignUpPage from './SignUpPage.svelte'
import { render, screen } from '@testing-library/svelte'

it("has Sign Up header", () => {
  render(SignUpPage)
  const header = screen.getByRole("heading", { name: "Sign Up" })
  expect(header).toBeTruthy()
});
END

cat > src/pages/SignUpPage.svelte << END
<h1>Sign Up</h1>
END

Add to package.json

```json
  "jest": {
    "transform": {
      "^.+\\.svelte$": "svelte-jester",
      "^.+\\.js$": "babel-jest"
    }
  }
```

npx npe 'jest.transform.__svelte-reg-exp__' "svelte-jester"
sed -i 's/__svelte-reg-exp__/^.+\\\\.svelte$/g' package.json
npx npe 'jest.transform.__js-reg-exp__' "babel-jest"
sed -i 's/__js-reg-exp__/^.+\\\\.js$/g' package.json

npx npe 'jest.moduleFileExtensions2' "js ts svelte"


npx npe 'scripts.test' "jest --watchAll"

And in the scripts scripts section:

```json
"test": "jest --watch"
```

## My Questions at udemy course

- [TypeError: Jest: a transform must export a `process` function](https://www.udemy.com/course/svelte-with-test-driven-development/learn/lecture/26202244#questions/15743848)


## svelte-add-jest with javascript step by step

see [github issue](https://github.com/rossyman/svelte-add-jest/issues/19)

```shell
$ npm init svelte@next svelte-jest-add-js

$ cd svelte-jest-add-js/

$ npx apply rossyman/svelte-add-jest

$ pnpm install 


$ pnpm test

> ~TODO~@0.0.1 test /home/sas/devel/apps/glas-it/apps/wingback/learn/svelte-jest-add-js
> jest src --config jest.config.json

 FAIL  src/routes/index.spec.js
  ● Test suite failed to run

    Jest: synchronous transformer /home/sas/devel/apps/glas-it/apps/wingback/learn/svelte-jest-add-js/node_modules/.pnpm/svelte-jester@2.1.1_jest@27.1.0+svelte@3.42.4/node_modules/svelte-jester/dist/transformer.cjs must export a "process" function.

      at invariant (node_modules/.pnpm/@jest+transform@27.1.0/node_modules/@jest/transform/build/ScriptTransformer.js:1092:11)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.67 s, estimated 1 s
Ran all test suites matching /src/i.
 ERROR  Test failed. See above for more details.
```

pnpm install -D svelte-jester@1.8.2 jest@26.6.3

## svelte-add-jest with typescript step by step

see [github issue](https://github.com/rossyman/svelte-add-jest/issues/19)

```shell
$ npm init svelte@next svelte-jest-add-ts

$ cd svelte-jest-add-ts
```

> WARNING! remove comments from `tsconfig.json`

```
$ npx apply rossyman/svelte-add-jest --no-interaction --jest-dom --ts --examples
```

> You can put comments back in `tsconfig.json`

```shell
$ pnpm install 


$ p test

> ~TODO~@0.0.1 test /home/sas/devel/apps/glas-it/apps/wingback/learn/svelte-jest-add-ts
> jest src --config jest.config.json

 FAIL  src/routes/index.spec.js
  ● Test suite failed to run

    Jest: synchronous transformer /home/sas/devel/apps/glas-it/apps/wingback/learn/svelte-jest-add-ts/node_modules/.pnpm/svelte-jester@2.1.1_jest@27.1.0+svelte@3.42.4/node_modules/svelte-jester/dist/transformer.cjs must export a "process" function.

      at invariant (node_modules/.pnpm/@jest+transform@27.1.0/node_modules/@jest/transform/build/ScriptTransformer.js:1092:11)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.724 s
Ran all test suites matching /src/i.
 ERROR  Test failed. See above for more details.
```

pnpm install -D svelte-jester@1.8.2 jest@26.6.3 ts-jest@26.5.6