# Leetcode API
> Leetcode API written with TypeScript, fully support async.
> 
> Thanks for the excellent work for [leetcode-cli](https://github.com/skygragon/leetcode-cli) project! ❤️

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/realVEct0r/leetcode-api)
![GitHub package.json version](https://img.shields.io/github/package-json/v/realVEct0r/leetcode-api)
[![Build Status](https://travis-ci.org/realVEct0r/leetcode-api.svg?branch=master)](https://travis-ci.org/realVEct0r/leetcode-api)

## Usage
```typescript
(async (): Promise<void> => {

    // Login 
    const leetcode: Leetcode = await Leetcode.build(
        "your username",
        "yout password"
    );

    // Get a special problem
    const problem: Problem = new Problem("two-sum");

    // Fetch more properties of this problem
    await problem.detail();

    // Show problem content, test case, code snippet etc
    const content: string = problem.content;
    const testcase: string = problem.simpleTestCase;
    const codeSnippets: Array<any> = problem.codeSnippets;

    // submit your answer
    problem.submit("your code language", "your code here");

    // Get All problems' base infomation
    const problems: Array<Problem> = await leetcode.getAllProblems();

    // Filter problems by status, difficulty, etc
    const acceptedProblems: Array<Problem> = problems.filter((p: Problem) => {
        return p.status === ProblemStatus.Accept;
    });

    acceptedProblems.forEach(async (problem: Problem) => {

        // Get all submissions
        const submissions: Array<Submission> = await problem.getSubmissions();

        // Filter submission which lang = cpp
        const cppSubmissions: Array<Submission> = submissions.filter((s: Submission) => {
            return s.lang === "cpp";
        });

        submissions.forEach((submission: Submission) => {

            // Get submission's status
            const code: string = await submission.detail();

            // Then you can handle them casually
        });
    });
})();
```

## Tips
I especially recommend you fetch base properties first because of the large number of problems. Then call `Problem.detail()` or `Submission.detail()` fetch all properties of them.

## TODO
* [ ] Fully parse submission status type.
* [ ] Support problems filter by categories.
* [ ] Support problems filter by companies.

## Contribute
* start: `yarn start`
* build: `yarn build`
* lint: `yarn lint`

## License
MIT.
